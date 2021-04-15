import { gql } from "apollo-server";
export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    "Unique ID for each book"
    bookId: ID
    "Country in which book is released"
    country: String!
    "Title of the book"
    title: String!
    "Author of this book"
    author: String
    "Language in which book is available"
    language: String
    "Year in which the book is released"
    year: Int
    "No. of pages in the book"
    pages: Int
    "Link for detailed information about the book"
    link: String
    "Path of the image link to access"
    imageLink: String
    "Review details of this book"
    reviews: Review
  }

  type Review{
    "Rating given by users for a particular book"
    rating: Float!
    "No. of users who has given rating for a particular book"
    noOfUsersReviewed: Int!
  }

  type Query {
    books(limit: Int, id: ID): [Book]
  }

`;
