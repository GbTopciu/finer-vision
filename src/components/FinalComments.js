import { React, useRef } from "react";
import { useForm } from "react-hook-form";


const FinalComments = () => {
  // React-Hook-Form
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const registerOptions = {
    area: { required: "Message is required" },
  };

  return (
    <form
      className="rounded border-2 bg-[#dedede]"
      onSubmit={handleSubmit(onSubmit)}
      ref={form}
    >
      {/* Comments */}
      <div className="mt-2 px-5">
        <div>
          <label className="flex flex-col font-semibold">Comments</label>
          <textarea
            type="email"
            name="name"
            className="drop-shadow-xl rounded-md py-5 w-96 text-sm pl-2"
            {...register("area", registerOptions.area)}
          />
          <small className="text-red-500 block">
            {errors?.area && errors.area.message}
          </small>
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
