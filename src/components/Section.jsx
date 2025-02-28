import React from "react";
import "./Section.css";

const Section = ({ category, images }) => {
  return (
    <div className="section">
      <div className="scroll-titles">
        <h2>{category}</h2>
      </div>

      <div className="image-list">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Film ${index}`}
            className="image"
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
