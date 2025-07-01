const Footer = ()=>{
    return(
        <div className="mt-20 grid"> 
            <button className="mx-auto border text-2xl text-white bg-blue-800 p-3 rounded-xl cursor-pointer">Explore a Customized Strategy</button>
            <div className="mt-5 bg-linear-to-b from-white from-10% via-cyan-500 via-25% to-blue-800 to-65% h-40 text-white text-2xl flex flex-col justify-end">
                <p className="mx-auto mb-10 cursor-pointer">Back To Top</p>
                <p className="ml-25 mb-3">@2025 Davis Emergency Solutions</p>
            </div>
        </div>
    );
}

export default Footer;