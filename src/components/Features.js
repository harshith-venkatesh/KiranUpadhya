import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { Link } from "gatsby";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6 main-page-language__card">
        <Link to={item.path} className="section">
          <div className="has-text-centered">
            <div>
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <div >
          <pre ><span style={{maxWidth:"30rem" , height:"10rem", margin:"1rem", display:"flex", flexWrap:"wrap", wordWrap: "break-word", overflow:"auto", background:"#F5F5F5"}}>{item.text}</span></pre>
          </div>
          
        </Link>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.any]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
