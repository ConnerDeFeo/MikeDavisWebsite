const About = () => {
    const headerStyling = "text-4xl lg:text-5xl text-center mb-5 my-auto";
    const textStyling = "innerShadow h-35 mt-auto text-2xl lg:text-3xl p-2 lg:p-4 rounded-xl md:text-center";
    return (
        <div className="w-[80%] mx-auto">
            <div className="grid md:flex md:flex-row-reverse mx-auto md:w-150 lg:w-200 justify-center md:justify-between my-10 gap-y-10 items-center">
                <img src="Ruins.jpg" alt="mike davis" className="object-fit h-80 w-60 rounded-xl mx-auto md:mx-0"/>
                <p className="innerShadow text-2xl lg:text-3xl p-5 w-80 lg:w-125 rounded-xl">Donec nec nunc tempor,
                vehicula mi eget, varius nisi. Aliquam at nisi eleifend, commodo tellus eget, rutrum ligula.
                Donec nec nunc tempor, vehicula mi eget, varius nisi. Aliquam at nisi eleifend, commodo tellus 
                eget, rutrum ligula.</p>
            </div>
            <div className="border-y-4 border-cyan-500 grid md:grid-cols-2 mx-auto gap-y-10 py-5 justify-between gap-x-10">
                <div className="grid">
                    <h2 className={headerStyling}>Mission</h2>
                    <p className={textStyling}>Navigate Risk. Achor Resilience.</p>
                </div>
                <div className="grid">
                    <h2 className={headerStyling}>Consulting Approach</h2>
                    <p className={textStyling}>Customized support, real-world experience, and cross-sector expertise</p>      
                </div>

            </div>
        </div>
    );
};

export default About;