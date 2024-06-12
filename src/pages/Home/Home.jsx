import { useLoaderData } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import ServiceCard from "./ServiceCard";

const Home = () => {
    const services = useLoaderData();
    // console.log(service);
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-row content-center font-poppins ">
                <img src="banner.jpg" className="w-3/5 border-2"></img> 
                <div className="border-4 content-center space-y-3 w-2/5">
                    <h2 className="text-5xl font-semibold">The Online <br></br>UX Hackathon</h2>
                    <h2 className="text-xl font-semibold">February 13, 2025 – February 14, 2025</h2>
                    <p>Test your rapid prototyping and design thinking skills! Push the limits of your mind to make something amazing.</p>
                    <button className="btn bg-violet-700 text-white">Register</button>
                </div>
            </div>
            <div className="grid grid-cols-3 space-y-4">
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Home;