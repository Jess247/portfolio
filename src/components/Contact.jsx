function Contact() {
    return(
        <section>
            <h4 className="text-xl font-semibold uppercase leading-relaxed tracking-wider">Contact</h4>
            <p className="font-thin mt-4">
                Any questions? Get in touch via social media or through the form below.
            </p>
            <form className="flex flex-col items-start gap-4 my-8">
                <label 
                    htmlFor="name"
                    className="block"
                    >Name 
                </label>
                <input 
                    type="text"
                    id="name"
                    className="border bg-transparent py-1 px-3 rounded-full text-sm font-light"  
                    placeholder="Jane Doe" 
                />
                <label 
                    htmlFor="message"
                    className="block"
                    >Message
                </label>
                <textarea id="message" rows="4" class="block p-2.5 w-full max-w-[600px] text-sm text-gray-900 font-light bg-transparent rounded-lg border border-white focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
            </form>
        </section>
    )
}

export default Contact