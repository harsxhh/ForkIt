import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/components/PageBanner";
import SingleCard3 from "../src/components/SingleCard3";

const CheckNutrient = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isData, setIsData] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://apis-new.foodoscope.com/recipe-search/continents?searchText=Australasian&region=Korean&pageSize=10",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer zO1dFVx7FYJl1cwctH1Tpf5jIsY3fEHR4_4PQiBzKFGtZjjJ",
            },
          }
        );

        if (response.status === 200) {
          setIsData(true);
          setSearchResults(response.data.payload.data);
        }
        const recipes = response.data.payload.data;
        setData(recipes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `https://apis-new.foodoscope.com/recipe-search/recipe?searchText=${searchText}&page=1&pageSize=20`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer zO1dFVx7FYJl1cwctH1Tpf5jIsY3fEHR4_4PQiBzKFGtZjjJ",
          },
        }
      );
      setIsData(true);
      setSearchResults(res.data.payload.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <section className="shop-page rel z-1 pt-120 rpt-90 pb-130 rpb-100">
      <div className="section-title text-center mb-60">
        <span className="sub-title mb-20">Use our varied filters &amp;</span>
        <h2>Search for your favourite recipe</h2>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          onChange={handleChange}
          className="input-custom"
          placeholder="Search for your favourite recipe..."
        />
        <button
          className="bg-blue-800 hover:bg-black-700 text-black font-bold py-2 px-4 ml-2 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="row m-4 mt-8 flex pt-20">
        {isData
          ? searchResults.map((item, index) => (
              <SingleCard3 key={index} item={item} />
            ))
          : data.map((item, index) => <SingleCard3 key={index} item={item} />)}
      </div>
    </section>
  );
};

export default CheckNutrient;
