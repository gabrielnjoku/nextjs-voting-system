import { create } from "zustand";
import { candidates, initialVotingRecord, voters } from "./data";
import { TCandidate, TPoll, TVoters } from "./types";

interface ElectionState {
  votingRecord: Record<TVoters, TCandidate>;
  poll: TPoll;
  total: number;
  winner: TCandidate | undefined;
  castVote: (voterInput: string, candidate: TCandidate) => boolean;
}

// Recompute poll totals + winner from a votingRecord, from scratch each time
const tally = (votingRecord: Record<TVoters, TCandidate>) => {
  const poll: TPoll = candidates.reduce((acc, candidate) => {
    acc[candidate] = 0;
    return acc;
  }, {} as TPoll);

  let total = 0;
  (Object.values(votingRecord) as TCandidate[]).forEach((choice) => {
    poll[choice] = (poll[choice] ?? 0) + 1;
    total += 1;
  });

  const sorted = Object.entries(poll).sort((a, b) => b[1] - a[1]);
  const winner = sorted[0][0] as TCandidate;

  return { poll, total, winner };
};

const initialTally = tally(initialVotingRecord);

export const useElectionStore = create<ElectionState>((set, get) => ({
  votingRecord: { ...initialVotingRecord },
  poll: initialTally.poll,
  total: initialTally.total,
  winner: initialTally.winner,

  castVote: (voterInput, candidate) => {
    const matchedVoter = voters.find(
      (voter) => voter.toLowerCase() === voterInput.trim().toLowerCase()
    );

    if (!matchedVoter) {
      return false;
    }

    const updatedRecord = {
      ...get().votingRecord,
      [matchedVoter]: candidate,
    };
    const { poll, total, winner } = tally(updatedRecord);

    set({ votingRecord: updatedRecord, poll, total, winner });
    return true;
  },
}));
