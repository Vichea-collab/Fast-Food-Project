import React from "react";

import "./TermsandConditions.css";

const TermsandConditions = () => {
  return (
    <>
      <div className="termsContainer">
        <h2>TERMS & CONDITIONS</h2>
        <div className="termsContent">
          <h6>Your use of this fast-food service is governed by these terms</h6>
          <p>
            By accessing our fast-food website, you agree to comply with these
            terms. We aim to deliver the best burgers, fries, and shakes while
            ensuring a smooth user experience.
          </p>
          <h6>Use of the content on this website</h6>
          <p>
            All images, recipes, and descriptions of our fast-food items are
            proprietary. Unauthorized use of this content is strictly
            prohibited.
          </p>
          <h6>How long will it take to get my order?</h6>
          <p>
            Orders are typically prepared and delivered within 30 minutes. In
            case of delays, our team will notify you promptly.
          </p>
          <h6>Will I receive the same food as shown in the pictures?</h6>
          <p>
            We strive to ensure that all food items match their images. However,
            slight variations may occur due to preparation methods.
          </p>
          <h6>Limitation of liability</h6>
          <p>
            We are not responsible for any allergic reactions or health issues
            caused by consuming our food. Please review the ingredients before
            placing an order.
          </p>
          <h6>Governing Law & Jurisdiction</h6>
          <p>
            These terms are governed by the laws of the jurisdiction where our
            fast-food chain operates.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsandConditions;
