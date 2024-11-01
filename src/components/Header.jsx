import SocialNav from "./SocialNav"

function Header() {
    return(
        <header className="mt-2 mb-32">
            <h1 className="text-4xl font-bold">Jessica Singletary</h1>
            <h2 className="text-xl leading-[3rem]">Frontend Developer</h2>
            <p className="text-slate-400 font-thin">I build responsive, modern and accessible website applications.</p>
            <SocialNav/>
        </header>
    )
}

export default Header