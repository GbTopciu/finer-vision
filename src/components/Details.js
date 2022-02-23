import { React, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Details = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

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

  const pushHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8888/", {
        firstname:  firstname ,
        lastname:  lastname ,
        email:  email ,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
            onChange={(e) => setFirstName(e.target.value)}
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
            onChange={(e) => setLastname(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <small className="text-red-500 block">
            {errors?.email && errors.email.message}
          </small>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded bg-[#6059af] hover:bg-[#877fe0] text-white pr-5 pl-5 drop-shadow-xl py-1 mb-2"
            onClick={pushHandler}
          >
            Next &gt;
          </button>
        </div>
      </div>
    </form>
  );
};

export default Details;
