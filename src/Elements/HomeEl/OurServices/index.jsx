import { Typography } from "antd";

const { Title } = Typography;

const services = [
  { title: "Media Relations", description: "Building and maintaining relationships with journalists, editors, and media outlets to ensure positive coverage and manage any negative publicity.", color: "bg-gray-100" },
  { title: "Strategic Communication", description: "Developing and executing communication strategies to convey key messages effectively to target audiences, including speeches, press releases, and social media content.", color: "bg-blue-50" },
  { title: "Crisis Management", description: "Providing guidance and support during times of crisis or negative publicity, including developing response strategies and managing media inquiries.", color: "bg-green-50" },
  { title: "Public Affairs", description: "Engaging with government officials, policymakers, and stakeholders to influence public policy and legislative outcomes in favor of the client's interests.", color: "bg-yellow-50" },
  { title: "Campaign Management", description: "Planning and executing political campaigns, including messaging, branding, advertising, and grassroots organizing.", color: "bg-purple-50" },
  { title: "Issue Advocacy", description: "Building public support for specific policy initiatives or causes through targeted communication and advocacy efforts.", color: "bg-pink-50" },
  { title: "Reputation Management", description: "Monitoring and managing the online reputation of political figures or organizations, including addressing misinformation and negative online content.", color: "bg-indigo-50" },
  { title: "Event Planning and Management", description: "Organizing and promoting political events, rallies, fundraisers, and town hall meetings to engage with constituents and supporters.", color: "bg-teal-50" },
  { title: "Opinion Research and Polling", description: "Conducting research, surveys, and polling to gauge public opinion, identify key issues, and inform communication strategies.", color: "bg-orange-50" },
  { title: "Digital and Social Media Strategy", description: "Developing and implementing digital and social media campaigns to reach and engage with target audiences online, including content creation, community management, and advertising.", color: "bg-red-50" }
];

const OurServices = () => {
  return (
    <div className="bg-gray-50 mt-1 py-6 px-4">
      <div className="mx-auto border border-gray-300 p-8 shadow-lg">
        <Title level={2} className="text-gray-700 font-extrabold text-center uppercase tracking-wide">
          Our Services
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => (
            <div key={index} className={`relative ${service.color} p-6  shadow-[6px_6px_15px_rgba(200,200,200,0.5),-6px_-6px_15px_rgba(255,255,255,0.8)] border border-gray-200 transition-transform duration-200 `}>
              
              {/* Nail Effect */}
              <div className="absolute w-1 h-1 bg-gray-500 rounded-full top-2 left-2 shadow-sm"></div>
              <div className="absolute w-1 h-1 bg-gray-500 rounded-full top-2 right-2 shadow-sm"></div>
              <div className="absolute w-1 h-1 bg-gray-500 rounded-full bottom-2 left-2 shadow-sm"></div>
              <div className="absolute w-1 h-1 bg-gray-500 rounded-full bottom-2 right-2 shadow-sm"></div>

              <Title level={4} className="text-gray-800 font-semibold">
                {service.title}
              </Title>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
