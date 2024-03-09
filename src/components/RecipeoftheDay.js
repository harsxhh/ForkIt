import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import dynamic from "next/dynamic";

const MunfimCountdown = dynamic(
    () => import("../components/MunfimCountdown"),
    {
        ssr: false,
    }
);
function RecipeoftheDay() {
    const [recipe, setRecipe] = React.useState({});
    React.useEffect(() => {
        const fetchData = async () => {
            const apiUrl = 'https://apis-new.foodoscope.com/recipe/recipeOftheDay';
            const apiKey = 'zO1dFVx7FYJl1cwctH1Tpf5jIsY3fEHR4_4PQiBzKFGtZjjJ';

            try {
                const res = await axios.get(apiUrl, {
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'Content-Type': 'application/json',
                    }
                });
                setRecipe(res.data.payload);
                console.log(res.data.payload);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };

        fetchData();

    }, []);
    return (
        <section className="what-we-provide-two rel z-1 pt-60 rpt-100 pb-115 rpb-55">
            <div className="container">
                <div className="section-title text-center mb-60">
                    <span className="sub-title mb-20">Recipe of the Day</span>
                    <h2>{recipe?.Recipe_title}</h2>
                </div>
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-3 col-md-4">
                        <div className="what-we-provide-left wow fadeInUp delay-0-2s">
                            <div className="ww-provide-item ">
                                <div className="icon recipieleft" style={{ width: "30%", height: "30%" }}>
                                    <img src="assets/images/services/icon1.png" alt="Icon" />
                                </div>
                                <h4>
                                    <Link href="/service-details">Calories</Link>
                                </h4>
                                <p>{recipe?.Calories} kCal</p>
                            </div>
                            <div className="ww-provide-item recipieleft">
                                <div className="icon recipieleft" style={{ width: "30%", height: "30%", textAlign: "right" }}>
                                    <img src="assets/images/services/icon2.png" alt="Icon" style={{ marginLeft: "auto" }} />
                                </div>
                                <h4>
                                    <Link href="/service-details">Region</Link>
                                </h4>
                                <p>{recipe?.Region} ({recipe?.Sub_region})</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-md-4">
                        <div className="what-we-provide-images rmt-10 rmb-55 pr-0 wow fadeInUp delay-0-4s">
                            <img
                                src={recipe?.img_url}
                                alt="Service"
                                style={{ borderRadius: "20px" }}
                            />
                            <img
                                className="bg"
                                src="assets/images/services/service-center-bg.png"
                                alt="Backgroound"
                            />
                        </div>
                        <MunfimCountdown />
                    </div>
                    <div className="col-xl-3 col-md-4">
                        <div className="what-we-provide-right wow fadeInUp delay-0-6s">
                            <div className="ww-provide-item">
                                <div className="icon" style={{ width: "30%", height: "30%" }}>
                                    <img src="assets/images/services/icon3.png" alt="Icon" />
                                </div>
                                <h4>
                                    <Link href="/service-details">Servings</Link>
                                </h4>
                                <p>{recipe?.servings} servings</p>
                            </div>
                            <div className="ww-provide-item">
                                <div className="icon" style={{ width: "30%", height: "30%" }}>
                                    <img src="assets/images/services/icon4.png" alt="Icon" />
                                </div>
                                <h4>
                                    <Link href="/service-details">Prep Time</Link>
                                </h4>
                                <p>{recipe?.total_time} minutes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ww-provide-shapes">
                <img
                    className="shape-two"
                    src="assets/images/shapes/ww-provide2.png"
                    alt="Shape"
                />
                <img
                    className="shape-three"
                    src="assets/images/shapes/ww-provide3.png"
                    alt="Shape"
                />
            </div>
        </section>
    );
}

export default RecipeoftheDay;