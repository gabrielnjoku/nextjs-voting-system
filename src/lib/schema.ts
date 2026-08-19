import { z } from "zod";
import { candidates, voters } from "./data";

// Case-insensitive check that the typed name matches someone on the voter roll
const isEligibleVoter = (name: string) =>
  voters.some((voter) => voter.toLowerCase() === name.trim().toLowerCase());

export const votingFormSchema = z.object({
  voter: z
    .string()
    .min(1, "Please enter your name")
    .refine(isEligibleVoter, {
      message: "Sorry, you are not eligible to vote!",
    }),
  candidate: z.enum(candidates as [string, ...string[]], {
    errorMap: () => ({ message: "Please select your preferred candidate" }),
  }),
});

export type VotingFormValues = z.infer<typeof votingFormSchema>;
