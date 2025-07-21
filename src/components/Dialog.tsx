import { useRef, forwardRef, useImperativeHandle } from "react";
type DialogProp = {
  message: string;
  type: "error" | "success";
};
export type DialogHandle = {
  open: () => void;
  close: () => void;
};

const Dialog = forwardRef<DialogHandle, DialogProp>(
  ({ message, type = "error" }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    useImperativeHandle(ref, () => ({
      open: () => {
        dialogRef.current?.showModal();
        // document.body.classList.add("dialog-open");
      },
      close: () => {
        dialogRef.current?.close();
        // document.body.classList.remove("dialog-open");
      },
    }));
    function handleClose() {
      // document.body.classList.remove("dialog-open");
    }
    const isError = type === "error";
    const icon = isError ? "⚠️" : "✅";
    const title = isError ? "Error" : "Success";

    return (
      <dialog
        ref={dialogRef}
        onClose={handleClose}
        className="backdrop:bg-black/30 open:flex items-center justify-center 
        fixed top-0 left-0 w-full h-full z-50 p-0 bg-transparent border-none"
      >
        <div
          className="mx-auto w-full max-w-md md:max-w-lg 
          text-center space-y-6 p-6 md:p-10 
          rounded-2xl bg-[#2c3e50]/80 
          shadow-2xl backdrop-blur-md border border-white/10 text-white"
        >
          <div className=" text-8xl md:text-6xl mb-4">{icon}</div>

          <h2 className="text-2xl md:text-5xl font-semibold">{title}</h2>

          <p className="text-base md:text-lg font-medium">{message}</p>

          <form method="dialog" className="mt-6">
            <button
              type="submit"
              onClick={(event) => {
                if (!isError) {
                  event.preventDefault();
                  window.location.href = "/login";
                }
              }}
              className="bg-gradient-to-r from-cyan-300 to-blue-400 text-[#3a0e6e]
              py-2 px-4 text-sm md:text-base rounded-full hover:bg-[#50376d] 
              font-semibold transition w-full sm:w-auto"
            >
              {isError ? "Close" : "Login"}
            </button>
          </form>
        </div>
      </dialog>
    );
  }
);
export default Dialog;

// 1. change in the url and so that no onelogin
// if user clicked then login page come
