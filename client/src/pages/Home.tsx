const Home = () => {
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
                <div className="border-y-6 border-blue-800 h-3 w-[80%] mx-auto mt-15 flex justify-between items-center h-100">
                    <div className="border">
                        <img src="/PrivateOrgsHomePage.jpg"/>
                    </div>
                    <div className="border">
                        <img src="/HealthcareHomePage.jpg"/>
                    </div>
                    <div className="border">
                        <img src="/EducationHomePage.jpg"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;