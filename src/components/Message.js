const Message = ({ text, status = "success", mt = "mt-2" }) => (
  <div
    className={`flex items-center font-normal p-3 ${mt} rounded-lg ${
      status === "success" ? "bg-success" : "bg-lightRed"
    }`}
  >
    <img
      src={status === "success" ? "success.svg" : "warning.svg"}
      width="17px"
      height="16px"
      alt={status === "success" ? "success icon" : "warning icon"}
    />
    <p className="text-xs font-medium ml-3 text-blackDark">{text}</p>
  </div>
);
export default Message;
