const PrivateOrginizations = ()=>{
    const headerTextStyling = "text-center text-2xl md:text-[3rem] lg:text-[4rem] sm font-bold text-blue-800";
    
    //Each of the individual fact panels displayed
    const FactComponent = (title:string, imgSrc:string,alt:string, text:string, invert:boolean):React.ReactNode=>{

        return(
            <div className="w-70 md:w-175 xl:w-250 grid md:grid-cols-3">
                <h1 className="mb-5 text-2xl md:text-4xl xl:text-5xl w-70 md:w-125 xl:w-175 text-white bg-blue-600 rounded-xl py-3 md:py-5 text-center mx-auto md:col-span-3">{title}</h1>
                <img src={imgSrc} alt={alt} className={`h-50 mx-auto my-5 ${invert && "md:col-start-3 md:row-start-2"}`}/>
                <p className={`text-lg md:text-2xl xl:text-3xl innerShadow p-4 rounded-lg md:col-span-2 ${invert && "md:col-start-1 md:row-start-2"}`}>{text}</p>
            </div>
        );
    }
    
    return(
        <div>
            <div className="border-y-5 md:border-y-7 lg:border-y-9 border-blue-500 w-80 md:w-175 lg:w-225 xl:w-250 mx-auto h-45 md:h-60 lg:h-75 my-10 md:my-20 flex items-center justify-center">
                <div className="flex justify-between items-center w-75 md:w-150 lg:w-200 h-40 md:h-50">
                    <p className={headerTextStyling}>Disasters Don't Wait</p>
                    <img src="/PrivateBussinessIcon.png" alt="private orgs" className="h-25 w-25 md:h-35 md:w-35 lg:h-50 lg:w-50"/>
                    <p className={headerTextStyling}>Neither Should You.</p>
                </div>
            </div>
            <div className="grid justify-center gap-y-10">
                {FactComponent("Business Impact","/PrivateBussinessIcon.png","1",`Donec nec nunc tempor,
                vehicula mi eget, varius nisi. Aliquam at nisi eleifend, commodo tellus eget, rutrum ligula.
                Donec nec nunc tempor, vehicula mi eget, varius nisi. Aliquam at nisi eleifend, commodo tellus 
                eget, rutrum ligula.`,false)}
                {FactComponent("Business Impact","/PrivateBussinessIcon.png","2",`Donec nec nunc tempor,
                vehicula mi eget, varius nisi. Aliquam at nisi eleifend, commodo tellus eget, rutrum ligula.
                Donec nec nunc tempor, vehicula mi eget, varius nisi. Aliquam at nisi eleifend, commodo tellus 
                eget, rutrum ligula.`,true)}
                {FactComponent("Business Impact","/PrivateBussinessIcon.png","3",`Donec nec nunc tempor,
                vehicula mi eget, varius nisi. Aliquam at nisi eleifend, commodo tellus eget, rutrum ligula.
                Donec nec nunc tempor, vehicula mi eget, varius nisi. Aliquam at nisi eleifend, commodo tellus 
                eget, rutrum ligula.`,false)}
            </div>
        </div>
    );
}

export default PrivateOrginizations;