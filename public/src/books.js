function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id);
  return found;
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id);
  return found;
}

//books[i].borrows
function partitionBooksByBorrowedStatus(books) {
  let checkedOut = [];
  let checkedIn = [];
  let result = [checkedOut, checkedIn];

  for (let i = 0; i < books.length; i++) {
    const toBorrow = books[i].borrows[0].returned;
    const book = books[i];
    if (toBorrow === false) checkedOut.push(book);
    if (toBorrow === true) checkedIn.push(book);
  }
  return result;
}

function getBorrowersForBook(book, accounts) {
  const borrows = book.borrows;
  const result = [];
  borrows.forEach((borrow) => {
    if (result.length >= 10) return;

    const borrower = accounts.find((account) => account.id === borrow.id);
    const borrowArr = {
      ...borrow,
      ...borrower,
    };
    result.push(borrowArr);
  });

  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
