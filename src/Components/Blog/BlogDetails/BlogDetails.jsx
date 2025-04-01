import React from "react";

import "./BlogDetails.css";

import blogdetail1 from "../../../Assets/Blog/blogdetail1.avif";
import blogimage1 from "../../../Assets/Blog/blogdetail2.avif";
import blogimage2 from "../../../Assets/Blog/blogdetail3.avif";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

const BlogDetails = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="blogDetailsSection">
        <div className="blogDetailsSectionContainer">
          <div className="blogDetailsHeading">
            <h2>5 Proven Strategies to Elevate Your Fast Food Business</h2>
            <div className="blogDetailsMetaData">
              <span>by admin</span>
              <span>May 19, 2023</span>
              <span>Trends</span>
            </div>
          </div>
          <div className="blogDetailsFeaturedImg">
            <img src={blogdetail1} alt="" />
          </div>
          <div className="blogDetailsContent">
            <p>
              The fast food industry is all about speed, convenience, and quality. To
              succeed, businesses must focus on delivering exceptional service, maintaining
              food quality, and staying ahead of market trends. Here are five strategies to
              help you take your fast food business to the next level.
            </p>
            <h5>Enhance Customer Experience</h5>
            <p>
              A positive customer experience is crucial for repeat business. Train your
              staff to be friendly and efficient, ensure cleanliness in your outlets, and
              provide a seamless ordering process both in-store and online.
            </p>
            <div className="blogDetailsContentBullets">
              <div className="blogDetailsContentBulletscontent">
                <h5>Why Customers Love Fast Food</h5>
                <p>
                  <ul>
                    <li>Quick and convenient meals</li>
                    <li>Affordable pricing for quality food</li>
                    <li>Wide variety of menu options</li>
                  </ul>
                </p>
              </div>
              <div className="blogDetailsContentBulletscontent">
                <h5>Steps to Stand Out in the Market</h5>
                <p>
                  <ol>
                    <li>Introduce unique menu items to attract attention</li>
                    <li>Leverage technology for faster service and delivery</li>
                    <li>Engage with customers through loyalty programs and promotions</li>
                  </ol>
                </p>
              </div>
            </div>
            <p>
              By focusing on these strategies, you can build a strong brand presence and
              foster customer loyalty. Remember, innovation and consistency are the keys to
              long-term success in the fast food industry.
            </p>
          </div>
          <div className="blogDetailsContentImg">
            <img src={blogimage1} alt="" />
            <img src={blogimage2} alt="" />
          </div>
          <div className="blogDetailsContent">
            <p>
              The fast food industry is all about speed, convenience, and quality. To
              succeed, businesses must focus on delivering exceptional service, maintaining
              food quality, and staying ahead of market trends. Here are five strategies to
              help you take your fast food business to the next level.
            </p>
            <p>
              By focusing on these strategies, you can build a strong brand presence and
              foster customer loyalty. Remember, innovation and consistency are the keys to
              long-term success in the fast food industry.
            </p>
          </div>
          <div className="share-buttons">
            <button className="share-button facebook">
              <FaFacebookF /> Share on Facebook
            </button>
            <button className="share-button twitter">
              <FaXTwitter />
              Share on Twitter
            </button>
            <button className="share-button pinterest">
              <FaPinterest /> Share on Pinterest
            </button>
            <button className="share-button more">
              <FaPlus size={20} />
            </button>
          </div>
          <div className="blogDetailsNextPrev">
            <div className="blogDetailsNextPrevContainer">
              <div
                className="blogDetailsNextPrevContainerIcon"
                onClick={scrollToTop}
              >
                <GoChevronLeft size={20} />
                <p>PREVIOUS POST: How to Improve Customer Retention in Fast Food</p>
              </div>
              <p>Given Set was without from god divide rule Hath</p>
            </div>
            <div className="blogDetailsNextPrevContainer">
              <div
                className="blogDetailsNextPrevContainerIcon2"
                onClick={scrollToTop}
              >
                <p>NEXT POST: Leveraging Technology to Streamline Fast Food Operations</p>
                <GoChevronRight size={20} />
              </div>
              <p style={{ textAlign: "right" }}>
                Tree earth fowl given moveth deep lesser after
              </p>
            </div>
          </div>
        </div> {/* Closing the blogDetailsSectionContainer */}
      </div> {/* Closing the blogDetailsSection */}
    </>
  ); // Ensure the React fragment is properly closed here
};

export default BlogDetails;
