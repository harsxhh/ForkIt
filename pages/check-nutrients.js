// ShopGrid.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/components/PageBanner";
import SingleCard2 from "../src/components/SingleCard2";

const ShopGrid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://apis-new.foodoscope.com/recipe-search/continents?searchText=Australasian&region=Korean&pageSize=10",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer wHryH3u0LFQSITRkZ8SGjmvO4wmjdrFrVdXw7jGOmRRXtp5S",
            },
          }
        );

        const recipes = response.data.payload.data;
        setData(recipes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <Layout>
      <PageBanner pageName={"Do you want to check calories? Check here..."} />
      <section className="shop-page rel z-1 pt-120 rpt-90 pb-130 rpb-100">
        <div className="flex items-center">
          <input
            type="text"
            onChange={handleChange}
            className="input-custom"
            placeholder="Search for your favourite recipe..."
          />
          <button className="bg-blue-800 hover:bg-black-700 text-black font-bold py-2 px-4 ml-2 rounded">
            Search
          </button>
        </div>
        <div className="row m-4 mt-8 flex pt-20">
          {data.map((item, index) => {
            return <SingleCard2 key={index} item={item} />;
          })}
        </div>
      </section>
    </Layout>
  );
};

export default ShopGrid;
