import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ServiceCard = ({service}) => {
    const {id, title} = service;
    return (
        <div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img src="banner.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions justify-end">
                <button className="btn btn-primary"><Link to={`/service/${id}`}>Details</Link></button>
                </div>
            </div>
            </div>
        </div>
    );
};

// ServiceCard.propTypes ={
//     service: PropTypes.node
// };
export default ServiceCard;