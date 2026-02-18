namespace client
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            pnlSidebar = new Panel();
            btnAuthorsMenu = new Button();
            btnAddBook = new Button();
            btnInventory = new Button();
            btnLoans = new Button();
            label_meniu = new Label();
            pnlMain = new Panel();
            btnMarkAsReturned = new Button();
            btnExtendLoan = new Button();
            btnConfirmExtension = new Button();
            btnDeleteBook = new Button();
            dtpNewReturnDate = new DateTimePicker();
            pnlAddBook = new Panel();
            dtpDate = new DateTimePicker();
            label6 = new Label();
            btnSaveBook = new Button();
            numQuantity = new NumericUpDown();
            txtCategory = new TextBox();
            txtAuthorId = new TextBox();
            txtTitle = new TextBox();
            label5 = new Label();
            label4 = new Label();
            dgvAuthorsSmall = new DataGridView();
            label3 = new Label();
            label2 = new Label();
            label1 = new Label();
            label_new_book = new Label();
            pnlAddAuthor = new Panel();
            txtNationality = new TextBox();
            label10 = new Label();
            btnSaveAuthor = new Button();
            dtpAuthorBirthDate = new DateTimePicker();
            txtAuthorName = new TextBox();
            label9 = new Label();
            label8 = new Label();
            label7 = new Label();
            dgvInventory = new DataGridView();
            dgvLoans = new DataGridView();
            pnlSidebar.SuspendLayout();
            pnlMain.SuspendLayout();
            pnlAddBook.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)numQuantity).BeginInit();
            ((System.ComponentModel.ISupportInitialize)dgvAuthorsSmall).BeginInit();
            pnlAddAuthor.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)dgvInventory).BeginInit();
            ((System.ComponentModel.ISupportInitialize)dgvLoans).BeginInit();
            SuspendLayout();
            // 
            // pnlSidebar
            // 
            pnlSidebar.BackColor = Color.DarkKhaki;
            pnlSidebar.Controls.Add(btnAuthorsMenu);
            pnlSidebar.Controls.Add(btnAddBook);
            pnlSidebar.Controls.Add(btnInventory);
            pnlSidebar.Controls.Add(btnLoans);
            pnlSidebar.Controls.Add(label_meniu);
            pnlSidebar.Dock = DockStyle.Left;
            pnlSidebar.Location = new Point(0, 0);
            pnlSidebar.Name = "pnlSidebar";
            pnlSidebar.Size = new Size(187, 550);
            pnlSidebar.TabIndex = 0;
            // 
            // btnAuthorsMenu
            // 
            btnAuthorsMenu.Location = new Point(0, 298);
            btnAuthorsMenu.Name = "btnAuthorsMenu";
            btnAuthorsMenu.Size = new Size(187, 29);
            btnAuthorsMenu.TabIndex = 5;
            btnAuthorsMenu.Text = "Add Author";
            btnAuthorsMenu.UseVisualStyleBackColor = true;
            btnAuthorsMenu.Click += btnAuthorsMenu_Click;
            // 
            // btnAddBook
            // 
            btnAddBook.Location = new Point(0, 235);
            btnAddBook.Name = "btnAddBook";
            btnAddBook.Size = new Size(187, 29);
            btnAddBook.TabIndex = 4;
            btnAddBook.Text = "Add Book";
            btnAddBook.UseVisualStyleBackColor = true;
            btnAddBook.Click += btnAddBook_Click;
            // 
            // btnInventory
            // 
            btnInventory.BackColor = Color.LemonChiffon;
            btnInventory.Location = new Point(0, 162);
            btnInventory.Name = "btnInventory";
            btnInventory.Size = new Size(187, 29);
            btnInventory.TabIndex = 3;
            btnInventory.Text = "Inventory";
            btnInventory.UseVisualStyleBackColor = false;
            btnInventory.Click += btnInventory_Click_1;
            // 
            // btnLoans
            // 
            btnLoans.BackColor = Color.Olive;
            btnLoans.BackgroundImageLayout = ImageLayout.None;
            btnLoans.Location = new Point(-28, 90);
            btnLoans.Name = "btnLoans";
            btnLoans.Size = new Size(237, 29);
            btnLoans.TabIndex = 1;
            btnLoans.Text = "Loans";
            btnLoans.UseVisualStyleBackColor = false;
            btnLoans.Click += btnLoans_Click_1;
            // 
            // label_meniu
            // 
            label_meniu.AutoSize = true;
            label_meniu.Font = new Font("Lucida Bright", 16.2F, FontStyle.Bold, GraphicsUnit.Point, 0);
            label_meniu.Location = new Point(32, 30);
            label_meniu.Name = "label_meniu";
            label_meniu.Size = new Size(110, 31);
            label_meniu.TabIndex = 0;
            label_meniu.Text = "MENIU";
            // 
            // pnlMain
            // 
            pnlMain.BackColor = Color.LightYellow;
            pnlMain.Controls.Add(btnMarkAsReturned);
            pnlMain.Controls.Add(btnExtendLoan);
            pnlMain.Controls.Add(btnConfirmExtension);
            pnlMain.Controls.Add(btnDeleteBook);
            pnlMain.Controls.Add(dtpNewReturnDate);
            pnlMain.Controls.Add(pnlAddBook);
            pnlMain.Controls.Add(pnlAddAuthor);
            pnlMain.Controls.Add(dgvInventory);
            pnlMain.Controls.Add(dgvLoans);
            pnlMain.Dock = DockStyle.Fill;
            pnlMain.Location = new Point(187, 0);
            pnlMain.Name = "pnlMain";
            pnlMain.Size = new Size(725, 550);
            pnlMain.TabIndex = 1;
            // 
            // btnMarkAsReturned
            // 
            btnMarkAsReturned.Dock = DockStyle.Bottom;
            btnMarkAsReturned.Location = new Point(0, 407);
            btnMarkAsReturned.Name = "btnMarkAsReturned";
            btnMarkAsReturned.Size = new Size(725, 29);
            btnMarkAsReturned.TabIndex = 2;
            btnMarkAsReturned.Text = "Returned";
            btnMarkAsReturned.UseVisualStyleBackColor = true;
            btnMarkAsReturned.Visible = false;
            btnMarkAsReturned.Click += btnMarkAsReturned_Click_1;
            // 
            // btnExtendLoan
            // 
            btnExtendLoan.Dock = DockStyle.Bottom;
            btnExtendLoan.Location = new Point(0, 436);
            btnExtendLoan.Name = "btnExtendLoan";
            btnExtendLoan.Size = new Size(725, 29);
            btnExtendLoan.TabIndex = 14;
            btnExtendLoan.Text = "Extend Return Date";
            btnExtendLoan.TextImageRelation = TextImageRelation.ImageBeforeText;
            btnExtendLoan.UseVisualStyleBackColor = true;
            btnExtendLoan.Visible = false;
            btnExtendLoan.Click += btnExtendLoan_Click;
            // 
            // btnConfirmExtension
            // 
            btnConfirmExtension.Dock = DockStyle.Bottom;
            btnConfirmExtension.Location = new Point(0, 465);
            btnConfirmExtension.Name = "btnConfirmExtension";
            btnConfirmExtension.Size = new Size(725, 29);
            btnConfirmExtension.TabIndex = 14;
            btnConfirmExtension.Text = "Save";
            btnConfirmExtension.UseVisualStyleBackColor = true;
            btnConfirmExtension.Visible = false;
            btnConfirmExtension.Click += btnConfirmExtension_Click;
            // 
            // btnDeleteBook
            // 
            btnDeleteBook.BackColor = Color.Brown;
            btnDeleteBook.Dock = DockStyle.Bottom;
            btnDeleteBook.ForeColor = SystemColors.ButtonHighlight;
            btnDeleteBook.Location = new Point(0, 494);
            btnDeleteBook.Name = "btnDeleteBook";
            btnDeleteBook.Size = new Size(725, 29);
            btnDeleteBook.TabIndex = 4;
            btnDeleteBook.Text = "Delete Book";
            btnDeleteBook.UseVisualStyleBackColor = false;
            btnDeleteBook.Visible = false;
            btnDeleteBook.Click += btnDeleteBook_Click;
            // 
            // dtpNewReturnDate
            // 
            dtpNewReturnDate.Dock = DockStyle.Bottom;
            dtpNewReturnDate.Location = new Point(0, 523);
            dtpNewReturnDate.Name = "dtpNewReturnDate";
            dtpNewReturnDate.Size = new Size(725, 27);
            dtpNewReturnDate.TabIndex = 14;
            // 
            // pnlAddBook
            // 
            pnlAddBook.Controls.Add(dtpDate);
            pnlAddBook.Controls.Add(label6);
            pnlAddBook.Controls.Add(btnSaveBook);
            pnlAddBook.Controls.Add(numQuantity);
            pnlAddBook.Controls.Add(txtCategory);
            pnlAddBook.Controls.Add(txtAuthorId);
            pnlAddBook.Controls.Add(txtTitle);
            pnlAddBook.Controls.Add(label5);
            pnlAddBook.Controls.Add(label4);
            pnlAddBook.Controls.Add(dgvAuthorsSmall);
            pnlAddBook.Controls.Add(label3);
            pnlAddBook.Controls.Add(label2);
            pnlAddBook.Controls.Add(label1);
            pnlAddBook.Controls.Add(label_new_book);
            pnlAddBook.Dock = DockStyle.Fill;
            pnlAddBook.Location = new Point(0, 0);
            pnlAddBook.Name = "pnlAddBook";
            pnlAddBook.Size = new Size(725, 550);
            pnlAddBook.TabIndex = 3;
            // 
            // dtpDate
            // 
            dtpDate.Location = new Point(118, 246);
            dtpDate.Name = "dtpDate";
            dtpDate.Size = new Size(251, 27);
            dtpDate.TabIndex = 13;
            dtpDate.Visible = false;
            // 
            // label6
            // 
            label6.AutoSize = true;
            label6.Location = new Point(30, 246);
            label6.Name = "label6";
            label6.Size = new Size(48, 20);
            label6.TabIndex = 12;
            label6.Text = "Date :";
            label6.Visible = false;
            // 
            // btnSaveBook
            // 
            btnSaveBook.Location = new Point(275, 330);
            btnSaveBook.Name = "btnSaveBook";
            btnSaveBook.Size = new Size(94, 29);
            btnSaveBook.TabIndex = 11;
            btnSaveBook.Text = "Save";
            btnSaveBook.UseVisualStyleBackColor = true;
            btnSaveBook.Visible = false;
            btnSaveBook.Click += btnSaveBook_Click;
            // 
            // numQuantity
            // 
            numQuantity.Location = new Point(122, 286);
            numQuantity.Name = "numQuantity";
            numQuantity.Size = new Size(247, 27);
            numQuantity.TabIndex = 10;
            numQuantity.Visible = false;
            // 
            // txtCategory
            // 
            txtCategory.Location = new Point(118, 208);
            txtCategory.Name = "txtCategory";
            txtCategory.Size = new Size(251, 27);
            txtCategory.TabIndex = 9;
            txtCategory.Visible = false;
            // 
            // txtAuthorId
            // 
            txtAuthorId.Location = new Point(118, 175);
            txtAuthorId.Name = "txtAuthorId";
            txtAuthorId.Size = new Size(251, 27);
            txtAuthorId.TabIndex = 8;
            txtAuthorId.Visible = false;
            // 
            // txtTitle
            // 
            txtTitle.Location = new Point(118, 142);
            txtTitle.Name = "txtTitle";
            txtTitle.Size = new Size(251, 27);
            txtTitle.TabIndex = 7;
            txtTitle.Visible = false;
            // 
            // label5
            // 
            label5.AutoSize = true;
            label5.Location = new Point(30, 283);
            label5.Name = "label5";
            label5.Size = new Size(76, 20);
            label5.TabIndex = 6;
            label5.Text = "Quantity : ";
            label5.Visible = false;
            // 
            // label4
            // 
            label4.AutoSize = true;
            label4.Location = new Point(30, 211);
            label4.Name = "label4";
            label4.Size = new Size(76, 20);
            label4.TabIndex = 5;
            label4.Text = "Category :";
            label4.Visible = false;
            // 
            // dgvAuthorsSmall
            // 
            dgvAuthorsSmall.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dgvAuthorsSmall.Location = new Point(407, 121);
            dgvAuthorsSmall.Name = "dgvAuthorsSmall";
            dgvAuthorsSmall.RowHeadersWidth = 51;
            dgvAuthorsSmall.Size = new Size(262, 227);
            dgvAuthorsSmall.TabIndex = 4;
            dgvAuthorsSmall.Visible = false;
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Location = new Point(482, 98);
            label3.Name = "label3";
            label3.Size = new Size(86, 20);
            label3.TabIndex = 3;
            label3.Text = "Authors List";
            label3.Visible = false;
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(30, 182);
            label2.Name = "label2";
            label2.Size = new Size(82, 20);
            label2.TabIndex = 2;
            label2.Text = "Id Author : ";
            label2.Visible = false;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(30, 145);
            label1.Name = "label1";
            label1.Size = new Size(53, 20);
            label1.TabIndex = 1;
            label1.Text = "Title :  ";
            label1.Visible = false;
            // 
            // label_new_book
            // 
            label_new_book.AutoSize = true;
            label_new_book.Font = new Font("Mongolian Baiti", 18F, FontStyle.Bold, GraphicsUnit.Point, 0);
            label_new_book.Location = new Point(217, 19);
            label_new_book.Name = "label_new_book";
            label_new_book.Size = new Size(180, 39);
            label_new_book.TabIndex = 0;
            label_new_book.Text = "NEW BOOK";
            label_new_book.UseCompatibleTextRendering = true;
            label_new_book.Visible = false;
            // 
            // pnlAddAuthor
            // 
            pnlAddAuthor.Controls.Add(txtNationality);
            pnlAddAuthor.Controls.Add(label10);
            pnlAddAuthor.Controls.Add(btnSaveAuthor);
            pnlAddAuthor.Controls.Add(dtpAuthorBirthDate);
            pnlAddAuthor.Controls.Add(txtAuthorName);
            pnlAddAuthor.Controls.Add(label9);
            pnlAddAuthor.Controls.Add(label8);
            pnlAddAuthor.Controls.Add(label7);
            pnlAddAuthor.Location = new Point(0, 0);
            pnlAddAuthor.Name = "pnlAddAuthor";
            pnlAddAuthor.Size = new Size(521, 440);
            pnlAddAuthor.TabIndex = 5;
            pnlAddAuthor.Visible = false;
            // 
            // txtNationality
            // 
            txtNationality.Location = new Point(144, 191);
            txtNationality.Name = "txtNationality";
            txtNationality.Size = new Size(250, 27);
            txtNationality.TabIndex = 7;
            txtNationality.Visible = false;
            // 
            // label10
            // 
            label10.AutoSize = true;
            label10.Location = new Point(47, 194);
            label10.Name = "label10";
            label10.Size = new Size(93, 20);
            label10.TabIndex = 6;
            label10.Text = "Nationality : ";
            label10.Visible = false;
            // 
            // btnSaveAuthor
            // 
            btnSaveAuthor.Location = new Point(300, 235);
            btnSaveAuthor.Name = "btnSaveAuthor";
            btnSaveAuthor.Size = new Size(94, 29);
            btnSaveAuthor.TabIndex = 5;
            btnSaveAuthor.Text = "Save Author";
            btnSaveAuthor.UseVisualStyleBackColor = true;
            btnSaveAuthor.Visible = false;
            btnSaveAuthor.Click += btnSaveAuthor_Click;
            // 
            // dtpAuthorBirthDate
            // 
            dtpAuthorBirthDate.Location = new Point(144, 148);
            dtpAuthorBirthDate.Name = "dtpAuthorBirthDate";
            dtpAuthorBirthDate.Size = new Size(250, 27);
            dtpAuthorBirthDate.TabIndex = 4;
            dtpAuthorBirthDate.Visible = false;
            // 
            // txtAuthorName
            // 
            txtAuthorName.Location = new Point(144, 100);
            txtAuthorName.Name = "txtAuthorName";
            txtAuthorName.Size = new Size(250, 27);
            txtAuthorName.TabIndex = 3;
            txtAuthorName.Visible = false;
            // 
            // label9
            // 
            label9.AutoSize = true;
            label9.Location = new Point(46, 153);
            label9.Name = "label9";
            label9.Size = new Size(75, 20);
            label9.TabIndex = 2;
            label9.Text = "Birthday : ";
            label9.Visible = false;
            // 
            // label8
            // 
            label8.AutoSize = true;
            label8.Location = new Point(46, 103);
            label8.Name = "label8";
            label8.Size = new Size(60, 20);
            label8.TabIndex = 1;
            label8.Text = "Name : ";
            label8.Visible = false;
            // 
            // label7
            // 
            label7.AutoSize = true;
            label7.Font = new Font("Mongolian Baiti", 16.2F, FontStyle.Bold, GraphicsUnit.Point, 0);
            label7.Location = new Point(146, 24);
            label7.Name = "label7";
            label7.Size = new Size(209, 30);
            label7.TabIndex = 0;
            label7.Text = "NEW AUTHOR";
            label7.Visible = false;
            // 
            // dgvInventory
            // 
            dgvInventory.BackgroundColor = Color.LemonChiffon;
            dgvInventory.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dgvInventory.Dock = DockStyle.Fill;
            dgvInventory.Location = new Point(0, 0);
            dgvInventory.Name = "dgvInventory";
            dgvInventory.RowHeadersWidth = 51;
            dgvInventory.Size = new Size(725, 550);
            dgvInventory.TabIndex = 1;
            // 
            // dgvLoans
            // 
            dgvLoans.BackgroundColor = Color.Olive;
            dgvLoans.BorderStyle = BorderStyle.None;
            dgvLoans.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dgvLoans.Dock = DockStyle.Fill;
            dgvLoans.Location = new Point(0, 0);
            dgvLoans.Name = "dgvLoans";
            dgvLoans.RowHeadersWidth = 51;
            dgvLoans.Size = new Size(725, 550);
            dgvLoans.TabIndex = 0;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(912, 550);
            Controls.Add(pnlMain);
            Controls.Add(pnlSidebar);
            Name = "Form1";
            Text = "Form1";
            pnlSidebar.ResumeLayout(false);
            pnlSidebar.PerformLayout();
            pnlMain.ResumeLayout(false);
            pnlAddBook.ResumeLayout(false);
            pnlAddBook.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)numQuantity).EndInit();
            ((System.ComponentModel.ISupportInitialize)dgvAuthorsSmall).EndInit();
            pnlAddAuthor.ResumeLayout(false);
            pnlAddAuthor.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)dgvInventory).EndInit();
            ((System.ComponentModel.ISupportInitialize)dgvLoans).EndInit();
            ResumeLayout(false);
        }

        #endregion

        private Panel pnlSidebar;
        private Panel pnlMain;
        private Button btnLoans;
        private Label label_meniu;
        private Button btnAddBook;
        private Button btnInventory;
        private DataGridView dgvLoans;
        private DataGridView dgvInventory;
        private Button btnMarkAsReturned;
        private Panel pnlAddBook;
        private Label label_new_book;
        private DataGridView dgvAuthorsSmall;
        private Label label3;
        private Label label2;
        private Label label1;
        private Button btnSaveBook;
        private NumericUpDown numQuantity;
        private TextBox txtCategory;
        private TextBox txtAuthorId;
        private TextBox txtTitle;
        private Label label5;
        private Label label4;
        private Label label6;
        private DateTimePicker dtpDate;
        private Button btnDeleteBook;
        private Button btnAuthorsMenu;
        private Panel pnlAddAuthor;
        private Label label8;
        private Label label7;
        private Button btnSaveAuthor;
        private DateTimePicker dtpAuthorBirthDate;
        private TextBox txtAuthorName;
        private Label label9;
        private TextBox txtNationality;
        private Label label10;
        private Button btnExtendLoan;
        private DateTimePicker dtpNewReturnDate;
        private Button btnConfirmExtension;
    }
}
