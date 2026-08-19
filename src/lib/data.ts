import { TCandidate, TVoters } from "./types";

// The two candidates contesting this election
export const candidates: TCandidate[] = ["Augustine", "Kosisochukwu"];

// The full list of eligible voters (only these names may cast a vote)
export const voters = [
  "Stephanie",
  "Rita",
  "James",
  "Peter",
  "Victor",
  "Anthony",
  "Charles",
  "Augustine",
  "Lillian",
  "Gabriel",
  "Christopher",
  "Kosisochukwu",
  "Bonaventure",
  "Abigail",
  "David",
  "Amarachi",
  "Loveth",
  "Chidimma",
  "Ifeanyi",
  "Majesty",
] as const;

// Every voter's current choice. Cast Vote overwrites the relevant entry
// before the poll is re-calculated
export const initialVotingRecord: Record<TVoters, TCandidate> = {
  Stephanie: "Augustine",
  Rita: "Kosisochukwu",
  James: "Augustine",
  Peter: "Kosisochukwu",
  Victor: "Augustine",
  Anthony: "Kosisochukwu",
  Charles: "Augustine",
  Augustine: "Kosisochukwu",
  Lillian: "Augustine",
  Gabriel: "Kosisochukwu",
  Christopher: "Augustine",
  Kosisochukwu: "Augustine",
  Bonaventure: "Augustine",
  Abigail: "Augustine",
  David: "Augustine",
  Amarachi: "Augustine",
  Loveth: "Kosisochukwu",
  Chidimma: "Augustine",
  Ifeanyi: "Kosisochukwu",
  Majesty: "Augustine",
};
