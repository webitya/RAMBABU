import React from "react";
import { Typography, Button } from "antd";

const { Title } = Typography;

const budgetItems = [
  { title: "LED Van" },
  { title: "Poster & Pamphlet" },
  { title: "Bulk Messages" },
  { title: "Nukkad Naatak" },
];

const BudgetBreakdown = () => {
  return (
    <div className="w-full py-8 px-4 bg-gray-50 shadow-md border-t border-gray-200">
      <Title level={2} className="text-gray-700 font-bold uppercase text-center">
        Budget Breakdown
      </Title>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {budgetItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-5 border border-gray-100 transition-transform transform "
          >
            <span className="text-lg font-semibold text-gray-800">{item.title}</span>
            <a href="tel:+917349909831" className="mt-3">
              <Button className="bg-gray-200 text-gray-800 font-semibold rounded-md shadow ">
                Contact Us
              </Button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetBreakdown;
