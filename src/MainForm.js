import React from "react";
import Details from "./components/Details";
import FinalComments from "./components/FinalComments";
import MoreComments from "./components/MoreComments";
import { useState } from "react";

const MainForm = () => {
  const [show, setShow] = useState(false);
  const [finalComments, setFinalComments] = useState(false);
  const [moreComments, setMoreComments] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <ul className="flex flex-col  justify-center items-center w-full">
        {/* Details */}

        <div className="w-1/2 h-2/4 border-2 border-white">
          <li
            className="bg-[#f4b50a] rounded text-white py-4 px-3"
            onClick={() => setShow(!show)}
          >
            Step 1: Your details
          </li>
          {show && <Details />}
        </div>
        {/* More Comments */}

        <div className="w-1/2 h-2/4 border-2 border-white">
          <li
            className="bg-[#f4b50a] rounded text-white py-4 px-3"
            onClick={() => setMoreComments(!moreComments)}
          >
            Step 2: More comments
          </li>
          {moreComments && <MoreComments />}
        </div>

        {/* Final Comments */}
        <div className="w-1/2 h-2/4 border-2 border-white">
          <li
            className="bg-[#f4b50a] rounded text-white py-4 px-3"
            onClick={() => setFinalComments(!finalComments)}
          >
            Step 3: Final comments
          </li>
          {finalComments && <FinalComments />}
        </div>
      </ul>
    </div>
  );
};

export default MainForm;
