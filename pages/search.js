import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

function Search() {
    const router = useRouter();
    const { query } = router;
    const { category } = query;
    const [recipes, setRecipes] = React.useState();
    useEffect(() => {
        if (category) {
            fetchData(category);
        }
    }, [category]);

    const fetchData = async (category) => {
        const apiUrl = `https://apis-new.foodoscope.com/recipe-search/categories?searchText=${category}&pageSize=20`;
        const apiKey = '5gtCRn6CMFkrTs6p2RSyfUcuD_-lSfTznLlnxSxdSZgsDnZk';

        try {
            const res = await axios.get(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                }
            });
            console.log(res.data.payload.data);
            setRecipes(res.data.payload.data);
        } catch (error) {
            console.error('Error fetching recipe:', error);
        }
    };
    return (
        <div>
            <section className="what-we-provide-two rel z-1 pt-65 rpt-100 pb-115 rpb-55">
                <div className="container">
                    <div className="section-title text-center mb-60">
                        <span className="sub-title mb-20">Use our varied filters &amp;</span>
                        <h2>Search for your favourite recipe</h2>
                    </div>
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-5 col-md-4">
                            <div className="what-we-provide-right">
                                <form action="#" className="search-form">
                                    <input type="text" placeholder="Enter dish name" />
                                    <button type="submit">
                                        <i className="flaticon-search"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* design cards as per search filters to be displayed */}
                    <div className="row" style={{ paddingTop: "20px" }}>
                        {recipes && recipes?.map((recipe, index) => (
                            (recipe?.wikiimage||recipe?.wikiimage==="NF") && (
                                <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                    <div className="card h-100 border-0 shadow" style={{ transition: "transform 0.3s ease-in-out", ":hover": { transform: "translateY(-5px)" } }}>
                                        <img src={recipe?.wikiimage} className="card-img-top img-fluid" alt="Recipe" style={{ height: "200px", objectFit: "cover" }} />
                                        <div className="card-body d-flex flex-column justify-content-between">
                                            <div>
                                                <h5 className="card-title">{recipe?.generic_name}</h5>
                                            </div>
                                            <div className="mt-4">
                                                <button className="btn btn-primary">View Recipe</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Search;
