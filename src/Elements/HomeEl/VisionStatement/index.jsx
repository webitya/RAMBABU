import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const VisionStatement = () => {
  return (
    <div className="bg-gray-100 py-6 mt-1 px-4">
      <div className="mx-auto bg-white shadow-lg  p-8 border border-gray-300">
        <Title level={2} className="text-gray-800 font-bold uppercase text-center">
          Vision Statement
        </Title>
        <Paragraph className="text-gray-600 text-lg leading-relaxed text-center">
          Our vision at <b>[THE VOICE]</b> is to be the leading force in shaping positive narratives and driving impactful change for our clients and the communities they serve. 
          We aspire to be renowned for our creativity, integrity, and relentless pursuit of excellence in every aspect of public relations.
        </Paragraph>

        <div className="mt-6 space-y-6">
          {[
            { number: "01.", text: "Growth on Social Media" },
            { number: "02.", text: "Positive Public Figure" },
            { number: "03.", text: "Excellence in Political Rally" },
          ].map((item, index) => (
            <div 
              key={index} 
              className="relative bg-gradient-to-b from-gray-100 to-gray-200 text-gray-900 p-5  flex items-center shadow-[4px_4px_10px_rgba(0,0,0,0.1),_-4px_-4px_10px_rgba(255,255,255,0.7)] border border-gray-300"
            >
              {/* Four corner nails for each element */}
              <div className="absolute w-1 h-1 bg-gray-400 rounded-full top-2 left-2 shadow-sm"></div>
              <div className="absolute w-1 h-1 bg-gray-400 rounded-full top-2 right-2 shadow-sm"></div>
              <div className="absolute w-1 h-1 bg-gray-400 rounded-full bottom-2 left-2 shadow-sm"></div>
              <div className="absolute w-1 h-1 bg-gray-400 rounded-full bottom-2 right-2 shadow-sm"></div>

              <span className="text-2xl font-semibold mr-4">{item.number}</span>
              <span className="text-lg">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisionStatement;
