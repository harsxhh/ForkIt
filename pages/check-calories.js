import Link from "next/link";
import React,{useEffect, useState} from "react";
import PageBanner from "../src/components/PageBanner";
import Pagination from "../src/components/Pagination";
import Layout from "../src/layout/Layout";
import axios from "axios";
import SingleCard from "../src/components/SingleCard";
const ShopGrid = () => {
  const [data, setData] = useState();
  const [searchText, setSearchText] = useState("");
  const [isData, setIsData] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://apis-new.foodoscope.com/recipe-search/continents?searchText=Asian&region=Indian%20Subcontinent&pageSize=8",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer zO1dFVx7FYJl1cwctH1Tpf5jIsY3fEHR4_4PQiBzKFGtZjjJ",
            },
          }
        );
        setData(response?.data?.payload?.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  const handleChange = (e) => {
    setSearchText(e.target.value);

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
          <button className="bg-blue-800 hover:bg-black-700 text-black font-bold py-2 px-4 ml-2 rounded" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="row m-4 mt-8 flex pt-20">
        {isData
          ? searchResults?.map((item, index) => (
              <SingleCard key={index} item={item} />
            ))
          : data?.map((item, index) => <SingleCard key={index} item={item} />)}
        </div>
      </section>
    </Layout>
  );
};
export default ShopGrid;
