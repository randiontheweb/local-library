function getTotalBooksCount(books) {
  let counter = 0;
  for (let i = 0; i < books.length; i++) {
    counter += +1;
  }
  return counter;
}

function getTotalAccountsCount(accounts) {
  let counter = 0;
  for (let i = 0; i < accounts.length; i++) {
    counter += +1;
  }
  return counter;
}

function getBooksBorrowedCount(books) {
  let count = 0;
  for (let i = 0; i < books.length; i++) {
    if (books[i].borrows[0].returned === false) count++;
  }
  return count;
}

function getMostCommonGenres(books) {
  const result = [];
  const genres = books.map((book) => book.genre);
  genres.forEach((genre) => {
    const findGenre = result.find((found) => found.name === genre);
    if (findGenre) {
      findGenre.count++;
    } else {
      result.push({ name: genre, count: 1 });
    }
  });
  result.sort((a, b) => b.count - a.count);
  return result.slice(0, 5);
}

function getMostPopularBooks(books) {
  const borrowedBooks = books.map((book) => {
    return { name: book.title, count: book.borrows.length };
  });
  borrowedBooks.sort((a, b) => b.count - a.count);
  return borrowedBooks.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  function topFive(result) {
    return result
      .sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1))
      .splice(0, 5);
  }
  let allAuthors = [];
  books.forEach((book) => {
    authors.forEach((author) => {
      const completeName = `${author.name.first} ${author.name.last}`;
      if (book.authorId === author.id) {
        allAuthors.push({ name: completeName, count: book.borrows.length });
      }
    });
  });
  return topFive(allAuthors);
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
