import { Link, useLoaderData, useParams } from "react-router-dom";

const Service = () => {
    const {id} = useParams();
    const services = useLoaderData();
    const result = services.find(service => service.id==id);
    const title = result.title, desc = result.desc;
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img src="banner.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary"><Link to={'/'}>Back</Link></button>
                </div>
            </div>
            </div>
    );
};

export default Service;