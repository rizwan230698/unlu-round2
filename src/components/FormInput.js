import Message from "./Message";

const FormInput = ({
  name,
  label,
  value,
  onChange,
  touched = {},
  errors = {},
  placeholder,
  ...rest
}) => {
  return (
    <div className="flex flex-col text-blackMedium">
      {label && (
        <label
          className="cursor-pointer text-caption mb-[4px] font-semibold"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          className="bg-gray-200 border w-full border-greyLight rounded-md shadow-1 text-body h-[48px] px-[16px] py-[12px] outline-none placeholder:text-disabled font-medium"
          value={value}
          onChange={onChange}
          name={name}
          id={name}
          placeholder={placeholder || label}
          type="text"
          {...rest}
        />
      </div>

      {errors[name] && <Message text={errors[name]} status="error" />}
    </div>
  );
};

export default FormInput;
