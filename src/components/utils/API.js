import axios from "axios";

export default {
  getAnimals: function() {
    return axios.get("/api/animals");
  },
  getAnimal: function(id) {
    return axios.get("/api/animals/" + id);
  },
  deleteAnimal: function(id) {
    return axios.delete("/api/animals/" + id);
  },
  saveAnimal: function(animalData) {
    return axios.post("/api/animals", animalData);
  }
};