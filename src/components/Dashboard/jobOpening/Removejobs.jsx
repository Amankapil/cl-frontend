import axios from "axios";
import React, { useEffect, useState } from "react";

import view from "../images/view.svg";
import edit from "../images/edit.svg";
import close from "../images/close.svg";

const Removejobs = () => {
  const [job, setJob] = useState([]);
  useEffect(() => {
    // Fetch data from the server using axios
    axios
      .get("http://localhost:4500/code/getjobopening")
      .then((response) => {
        console.log(response.data);
        setJob(response.data);
        console.log(job);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = async (jobId) => {
    try {
      console.log(
        "DELETE query:",
        `DELETE FROM dynamic_jobs WHERE id = ${jobId}`
      );
      await axios.delete(`http://localhost:4500/code/jobs/${jobId}`);
      // Refresh the job list after deletion
      const updatedJobs = job.filter((job) => job.id !== jobId);
      setJob(updatedJobs);
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[60%]">
          {job.map((jobs) => (
            <>
              <div key={jobs.id} className=" positions-rm ">
                <h1 className="position-content-h1" style={{ color: "#000" }}>
                  {jobs.jobTitle}
                </h1>
                <div className="images-container">
                  <img
                    onClick={() => handleDelete(jobs.id)}
                    src={close}
                    alt=""
                    className="vieww"
                  />
                </div>
              </div>

              <hr className="pos-hr" />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Removejobs;
