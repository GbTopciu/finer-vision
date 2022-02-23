import React from "react";
import { useForm } from "react-hook-form";
import { useRef } from "react";

const MoreComments = () => {
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
    phone: {
      required: "Please enter phone number",
      minLength: {
        value: 11,
        message: "Should be between 11-13 digits",
      },
      maxLength: {
        value: 13,
        message: "Should be between 11-13 digits",
      },
    },
    dob: {
      required: "DOB is required",
      minLength: {
        value: 2,
        message: "Each Field should be 2 digits long",
      },
      maxLength: {
        value: 2,
        message: "Each Field should be 2 digits long",
      },
    },
    doba: {
      required: "DOB is required",
      minLength: {
        value: 2,
        message: "Each Field should be 2 digits long",
      },
      maxLength: {
        value: 2,
        message: "Each Field should be 2 digits long",
      },
    },
    dobb: {
      required: "DOB is required",
      minLength: {
        value: 2,
        message: "Each Field should be 2 digits long",
      },
      maxLength: {
        value: 2,
        message: "Each Field should be 2 digits long",
      },
    },
    gender: {
      required: "Please select gender",
    },
  };

  return (
    <form
      className="rounded border-2 bg-[#dedede] "
      onSubmit={handleSubmit(onSubmit)}
      ref={form}
    >
      {/* Telephone Number & Gender */}
      <div className="flex justify-start px-5">
        <div className="mr-5">
          <label className="block font-semibold">Telephone Number</label>
          <input
            type="number"
            name="phone"
            className="rounded drop-shadow-xl py-1 pl-2"
            {...register("phone", registerOptions.phone)}
          />
          <small className="text-red-500 block">
            {errors?.phone && errors.phone.message}
          </small>
        </div>
        <div>
          <label className="block font-semibold">Gender</label>
          <select
            className="rounded drop-shadow-xl py-1 bg-gray-100"
            name="gender"
            defaultValue=""
            {...register("gender", registerOptions.gender)}
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <small className="text-red-500 block">
            {errors?.gender && errors.gender.message}
          </small>
        </div>
      </div>

      {/* Date of Birth */}
      <div className="mt-2 px-5">
        <label className="flex flex-col font-semibold">Date of birth</label>
        <div>
          <input
            type="number"
            name="dob"
            className="rounded drop-shadow-xl py-1 w-10 mr-2 pl-2"
            {...register("dob", registerOptions.dob)}
          />

          <input
            type="number"
            name="doba"
            className="rounded drop-shadow-xl py-1 w-10 mr-2 pl-2"
            {...register("doba", registerOptions.doba)}
          />

          <input
            type="number"
            name="dobb"
            className="rounded drop-shadow-xl py-1 w-10 mr-2 pl-2"
            {...register("dobb", registerOptions.dob)}
          />
          <small className="text-red-500 block">
            {errors?.dob && errors.dob.message}
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

export default MoreComments;
