const Footer = () => {
    return(
        <>
        <div className="pt-20 px-10">
            <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                <h1 className="uppercase font-bold text-2xl">chronos</h1>
                <div className="">
                    <ul className="text-muted-foreground flex flex-col md:flex-row gap-2 md:gap-8">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="flex gap-4">
                    <img src="/insta.svg" alt="" width={24} height={24}/>
                    <img src="/linkedin.svg" alt="" width={24} height={24}/>
                    <img src="/github-line.svg" alt="" width={24} height={24}/>
                </div>
            </div>
            <hr className="mt-8"/>
            <div className="h-12 flex justify-center items-center">
                <p className="text-xs text-neutral-500">© 2024 Chronos. All rights reserved.</p>
            </div>
        </div>
        </>
    )
}

export default Footer;