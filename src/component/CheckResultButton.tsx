import { useState } from "react";
import ResultModal from "./ResultModal";

export default function CheckResultButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="h-[50px] rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white outline outline-1 -outline-offset-1 outline-white/5 transition-all duration-300 hover:bg-white/20"
      >
        Check Result
      </button>
      <ResultModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
