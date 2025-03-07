import React from "react";

export default function Quote() {
  return (
    <div>
      <div className="lg:pt-24 lg:pb-28 py-14 text-center flex flex-col gap-4">
        <h1 className="lg:text-sm text-zinc-700 text-xs">IN THE PRESS</h1>
        <div className="lg:text-3xl text-justify font-semibold px-2 lg:px-60 lg:text-center gap-1 text-zinc-800">
          <h1>
            "Beauty is within every woman, fashion is simply the art that
            reveals it to the world with elegance and grace."
          </h1>
        </div>
      </div>
      <hr />
    </div>
  );
}
