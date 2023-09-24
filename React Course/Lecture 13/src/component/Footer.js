import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {

  const {user} = useContext(UserContext);

  return(
    <div className="text-center pb-10">
      <p className="text-xl font-bold text-red-800" >{user.name} - {user.email}</p>
    </div>
  )
};

export default Footer;
