const FormContainer = ({ children, title }) => (
  <div className="min-h-[calc(100vh-64px)] flex justify-center items-center p-[20px]">
    <div className="w-full md:w-[560px] relative bg-white shadow-2 border border-greyLight rounded-lg pt-6 lg:pt-10 pb-16">
      <p className="text-subtitle font-semibold pb-4 px-6 lg:pb-6 lg:px-12 border-b border-greyLight">
        {title}
      </p>
      <div className="px-6 pt-4 lg:pt-6 lg:px-12">{children}</div>
    </div>
  </div>
);

export default FormContainer;
