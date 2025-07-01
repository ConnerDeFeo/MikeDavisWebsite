const Footer = ()=>{
    return(
        <div className="mt-20 grid text-xl sm:text-2xl"> 
            <button className="mx-auto border text-white bg-blue-800 p-3 rounded-xl cursor-pointer">Explore a Customized Strategy</button>
            <div className="mt-5 bg-linear-to-b from-white from-10% via-cyan-500 via-25% to-blue-800 to-65% h-40 text-white flex flex-col justify-end">
                <p className="mx-auto mb-10 cursor-pointer" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>Back To Top</p>
                <p className="ml-5 md:ml-25 mb-3">@2025 Davis Emergency Solutions</p>
            </div>
        </div>
    );
}

export default Footer;