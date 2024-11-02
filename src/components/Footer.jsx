import SocialNav from "./SocialNav"

function Footer() {
    return(
        <footer className="flex items-center justify-between py-4">
            <div className="flex flex-col items-center">
                <h4 className="text-lg uppercase">Social media</h4>
                <SocialNav/>
            </div>
            <span>&copy; Jessica Singletary</span>
        </footer>
    )
}

export default Footer