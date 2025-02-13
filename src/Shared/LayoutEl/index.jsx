import React from "react";
import FooterEl from "../Footer";
import NavbarEl from "../Navbar";
import { WhatsAppOutlined } from "@ant-design/icons";

const LayoutEl = (data) => {
  return (
    <>
      <NavbarEl />
      {data.children}
      <FooterEl />

      {/* WhatsApp Floating Button (Square) */}
      <a
        href="https://wa.link/mr9wq6"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-md shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
        style={{ width: "40px", height: "40px", zIndex: 1000 }}
      >
        <WhatsAppOutlined style={{ fontSize: "24px" }} />
      </a>
    </>
  );
};

export default LayoutEl;
