import dynamic from "next/dynamic";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import ClientLogoSlider from "../src/components/ClientLogoSlider";
import { HomeSlider1 } from "../src/components/HomeSlider";
import CustomerReviews from "../src/components/slider/CustomerReviews";
import PhotoGallery from "../src/components/slider/PhotoGallery";
import Layout from "../src/layout/Layout";
import { productActive } from "../src/sliderProps";

import HorizontalBars from "../src/components/BarChart";

import RecipeoftheDay from "../src/components/RecipeoftheDay";
import { categorydata } from "../src/data/categorydata";
import { useEffect, useState } from "react";
import axios from "axios";
const MunfimCountdown = dynamic(
  () => import("../src/components/MunfimCountdown"),
  {
    ssr: false,
  }
);
const Index = () => {
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://apis-new.foodoscope.com/recipe-search/regions?searchText=Indian%20Subcontinent&pageSize=4",
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
  return (
    <Layout header={1}>
      {/*End Hidden Sidebar */}
      {/* Slider Section Start */}
      <section className="slider-section bg-lighter">
        <div className="main-slider-active">
          <HomeSlider1 />
        </div>
        <img
          className="bg-leaf"
          src="assets/images/slider/slider-bg-leaf.png"
          alt="Shape"
        />
        <img
          className="bg-shape"
          src="assets/images/slider/slider-bg-shape.png"
          alt="Shape"
        />
      </section>
      {/* Slider Section End */}
      {/* Category Section Start */}
      <section className="category-section pt-130 rpt-100">
        <div className="container">
          <div className="row align-items-end pb-35">
            <div className="col-lg-7 wow fadeInUp delay-0-2s">
              <div className="section-title mb-20">
                <span className="sub-title mb-20">
                  Recipes Based On
                </span>
                <h2>Popular Ingredients: From Veggies to Meat!
                </h2>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp delay-0-4s">
              <div className="text mb-20">
                <p>
                  Enjoy a variety of simple yet delicious recipes featuring popular ingredients. From classic comfort foods to fresh vegetable dishes, these recipes are sure to please your palate without overwhelming your kitchen.
                </p>
              </div>
            </div>
          </div>
          <div className="category-wrap">
            {categorydata.map((item, i) => (
              <div
                className={`category-item wow fadeInUp delay-0-${i + 1}`}
                key={i}
              >
                <div className="icon">
                  <img src={item.url} alt="Icon" />
                </div>
                <h5>
                  <Link href={`/search-categories?category=${encodeURIComponent(item.title)}`}>{item.title}</Link>
                </h5>
                <img src="assets/images/category/arrow.png" alt="Arrow" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Category Section End */}
      {/* About Section Start */}
      <RecipeoftheDay/>
      {/* About Section End */}
      {/* Offer Banners Start */}
      <section className="offer-banners-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item color-two wow fadeInUp delay-0-2s">
                <div className="content">
                  <h4>Get Calories Count</h4>
                  <p>Get accurate Calories count for your food here</p>
                  <Link href="/check-calories">
                    <a className="theme-btn style-two">
                      Get count <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img
                    src="assets/images/offers/offer-banner1.png"
                    alt="Offer Banner"
                  />
                </div>
                <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg1.png"
                  alt="Offer BG"
                />
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item wow fadeInUp delay-0-4s">
                <div className="content">
                  <h4>What is best for you to Eat?</h4>
                  <p>Best Foods For Your Health</p>
                  <Link href="/personalized-result">
                    <a className="theme-btn style-two">
                      Search <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img
                    src="assets/images/offers/offer-banner2.png"
                    alt="Offer Banner"
                  />
                </div>
                <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg2.png"
                  alt="Offer BG"
                />
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item color-three wow fadeInUp delay-0-6s">
                <div className="content">
                  <h4>Check Nutrients</h4>
                  <p>How much macros does your food have? </p>
                  <Link href="/check-nutrients">
                    <a className="theme-btn style-two">
                      Check <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img
                    src="assets/images/offers/offer-banner3.png"
                    alt="Offer Banner"
                  />
                </div>
                <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg3.png"
                  alt="Offer BG"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Special Offer Start */}
       <section className="special-offer bg-lighter pb-80">
        <div className="special-offer-content text-center py-130 rpy-100 wow fadeInUp delay-0-2s">
          <div className="section-title mb-30">
            <span className="sub-title mb-20">Based On Your Location</span>
            <h2>Some of The Best Recipes To Try Out</h2>
          </div>
          <p>
            Here are some of the best recipes that you can try out based on your location. These recipes are sure to please your palate without overwhelming your kitchen.
          </p>
        </div>
        <img
          className="offer-bg"
          src="assets/images/offers/special-offer-bg.png"
          alt="Offer BG"
        />
        <img
          className="munakoiso"
          src="assets/images/shapes/munakoiso.png"
          alt="Munakoiso"
        />
        <img
          className="litchi"
          src="assets/images/shapes/litchi.png"
          alt="Litchi"
        />
        <img
          className="special-offer-left"
          src={data[0]?.img_url}
          alt="Offer"
        />
        <img
          className="special-offer-right"
          src={data[1]?.img_url}  
          alt="Offer"
        />
      </section>
      
      {/* Special Offer End */}
      {/* Call To Action Area Start */}
      <section className="cta-area">
        <div className="container">
          <div
            className="cta-inner overlay text-white wow fadeInUp delay-0-2s"
            style={{
              backgroundImage: "url(assets/images/background/cta-bg.jpg)",
            }}
          >
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="section-title mt-20 mb-15">
                  <span className="sub-title mb-15">Need Any Supports</span>
                  <h3>Get Our Quality Foods</h3>
                </div>
              </div>
              <div className="col-lg-4 text-lg-right">
                <Link href="/contact">
                  <a className="theme-btn btn-white my-15">
                    Get In Touch <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call To Action Area End */}
      {/* Gallery Area Start */}
      <section className="gallery-area pt-130 rpt-100">
        <PhotoGallery />
      </section>
      {/* Gallery Area End */}
      {/* Feedback Section Start */}
      <section className="feedback-section pt-50 rpt-20 pb-20">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-6">
              <CustomerReviews />
            </div>
            <div className="col-lg-6">
              <div className="feedback-images wow fadeInRight delay-0-2s">
                <img
                  className="first-image"
                  src="assets/images/reviews/feedback-right.jpg"
                  alt="Feedback"
                />
                <img
                  className="last-image"
                  src="assets/images/reviews/feedback-right.png"
                  alt="Feedback"
                />
                <img
                  className="bg-image"
                  src="assets/images/shapes/feedback-bg.png"
                  alt="Feedback"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feedback Section End */}
    </Layout>
  );
};
export default Index;