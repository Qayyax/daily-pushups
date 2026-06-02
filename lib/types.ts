export type User = {
  id: number;
  user_name: string;
};

export type Rep = {
  id: number;
  user_id: number;
  reps: number;
  created_at: string;
};
