import SocialNav from "./SocialNav"

function Header() {
    return(
        <header className="text-white">
            <h1 className="">Jessica Singletary</h1>
            <h2>Frontend Developer</h2>
            <p>I build responsive, modern and accessible website applications.</p>
            <SocialNav/>
        </header>
    )
}

export default Header