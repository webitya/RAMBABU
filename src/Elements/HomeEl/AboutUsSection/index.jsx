import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const AboutUsSection = () => {
  return (
    <div className="bg-gray-100 px-4 py-6">
      <div className="mx-auto bg-white shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start relative border border-gray-300">
        {/* Four corner nails (10px inside the container) */}
        <div className="absolute w-2 h-2 bg-gray-500 rounded-full top-2 left-2"></div>
        <div className="absolute w-2 h-2 bg-gray-500 rounded-full top-2 right-2"></div>
        <div className="absolute w-2 h-2 bg-gray-500 rounded-full bottom-2 left-2"></div>
        <div className="absolute w-2 h-2 bg-gray-500 rounded-full bottom-2 right-2"></div>

        {/* Left Section (Text) */}
        <div className="md:w-3/4 text-left">
          <Title level={2} className="text-blue-600">
            ABOUT US (VISION)
          </Title>
          <Paragraph className="text-gray-700 text-lg leading-relaxed">
            We are <b>"THE VOICE"</b> PR Agency.
            <br />
            We started our company in <b>OCT 2023</b>.
            <br />
            Recently, we worked for some politicians.
            <br />
            At <b>[THE VOICE]</b>, our mission is to elevate works, amplify voices, and foster meaningful connections through strategic communication and innovative PR solutions.
          </Paragraph>
          <Paragraph className="text-gray-700 text-lg leading-relaxed">
            We are dedicated to helping our clients build trust, credibility, and visibility in today’s dynamic media landscape.
          </Paragraph>
        </div>

        {/* Right Section (Image) */}
        <div className="md:w-1/4 flex justify-center md:justify-end mt-6 md:mt-0">
          <div className="bg-zinc-200 p-4 rounded-full shadow-md flex items-center justify-center">
            <img src="/voice.png" alt="The Voice Logo" className="w-24 h-24 object-contain rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
