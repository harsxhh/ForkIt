'use client';
import React,{useState} from "react";
import NutrientModal from "../components/NutrientModal";
const SingleCard3 = ({ item, index }) => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click); 
    };
    return (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div className="card h-100 border-0 shadow" style={{ transition: "transform 0.3s ease-in-out", ":hover": { transform: "translateY(-5px)" } }}>
                    <img src={item?.img_url} className="card-img-top img-fluid" alt="Recipe" style={{ height: "200px", objectFit: "cover" }} />
                    <div className="card-body d-flex flex-column justify-content-between">
                        <div>
                            <h5 className="card-title">{item?.Recipe_title.split(" ")[0]}</h5>
                        </div>
                        <div className="mt-4">
                        <button className="btn btn-primary" onClick={handleClick}>View Nutrients</button>
                        {click && <NutrientModal data={item} onClose={() => setClick(false)} />}
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default SingleCard3;
