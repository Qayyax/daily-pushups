// CRUD
// create new set
// update set
// get set(s)
// delete set
import users from "./mock-data/users.json";
import reps from "./mock-data/reps.json";
import { User, Rep } from "./types";

// GET functions

// GET ALL
export const getAllUsers = (): User[] => {
  return users;
};
export const getAllReps = (): Rep[] => {
  return reps;
};

// GET specific
export const getUserById = (id: number): User => {};
export const getRepById = (id: number): Rep => {};

console.log(getAllUsers());
console.log(getAllReps());

// Add functions

// Update functions

// Delete functions
