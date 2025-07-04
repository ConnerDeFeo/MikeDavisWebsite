import { useNavigate } from "react-router-dom";

const Services = () => {
    const navigate = useNavigate();
    const imageLink = (imgSrc:string, alt:string, title:string, navTo:string)=>{
        return(
            <div 
                className="relative border-3 border-cyan-500 w-70 sm:w-90 md:w-120 lg:w-150 mx-auto cursor-pointer sectionLink" 
                onClick={()=>navigate(navTo)}
            >
                <img src={imgSrc} alt={alt} className="opacity-70"/>
                <p className="absolute text-4xl lg:text-5xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">{title}</p>
            </div>
        );
    }
    return (
        <div className="grid justify-center gap-y-10">
            <a href="" className="text-3xl sm:text-4xl mt-10 underline text-center">Download Our Flyer!</a>
            {imageLink("/default.jpg", "default", "Private Orgizations","/PrivateOrginizations")}
            {imageLink("/default.jpg", "default", "HealthCare","/HealthCare")}
            {imageLink("/default.jpg", "default", "Education","/Education")}
        </div>
    );
};

export default Services;