import axios from "axios";
import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";

const PositionDynamic = (isDarkMode, handleButtonHover) => {
  let positioncard = useRef(null);
  let position = useRef(null);
  let applyingform = useRef(null);
  let jobdesc = useRef(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [job, setJob] = useState([]);
  useEffect(() => {
    // Fetch data from the server using axios
    axios
      .get("https://codelinear.in/code/getjobopening")
      .then((response) => {
        console.log(response.data);
        setJob(response.data);
        console.log(job);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleJobClick = (job) => {
    // Set the selected job when a list item is clicked
    setSelectedJob(job);

    // gsap.to(positioncard, 0.1, { css: { display: "block" } });
    // gsap.to(jobdesc, 0.1, { css: { display: "block" } });
    // gsap.to(position, 0.1, { css: { display: "none" } });
  };

  const [fristName, SetfristName] = useState("");
  const [lastName, SetlastName] = useState("");
  const [email, SetEmail] = useState("");
  const [number, SetNumber] = useState("");
  const [message, Setmessage] = useState("");
  const [openposition, SetOpenPosition] = useState("");

  const application = () => {
    gsap.to(positioncard, 0.1, { css: { display: "block" } });
    gsap.to(jobdesc, 0.1, { css: { display: "block" } });
    gsap.to(position, 0.1, { css: { display: "none" } });
  };
  const formhide = () => {
    gsap.to(positioncard, 0.1, { css: { display: "none" } });
    gsap.to(applyingform, 0.1, { css: { display: "none" } });
    gsap.to(jobdesc, 0.1, { css: { display: "none" } });
    gsap.to(position, 0.1, { css: { display: "flex" } });
  };
  const applyNow = () => {
    gsap.to(jobdesc, 0.1, { css: { display: "none" } });
    gsap.to(applyingform, 0.1, { css: { display: "block" } });
  };

  const handleButtonMouseEnter = () => {
    handleButtonHover(true);
  };

  const handleButtonMouseLeave = () => {
    handleButtonHover(false);
  };

  const handleSubmit = async (e) => {
    const data = { fristName, lastName, email, message, openposition };
    console.log(data);

    if (!openposition) {
      alert("Please confirm position");
      return;
    }
    const response = await axios
      .post(
        // "https://codelinear.in/code/send_mail_career",
        "https://codelinear.in/code/send_mail_career",
        data
      )
      .then((response) => {
        if (response.status === 200) {
          alert("Your Application was sent successfully");
          // window.location.reload();
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="position-container">
      <div className="position-content-container">
        <h1 style={{ color: "#d8d6d6" }} className="position-h1 headingsection">
          Open Positions
        </h1>

        <div className="open-pos ">
          {job.map((jobs) => (
            <>
              <div
                key={jobs.id}
                className=" positions"
                onClick={() => handleJobClick(jobs)}
              >
                <h1
                  className="position-content-h1"
                  style={{ color: "#d8d6d6" }}
                >
                  {jobs.jobTitle}
                </h1>
                <span
                  style={{
                    fontWeight: 900,
                    color: "#d8d6d6",
                  }}
                  className="office"
                >
                  {jobs.location} (Remote)
                </span>
              </div>
              <hr className="pos-hr" />
            </>
          ))}

          {selectedJob && (
            <div
              className="PD"
              // className={isDarkMode ? "PDdark" : "PD"}
              ref={(el) => (positioncard = el)}
            >
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="job-pd-title"
              >
                <div>{selectedJob.jobTitle}</div>
                <button
                  //   onMouseEnter={handleButtonMouseEnter}
                  //   onMouseLeave={handleButtonMouseLeave}
                  className="jobline"
                  //   onClick={formhide}

                  onClick={() => setSelectedJob(null)}
                >
                  <div
                    // onMouseEnter={handleButtonMouseEnter}
                    // onMouseLeave={handleButtonMouseLeave}
                    className="close-line"
                  ></div>
                </button>
              </h1>
              <p
                // style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                style={{ color: "#848484" }}
                className="job-loc"
              >
                {selectedJob.location}
              </p>
              <p
                // style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                style={{ color: "#848484" }}
                className="job-loc"
              >
                Experience Band: {selectedJob.experience}+ Yrs
              </p>
              <div className="job-description" ref={(el) => (jobdesc = el)}>
                <p
                  //   style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                  style={{ color: "#848484" }}
                  className="job-pd-desc job-loc"
                >
                  {selectedJob.description}
                </p>
                <div
                  //   style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                  style={{ color: "#d8d6d6" }}
                  className="job-req"
                >
                  {selectedJob.skills}
                </div>
                <p
                  //   style={{ color: isDarkMode ? "#00000099" : "#848484" }}
                  style={{ color: "#d8d6d6" }}
                  className="apply"
                >
                  Feel like you’re a match?
                </p>
                <div
                  //   onMouseEnter={handleButtonMouseEnter}
                  //   onMouseLeave={handleButtonMouseLeave}
                  className="apply_btn"
                  onClick={applyNow}
                >
                  <p
                    className={"about_btn_content"}
                    // style={{ color: "#d8d6d6" }}
                  >
                    apply now
                  </p>
                </div>
              </div>
              <div className="applying-form" ref={(el) => (applyingform = el)}>
                <div className="form">
                  <div className="name-container">
                    <input
                      type="text"
                      placeholder="First Name*"
                      className="first-name"
                      onChange={(e) => SetfristName(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last Name*"
                      className="first-name"
                      onChange={(e) => SetlastName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="name-container">
                    <div className="number">
                      {/* <select name="" id="" className="tele">
                  <option value="">+91</option>
                </select> */}
                      <input
                        type="email"
                        onChange={(e) => SetEmail(e.target.value)}
                        placeholder="Email"
                        className="phone-number"
                        required
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Past The Drive Link Of Your Resume Here*"
                      className="first-name"
                      onChange={(e) => Setmessage(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex justify-start w-[43%]">
                    <select
                      name=""
                      id=""
                      // value={openposition}
                      onChange={(e) => SetOpenPosition(e.target.value)}
                      className="first-name"
                    >
                      <option default>confirm position</option>
                      <option value="Product Design">Product Design</option>
                      {/* <option value="Ecommerce">Developer CMS/E-commerce</option> */}
                    </select>
                  </div>

                  <button
                    onMouseEnter={handleButtonMouseEnter}
                    onMouseLeave={handleButtonMouseLeave}
                    onClick={handleSubmit}
                    className="sub_btn-content submit_btn"
                  >
                    submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PositionDynamic;
