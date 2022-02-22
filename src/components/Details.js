import React from "react";

const Details = () => {
  return (
    <form className="rounded border-2 bg-[#dedede]">
        {/* Firstname & Surname */}
        <div className="flex justify-start px-5">
          <div className="mr-5">
            <label className="block font-semibold">First Name</label>
            <input
              type="text"
              name="name"
              className="rounded drop-shadow-xl py-1"
            />
          </div>
          <div>
            <label className="block font-semibold">Surname</label>
            <input
              type="text"
              name="name"
              className="rounded drop-shadow-xl py-1"
            />
          </div>
        </div>

        {/* Email Address & Button */}
        <div className="mt-2 px-5">
          <div>
            <label className="flex flex-col font-semibold">Email Address:</label>
            <input
              type="email"
              name="name"
              className="rounded drop-shadow-xl py-1"
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

export default Details;
