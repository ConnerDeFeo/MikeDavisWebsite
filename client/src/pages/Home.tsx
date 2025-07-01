import { useNavigate } from "react-router-dom";

//Base page for the website
const Home = () => {
    const imageStyling = "h-50 w-50 object-cover rounded-xl mx-auto";
    const titleStyling = "text-2xl text-center font-bold my-3 text-blue-800";
    const paragraphStyling = "text-center text-lg";
    const navigate = useNavigate();

    //Each of the three differnt sectors on the home page
    const InformationComponent = (imageSrc: string, title: string, paragraph: string, onClick:()=>void):React.ReactNode => {
        return (
            <div className="w-[60%] mx-auto sectionLink cursor-pointer" onClick={onClick}>
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
            <div className="border-y-5 border-blue-[800] mt-10 w-[80%] mx-auto">
                <div className="grid gap-y-10 lg:flex mx-auto my-15 justify-center lg:justify-between lg:gap-x-10 h-full">
                    {InformationComponent(
                        "/PrivateOrgsHomePage.jpg",
                        "Private Organizations",
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus 
                        consequat lacinia. Aenean sit amet Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Nullam tempus consequat lacinia. Aenean sit amet `,
                        ()=>navigate("/PrivateOrginizations")
                    )}
                    {InformationComponent(
                        "/HealthcareHomePage.jpg",
                        "Healthcare Organizations",
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam tempus consequat lacinia. Aenean sit amet c
                        adipiscing elit. Nullam tempus consequat lacinia. Aenean sit amet `,
                        ()=>navigate("/HealthCareOrginizations")
                    )}
                    {InformationComponent(
                        "/EducationHomePage.jpg",
                        "Education Organizations",
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam tempus consequat lacinia. Aenean sit amet c
                        adipiscing elit. Nullam tempus consequat lacinia. Aenean sit amet `,
                        ()=>navigate("/Education")
                    )}
                </div>
            </div>
        </>
    );
};

export default Home;