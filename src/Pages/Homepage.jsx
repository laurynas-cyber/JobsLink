import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import Jobslist from "../components/Jobslist";
import ViewAllJobs from "../components/ViewAllJobs";

function Homepage() {
  return (
    <>
      <Hero />

      <HomeCards />

      <Jobslist isHome={true} />

      <ViewAllJobs />
    </>
  );
}

export default Homepage;
