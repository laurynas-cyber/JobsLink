import { createContext, useState } from "react";
import jobsJSON from "../jobs.json";

export const JobsContext = createContext();

const Jobs = ({ children }) => {
  const [jobsList, setJobsList] = useState(jobsJSON);


  return (
    <JobsContext.Provider value={{ jobsList, setJobsList }}>
      {children}
    </JobsContext.Provider>
  );
};

export default Jobs;
