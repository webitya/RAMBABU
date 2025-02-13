import { Typography, Table, Button } from "antd";

const { Title } = Typography;

const budgetData = [
  { role: "Video Editor", salary: "Price to be decided" },
  { role: "Graphic Designer", salary: "Price to be decided" },
  { role: "Content Writer", salary: "Price to be decided" },
  { role: "Cameraman", salary: "Price to be decided" },
  { role: "Political Consultant", salary: "Price to be decided" },
  { role: "Social Media Handler", salary: "Price to be decided" },
  { role: "Anchor", salary: "Price to be decided" },
];

const columns = [
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    render: (text) => <span className="font-semibold text-gray-800">{text}</span>,
  },
  {
    title: "Salary",
    dataIndex: "salary",
    key: "salary",
    render: () => <span className="text-gray-600 italic">Price to be decided</span>,
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <a href="tel:+917349909831">
        <Button className="bg-gray-200 text-gray-800 font-semibold  shadow-md hover:shadow-lg transition-shadow duration-300">
          Contact Us
        </Button>
      </a>
    ),
  },
];

const BudgetSection = () => {
  return (
    <div className="bg-gray-50 mt-1 py-6 px-4">
      <div className="mx-auto text-center  bg-white shadow-md  border border-zinc-300 p-6">
        <Title level={2} className="text-gray-700 font-bold uppercase">
          Budget
        </Title>
        <Title level={4} className="text-gray-500 font-semibold underline">
          Monthly Package
        </Title>
        <Table
          columns={columns}
          dataSource={budgetData}
          pagination={false}
          className="mt-6 border rounded-lg"
          bordered
        />
      </div>
    </div>
  );
};

export default BudgetSection;
