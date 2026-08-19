import Head from "next/head";
import CheckResultButton from "@/component/CheckResultButton";
import Leaderboard from "@/component/Leaderboard";
import Navbar from "@/layout/Navbar";
import VotingForm from "@/component/VotingForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hackathon 3.0 Head of House Voting System</title>
        <meta name="description" content="Cast and check votes for the Hackathon 3.0 Head of House election" />
      </Head>

      <Navbar />

      {/* Hero / voting form section */}
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <VotingForm />
          </div>
        </div>
      </div>

      {/* Footer bar: check result + leaderboard */}
      <div className="flex min-h-[220px] flex-col items-center justify-between gap-8 bg-gray-900 px-6 py-8 md:flex-row md:px-16">
        <CheckResultButton />
        <Leaderboard />
      </div>
    </>
  );
}
