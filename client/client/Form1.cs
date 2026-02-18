using client.models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Windows.Forms;

namespace client
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void ShowScreen(Control selectedScreen)
        {
            dgvLoans.Visible = false;
            dgvInventory.Visible = false;
            pnlAddBook.Visible = false;
            pnlAddAuthor.Visible = false;
            selectedScreen.Visible = true;
        }

        private void btnLoans_Click_1(object sender, EventArgs e)
        {
            ShowScreen(dgvLoans);
            btnMarkAsReturned.Visible = true;
            btnExtendLoan.Visible = true;
            btnDeleteBook.Visible = false;
            dtpNewReturnDate.Visible = false;

            LoadLoansFromJava();
        }

        private void btnInventory_Click_1(object sender, EventArgs e)
        {
            ShowScreen(dgvInventory);
            btnMarkAsReturned.Visible = false;
            btnDeleteBook.Visible = true;
            dtpNewReturnDate.Visible = false;
            btnExtendLoan.Visible = false;

            LoadBooksFromJava();
        }

        private async void btnAddBook_Click(object sender, EventArgs e)
        {
            ShowScreen(pnlAddBook);
            btnMarkAsReturned.Visible = false;
            btnDeleteBook.Visible = false;
            dtpNewReturnDate.Visible = false;
            btnExtendLoan.Visible = false;
            label_new_book.Visible = true;
            label1.Visible = true;
            label2.Visible = true;
            label3.Visible = true;
            label4.Visible = true;
            label5.Visible = true;
            label6.Visible = true;
            txtAuthorId.Visible = true;
            txtTitle.Visible = true;
            txtCategory.Visible = true;
            numQuantity.Visible = true;
            dtpDate.Visible = true;
            dgvAuthorsSmall.Visible = true;
            btnSaveBook.Visible = true;

            LoadAuthorsForReference();
        }

        private async void LoadAuthorsForReference()
        {
            try
            {
                using (HttpClient client = new HttpClient())
                {
                    string response = await client.GetStringAsync("http://localhost:8080/authors");
                    var authors = JsonConvert.DeserializeObject<List<Author>>(response);
                    dgvAuthorsSmall.DataSource = authors.Select(a => new { a.id, a.name, a.nationality }).ToList();
                }
            }
            catch { }
        }

        private async void LoadLoansFromJava()
        {
            using (HttpClient client = new HttpClient())
            {
                try
                {
                    string response = await client.GetStringAsync("http://localhost:8080/bookLoans");
                    var loans = JsonConvert.DeserializeObject<List<BookLoan>>(response);
                    var displayList = loans.Select(l => new
                    {
                        ID = l.id,
                        Reader = l.user?.username,
                        Email = l.user?.email,
                        Book = l.book?.title,
                        Author = l.book?.author?.name,
                        Deadline = l.returnDate,
                        Status = l.returned ? "Returned" : "Active"
                    }).ToList();

                    dgvLoans.DataSource = displayList;
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Error: " + ex.Message);
                }
            }
        }

        private async void LoadBooksFromJava()
        {
            using (HttpClient client = new HttpClient())
            {
                try
                {
                    string response = await client.GetStringAsync("http://localhost:8080/books");
                    var books = JsonConvert.DeserializeObject<List<Book>>(response);

                    dgvInventory.DataSource = books.Select(b => new
                    {
                        b.id,
                        b.title,
                        Author = b.author?.name,
                        b.quantity,
                        b.category
                    }).ToList();
                }
                catch (Exception ex) { MessageBox.Show("Error: " + ex.Message); }
            }
        }

        private async void btnMarkAsReturned_Click_1(object sender, EventArgs e)
        {
            if (dgvLoans.SelectedRows.Count > 0)
            {
                try
                {
                    int loanId = Convert.ToInt32(dgvLoans.SelectedRows[0].Cells["ID"].Value);

                    using (HttpClient client = new HttpClient())
                    {
                        var content = new StringContent(string.Empty, System.Text.Encoding.UTF8, "application/json");
                        var response = await client.PutAsync($"http://localhost:8080/bookLoans/return/{loanId}", content);

                        if (response.IsSuccessStatusCode)
                        {
                            MessageBox.Show("Status updated: The book has been returned!", "Success");
                            LoadLoansFromJava();
                        }
                        else
                        {
                            MessageBox.Show("Server error: " + response.StatusCode);
                        }
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Processing error: " + ex.Message);
                }
            }
            else
            {
                MessageBox.Show("Please select a row in the table!");
            }
        }

        private async void btnSaveBook_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(txtTitle.Text) || string.IsNullOrEmpty(txtAuthorId.Text))
            {
                MessageBox.Show("Please complete the Title and Author ID!");
                return;
            }

            try
            {
                var newBook = new
                {
                    title = txtTitle.Text,
                    category = txtCategory.Text,
                    quantity = (int)numQuantity.Value,
                    publicationDate = dtpDate.Value.ToString("dd.MM.yyyy"),
                    author = new { id = int.Parse(txtAuthorId.Text) }
                };

                using (HttpClient client = new HttpClient())
                {
                    string json = JsonConvert.SerializeObject(newBook);
                    var content = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
                    var response = await client.PostAsync("http://localhost:8080/books", content);

                    if (response.IsSuccessStatusCode)
                    {
                        MessageBox.Show("Success! The book has been added.", "Notification");

                        txtTitle.Clear();
                        txtCategory.Clear();
                        txtAuthorId.Clear();
                        numQuantity.Value = 0;
                    }
                    else
                    {
                        string error = await response.Content.ReadAsStringAsync();
                        MessageBox.Show($"Server error ({response.StatusCode}): {error}");
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error: " + ex.Message);
            }
        }

        private async void btnDeleteBook_Click(object sender, EventArgs e)
        {
            if (dgvInventory.SelectedRows.Count > 0)
            {
                int bookId = Convert.ToInt32(dgvInventory.SelectedRows[0].Cells["id"].Value);
                string bookTitle = dgvInventory.SelectedRows[0].Cells["title"].Value.ToString();

                var confirmResult = MessageBox.Show(
                    $"Are you sure you want to permanently delete: {bookTitle}?",
                    "Confirm Delete",
                    MessageBoxButtons.YesNo,
                    MessageBoxIcon.Warning);

                if (confirmResult == DialogResult.Yes)
                {
                    try
                    {
                        using (HttpClient client = new HttpClient())
                        {
                            var response = await client.DeleteAsync($"http://localhost:8080/books/{bookId}");

                            if (response.IsSuccessStatusCode)
                            {
                                MessageBox.Show("The book has been successfully deleted!");
                                LoadBooksFromJava();
                            }
                            else
                            {
                                MessageBox.Show($"Could not delete: {response.StatusCode}");
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        MessageBox.Show("Connection error: " + ex.Message);
                    }
                }
            }
            else
            {
                MessageBox.Show("Please select a book from the table to delete.");
            }
        }

        private void btnAuthorsMenu_Click(object sender, EventArgs e)
        {
            ShowScreen(pnlAddAuthor);
            pnlAddAuthor.BringToFront();
            btnMarkAsReturned.Visible = false;
            btnDeleteBook.Visible = false;
            dtpNewReturnDate.Visible = false;
            btnExtendLoan.Visible = false;
            label7.Visible = true;
            label8.Visible = true;
            label9.Visible = true;
            label10.Visible = true;
            txtAuthorName.Visible = true;
            txtNationality.Visible = true;
            dtpAuthorBirthDate.Visible = true;
            btnSaveAuthor.Visible = true;

        }

        private async void btnSaveAuthor_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(txtAuthorName.Text))
            {
                MessageBox.Show("Please enter the author's name!");
                return;
            }

            try
            {
                string formattedDate = dtpAuthorBirthDate.Value.ToString("dd.MM.yyyy");

                var newAuthor = new
                {
                    name = txtAuthorName.Text,
                    birthDate = formattedDate,
                    nationality = txtNationality.Text
                };

                using (HttpClient client = new HttpClient())
                {
                    string json = JsonConvert.SerializeObject(newAuthor);
                    var content = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
                    var response = await client.PostAsync("http://localhost:8080/authors", content);

                    if (response.IsSuccessStatusCode)
                    {
                        MessageBox.Show("Author added successfully!", "Success");
                        txtAuthorName.Clear();
                        dtpAuthorBirthDate.Value = DateTime.Now;

                        LoadAuthorsForReference();
                    }
                    else
                    {
                        MessageBox.Show("Server error: " + response.StatusCode);
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Connection error: " + ex.Message);
            }
        }

        private async void btnExtendLoan_Click(object sender, EventArgs e)
        {
           
            if (dgvLoans.SelectedRows.Count == 0)
            {
                MessageBox.Show("Please select a loan from the list first!", "Warning");
                return;
            }
            dtpNewReturnDate.Visible = true;
            btnConfirmExtension.Visible = true; 
            btnExtendLoan.Visible = false;
        }

        private async void btnConfirmExtension_Click(object sender, EventArgs e)
        {
            if (dgvLoans.SelectedRows.Count == 0)
            {
                MessageBox.Show("Please select a loan from the list first!", "Warning");
                return;
            }
            dtpNewReturnDate.Visible = true;

            int loanId = Convert.ToInt32(dgvLoans.SelectedRows[0].Cells["id"].Value);

            DateTime newDate = dtpNewReturnDate.Value;

            var requestBody = new { returnDate = newDate.ToString("dd.MM.yyyy") };
            string json = JsonConvert.SerializeObject(requestBody);
            var content = new StringContent(json, System.Text.Encoding.UTF8, "application/json");

            try
            {
                using (HttpClient client = new HttpClient())
                {

                    var response = await client.PutAsync($"http://localhost:8080/bookLoans/extend/{loanId}", content);

                    if (response.IsSuccessStatusCode)
                    {

                        MessageBox.Show("The return date has been successfully extended!", "Success");
                        dtpNewReturnDate.Visible = false;
                        btnConfirmExtension.Visible = false;
                        btnExtendLoan.Visible = true;
                        LoadLoansFromJava();
                    }
                    else
                    {
                        MessageBox.Show("Loan cannot be extended. The book might already be returned.", "Extension Error");
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Connection error: " + ex.Message, "Network Error");
            }
        }
    }
}