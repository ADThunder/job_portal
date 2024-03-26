import FeaturedJobs from "./FeaturedJobs";
import Hero from "./Hero";
import JobCategory from "./JobCategory";

const Home = () => {
  return (
    <div>
      <Hero />
      <JobCategory />
      <FeaturedJobs />
    </div>
  );
};

export default Home;
