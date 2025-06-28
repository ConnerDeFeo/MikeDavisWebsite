const Home = () => {
    const imageStyling = "h-50 w-50 object-cover rounded-xl mx-auto";
    const titleStyling = "text-2xl text-center font-bold my-3 text-blue-800";
    const paragraphStyling = "text-center text-lg";

    const InformationComponent = (imageSrc: string, title: string, paragraph: string) => {
        return (
            <div>
                <img src={imageSrc} alt={title} className={imageStyling} />
                <h2 className={titleStyling}>{title}</h2>
                <p className={paragraphStyling}>{paragraph}</p>
            </div>
        );
    };
    return (
        <>
            <div
                className="relative w-full h-150 flex items-center justify-center bg-cover bg-center grid text-center text-white"
                style={{
                    backgroundImage: `url(/Ruins.jpg)`,
                }}
            >
                <h1 className="text-4xl md:text-6xl font-bold mt-50">Davis Emergency Solutions</h1>
                <p className="text-2xl md:text-4xl">Navigating Risk, Anchoring Resilience</p>
            </div>
            <div>
                <div className="grid gap-y-10 md:flex h-3 w-[80%] mx-auto mt-15 justify-center md:justify-between items-center h-100">
                    {InformationComponent(
                        "/PrivateOrgsHomePage.jpg",
                        "Private Organizations",
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus 
                        consequat lacinia. Aenean sit amet Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Nullam tempus consequat lacinia. Aenean sit amet `
                    )}
                    {InformationComponent(
                        "/HealthcareHomePage.jpg",
                        "Healthcare Organizations",
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam tempus consequat lacinia. Aenean sit amet c
                        adipiscing elit. Nullam tempus consequat lacinia. Aenean sit amet `
                    )}
                    {InformationComponent(
                        "/EducationHomePage.jpg",
                        "Education Organizations",
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam tempus consequat lacinia. Aenean sit amet c
                        adipiscing elit. Nullam tempus consequat lacinia. Aenean sit amet `
                    )}
                </div>
            </div>
        </>
    );
};

export default Home;