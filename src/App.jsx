import React, { useContext, useEffect } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Mainlayout from "./Layouts/Mainlayout";
import Jobpage from "./Pages/Jobpage";
import NotFound from "./Pages/NotFound";
import SingleJobpage from "./Pages/SingleJobpage";
import AddJobPage from "./Pages/AddJobPage";
import EditJobPage from "./Pages/EditJobPage";

import { JobsContext } from "./Context/Jobs";

function App() {
  // const updateJob = async (job) => {
  //   const res = await fetch(`/api/jobs/${job.id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-type": "aplication/json",
  //     },
  //     body: JSON.stringify(job),
  //   });
  //   return;
  // };

  const { jobsList, setJobsList } = useContext(JobsContext);

  function addJob(newJob) {
    setJobsList((j) => [...j, newJob]);
  }

  function deleteJob(id) {
    setJobsList((jobs) => jobs.filter((j) => j.id !== id));
  }

  function updateJob(Job) {
    console.log(Job);
    setJobsList((jobs) => jobs.map((j) => (j.id == Job.id ? Job : j)));
    console.log(jobsList);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Homepage />} />
        <Route path="/jobs" element={<Jobpage />} />
        <Route
          path="/add-job"
          element={<AddJobPage addJobsSubmit={addJob} />}
        />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
        />
        <Route
          path="/jobs/:id"
          element={<SingleJobpage deleteJob={deleteJob} />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
