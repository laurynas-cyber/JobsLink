import { useState, useEffect, useContext } from "react";
import Joblisting from "./Joblisting";
import Spinner from "./Spinner";
import jobs from "../jobs.json";
import { JobsContext } from "../Context/Jobs";

function Jobslist({ isHome = false }) {
  const { jobsList } = useContext(JobsContext);

  // const [loading, setLoading] = useState(false); with json server

  // useEffect(() => { with json server
  //   const fetchJobs = async () => {
  //     const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
  //     try {
  //       const res = await fetch(apiUrl);
  //       const data = await res.json();
  //       setJobs(data);
  //     } catch (error) {
  //       console.log("error fetching data", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchJobs();
  // }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobsList.map((job, i) =>
              !isHome ? (
                <Joblisting key={job.id} job={job} />
              ) : i <= 2 ? (
                <Joblisting key={job.id} job={job} />
              ) : null
            )}
          </div>
        }
      </div>
    </section>
  );
}

export default Jobslist;
