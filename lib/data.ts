import usersJson from "./mock-data/users.json";
import repsJson from "./mock-data/reps.json";
import { User, Rep } from "./types";

// Mutable in-memory store seeded from JSON — swap these out for DB calls later
let usersDB: User[] = [...usersJson];
let repsDB: Rep[] = [...repsJson];

const nextId = (arr: { id: number }[]) =>
  Math.max(...arr.map((x) => x.id), 0) + 1;

// ─── GET ────────────────────────────────────────────────────────────────────

export const getAllUsers = (): User[] => usersDB;

export const getAllReps = (): Rep[] => repsDB;

export const getUserById = (id: number): User | undefined =>
  usersDB.find((u) => u.id === id);

export const getRepById = (id: number): Rep | undefined =>
  repsDB.find((r) => r.id === id);

export const getRepsByUserId = (userId: number): Rep[] =>
  repsDB.filter((r) => r.user_id === userId);

export const getTodaysReps = (userId: number): Rep[] => {
  const today = new Date().toISOString().slice(0, 10);
  return repsDB.filter(
    (r) => r.user_id === userId && r.created_at.startsWith(today)
  );
};

// ─── CREATE ─────────────────────────────────────────────────────────────────

export const createUser = (userName: string): User => {
  const user: User = { id: nextId(usersDB), user_name: userName };
  usersDB.push(user);
  return user;
};

export const createRep = (userId: number, reps: number): Rep => {
  const rep: Rep = {
    id: nextId(repsDB),
    user_id: userId,
    reps,
    created_at: new Date().toISOString(),
  };
  repsDB.push(rep);
  return rep;
};

// ─── UPDATE ─────────────────────────────────────────────────────────────────

export const updateRep = (id: number, reps: number): Rep | undefined => {
  const rep = repsDB.find((r) => r.id === id);
  if (!rep) return undefined;
  rep.reps = reps;
  return rep;
};

// ─── DELETE ─────────────────────────────────────────────────────────────────

export const deleteRep = (id: number): boolean => {
  const before = repsDB.length;
  repsDB = repsDB.filter((r) => r.id !== id);
  return repsDB.length < before;
};

export const deleteUser = (id: number): boolean => {
  const before = usersDB.length;
  usersDB = usersDB.filter((u) => u.id !== id);
  return usersDB.length < before;
};
