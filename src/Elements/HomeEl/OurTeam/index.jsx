import { Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title } = Typography;

const teamMembers = [
  { role: "Event Manager", name: "Niraj Kumar Singh" },
  { role: "Coordinator", name: "Ankit Singh Rajput" },
  { role: "Content Writer", name: "Akash Nath Kar" },
  { role: "Anchor", name: "Sanjana Shree" },
  { role: "Cameraman", name: "Rahul Kumar Dubey" },
  { role: "Video Editor", name: "Sumit Kumar Mandal" },
  { role: "Graphic Designer", name: "Ram Babu Pandey" },
  { role: "Social Media Handler", name: "Rajnish Yadav" },
];

const OurTeam = () => {
  return (
    <div className="bg-gray-100 mt-1 py-6 px-4">
      <div className="mx-auto bg-white shadow-xl  p-8 border border-gray-300">
        {/* Title */}
        <Title level={2} className="text-gray-800 font-bold text-center uppercase">
          Meet Our Team
        </Title>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="relative bg-gradient-to-b from-gray-50 to-gray-200 text-gray-900 p-5  flex flex-col items-center shadow-[4px_4px_10px_rgba(0,0,0,0.1),_-4px_-4px_10px_rgba(255,255,255,0.7)] border border-gray-300"
            >
              {/* Four corner nails for each element */}
              <div className="absolute w-1 h-1 bg-gray-400 rounded-full top-2 left-2 shadow-sm"></div>
              <div className="absolute w-1 h-1 bg-gray-400 rounded-full top-2 right-2 shadow-sm"></div>
              <div className="absolute w-1 h-1 bg-gray-400 rounded-full bottom-2 left-2 shadow-sm"></div>
              <div className="absolute w-1 h-1 bg-gray-400 rounded-full bottom-2 right-2 shadow-sm"></div>

              {/* Square User Icon with 3D Shadow */}
              <div className="bg-gray-300 text-gray-600 p-4 rounded-md shadow-[5px_5px_10px_rgba(0,0,0,0.2),-5px_-5px_10px_rgba(255,255,255,0.7)]">
                <UserOutlined className="text-3xl" />
              </div>

              {/* Team Member Details */}
              <span className="mt-3 text-lg font-semibold">{member.role}</span>
              <span className="text-gray-600">{member.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
