'use client';
import React from "react";

const Personalized3 = ({ item, index }) => {
    return (
            <div className="mb-4" key={index}>
                <div className="card h-100 border-0 shadow" style={{ transition: "transform 0.3s ease-in-out", ":hover": { transform: "translateY(-5px)" } }}>
                    <img src={item?.img_url} className="card-img-top img-fluid" alt="Recipe" style={{ height: "200px", objectFit: "cover" }} />
                    <div className="card-body d-flex flex-column justify-content-between">
                        <div>
                            <h5 className="card-title">{item?.Recipe_title.split(" ")[0]}</h5>
                        </div>
                        <div className="recipe-details">
                            <h3>{item?.Recipe_title}</h3>
                            <p>Calories: {item?.Calories}</p>
                            <p>Energy: {item['Energy (kcal)']}</p>
                            <p>Cooking Time: {item?.cook_time}</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Personalized3;
