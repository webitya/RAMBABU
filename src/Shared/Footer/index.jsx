import React from "react";
import { Link } from "react-scroll";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./FooterEl.css";

const FooterEl = () => {
  return (
    <footer className="footer-section">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Column 1: About Us */}
          <div className="footer-column mb-4">
            <h5 className="footer-title">About Us</h5>
            <p className="footer-text">
              We specialize in strategic communication, campaign management, crisis management, and digital marketing. Our expert team ensures effective messaging and impactful campaigns.
            </p>
            <Link to="our-services" smooth={true} duration={500}>
              <Button className="footer-button" type="primary" shape="round">Our Services</Button>
            </Link>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-list">
              <li><Link to="hero" smooth={true} duration={500}>About Us</Link></li>
              <li><Link to="vision-statement" smooth={true} duration={500}>Vision</Link></li>
              <li><Link to="our-team" smooth={true} duration={500}>Our Team</Link></li>
              <li><Link to="our-services" smooth={true} duration={500}>Services</Link></li>
              <li><Link to="budget-section" smooth={true} duration={500}>Budget</Link></li>
              <li><Link to="budget-breakdown" smooth={true} duration={500}>Budget Breakdown</Link></li>
            </ul>
          </div>

          {/* Column 3: Budget & Offerings */}
          <div className="footer-column mb-4">
            <h5 className="footer-title">Our Budget</h5>
            <ul className="footer-list">
              <li>Video Editor: ₹_ _ _ _ /Month</li>
              <li>Graphic Designer: ₹_ _ _ _ /Month</li>
              <li>Content Writer: ₹_ _ _ _ /Month</li>
              <li>LED Van: ₹_ _ _ _ /Day</li>
              <li>Bulk Messages: ₹_ _ _ _ /-</li>
            </ul>
          </div>

          {/* Column 4: Contact & Social Links */}
          <div className="footer-column mb-4">
            <h5 className="footer-title">Contact Us</h5>
            <p><strong>Email:</strong> <a href="mailto:info@swadshree.com">contact@thevoice.in</a></p>
            <p><strong>Phone:</strong> +91 73499 09831</p>
            
            <h5 className="footer-title mt-4">Follow Us</h5>
            <div className="social-icons">
              <a href="https://www.instagram.com/ram_pandey_55?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer"><FacebookOutlined /></a>
              <a href="https://www.instagram.com/ram_pandey_55?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer"><TwitterOutlined /></a>
              <a href="https://www.instagram.com/ram_pandey_55?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer"><LinkedinOutlined /></a>
              <a href="https://www.instagram.com/ram_pandey_55?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer"><InstagramOutlined /></a>
              <a href="https://www.instagram.com/ram_pandey_55?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer"><YoutubeOutlined /></a>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright &copy; 2025 The Voice. All Rights Reserved. Developed by <a href="https://www.webitya.com" target='_blank' rel="noopener noreferrer"><b>Webitya</b></a></p>
      </div>
    </footer>
  );
};

export default FooterEl;
