import { useImperativeHandle, useRef } from "react";
export default function Dialog({ ref, message: string }) {
  const show = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        show.current.showModal();
      },
    };
  });
  return (
    <dialog ref={show}>
      <img src="" />
      <p> message </p>
      <form method="show" onSubmit={}>
        <button> Close</button>
      </form>
    </dialog>
  );
}
