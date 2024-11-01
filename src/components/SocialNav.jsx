import { FaGithubSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md";

function SocialNav() {
    return (
        <nav className="flex gap-3 text-slate-300 mt-4">
            <FaGithubSquare size={25}/>
            <FaLinkedin size={25}/>
            <MdEmail size={25}/>
        </nav>
    )
}

export default SocialNav