import React, { useContext, useState } from "react";

import { UserContext } from "../context/UserProvider";
import FormInput from "../components/FormInput";
import Message from "../components/Message";
import { validateUser } from "../utils";
import Button from "../components/Button";

const Homepage = () => {
  const { user, updateUser } = useContext(UserContext);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleValidate = (e) => {
    e.preventDefault();
    const errors = validateUser(user);

    if (Object.keys(errors).length) {
      setErrors(errors);
      setSuccess(false);
    } else {
      setSuccess(true);
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    updateUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center p-[20px]">
      <div className="w-full md:w-[560px] relative bg-white shadow-2 border border-greyLight rounded-lg pt-6 lg:pt-10 pb-16">
        <p className="text-subtitle font-semibold pb-4 px-6 lg:pb-6 lg:px-12 border-b border-greyLight">
          Profile
        </p>
        <div className="px-6 pt-4 lg:pt-6 lg:px-12">
          <form onSubmit={handleValidate}>
            <div className="grid grid-cols-1 gap-4 lg:gap-6">
              <FormInput
                name="username"
                value={user.username}
                onChange={handleChange}
                label="Username"
                errors={errors}
              />
              <FormInput
                name="name"
                value={user.name}
                onChange={handleChange}
                label="Name"
                errors={errors}
              />
              <FormInput
                name="email"
                value={user.email}
                onChange={handleChange}
                label="Email Address"
                errors={errors}
              />
              <FormInput
                name="password"
                value={user.password}
                onChange={handleChange}
                label="Password"
                type="password"
                errors={errors}
              />
              <FormInput
                name="phone"
                value={user.phone}
                onChange={handleChange}
                label="Phone"
                errors={errors}
              />
            </div>

            {success && <Message text="All validations passed" />}
            <Button type="submit">Validate</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
