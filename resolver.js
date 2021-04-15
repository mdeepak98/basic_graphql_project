import { books } from "./books.js";

export const resolvers = {
  Query: {
    books: (_, {id, limit}) => {
      if(id) return books.filter((book) => book.bookId == id);
      return books.slice(0,limit);
    }
  },
};