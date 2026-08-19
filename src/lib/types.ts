// Basic JS/TS primitive types used across this app
export type PTypes = string | number | number[] | boolean;

// A candidate must be one of these two literal names
export type TCandidate = "Augustine" | "Kosisochukwu";

// A voter must be one of the names in the eligible voters list (see data.ts)
export type TVoters =
  | "Stephanie"
  | "Rita"
  | "James"
  | "Peter"
  | "Victor"
  | "Anthony"
  | "Charles"
  | "Augustine"
  | "Lillian"
  | "Gabriel"
  | "Christopher"
  | "Kosisochukwu"
  | "Bonaventure"
  | "Abigail"
  | "David"
  | "Amarachi"
  | "Loveth"
  | "Chidimma"
  | "Ifeanyi"
  | "Majesty";

// The poll object: each candidate mapped to their current vote count
export type TPoll = Record<TCandidate, number>;

// The shape of a completed/in-progress election result
export interface Result {
  total: number;
  winner: TCandidate;
  poll: TPoll;
}
