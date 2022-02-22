import React from "react";

const MoreComments = () => {
  return (
    <form className="rounded border-2 bg-[#dedede] ">
      {/* Telephone Number & Gender */}
      <div className="flex justify-start px-5">
        <div className="mr-5">
          <label className="block font-semibold">Telephone Number</label>
          <input
            type="tel"
            name="phone"
            className="rounded drop-shadow-xl py-1"
          />
        </div>
        <div>
          <label className="block font-semibold">Gender</label>
          <select className="rounded drop-shadow-xl py-1 bg-gray-100" name="gender">
            <option value="" disabled selected>
              Select your option
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>

      {/* Date of Birth */}
      <div className="mt-2 px-5">
        <div>
          <label className="flex flex-col font-semibold">Date of birth</label>
          <input
            type="number"
            name="name"
            className="rounded drop-shadow-xl py-1 w-10 mr-2"
          />
            <input
            type="number"
            name="name"
            className="rounded drop-shadow-xl py-1 w-10 mr-2"
          />
            <input
            type="number"
            name="name"
            className="rounded drop-shadow-xl py-1 w-10 mr-2"
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

export default MoreComments;
