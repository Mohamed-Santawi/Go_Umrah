import {
  FaPassport,
  FaImage,
  FaPlaneDeparture,
  FaHotel,
  FaCheckCircle,
  FaInfoCircle,
} from "react-icons/fa";
const VisaData = () => {
  return (
    <ul className="space-y-5 mb-6">
      <li className="flex items-start text-gray-600 text-right">
        <span className="text-[15px] pl-7">صالحة لمدة 90 يوماً</span>
        <FaCheckCircle className="text-[#0c8a4d] mt-1" />
      </li>
      <li className="flex items-start text-gray-600 text-right">
        <span className="pl-3 text-[15px]">إقامة تصل إلى 30 يوماً</span>
        <FaCheckCircle className="text-[#0c8a4d] mt-1" />
      </li>
      <li className="flex items-start text-gray-600 text-right">
        <span className="text-[15px] pl-18">دخول متعدد</span>
        <FaCheckCircle className="text-[#0c8a4d] mt-1 " />
      </li>
      <li className="flex items-start text-gray-600 text-right">
        <span className="text-[15px] pl-9">تأمين طبي أساسي</span>
        <FaCheckCircle className="text-[#0c8a4d] mt-1" />
      </li>
    </ul>
  );
};
export default VisaData;
