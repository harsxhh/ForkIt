import Link from "next/link";
import ClientLogoSlider from "../src/components/ClientLogoSlider";
import PageBanner from "../src/components/PageBanner";
import CustomerReviews from "../src/components/slider/CustomerReviews";
import Layout from "../src/layout/Layout";
const ServiceDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Learn about what you eat"} />
      <section className="service-details-page rel z-1 pt-65 rpt-35 pb-130 rpb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mt-100">
              <div className="service-details-content">
                <div className="image wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/services/vitamins.png"
                    alt="Service"
                  />
                </div>
                <h3>Vitamins</h3>
                <p>
                Vitamins are organic substances present in minute amounts in natural foodstuffs. Having too little of any particular vitamin may increase the risk of developing certain health issues.

                A vitamin is an organic compound, which means that it contains carbon. It is also an essential nutrient that the body may need to get from food.

                There are currently 13 recognized vitamins.



                </p>
                <div className="row py-20">
                  <div className="col-lg-3 col-sm-6">
                    <div className="about-feature-two style-two wow fadeInUp delay-0-2s">
                      <div className="icon">
                        <i className="flaticon-wheat-sack" />
                      </div>
                      <h4>
                        <a href="https://www.hsph.harvard.edu/nutritionsource/vitamin-a/"
                          target="_blank"
                        >
                          Vitamin A
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="about-feature-two style-two wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <i className="flaticon-fruits" />
                      </div>
                      <h4>
                        
                          <a href="https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/#:~:text=Vitamin%20D%20(also%20referred%20to,and%20trigger%20vitamin%20D%20synthesis."
                            target="_blank"
                          >
                            {" "}
                            Vitamin D
                          </a>
                        
                      </h4>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="about-feature-two style-two wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="flaticon-eggs-1" />
                      </div>
                      <h4>
                        
                          <a href="https://www.hsph.harvard.edu/nutritionsource/vitamin-e/#:~:text=Vitamin%20E%20is%20a%20fat,%E2%80%9D%E2%80%94that%20can%20damage%20cells."
                            target="_blank"
                          >
                            {" "}
                            Vitamin E
                          </a>
                        
                      </h4>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="about-feature-two style-two wow fadeInUp delay-0-5s">
                      <div className="icon">
                        <i className="flaticon-return-box" />
                      </div>
                      <h4>
                        
                          <a href="https://www.hsph.harvard.edu/nutritionsource/vitamin-k/"
                            target="_blank"
                          >
                            {" "}
                            Vitamin K
                          </a>
                        
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="container mt-5">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="mb-4">Healthy Foods to Fulfill Vitamin Deficiencies</h2>
                    <p>
                      Explore a variety of nutrient-rich foods that can help fulfill vitamin deficiencies and promote overall well-being.
                    </p>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <img
                        src="https://www.maxirich.com/blogs/wp-content/uploads/2022/04/Blog_721apr2022.jpg"
                        alt="Vitamin C Rich Food"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Citrus Fruits</h5>
                        <p className="card-text">
                          Citrus fruits like oranges, lemons, and grapefruits are rich in vitamin C, which supports immune health.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <img
                        src="https://img.paisawapas.com/ovz3vew9pw/2022/11/02113841/Untitled-1.jpg"
                        alt="Vitamin D Rich Food"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Fatty Fish</h5>
                        <p className="card-text">
                          Fatty fish such as salmon and mackerel are excellent sources of vitamin D, crucial for bone health.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <img
                        src="https://imgeng.jagran.com/images/2023/may/foods-rich-in-votamin-a1684215141670.jpg"
                        alt="Vitamin A Rich Food"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Carrots</h5>
                        <p className="card-text">
                          Carrots are packed with beta-carotene, a precursor to vitamin A, important for vision and skin health.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          


              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-8">
              <div className="service-sidebar mt-65">
                {/* <div className="widget widget-search wow fadeInUp delay-0-2s">
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <input
                      type="text"
                      placeholder="Service Category"
                      required=""
                    />
                    <button
                      type="submit"
                      className="searchbutton fa fa-search"
                    />
                  </form>
                </div> */}
                
                <div className="widget widget-cta wow fadeInUp delay-0-2s">
                  <div className="cta-widget-content text-white">
                    <span className="sub-title my-10">Contact Us</span>
                    <h2>Need any Helps</h2>
                    <img src="assets/images/shapes/wave-white.png" alt="Wave" />
                    <br />
                    <Link href="/contact">
                      <a className="theme-btn style-three bg-white mt-30">
                        Contact Us <i className="fas fa-angle-double-right" />
                      </a>
                    </Link>
                    <img
                      className="bg"
                      src="assets/images/widgets/cta-widget.png"
                      alt="Flower"
                    />
                  </div>
                </div>
                {/* <div className="widget widget-btns wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Download Now</h4>
                  <Link href="/contact">
                    <a className="theme-btn mb-10">
                      Download Pdf <i className="far fa-file-pdf" />
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="theme-btn style-two">
                      Download Doc <i className="far fa-file-word" />
                    </a>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-details-page rel z-1 pt-65 rpt-35 pb-130 rpb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 mt-0">
              <div className="service-details-content">
                <div className="image wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/services/pngegg.png"
                    alt="Service"
                  />
                </div>
                <h3>Minerals</h3>
                <p>
                Did you know that the strength of your bones, the rhythm of your heart, and even the production of hormones depend on tiny but mighty elements called minerals? Get ready to explore the fascinating functions of minerals and how they contribute to a healthy body.



                </p>
                <div className="row py-20">
                  <div className="col-lg-3 col-sm-6">
                    <div className="about-feature-two style-two wow fadeInUp delay-0-2s">
                      <div className="icon">
                        <i className="flaticon-wheat-sack" />
                      </div>
                      <h4>
                        <a href="https://www.webmd.com/diet/foods-high-in-calcium"
                          target="_blank"
                        >
                          Calcium
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="about-feature-two style-two wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <i className="flaticon-fruits" />
                      </div>
                      <h4>
                        
                          <a href="https://www.healthlinkbc.ca/healthy-eating-physical-activity/food-and-nutrition/nutrients/iron-foods"
                            target="_blank"
                          >
                            {" "}
                            Iron
                          </a>
                        
                      </h4>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="about-feature-two style-two wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="flaticon-eggs-1" />
                      </div>
                      <h4>
                        
                          <a href="https://www.healthline.com/nutrition/10-foods-high-in-magnesium#avocados"
                            target="_blank"
                          >
                            {" "}
                            Magnesium
                          </a>
                        
                      </h4>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="about-feature-two style-two wow fadeInUp delay-0-5s">
                      <div className="icon">
                        <i className="flaticon-return-box" />
                      </div>
                      <h4>
                        
                          <a href="https://www.hsph.harvard.edu/nutritionsource/potassium/"
                            target="_blank"
                          >
                            {" "}
                            Potassium
                          </a>
                        
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h2 className="mb-4">Foods High in Minerals</h2>
          <p>
            Explore a variety of nutrient-rich foods that are high in minerals such as iron, calcium, and magnesium.
          </p>
        </div>
      </div>

      <div className="row mt-4">
        {/* Iron-Rich Food */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://www.dietitianpriyanka.com/wp-content/uploads/2022/11/Top-Iron-Rich-Food-For-Weight-Loss.jpg"
              alt="Iron-Rich Food"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Spinach</h5>
              <p className="card-text">
                Spinach is a great source of iron, essential for the production of red blood cells.
              </p>
            </div>
          </div>
        </div>

        {/* Calcium-Rich Food */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://wellcurve.in/blog/wp-content/uploads/2021/10/calcium-rich-foods.jpg"
              alt="Calcium-Rich Food"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Milk and Dairy</h5>
              <p className="card-text">
                Milk and dairy products are rich in calcium, crucial for bone health and muscle function.
              </p>
            </div>
          </div>
        </div>

        {/* Magnesium-Rich Food */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://domf5oio6qrcr.cloudfront.net/medialibrary/14228/f30cdb39-6809-4e7e-b759-97d97594ec26.jpg"
              alt="Magnesium-Rich Food"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Almonds</h5>
              <p className="card-text">
                Almonds are a good source of magnesium, important for nerve and muscle function.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
              </div>
            </div>
            {/* <div className="col-xl-4 col-lg-6 col-md-8">
              <div className="service-sidebar mt-65">
                <div className="widget widget-search wow fadeInUp delay-0-2s">
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <input
                      type="text"
                      placeholder="Service Category"
                      required=""
                    />
                    <button
                      type="submit"
                      className="searchbutton fa fa-search"
                    />
                  </form>
                </div>
                
                <div className="widget widget-cta wow fadeInUp delay-0-2s">
                  <div className="cta-widget-content text-white">
                    <span className="sub-title my-10">Contact Us</span>
                    <h2>Need any Helps</h2>
                    <img src="assets/images/shapes/wave-white.png" alt="Wave" />
                    <br />
                    <Link href="/contact">
                      <a className="theme-btn style-three bg-white mt-30">
                        Contact Us <i className="fas fa-angle-double-right" />
                      </a>
                    </Link>
                    <img
                      className="bg"
                      src="assets/images/widgets/cta-widget.png"
                      alt="Flower"
                    />
                  </div>
                </div>
                <div className="widget widget-btns wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Download Now</h4>
                  <Link href="/contact">
                    <a className="theme-btn mb-10">
                      Download Pdf <i className="far fa-file-pdf" />
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="theme-btn style-two">
                      Download Doc <i className="far fa-file-word" />
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* Service Details Section End */}
      {/* Video Area Start */}
      
    </Layout>
  );
};
export default ServiceDetails;






// <section className="service-details-page rel z-1 pt-65 rpt-35 pb-130 rpb-100">
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-8 mt-100">
//               <div className="service-details-content">
//                 <div className="image wow fadeInUp delay-0-2s">
//                   <img
//                     src="assets/images/services/vitamins.png"
//                     alt="Service"
//                   />
//                 </div>
//                 <h3>Vitamins</h3>
//                 <p>
//                 Vitamins are organic substances present in minute amounts in natural foodstuffs. Having too little of any particular vitamin may increase the risk of developing certain health issues.

//                 A vitamin is an organic compound, which means that it contains carbon. It is also an essential nutrient that the body may need to get from food.

//                 There are currently 13 recognized vitamins.



//                 </p>
//                 <div className="row py-20">
//                   <div className="col-lg-3 col-sm-6">
//                     <div className="about-feature-two style-two wow fadeInUp delay-0-2s">
//                       <div className="icon">
//                         <i className="flaticon-wheat-sack" />
//                       </div>
//                       <h4>
//                         <a href="https://www.hsph.harvard.edu/nutritionsource/vitamin-a/"
//                           target="_blank"
//                         >
//                           Vitamin A
//                         </a>
//                       </h4>
//                     </div>
//                   </div>
//                   <div className="col-lg-3 col-sm-6">
//                     <div className="about-feature-two style-two wow fadeInUp delay-0-3s">
//                       <div className="icon">
//                         <i className="flaticon-fruits" />
//                       </div>
//                       <h4>
                        
//                           <a href="https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/#:~:text=Vitamin%20D%20(also%20referred%20to,and%20trigger%20vitamin%20D%20synthesis."
//                             target="_blank"
//                           >
//                             {" "}
//                             Vitamin D
//                           </a>
                        
//                       </h4>
//                     </div>
//                   </div>
//                   <div className="col-lg-3 col-sm-6">
//                     <div className="about-feature-two style-two wow fadeInUp delay-0-4s">
//                       <div className="icon">
//                         <i className="flaticon-eggs-1" />
//                       </div>
//                       <h4>
                        
//                           <a href="https://www.hsph.harvard.edu/nutritionsource/vitamin-e/#:~:text=Vitamin%20E%20is%20a%20fat,%E2%80%9D%E2%80%94that%20can%20damage%20cells."
//                             target="_blank"
//                           >
//                             {" "}
//                             Vitamin E
//                           </a>
                        
//                       </h4>
//                     </div>
//                   </div>
//                   <div className="col-lg-3 col-sm-6">
//                     <div className="about-feature-two style-two wow fadeInUp delay-0-5s">
//                       <div className="icon">
//                         <i className="flaticon-return-box" />
//                       </div>
//                       <h4>
                        
//                           <a href="https://www.hsph.harvard.edu/nutritionsource/vitamin-k/"
//                             target="_blank"
//                           >
//                             {" "}
//                             Vitamin K
//                           </a>
                        
//                       </h4>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="container mt-5">
//                 <div className="row">
//                   <div className="col-md-12">
//                     <h2 className="mb-4">Healthy Foods to Fulfill Vitamin Deficiencies</h2>
//                     <p>
//                       Explore a variety of nutrient-rich foods that can help fulfill vitamin deficiencies and promote overall well-being.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="row mt-4">
//                   <div className="col-md-4 mb-4">
//                     <div className="card">
//                       <img
//                         src="https://www.maxirich.com/blogs/wp-content/uploads/2022/04/Blog_721apr2022.jpg"
//                         alt="Vitamin C Rich Food"
//                         className="card-img-top"
//                       />
//                       <div className="card-body">
//                         <h5 className="card-title">Citrus Fruits</h5>
//                         <p className="card-text">
//                           Citrus fruits like oranges, lemons, and grapefruits are rich in vitamin C, which supports immune health.
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-md-4 mb-4">
//                     <div className="card">
//                       <img
//                         src="https://img.paisawapas.com/ovz3vew9pw/2022/11/02113841/Untitled-1.jpg"
//                         alt="Vitamin D Rich Food"
//                         className="card-img-top"
//                       />
//                       <div className="card-body">
//                         <h5 className="card-title">Fatty Fish</h5>
//                         <p className="card-text">
//                           Fatty fish such as salmon and mackerel are excellent sources of vitamin D, crucial for bone health.
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-md-4 mb-4">
//                     <div className="card">
//                       <img
//                         src="https://imgeng.jagran.com/images/2023/may/foods-rich-in-votamin-a1684215141670.jpg"
//                         alt="Vitamin A Rich Food"
//                         className="card-img-top"
//                       />
//                       <div className="card-body">
//                         <h5 className="card-title">Carrots</h5>
//                         <p className="card-text">
//                           Carrots are packed with beta-carotene, a precursor to vitamin A, important for vision and skin health.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

          


//               </div>
//             </div>
//             <div className="col-xl-4 col-lg-6 col-md-8">
//               <div className="service-sidebar mt-65">
//                 <div className="widget widget-search wow fadeInUp delay-0-2s">
//                   <form onSubmit={(e) => e.preventDefault()} action="#">
//                     <input
//                       type="text"
//                       placeholder="Service Category"
//                       required=""
//                     />
//                     <button
//                       type="submit"
//                       className="searchbutton fa fa-search"
//                     />
//                   </form>
//                 </div>
                
//                 <div className="widget widget-cta wow fadeInUp delay-0-2s">
//                   <div className="cta-widget-content text-white">
//                     <span className="sub-title my-10">Contact Us</span>
//                     <h2>Need any Helps</h2>
//                     <img src="assets/images/shapes/wave-white.png" alt="Wave" />
//                     <br />
//                     <Link href="/contact">
//                       <a className="theme-btn style-three bg-white mt-30">
//                         Contact Us <i className="fas fa-angle-double-right" />
//                       </a>
//                     </Link>
//                     <img
//                       className="bg"
//                       src="assets/images/widgets/cta-widget.png"
//                       alt="Flower"
//                     />
//                   </div>
//                 </div>
//                 {/* <div className="widget widget-btns wow fadeInUp delay-0-2s">
//                   <h4 className="widget-title">Download Now</h4>
//                   <Link href="/contact">
//                     <a className="theme-btn mb-10">
//                       Download Pdf <i className="far fa-file-pdf" />
//                     </a>
//                   </Link>
//                   <Link href="/contact">
//                     <a className="theme-btn style-two">
//                       Download Doc <i className="far fa-file-word" />
//                     </a>
//                   </Link>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>