import { useElectionStore } from "@/lib/store";

interface ResultModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ResultModal({ open, onClose }: ResultModalProps) {
  const poll = useElectionStore((state) => state.poll);
  const winner = useElectionStore((state) => state.winner);
  const entries = Object.entries(poll);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
      <div
        className="fixed inset-0 bg-gray-900/50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 sm:mx-0 sm:size-10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="size-6 text-red-400"
                >
                  <path
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 id="dialog-title" className="text-base font-semibold text-white">
                  How Voters voted
                </h3>
                <div className="mt-2 space-y-1">
                  {entries.map(([name, votes]) => (
                    <p key={name} className="text-sm text-gray-400">
                      {name}: {votes} Votes
                    </p>
                  ))}
                  <p className="text-sm text-gray-400">
                    Election Winner: {winner ?? "-"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              onClick={onClose}
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20 sm:mt-0 sm:w-auto"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
