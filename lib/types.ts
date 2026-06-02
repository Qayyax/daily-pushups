export type User = {
  id: number;
  userName: string;
};

export type Rep = {
  id: number;
  userId: number;
  reps: number;
  createdAt: string;
};
