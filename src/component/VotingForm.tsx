import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { candidates } from "@/lib/data";
import { votingFormSchema, VotingFormValues } from "@/lib/schema";
import { useElectionStore } from "@/lib/store";
import { TCandidate } from "@/lib/types";

export default function VotingForm() {
  const castVote = useElectionStore((state) => state.castVote);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<VotingFormValues>({
    resolver: zodResolver(votingFormSchema),
    defaultValues: { voter: "", candidate: "" },
  });

  const onSubmit = (values: VotingFormValues) => {
    const success = castVote(values.voter, values.candidate as TCandidate);

    if (!success) {
      toast.error("Sorry, you are not eligible to vote!");
      return;
    }

    toast.success(`Vote recorded for ${values.candidate}!`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="space-y-12">
        <div className="border-b border-white/10 pb-12">
          <h1 className="text-3xl font-semibold text-white">
            Hackathon 3.0 Head of House Voting System
          </h1>
          <p className="mt-1 text-sm/6 text-gray-400">
            Please cast your vote by telling us your name, selecting your preferred candidate and
            clicking &quot;Cast Vote&quot;
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="voter" className="block text-sm/6 font-medium text-white">
                Voter Name
              </label>
              <div className="mt-2 grid grid-cols-1">
                <input
                  type="text"
                  id="voter"
                  placeholder="Please enter your name"
                  autoComplete="off"
                  {...register("voter")}
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              {errors.voter && (
                <p className="mt-2 text-sm text-red-400">{errors.voter.message}</p>
              )}
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="candidate" className="block text-sm/6 font-medium text-white">
                Preferred Candidate
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="candidate"
                  {...register("candidate")}
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                >
                  <option value="">Select your Preferred candidate</option>
                  {candidates.map((candidate) => (
                    <option key={candidate} value={candidate}>
                      {candidate}
                    </option>
                  ))}
                </select>
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                >
                  <path
                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              {errors.candidate && (
                <p className="mt-2 text-sm text-red-400">{errors.candidate.message}</p>
              )}
            </div>

            <div className="col-span-full mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:opacity-50"
              >
                Cast Vote
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
