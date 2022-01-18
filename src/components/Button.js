const Button = ({
  children,
  loading,
  mt = "mt-8 lg:mt-10",
  h = "h-12",
  px = "px-[80px]",
  ...rest
}) => (
  <button
    className={`flex justify-center items-center ${mt} text-sm font-semibold py-[13px] ${px} text-white ${h} bg-brand-700 rounded-full disabled:bg-disabled disabled:cursor-not-allowed relative`}
    {...rest}
  >
    <span className={`${loading && "opacity-0"}`}>{children}</span>

    {loading && (
      <div className="absolute h-4 w-4 border-2 border-white border-t-transparent animate-spin rounded-full" />
    )}
  </button>
);

export default Button;
