import Logo from "../assets/images/logo-large.svg";
import Trophy from "../assets/images/icon-personal-best.svg";

const Navbar = () =>{
    return (
        <>
            <div className="w-full my-4 flex justify-between items-center">
                <div>
                    <img src={Logo} alt={"logo"}/>
                </div>
                <div className="flex ml-2">
                    <img src={Trophy} alt={"personal-best"}/>
                    <p className="text-xs font-sora font-semibold">Personal Best: N/A</p>
                </div>
            </div>
        </>
    )
}

export default Navbar;
