import React from "react";
import "./Instagram.css";
import insta1 from "../../../Assets/Instagram/ig1.avif";
import insta2 from "../../../Assets/Instagram/ig2.avif";
import insta3 from "../../../Assets/Instagram/ig3.avif";
import insta4 from "../../../Assets/Instagram/ig4.avif";
import insta5 from "../../../Assets/Instagram/ig5.avif";
import insta6 from "../../../Assets/Instagram/ig6.avif";
import insta7 from "../../../Assets/Instagram/ig7.avif";
import insta8 from "../../../Assets/Instagram/ig8.avif";
import insta9 from "../../../Assets/Instagram/ig9.avif";
import insta10 from "../../../Assets/Instagram/ig10.avif";
import insta11 from "../../../Assets/Instagram/ig11.avif";
import insta12 from "../../../Assets/Instagram/ig12.avif";

const Instagram = () => {
  return (
    <>
      <div className="instagram">
        <h2>@UOMO</h2>
        <div className="instagramTiles">
          <div className="instagramtile">
            <img src={insta1} alt="" />
          </div>
          <div className="instagramtile">
            <img src={insta2} alt="" />
          </div>
          <div className="instagramtile">
            <img src={insta3} alt="" />
          </div>
          <div className="instagramtile">
            <img src={insta4} alt="" />
          </div>
          <div className="instagramtile">
            <img src={insta5} alt="" />
          </div>
          <div className="instagramtile">
            <img src={insta6} alt="" />
          </div>
          <div className="instagramtile">
            <img src={insta7} alt="" />
          </div>
          <div className="instagramtile">
            <img src={insta8} alt="" />
          </div>
          <div className="instagramtile">
            <img src={insta9} alt="" />
          </div>
          <div className="instagramtile">
            <img src={insta10} alt="" />
          </div>
          <div className="instagramtile">
            <img src={insta11} alt="" />
          </div>
          <div className="instagramtile">
            <img src={insta12} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Instagram;
