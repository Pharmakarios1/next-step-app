import { FiUser } from "react-icons/fi";
import { SiHandshakeProtocol } from "react-icons/si";


const Header = () => {
  return (
    <div className="h-16 w-full lg:max-w-[1000px] px-10 py-5 mx-auto ">
      <div className="flex justify-between items-center">
    <div className="logo flex place-items-center gap-2">
       <span className="w-8 h-8 border-[1px] rounded-full grid place-content-center">   <SiHandshakeProtocol size={20} /> </span> <p className="text-[12px] md:text-base">NextStep</p>
    </div>
       <FiUser />
      </div>
    </div>
  );
};

export default Header;
