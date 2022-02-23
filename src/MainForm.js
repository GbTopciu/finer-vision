import { React, useState } from "react";

// Importing Components
import Details from "./components/Details";
import FinalComments from "./components/FinalComments";
import MoreComments from "./components/MoreComments";

const MainForm = () => {
  const [show, setShow] = useState(false);
  const [finalComments, setFinalComments] = useState(false);
  const [moreComments, setMoreComments] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <ul className="flex flex-col  justify-center items-center w-full  rounded">
        {/* Details */}
        <div className="md:w-1/2">
          <div className="border-2 border-white rounded shadow-2xl margin:auto">
            <li
              className="bg-[#f4b50a] rounded text-white py-4 px-3"
              onClick={() => setShow(!show)}
            >
              Step 1: Your details
            </li>
            {show && <Details show={show} setShow={setShow} />}
          </div>
          {/* More Comments */}

          <div className="border-2 border-white rounded shadow-2xl">
            <li
              className="bg-[#f4b50a] rounded text-white py-4 px-3"
              onClick={() => setMoreComments(!moreComments)}
            >
              Step 2: More comments
            </li>
            {moreComments && <MoreComments />}
          </div>

          {/* Final Comments */}
          <div className="border-2 border-white rounded shadow-2xl">
            <li
              className="bg-[#f4b50a] rounded text-white py-4 px-3"
              onClick={() => setFinalComments(!finalComments)}
            >
              Step 3: Final comments
            </li>
            {finalComments && <FinalComments />}
          </div>
        </div>
      </ul>
    </div>
  );
};

export default MainForm;
