export const validateRegisterForm = (user) => {
  const errors = {};
  const { name, email, password } = user;

  const nameRegExp = new RegExp(/^[aA-zZs]+$/); //only alphabets

  const emailRegExp = new RegExp(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ); //email validations

  const passwordRegExp = new RegExp(
    /^(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{2,}$/i
  ); //atleast one alphabet and one number

  if (!nameRegExp.test(name)) {
    errors.name = "Name should only contain alphabets.";
  }
  if (!emailRegExp.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!passwordRegExp.test(password)) {
    errors.password =
      "Password should contain atleast one letter and one number.";
  }

  return errors;
};

export const validateUser = (user) => {
  const errors = {};
  const { name, email, phone, password, username } = user;
  const usernameRegExp = new RegExp(
    /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{2,}$/i
  ); //alphanumeric with atleast one special character

  const nameRegExp = new RegExp(/^[aA-zZs]+$/); //only alphabets

  const emailRegExp = new RegExp(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ); //email validations

  const passwordRegExp = new RegExp(
    /^(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{2,}$/i
  ); //atleast one alphabet and one number

  const phoneRegExp = new RegExp(/^\d{10}$/); //one numbers and length 10

  if (!usernameRegExp.test(username)) {
    errors.username =
      "Username should be alphanumeric with atleast one special character.";
  }
  if (!nameRegExp.test(name)) {
    errors.name = "Name should only contain alphabets.";
  }
  if (!emailRegExp.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!passwordRegExp.test(password)) {
    errors.password =
      "Password should contain atleast one letter and one number.";
  }
  if (!phoneRegExp.test(phone)) {
    errors.phone = "Please enter a valid phone number";
  }

  return errors;
};
