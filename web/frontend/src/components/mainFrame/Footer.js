import React from "react";
import "../../styles/common.css";
import "./Footer.css";
import { faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="sticky-footer">
      <div className="container">
        <div className="copyright">Copyright ⓒ Hanwha Qcells 2020</div>
        <div className="tel">
          <FontAwesomeIcon icon={faPhoneAlt} />
          010.1234.5678
        </div>
        <div className="location">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          서울특별시 중구 을지로
        </div>
      </div>
    </footer>
  );
};

export default Footer;
