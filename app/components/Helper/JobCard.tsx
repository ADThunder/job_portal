import { Job } from "@/data";
import Image from "next/image";
import { BiMoney } from "react-icons/bi";
import { FaMapLocation, FaRegBookmark } from "react-icons/fa6";

const JobCard = ({ job }: { job: Job }) => {
  return (
    <div className="p-4 mb-6 relative border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 rounded-lg border-opacity-10">
      <div className="flex items-center gap-x-6">
        {/* image */}
        <div>
          <Image
            src={job.image}
            alt={job.title}
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        {/* content */}
        <div>
          <h1 className="text-[17px] font-semibold mb-[0.4rem]">
            {job?.title}
          </h1>
          <div className="flex items-center md:space-x-10 space-x-4">
            {/* location */}
            <div className="flex items-center space-x-2">
              <FaMapLocation className="w-[0.8rem] h-[0.8rem] text-pink-700" />
              <p className="text-[14px] text-black/60 font-semibold">
                {job?.location}
              </p>
            </div>
            {/* salary */}
            <div className="flex items-center space-x-2">
              <BiMoney className="w-[0.8rem] h-[0.8rem] text-pink-700" />
              <p className="text-[14px] text-black/60 font-semibold">
                {job?.salary}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4 mt-[1rem]">
            <div className="text-[10px] sm:text-[14px] text-black/80 px-3 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-green-400">
              {job?.jobtype}
            </div>
            <div className="text-[10px] sm:text-[14px] text-black/80 px-3 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-red-400">
              Privite
            </div>
            <div className="text-[10px] sm:text-[14px] text-black/80 px-3 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-blue-400">
              Urgent
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1rem] right-[1rem]">
        <FaRegBookmark className="w-[1rem] h-[1rem]" />
      </div>
    </div>
  );
};

export default JobCard;
