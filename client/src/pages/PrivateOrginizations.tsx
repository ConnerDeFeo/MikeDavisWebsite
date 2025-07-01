const PrivateOrginizations = ()=>{
    const headerTextStyling = "text-center text-2xl md:text-[3rem] lg:text-[4rem] sm font-bold text-blue-800";
    
    //Each of the individual fact panels displayed
    const FactComponent = (title:string):React.ReactNode=>{

        return(
            <div>
                <h1 className="text-4xl text-white bg-blue-500 rounded-xl w-50 h-15 text-center ">{title}</h1>
            </div>
        );
    }
    
    return(
        <div>
            <div className="border-y-5 md:border-y-7 lg:border-y-9 border-blue-500 w-85 md:w-175 lg:w-225 mx-auto h-45 md:h-60 lg:h-75 my-10 md:my-20 flex items-center justify-center">
                <div className="flex justify-between items-center w-75 md:w-150 lg:w-200 h-40 md:h-50">
                    <p className={headerTextStyling}>Disasters Don't Wait</p>
                    <img src="/PrivateBussinessIcon.png" alt="private orgs" className="h-25 w-25 md:h-35 md:w-35 lg:h-50 lg:w-50"/>
                    <p className={headerTextStyling}>Neither Should You.</p>
                </div>
            </div>
            <div className="grid justify-center gap-y-10 border">
                {FactComponent("test")}
            </div>
        </div>
    );
}

export default PrivateOrginizations;