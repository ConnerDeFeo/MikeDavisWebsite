const Education = ()=>{
    const HeaderComponent = (title:string, text:string)=>{
        return(
            <div className="h-50 w-50 md:h-55 md:w-55 bg-gray-400 text-white p-2 grid items-center">
                <h2 className="text-6xl text-center">{title}</h2>
                <p className="text-center">{text}</p>
            </div>
        );
    }

    const FactComponent = (title:string, imgSrc:string, alt:string, text:string, invert:boolean):React.ReactNode=>{

        return(
            <div className="w-85 md:w-175 xl:w-250 grid md:grid-cols-2 py-5 px-2 items-center">
                <div className={`${invert && "md:col-start-2"}`}>
                    <h1 className="mb-5 text-2xl md:text-4xl xl:text-5xl text-white bg-blue-600 rounded-xl py-3 md:py-5 text-center mx-auto">{title}</h1>
                    <p className="text-lg md:text-2xl xl:text-3xl p-4 rounded-lg innerShadow">{text}</p>
                </div>
                <img src={imgSrc} alt={alt} className={`h-50 mx-auto my-5 h-60 md:h-80 xl:h-100 ${invert && "md:col-start-1 md:row-start-1" }`}/>
            </div>
        );
    }

    return(
        <>
            <img src="/EducationIcon.jpg" alt="education icon" className="mx-auto my-10 h-40 w-40 md:h-60 md:w-60"/>
            <div className="py-5 my-5 grid gap-y-5 md:flex border-y-5 md:border-y-7 lg:border-y-9 border-blue-500 w-80 md:w-175 lg:w-225 xl:w-250 mx-auto justify-center md:justify-between">
                {HeaderComponent("92","Something about some fact")}
                {HeaderComponent("412","Something about some fact")}
                {HeaderComponent("24","Something about some fact")}
            </div>
            <div className="grid justify-center gap-y-10 py-5">
                {FactComponent("Business Impact","/PrivateBussinessIcon.png","1",`Donec nec nunc tempor,
                vehicula mi eget, varius nisi. Aliquam at nisi eleifend, commodo tellus eget, rutrum ligula.
                Donec nec nunc tempor, vehicula mi eget, varius nisi. Aliquam at nisi eleifend, commodo tellus 
                eget, rutrum ligula.`,false)}
                {FactComponent("Business Impact","/PrivateBussinessIcon.png","2",`Donec nec nunc tempor,
                vehicula mi eget, varius nisi. Aliquam at nisi eleifend, commodo tellus eget, rutrum ligula.
                Donec nec nunc tempor, vehicula mi eget, varius nisi. Aliquam at nisi eleifend, commodo tellus 
                eget, rutrum ligula.`,true)}
                {FactComponent("Business Impact","/PrivateBussinessIcon.png","1",`Donec nec nunc tempor,
                vehicula mi eget, varius nisi. Aliquam at nisi eleifend, commodo tellus eget, rutrum ligula.
                Donec nec nunc tempor, vehicula mi eget, varius nisi. Aliquam at nisi eleifend, commodo tellus 
                eget, rutrum ligula.`,false)}
                {FactComponent("Business Impact","/PrivateBussinessIcon.png","2",`Donec nec nunc tempor,
                vehicula mi eget, varius nisi. Aliquam at nisi eleifend, commodo tellus eget, rutrum ligula.
                Donec nec nunc tempor, vehicula mi eget, varius nisi. Aliquam at nisi eleifend, commodo tellus 
                eget, rutrum ligula.`,true)}
            </div>
        </>
    );
}

export default Education;