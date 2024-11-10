import React from "react";
import Header from "./Header";

const Wait = () => {
  return (
    <>
      <Header />

      <div
        class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 mt-36 wait_msg"
        role="alert"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-7 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
        <p className="text-md flex ">Waiting for approval please be patient.</p>
      </div>
    </>
  );
};

export default Wait;
