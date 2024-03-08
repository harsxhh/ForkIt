import Link from "next/link";
import React,{useEffect, useState} from "react";
import PageBanner from "../src/components/PageBanner";
import Pagination from "../src/components/Pagination";
import Layout from "../src/layout/Layout";
import axios from "axios";
import SingleCard from "../src/components/SingleCard";
const ShopGrid = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://apis-new.foodoscope.com/recipe-search/continents?searchText=Asian&region=Indian%20Subcontinent&pageSize=8",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer 5gtCRn6CMFkrTs6p2RSyfUcuD_-lSfTznLlnxSxdSZgsDnZk",
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
    console.log(e.target.value);
  };
  return (
    <Layout>
      <PageBanner pageName={"Do you want to make recipe? Check steps here..."} />
      <section className="shop-page rel z-1 pt-120 rpt-90 pb-130 rpb-100">
        <div className="flex items-center">
          <input
            type="text"
            onChange={handleChange}
            className="input-custom"
          />
          <button className="bg-blue-800 hover:bg-black-700 text-black font-bold py-2 px-4 ml-2 rounded">
            Search
          </button>
        </div>

        {/* <div className="container">
          <div className="row show-grid-row">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-2s">
                <span className="offer">53 Off</span>
                <div className="image">
                  <img
                    src="assets/images/products/product1.png"
                    alt="Product"
                  />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>
                    <Link href="/product-details">Organic Brocolli</Link>
                  </h5>
                  <span className="price">
                    <del>25</del>
                    <span>18</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="assets/images/products/product2.png"
                    alt="Product"
                  />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>
                    <Link href="/product-details">Fresh Carrots</Link>
                  </h5>
                  <span className="price">
                    <span>49.58</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-6s">
                <span className="offer bg-red">sale</span>
                <div className="image">
                  <img
                    src="assets/images/products/product3.png"
                    alt="Product"
                  />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>
                    <Link href="/product-details">Organic Brocolli</Link>
                  </h5>
                  <span className="price">
                    <del>25</del>
                    <span>18</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-8s">
                <div className="image">
                  <img
                    src="assets/images/products/product5.png"
                    alt="Product"
                  />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>
                    <Link href="/product-details">Fresh Gooseberry</Link>
                  </h5>
                  <span className="price">
                    <span>205</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-2s">
                <span className="offer">20 Off</span>
                <div className="image">
                  <img
                    src="assets/images/products/product4.png"
                    alt="Product"
                  />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>
                    <Link href="/product-details">Chiken Egg</Link>
                  </h5>
                  <span className="price">
                    <del>55</del>
                    <span>36</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-4s">
                <span className="offer">53 Off</span>
                <div className="image">
                  <img
                    src="assets/images/products/product6.png"
                    alt="Product"
                  />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>
                    <Link href="/product-details">Fresh Croissants</Link>
                  </h5>
                  <span className="price">
                    <del>25</del>
                    <span>18</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/products/product7.png"
                    alt="Product"
                  />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>
                    <Link href="/product-details">Chiken Egg’s</Link>
                  </h5>
                  <span className="price">
                    <span>205</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-8s">
                <div className="image">
                  <img
                    src="assets/images/products/product8.png"
                    alt="Product"
                  />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>
                    <Link href="/product-details">Oragic Orange</Link>
                  </h5>
                  <span className="price">
                    <span>85</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/products/product9.png"
                    alt="Product"
                  />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>
                    <Link href="/product-details">Fresh Croissants </Link>
                  </h5>
                  <span className="price">
                    <span>299</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-4s">
                <span className="offer">53 Off</span>
                <div className="image">
                  <img
                    src="assets/images/products/product10.png"
                    alt="Product"
                  />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>
                    <Link href="/product-details">Organic Brocolli</Link>
                  </h5>
                  <span className="price">
                    <del>25</del>
                    <span>18</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/products/product11.png"
                    alt="Product"
                  />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>
                    <Link href="/product-details">Fresh Carrots</Link>
                  </h5>
                  <span className="price">
                    <span>49.58</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-8s">
                <span className="offer bg-red">sale</span>
                <div className="image">
                  <img
                    src="assets/images/products/product12.png"
                    alt="Product"
                  />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>
                    <Link href="/product-details">Organic Brocolli</Link>
                  </h5>
                  <span className="price">
                    <del>25</del>
                    <span>18</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <ul className="pagination flex-wrap justify-content-center pt-10">
            <Pagination
              paginationCls={".show-grid-row .col-xl-3"}
              defaultSort={8}
            />
          </ul>
        </div> */}
        {data?.map((item)=>{
          return (<SingleCard item={item} />)
        })}
      </section>
    </Layout>
  );
};
export default ShopGrid;
