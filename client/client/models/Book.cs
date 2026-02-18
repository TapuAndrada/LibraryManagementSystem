using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace client.models
{
    public class Book
    {
        public int id { get; set; }
        public string title { get; set; }
        public Author author { get; set; }
        public string publicationDate { get; set; }
        public bool active { get; set; } = true;
        public int quantity { get; set; }  
        public string category { get; set; }

        public List<BookLoan> loans { get; set; } = new List<BookLoan>();
    }
}
