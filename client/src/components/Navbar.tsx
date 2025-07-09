import { useNavigate } from "react-router-dom";

const Navbar = ()=>{
    const navigate = useNavigate();
    return(
        <div className="bg-blue-800 h-15 md:h-20 flex items-center">
            <div className="flex justify-between w-[95%] mx-auto">
                <img 
                    src="./compass.webp" 
                    alt="compassLogo" 
                    className="cursor-pointer my-auto bg-white rounded-full border border-blue-800 compassLogo h-12 md:h-15"
                    onClick={() => navigate("/")}
                />
                <div className="flex justify-between w-50 w-32 items-center text-white md:text-xl md:w-80">
                    <p className="cursor-pointer" onClick={() => navigate("/Services")}>Services</p>
                    <p className="cursor-pointer" onClick={() => navigate("/About")}>About</p>
                    <p className="cursor-pointer" onClick={() => navigate("/Contact")}>Contact</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;