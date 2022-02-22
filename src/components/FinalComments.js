import React from "react";

const FinalComments = () => {
  return (
    <form className="rounded border-2 bg-[#dedede]">
      
      {/* Comments */}
      <div className="mt-2 px-5">
        <div>
          <label className="flex flex-col font-semibold">Comments</label>
          <textarea
            type="email"
            name="name"
            className="drop-shadow-xl rounded-md py-5 w-96 text-sm"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded bg-[#6059af] hover:bg-[#877fe0] text-white pr-5 pl-5 drop-shadow-xl py-1 mb-2"
          >
            Next &gt;
          </button>
        </div>
      </div>
    </form>
  );
};

export default FinalComments;
