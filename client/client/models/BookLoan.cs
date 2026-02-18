using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace client.models
{
    public class BookLoan
    {
        public int id { get; set; }
        public User user { get; set; }
        public Book book { get; set; }
        public string loanDate { get; set; }
        public string returnDate { get; set; }
        public bool returned { get; set; }
    }
}
