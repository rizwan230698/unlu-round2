import React, { useContext, useState } from "react";

import { UserContext } from "../context/UserProvider";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { auth, createUserDocument, getUserByEmail } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Message from "../components/Message";
import { validateRegisterForm } from "../utils";

const Register = () => {
  const { user, setCurrentUser } = useContext(UserContext);
  const [values, setValues] = useState(user);
  const [loading, setLoading] = useState(false);
  const [firebaseError, setFirebaseError] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateRegisterForm(values);
    if (Object.keys(errors).length) return setErrors(errors);

    const { email, password, name } = values;
    setLoading(true);
    try {
      const existingUser = await getUserByEmail(email);

      if (existingUser) {
        const credentialsMatch = ["name", "email", "password"].every((key) =>
          key === "email"
            ? values[key].toLowerCase() === existingUser[key]
            : values[key] === existingUser[key]
        );
        if (!credentialsMatch) {
          setFirebaseError("Invalid credentials");
          return setLoading(false);
        }
        localStorage.setItem("uid", existingUser.uid);
      } else {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await createUserDocument(user, { name, password });
        localStorage.setItem("uid", user.uid);
      }
      setLoading(false);
      setCurrentUser(values);
    } catch (error) {
      setLoading(false);
      setFirebaseError(error.message);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center p-[20px]">
      <div className="w-full md:w-[560px] relative bg-white shadow-2 border border-greyLight rounded-lg pt-6 lg:pt-10 pb-16">
        <p className="text-subtitle font-semibold pb-4 px-6 lg:pb-6 lg:px-12 border-b border-greyLight">
          Register
        </p>

        <div className="px-6 pt-4 lg:pt-6 lg:px-12">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 lg:gap-6">
              <FormInput
                name="name"
                value={values.name}
                onChange={handleChange}
                label="Name"
                required
                errors={errors}
              />
              <FormInput
                name="email"
                value={values.email}
                onChange={handleChange}
                label="Email Address"
                type="email"
                required
                errors={errors}
              />
              <FormInput
                name="password"
                value={values.password}
                onChange={handleChange}
                label="Password"
                type="password"
                required
                errors={errors}
              />
            </div>

            {firebaseError && <Message status="error" text={firebaseError} />}

            <Button type="submit" loading={loading} disabled={loading}>
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
