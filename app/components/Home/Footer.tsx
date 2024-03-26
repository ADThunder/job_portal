import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="pt-[5rem] pb-[3rem] bg-[#111111]">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] items-start pb-[2rem] border-b-2 border-white/10">
        {/* 1st part of footer */}
        <div>
          <h1 className="text-[24px] text-white mb-[1rem] font-bold uppercase">
            Jobify
          </h1>
          <p className="text-[14px] text-white/70">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            maiores beatae illum alias nihil excepturi quod quae, aspernatur
            dolor blanditiis.
          </p>
          {/* social icon */}
          <div className="mt-[1.5rem] flex items-center space-x-3">
            <div className="w-[2.4rem] h-[2.4rem] rounded-full bg-blue-600 flex items-center justify-center flex-col">
              <FaFacebookF className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] rounded-full bg-sky-400 flex items-center justify-center flex-col">
              <FaTwitter className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] rounded-full bg-red-600 flex items-center justify-center flex-col">
              <FaYoutube className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] rounded-full bg-red-400 flex items-center justify-center flex-col">
              <FaInstagram className="text-white" />
            </div>
          </div>
        </div>
        {/* 2nd part of footer */}
        <div>
          <h2 className="w-fit text-[22px] text-white font-semibold mb-[1.5rem]">
            About Us
          </h2>
          <p className="text-[15px] w-fit text-white/30 hover:text-yellow-300 cursor-pointer mb-[0.7rem]">
            Job
          </p>
          <p className="text-[15px] w-fit text-white/30 hover:text-yellow-300 cursor-pointer mb-[0.7rem]">
            Privacy
          </p>
          <p className="text-[15px] w-fit text-white/30 hover:text-yellow-300 cursor-pointer mb-[0.7rem]">
            Police
          </p>
          <p className="text-[15px] w-fit text-white/30 hover:text-yellow-300 cursor-pointer mb-[0.7rem]">
            Application
          </p>
          <p className="text-[15px] w-fit text-white/30 hover:text-yellow-300 cursor-pointer mb-[0.7rem]">
            Candidates
          </p>
        </div>
        {/* 3rd part of footer */}
        <div>
          <h2 className="w-fit text-[22px] text-white font-semibold mb-[1.5rem]">
            Quick Link
          </h2>
          <p className="text-[15px] w-fit text-white/30 hover:text-yellow-300 cursor-pointer mb-[0.7rem]">
            All Jobs
          </p>
          <p className="text-[15px] w-fit text-white/30 hover:text-yellow-300 cursor-pointer mb-[0.7rem]">
            Job details
          </p>
          <p className="text-[15px] w-fit text-white/30 hover:text-yellow-300 cursor-pointer mb-[0.7rem]">
            How to Apply
          </p>
          <p className="text-[15px] w-fit text-white/30 hover:text-yellow-300 cursor-pointer mb-[0.7rem]">
            Resume
          </p>
        </div>
        {/* 4th part of footer */}
        <div>
          <h2 className="w-fit text-[22px] text-white font-semibold mb-[1.5rem]">
            Get In Touch
          </h2>
          <p className="text-[15px] w-fit text-white/30 hover:text-yellow-300 cursor-pointer mb-[0.7rem]">
            +123 456 789
          </p>
          <p className="text-[15px] w-fit text-white/30 hover:text-yellow-300 cursor-pointer mb-[0.7rem]">
            test@gmail.com
          </p>
          <p className="text-[15px] w-fit text-white/30 hover:text-yellow-300 cursor-pointer mb-[0.7rem]">
            Thuận An, Bình Dương, Việt Nam
          </p>
        </div>
      </div>
      <h1 className="mt-[2rem] text-[14px] w-[80%] mx-auto text-white/50">
        COPYRIGHT BY THUNDER - 2024
      </h1>
    </footer>
  );
};

export default Footer;
