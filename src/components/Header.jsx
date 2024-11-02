import SocialNav from "./SocialNav"

function Header() {
    return(
        <header className="mt-2 mb-24">
            <h1 className="text-4xl font-bold mb-8">Jessica <span className=" text-violet-400 [text-shadow:_1px_1px_5px_rgb(179_74_224_/_40%)]">Singletary</span></h1>
            <h2 className="text-xl leading-[3rem]">Frontend Developer</h2>
            <p className="text-slate-400 font-thin mb-16">I build responsive, modern and accessible website applications.</p>
            <SocialNav/>
        </header>
    )
}

export default Header