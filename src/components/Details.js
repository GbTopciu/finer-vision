import React from "react";

const Details = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form className="rounded border-2 bg-[#dedede] w-2/4 h-2/4 p-2">
        <h2 className="bg-[#f4b50a] rounded text-white">
          Step 1: Your details
        </h2>

        {/* Firstname & Surname */}
        <div className="flex justify-start">
          <div className="mr-5">
            <label className="block">First Name</label>
            <input type="text" name="name" className="rounded" />
          </div>
          <div>
            <label className="block">Surname</label>
            <input type="text" name="name" className="rounded" />
          </div>
        </div>

        {/* Email Address & Button */}
        <div className="mt-2">
          <div>
            <label className="flex flex-col">Email Address:</label>
            <input type="email" name="name" className="rounded" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="rounded bg-[#6059af] text-white pr-5 pl-5">
              Next &gt;
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Details;
