import { FaGithubSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md";

function SocialNav() {
    return (
        <nav className="flex gap-3 text-slate-300 mt-4">
            <FaGithubSquare className="hover:cursor-pointer hover:scale-125  ease-in-out duration-300" size={25}/>
            <FaLinkedin className="hover:cursor-pointer hover:scale-125  ease-in-out duration-300" size={25}/>
            <MdEmail className="hover:cursor-pointer hover:scale-125  ease-in-out duration-300" size={25}/>
        </nav>
    )
}

export default SocialNav