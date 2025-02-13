import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MenuOutlined,
  PhoneOutlined,
  XOutlined,
  YoutubeOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavbarEl = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [NavBar, setNavBar] = useState("relative");

  const sticky = () => {
    let scrollTop = window.scrollY;
    setNavBar(scrollTop > 200 ? "fixed" : "relative");
  };

  useEffect(() => {
    window.addEventListener("scroll", sticky);
    return () => window.removeEventListener("scroll", sticky);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpenMenu(false); // Close drawer after clicking
    }
  };

  return (
    <div
      className="flex justify-between items-center px-3 py-3 bg-white shadow-lg navBarTop w-100"
      style={{ position: NavBar }}
    >
      <div>
        <Link to="/" className="flex justify-center items-center gap-1">
          <img src="/voice.png" width="45px" />
          <h2 className="text-2xl font-bold">THE VOICE</h2>
        </Link>
      </div>

      <div className="desktopMenu">
        <ul className="flex gap-4 items-center justify-center text-zinc-700">
        <li>
            <button onClick={() => scrollToSection("vision-statement")}>Vision Statement</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("our-services")}>Our Services</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("our-team")}>Our Team</button>
          </li>
         
          <li>
            <button onClick={() => scrollToSection("budget-section")}>Budget Section</button>
          </li>
          
          <li>
            <button onClick={() => scrollToSection("budget-breakdown")}>Budget Breakdown</button>
          </li>
          <li>
 {/* ====== */}
 <a href="tel:+917349909831">
  <button 
    className="relative bg-gray-200 text-gray-800 font-semibold px-3 py-1  shadow-[4px_4px_10px_rgba(0,0,0,0.15),-4px_-4px_10px_rgba(255,255,255,0.7)] border border-gray-300 transition-all hover:shadow-lg active:scale-95"
  >
    {/* Four corner nails */}
    <div className="absolute w-1 h-1 bg-gray-400 rounded-full top-1 left-1 shadow-sm"></div>
    <div className="absolute w-1 h-1 bg-gray-400 rounded-full top-1 right-1 shadow-sm"></div>
    <div className="absolute w-1 h-1 bg-gray-400 rounded-full bottom-1 left-1 shadow-sm"></div>
    <div className="absolute w-1 h-1 bg-gray-400 rounded-full bottom-1 right-1 shadow-sm"></div>

    +91 73499 09831
  </button>
</a>

 {/* ======== */}

          </li>
        </ul>
      </div>

      <div className="HamburgerDiv">
        <MenuOutlined className="hamburgerIcon" onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} closable>
        <div>
        <img src="/voice.png" width="55px" />
        </div>
        <div className="drawerNav">
          <ul>
           
          <li onClick={() => scrollToSection("vision-statement")}>Vision Statement</li>
            <li onClick={() => scrollToSection("our-services")}>Our Services</li>
            <li onClick={() => scrollToSection("our-team")}>Our Team</li>
            <li onClick={() => scrollToSection("budget-section")}>Budget Section</li>
           
            <li onClick={() => scrollToSection("budget-breakdown")}>Budget Breakdown</li>
            <li>
            <a href="tel:+917349909831">
  <button 
    className="relative bg-gray-200 text-gray-800 font-semibold px-3 py-1  shadow-[4px_4px_10px_rgba(0,0,0,0.15),-4px_-4px_10px_rgba(255,255,255,0.7)] border border-gray-300 transition-all hover:shadow-lg active:scale-95"
  >
    {/* Four corner nails */}
    <div className="absolute w-1 h-1 bg-gray-400 rounded-full top-1 left-1 shadow-sm"></div>
    <div className="absolute w-1 h-1 bg-gray-400 rounded-full top-1 right-1 shadow-sm"></div>
    <div className="absolute w-1 h-1 bg-gray-400 rounded-full bottom-1 left-1 shadow-sm"></div>
    <div className="absolute w-1 h-1 bg-gray-400 rounded-full bottom-1 right-1 shadow-sm"></div>

    +91 73499 09831
  </button>
</a>

            </li>
            <li className="flex gap-2 mt-4">
              <Link to="https://www.instagram.com/ram_pandey_55?igsh=NTc4MTIwNjQ2YQ==">
                <Button className="text-pink-500">
                  <InstagramOutlined />
                </Button>
              </Link>
              <Link to="https://www.instagram.com/ram_pandey_55?igsh=NTc4MTIwNjQ2YQ==">
                <Button className="text-black">
                  <XOutlined />
                </Button>
              </Link>
              <Link to="https://www.instagram.com/ram_pandey_55?igsh=NTc4MTIwNjQ2YQ==">
                <Button className="text-blue-400">
                  <LinkedinOutlined />
                </Button>
              </Link>
              <Link to="https://www.instagram.com/ram_pandey_55?igsh=NTc4MTIwNjQ2YQ==">
                <Button className="text-red-600">
                  <YoutubeOutlined />
                </Button>
              </Link>
              <Link to="https://www.instagram.com/ram_pandey_55?igsh=NTc4MTIwNjQ2YQ==">
                <Button className="text-blue-700">
                  <FacebookOutlined />
                </Button>
              </Link>
            </li>
            <li className="mt-4">
              <h1>
                <b>
                  <PhoneOutlined className="text-green-900" /> Phone:
                </b>{" "}
                <span>+91 73499 09831</span>
              </h1>
            </li>
            <li>
              <h1>
                <b>
                  <MailOutlined className="text-blue-700" /> Email:
                </b>{" "}
                <span>contact@thevoice.in</span>
              </h1>
            </li>
            <li>
              <h1>
                <b>Address:</b>{" "}
                <span>RANCHI 834002, JHARKHAND</span>
              </h1>
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default NavbarEl;
