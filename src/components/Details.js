import React from "react";
import { useForm } from "react-hook-form";
import { useRef } from "react";

const Details = ({ show, setShow }) => {

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
    name: { required: "First Name is required" },
    surname: { required: "Surname is required" },
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
  };

  return (
    <form
      className="rounded border-2 bg-[#dedede]"
      onSubmit={handleSubmit(onSubmit)}
      ref={form}
    >
      {/* Firstname & Surname */}
      <div className="flex justify-start px-5">
        <div className="mr-5">
          <label className="block font-semibold">First Name</label>
          <input
            type="text"
            name="name"
            className="rounded drop-shadow-xl py-1 pl-2"
            {...register("name", registerOptions.name)}
          />
          <small className="text-red-500 block">
            {errors?.name && errors.name.message}
          </small>
        </div>
        <div>
          <label className="block font-semibold">Surname</label>
          <input
            type="text"
            name="surname"
            className="rounded drop-shadow-xl py-1 pl-2"
            {...register("surname", registerOptions.surname)}
          />
          <small className="text-red-500 block">
            {errors?.surname && errors.surname.message}
          </small>
        </div>
      </div>

      {/* Email Address & Button */}
      <div className="mt-2 px-5">
        <div>
          <label className="flex flex-col font-semibold">Email Address:</label>
          <input
            type="email"
            name="email"
            className="rounded drop-shadow-xl py-1 pl-2"
            {...register("email", registerOptions.email)}
          />
          <small className="text-red-500 block">
          {errors?.email && errors.email.message}
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

export default Details;
