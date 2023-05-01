import DisplayBook from './modules/displayBook.js';
import AddBook from './modules/addBook.js';
import RemoveBook from './modules/removeBook.js';
import NavLinks from './modules/navLinks.js';
import Time from './modules/Time.js';

// check booklist in localStorage

let BookList;
if (localStorage.getItem('BookList')) {
  const toParse = JSON.parse(localStorage.getItem('BookList'));
  BookList = toParse;
} else {
  BookList = [];
}

NavLinks();
Time();
DisplayBook(BookList);
AddBook(BookList);
DisplayBook(BookList);
RemoveBook(BookList);
DisplayBook(BookList);
