import { useRef, useImperativeHandle } from "react";
interface dialogType {
  message: string;
  ref: React.RefObject<{ open: () => void; close: () => void } | null>;
}
export default function Dialog({ message, ref }: dialogType) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useImperativeHandle(ref, () => ({
    open: () => {
      dialogRef.current?.showModal();
    },
    close: () => {
      dialogRef.current?.close();
    },
  }));
  return (
    <dialog
      ref={dialogRef}
      className="z-10 w-full max-w-md md:max-w-lg text-center space-y-6 p-6 md:p-10 
      rounded-2xl bg-gradient-to-br from-[#a372e8]/70 via-[#65bad6]/80 to-[#3a0e6e]/70 
      shadow-2xl backdrop-blur-md border border-white/10 mx-auto text-white"
    >
      <h2 className="text-xl md:text-2xl font-semibold">Error</h2>
      <p className="text-sm md:text-base">{message}</p>
      <button
        onClick={() => dialogRef.current?.close()}
        className="mt-4 bg-[#4f3279] text-white px-4 py-2 rounded hover:bg-[#50376d] transition"
      >
        Close
      </button>
    </dialog>
  );
}
