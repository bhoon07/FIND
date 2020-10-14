import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/animals");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/animals/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/animals/" + id);
  },
  // Saves a book to the database
  saveBook: function(animalData) {
    return axios.post("/api/animals", animalData);
  }
};