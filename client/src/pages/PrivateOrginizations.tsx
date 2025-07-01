const PrivateOrginizations = ()=>{
    const headerTextStyling = "text-center text-2xl md:text-[3rem] lg:text-[4rem] sm font-bold text-blue-800";
    
    //Each of the individual fact panels displayed
    const FactComponent = ()=>{

    }
    
    return(
        <div>
            <div className="border-y-5 md:border-y-7 lg:border-y-9 border-cyan-500 w-85 md:w-175 lg:w-225 mx-auto h-45 md:h-60 lg:h-75 mt-10 md:mt-20 flex items-center justify-center">
                <div className="flex justify-between items-center w-75 md:w-150 lg:w-200 h-40 md:h-50">
                    <p className={headerTextStyling}>Disasters Don't Wait</p>
                    <img src="/PrivateBussinessIcon.png" alt="private orgs" className="h-25 w-25 md:h-35 md:w-35 lg:h-50 lg:w-50"/>
                    <p className={headerTextStyling}>Neither Should You.</p>
                </div>
            </div>
        </div>
    );
}

export default PrivateOrginizations;