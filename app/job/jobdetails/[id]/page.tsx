import ApplyButton from "@/app/components/Helper/ApplyButton";
import JobCard from "@/app/components/Helper/JobCard";
import { authOptions } from "@/auth";
import JobData from "@/data";
import { getServerSession } from "next-auth";
import Link from "next/link";

const JobDettails = async ({ params }: { params: { id: string } }) => {
  const singleJob = JobData.find((job) => job.id.toString() === params.id);

  const session = await getServerSession(authOptions);

  const firstFourJob = JobData.slice(0, 4);

  return (
    <div className="mt-20 mb-12">
      <div className="block sm:flex items-center justify-between w-[80%] mx-auto">
        <div className="flex-[0.7]">
          <JobCard job={singleJob!} />
        </div>
        {session && <ApplyButton />}
        {!session && (
          <Link href="/signup">
            <button className="px-8 py-3 bg-emerald-600 rounded-lg text-white">
              Sign Up To Apply
            </button>
          </Link>
        )}
      </div>
      <div className="mt-16 w-[80%] mx-auto">
        <h1 className="text-[20px] font-semibold">Job Description</h1>
        <p className="mt-4 text-black/50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          nostrum voluptas sapiente doloremque culpa cupiditate doloribus nobis
          sint provident odit velit qui iusto ratione quod atque, aspernatur
          accusamus aliquam inventore!
        </p>
        <h1 className="text-[20px] mt-8 font-semibold">Key Responsibilities</h1>
        <p className="mt-4 text-black/50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          nostrum voluptas sapiente doloremque culpa cupiditate doloribus nobis
          sint provident odit velit qui iusto ratione quod atque, aspernatur
          accusamus aliquam inventore! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam reiciendis ipsa ut excepturi qui magni
          officia. Minus eligendi sed optio?
        </p>
        <h1 className="text-[20px] mt-8 font-semibold">Skills</h1>
        <ul className="mt-4">
          <li className="mt-4 text-black/50">React JS</li>
          <li className="mt-4 text-black/50">Next JS</li>
          <li className="mt-4 text-black/50">Tailwind CSS</li>
          <li className="mt-4 text-black/50">TypeScript</li>
          <li className="mt-4 text-black/50">NextAuth</li>
        </ul>
        <h1 className="text-[20px] mt-8 font-semibold">Related Job</h1>
        <div className="mt-4">
          {firstFourJob.map((job) => (
            <Link
              href={`/job/jobdetails/${job.id}`}
              key={job.id}
              className="space-y-6"
            >
              <JobCard job={job} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDettails;
