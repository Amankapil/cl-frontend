import axios from "axios";
import { gsap } from "gsap";
import React, { useRef, useState } from "react";
import Removejobs from "./Removejobs";

const Jobopening = () => {
  const [jobTitle, SetjobTitle] = useState("");
  const [location, SetLocation] = useState("");
  const [experience, SetExperience] = useState("");
  const [description, SetDescription] = useState("");
  const [skills, SetSkills] = useState("");
  const [openposition, SetOpenPosition] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { jobTitle, location, experience, description, skills };
    console.log(data);

    const response = await axios
      .post(
        // "https://codelinear.in/code/send_mail_career",
        "http://localhost:4500/code/addjobs",
        data
      )
      .then((response) => {
        if (response.status === 200) {
          alert("Your Job was added successfully");
          // window.location.reload();
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let panel4 = useRef(null);
  let panel5 = useRef(null);
  let dashbutton4 = useRef(null);
  let dashbutton5 = useRef(null);

  const handleSwitchClick4 = () => {
    gsap.to(dashbutton4, 0, { backgroundColor: "#fff" });
    gsap.to(dashbutton5, 0, { backgroundColor: "#EEEEEE" });
    gsap.to(panel4, 0, { display: "block" });
    gsap.to(panel5, 0, { display: "none" });
  };
  const handleSwitchClick5 = () => {
    gsap.to(dashbutton4, 0, { backgroundColor: "#EEEEEE" });
    gsap.to(dashbutton5, 0, { backgroundColor: "#fff" });
    gsap.to(panel4, 0, { display: "none" });
    gsap.to(panel5, 0, { display: "block" });
  };
  return (
    <>
      <div
        className="about-page-dash ml-[7%] mt-8"
        style={
          {
              background: "#EAEAEA",
          }
        }
      >
        <div
          className="about-page-dash-txt"
          ref={(el) => (dashbutton4 = el)}
          onClick={handleSwitchClick4}
          style={
            {
              backgroundColor: "#fff",
            }
          }
        >
          Add Jobs
        </div>
        {/* {"     >"} */}
        <div
          className="about-page-dash-txt"
          ref={(el) => (dashbutton5 = el)}
          onClick={handleSwitchClick5}
          style={
            {
              backgroundColor: "#EEEEEE",
            }
          }
        >
          Remove Jobs
        </div>
      </div>
      <div ref={(el) => (panel4 = el)}>
        <div className="add-client mx-[7%]">
          <div className="w-[1012.35px] h-[1273.66px] bg-white flex justify-center ites-center">
            <div className="add-client-info">
              <div className="companyname flex justify-between mt-8 gap-10">
                <div className="w flex ">
                  <div className="w-[123.90px] h-[43.37px] bg-gray-200 flex justify-center items-center">
                    <div className="w-[127.09px] h-[43.37px] text-neutral-700 text-base font-normal font-['Helvetica'] flex justify-center items-center">
                      Job Title*
                    </div>
                  </div>

                  <div className="cname-input ml-2  bg-[#F5F5F5]">
                    <input
                      type="text"
                      placeholder="Product Design"
                      onChange={(e) => SetjobTitle(e.target.value)}
                      className="w-[244.66px] pl-2 bg-[#F5F5F5] h-[43.37px] text-black text-base font-normal font-['Helvetica']"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-10">
                <div className="companyname flex justify-between mt-8 gap-10">
                  <div className="w flex ">
                    <div className="w-[123.90px] h-[43.37px] bg-gray-200 flex justify-center items-center">
                      <div className="w-[127.09px] h-[43.37px] text-neutral-700 text-base font-normal font-['Helvetica'] flex justify-center items-center">
                        Location *:
                      </div>
                    </div>

                    <div className="cname-input ml-2  bg-[#F5F5F5]">
                      <input
                        type="text"
                        placeholder="Banglore"
                        className="w-[244.66px] pl-2 bg-[#F5F5F5] h-[43.37px] text-black text-base font-normal font-['Helvetica']"
                        onChange={(e) => SetLocation(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="companyname flex justify-between mt-8 gap-10">
                  <div className="w flex ">
                    <div className="w-[123.90px] h-[43.37px] bg-gray-200 flex justify-center items-center">
                      <div className="w-[127.09px] h-[43.37px] text-neutral-700 text-base font-normal font-['Helvetica'] flex justify-center items-center">
                        Experience *:
                      </div>
                    </div>

                    <div className="cname-input ml-2  bg-[#F5F5F5]">
                      <input
                        type="text"
                        placeholder="2 - 4"
                        className="w-[244.66px] pl-2 bg-[#F5F5F5] h-[43.37px] text-black text-base font-normal font-['Helvetica']"
                        onChange={(e) => SetExperience(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-company-input mt-10">
                <div className="w-[846.19px] h-[43.37px]  bg-[#383838] text-base font-normal font-['Helvetica']">
                  Job Description :
                </div>
                <textarea
                  className="w-[846.40px] h-[167.76px] bg-neutral-100 text-black font-bold"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  onChange={(e) => SetDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="companyname flex justify-between mt-8 gap-10">
                <div className="w flex ">
                  <div className="w-[123.90px] h-[43.37px] bg-gray-200 flex justify-center items-center">
                    <div className="w-[127.09px] h-[43.37px] text-neutral-700 text-base font-normal font-['Helvetica'] flex justify-center items-center">
                      Slills*:
                    </div>
                  </div>

                  <div className="cname-input ml-2  bg-[#F5F5F5]">
                    <input
                      type="text"
                      placeholder="Figma, React, Wordpress etc"
                      className="w-[244.66px] pl-2 bg-[#F5F5F5] h-[43.37px] text-black text-base font-normal font-['Helvetica']"
                      onChange={(e) => SetSkills(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="job-submit-btn">
                <button className="bg-black p-4 mt-10" onClick={handleSubmit}>
                  Add job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={(el) => (panel5 = el)}>
        <Removejobs />
      </div>
    </>
  );
};

export default Jobopening;
