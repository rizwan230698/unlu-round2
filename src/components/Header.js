import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import Button from "./Button";

const Header = () => {
  const { isUser, logout } = useContext(UserContext);
  return (
    <div className="flex items-center justify-end px-5 lg:px-14 h-16 bg-white shadow-sm">
      {isUser && (
        <Button mt="mt-0 lg:mt-0" h="h-10" px="px-8" onClick={logout}>
          Log out
        </Button>
      )}
    </div>
  );
};
export default Header;
