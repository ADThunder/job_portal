import JobData from "@/data";
import Heading from "../Helper/Heading";
import Link from "next/link";
import JobCard from "../Helper/JobCard";

const FeaturedJobs = () => {
  return (
    <section className="pt-20 pb-12">
      <Heading
        mainHeading="Featured Jobs"
        subHeading="Know your worth and find the job that qualify your life"
      />
      <div className="mt-12 w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {JobData.map((job) => (
          <Link href={`/job/jobdetails/${job.id}`} key={job.id}>
            {/* job card */}
            <JobCard job={job} />
          </Link>
        ))}
      </div>
      <Link href="/job/alljobs">
        <div className="text-center mt-[3rem]">
          <button className="px-8 py-2 font-semibold hover:bg-blue-900 bg-blue-700 transition-all duration-300 text-white rounded-lg">
            View All Jobs
          </button>
        </div>
      </Link>
    </section>
  );
};

export default FeaturedJobs;
