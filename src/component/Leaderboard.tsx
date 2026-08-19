import { useElectionStore } from "@/lib/store";

const UsersIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
    className="size-6 text-white"
  >
    <path
      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Leaderboard() {
  const poll = useElectionStore((state) => state.poll);
  const entries = Object.entries(poll);

  return (
    <div className="w-full max-w-sm rounded-lg bg-gray-800/60 p-6 outline -outline-offset-1 outline-white/10 md:mr-12">
      <h3 className="text-base font-semibold text-white">Election Leaderboard</h3>

      <dl className="mt-5 grid grid-cols-2 gap-4">
        {entries.map(([name, votes], index) => (
          <div
            key={name}
            className="flex flex-col gap-2 rounded-lg bg-gray-900/60 px-4 py-5 outline -outline-offset-1 outline-white/10"
          >
            <dt className="flex flex-col items-start gap-2">
              <div className="flex size-10 items-center justify-center rounded-md bg-indigo-500">
                <UsersIcon />
              </div>
              <p className="truncate text-sm font-medium text-gray-300">
                {index === 0 ? "Candidate One" : "Candidate Two"}
              </p>
              <p className="text-xs text-gray-500">{name}</p>
            </dt>
            <dd>
              <p className="text-2xl font-semibold tracking-tight text-white">{votes}</p>
              <p className="text-sm text-green-400">Votes</p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
