function findAccountById(accounts, id) {
  let identify = accounts.find((account) => account.id === id);
  return identify;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) =>
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  );
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let count = 0;
  for (let i = 0; i < books.length; i++) {
    let borrows = books[i].borrows;
    for (let j = 0; j < borrows.length; j++) {
      if (borrows[j].id === account.id) count += +1;
    }
  }

  return count;
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksBorrowed = [];
  books.forEach((book) => {
    if (
      book.borrows.find(
        (borrow) => borrow.id === account.id && borrow.returned === false
      )
    ) {
      booksBorrowed.push(book);
    }
  });
  booksBorrowed.forEach((book) => {
    let findAuthor = authors.find((author) => author.id === book.authorId);
    book["author"] = findAuthor;
  });
  return booksBorrowed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
