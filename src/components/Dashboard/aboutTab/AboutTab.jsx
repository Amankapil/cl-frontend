import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState, useEffect, useRef } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AboutTest from "./AboutTest";
import Meet from "./Meet";
import Crewbox from "./Crew_box";
import Peak from "./peak";
import view from "../images/view.svg";
import edit from "../images/edit.svg";
import close from "../images/close.svg";
import Search from "../images/scg.svg";
import Add from "../images/add.svg";
import gsap from "gsap";
import Clientdetails from "./Clientdetails";
// import AboutTab from "./aboutTab/AboutTab";

const AboutTab = () => {
  const [editMode, setEditMode] = useState(false);
  const [vision_pera, setvision_pera] = useState(false);
  const [editModeServices, seteditModeServices] = useState(false);
  const [editModeAbout, setEditModeAbout] = useState(false);

  const [guiding_pera, setguiding_pera] = useState();

  const [array, setarray] = useState("");
  const [Aboutarray, setAboutarray] = useState();
  const [Servicesarray, setServicesarray] = useState();

  const [aboutHeading, setaboutHeading] = useState("");
  const [error, setError] = useState("");
  let dashbutton4 = useRef(null);
  let dashbutton5 = useRef(null);
  let panel4 = useRef(null);
  let panel5 = useRef(null);

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
  // const handleEditClickServices = () => {
  //   if (editModeServices === false) {
  //     seteditModeServices(true);
  //   } else {
  //     seteditModeServices(false);
  //   }
  // };
  // const handleUsernameChange = (event) => {
  //   setvision_pera(event.target.value);
  // };
  // const handleSubmitServices = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios
  //       .post("https://codelinear.in/code/addaboutHero", {
  //         vision_pera,
  //       })
  //       .then((response) => {
  //         console.log(response);
  //         if (response.status === 200) {
  //           alert("data post successfully");
  //           window.refresh();
  //         } else {
  //           alert(response.data.message);
  //         }
  //       });
  //   } catch (error) {
  //     setError(error.response.data.message);
  //   }
  // };

  const [clientName, SetclientName] = useState("");
  const [aboutCompany, SetaboutCompany] = useState("");
  const [serviceName, SetserviceName] = useState("");
  // const [number, SetNumber] = useState("");
  // const [message, Setmessage] = useState("");
  // const [openposition, SetOpenPosition] = useState("");

  const handleSubmit = async (event) => {
    const data = { clientName, aboutCompany, serviceName };
    console.log(data);
    try {
      const response = await axios
        .post("http://localhost:4500/code/addclintdata", {
          clientName,
          aboutCompany,
          serviceName,
        })
        .then((response) => {
          console.log(response);

          if (response.status === 200) {
            alert("data post successfully");
          } else {
            alert(response.data.message);
          }
        });
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  // ?/////////////////////////////////////
  // ?/////////////////////////////////////handleSubmitAbout/ ////////////////////////////////////////////
  const handleSubmitAbout = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post("https://codelinear.in/code/addaboutguiding", {
          guiding_pera,
        })
        .then((response) => {
          console.log(response);

          if (response.status === 200) {
            alert("data post successfully");
            window.refresh();
          } else {
            alert(response.data.message);
          }
        });
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  useEffect(() => {
    axios.get("https://codelinear.in/code/aboutHero").then((response) => {
      // setarray(response.data.homeHero);
      setServicesarray(response.data.aboutHeading);
      console.log(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("https://codelinear.in/code/aboutvision").then((response) => {
      setarray(response.data.vision_pera);
      // setAboutarray(response.data.homeAbout);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("https://codelinear.in/code/aboutguiding").then((response) => {
      setAboutarray(response.data.guiding_pera);
      // setAboutarray(response.data.homeAbout);
      console.log(response.data);
    });
  }, []);

  const [imagehome, setImagehome] = useState();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    setImagehome(selectedFile);
  };

  const handleimgsubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("imagehome", imagehome);
    console.log(formData);
    console.log(imagehome);

    try {
      const response = await axios.post(
        "http://localhost:4500/code/addhomeimg",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);

      if (response.status === 200) {
        alert("Image posted successfully");
      } else {
        alert(response);
      }
    } catch (error) {
      setError(error);
    }
  };

  const [imageUrl, setImageUrl] = useState("");

  // useEffect(() => {
  //   // const response = await axios.get("http://localhost:4500/getcltimg", {
  //   axios.get("http://localhost:4500/getcltimg").then((response) => {
  //     setAboutarray(response.data.guiding_pera);
  //     // setAboutarray(response.data.homeAbout);
  //     console.log(response.data);
  //   });
  // }, []);

  const [clientData, setClientData] = useState([]);
  useEffect(() => {
    // Fetch data from the server using axios
    axios
      .get("http://localhost:4500/code/getjobopening")
      .then((response) => {
        console.log(response.data);
        setClientData(response.data);
        console.log(clientData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="main">
      <div
        className="about-page-dash"
        style={{
          background: "#EAEAEA",
        }}
      >
        <div
          className="about-page-dash-txt"
          ref={(el) => (dashbutton4 = el)}
          onClick={handleSwitchClick4}
          style={{
            backgroundColor: "#fff",
          }}
        >
          Clients
        </div>
        <div
          className="about-page-dash-txt"
          ref={(el) => (dashbutton5 = el)}
          onClick={handleSwitchClick5}
          style={{
            backgroundColor: "#EEEEEE",
          }}
        >
          Clients Info
        </div>
      </div>
      <div
        className="about-page-dash-panel"
        ref={(el) => (panel4 = el)}
        style={{
          height: "68vh",
        }}
      >
        <div className="operation-container">
          <div className="search-container">
            <input type="text" placeholder="search" className="search" />
            <img src={Search} alt="" className="search-img" />
          </div>
          <div className="add-container">
            <img src={Add} alt="" className="add" />
          </div>
        </div>
       <Clientdetails/>
      </div>
      <div
        className="about-page-dash-panel"
        style={{
          display: "none",
        }}
        ref={(el) => (panel5 = el)}
      >
        <div className="operation-container"></div>

        <div className="add-client mx-[7%]">
          <div className="w-[1012.35px] h-[1273.66px] bg-white flex justify-center ites-center">
            <div className="add-client-info">
              <div className="companyname flex justify-between mt-8 gap-10">
                <div className="w flex ">
                  <div className="w-[123.90px] h-[43.37px] bg-gray-200 flex justify-center items-center">
                    <div className="w-[127.09px] h-[43.37px] text-neutral-700 text-base font-normal font-['Helvetica'] flex justify-center items-center">
                      Client Name * :
                    </div>
                  </div>

                  <div className="cname-input ml-2  bg-[#F5F5F5]">
                    <input
                      type="text"
                      placeholder="Deel"
                      className="w-[244.66px] pl-2 bg-[#F5F5F5] h-[43.37px] text-black text-base font-normal font-['Helvetica']"
                      onChange={(e) => SetclientName(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <form onSubmit={handleimgsubmit}>
                      <input
                        type="file"
                        name="imagehome"
                        className="text-black  w-[187px]"
                        onChange={(e) => setImagehome(e.target.files[0])}
                      />
                      <button className="bg-black p-2" type="submit">
                        Submit
                      </button>
                    </form>
                  </div>

                  <div className="getimg">{imageUrl}</div>
                </div>
              </div>

              <div className="about-company-input mt-10">
                <div className="w-[846.19px] h-[43.37px]  bg-[#383838] text-base font-normal font-['Helvetica']">
                  About Company * :
                </div>
                <textarea
                  className="w-[846.40px] h-[167.76px] bg-neutral-100 text-black font-bold"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  onChange={(e) => SetaboutCompany(e.target.value)}
                ></textarea>
              </div>

              <div className="serverce-see">
                <div className="companyname flex justify-start">
                  <div className="w-[123.90px] h-[43.37px] bg-gray-200 flex justify-center items-center">
                    <div className="w-[127.09px] h-[43.37px] text-neutral-700 text-base font-normal font-['Helvetica'] flex justify-center items-center">
                      Service Type * :
                    </div>
                  </div>

                  <div className="cname-input ml-2  bg-[#F5F5F5]">
                    {/* <input
                      type="text"
                      placeholder="Deel"
                      className="w-[244.66px] pl-2 bg-[#F5F5F5] h-[43.37px] text-black text-base font-normal font-['Helvetica']"
                    /> */}

                    <select
                      className="w-[244.66px] pl-2 bg-[#F5F5F5] h-[43.37px] text-black text-base font-normal font-['Helvetica']"
                      name=""
                      id=""
                      onChange={(e) => SetserviceName(e.target.value)}
                    >
                      <option className="text-black font-bold" value="web">
                        Web Devs
                      </option>
                      <option className="text-black font-bold" value="mobile">
                        mobile Devs
                      </option>
                      <option className="text-black font-bold" value="Design">
                        Design
                      </option>
                      <option
                        className="text-black font-bold"
                        value="wordpress"
                      >
                        Wordpress
                      </option>
                    </select>
                  </div>
                </div>

                <div className="submit-btnt flex justify-center items-center w-full mt-20">
                  <button
                    onClick={handleSubmit}
                    className="submit- bg-slate-950 p-4 font-bold"
                  >
                    add client
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;
