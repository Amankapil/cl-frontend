import axios from "axios";
import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";

const Blogupdate = () => {
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

  const [blogtitle, Setblogtitle] = useState("");
  const [blogcategory, Setblogcategory] = useState("");
  const [blogpera, Setblogpera] = useState("");
  const [blogimg, Setblogimg] = useState("");
  const handleSubmit = async (event) => {
    const data = { blogtitle, blogcategory, blogpera };
    console.log(data);
    try {
      const response = await axios
        .post("http://localhost:4500/code/addclintdata", {
          blogtitle,
          blogcategory,
          blogpera,
          blogimg,
        })
        .then((response) => {
          console.log(response);

          if (response.status === 200) {
            alert("data post successfully");
          } else {
            alert(response.data.message);
          }
        });
    } catch (error) {}
  };
  // ?/////////////////////////////////////

  const [imagehome, setImagehome] = useState();

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
    } catch (error) {}
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
          Blogs
        </div>
        <div
          className="about-page-dash-txt"
          ref={(el) => (dashbutton5 = el)}
          onClick={handleSwitchClick5}
          style={{
            backgroundColor: "#EEEEEE",
          }}
        >
          Edit Blog
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
            {/* <img src={Search} alt="" className="search-img" /> */}
          </div>
          <div className="add-container">
            {/* <img src={Add} alt="" className="add" /> */}
          </div>
        </div>
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
          <div className="w-[1012.35px] h-full  pb-20 bg-white flex justify-center ites-center">
            <div className="add-client-info">
              <div className="companyname flex justify-between mt-8 gap-10">
                <div className="w flex ">
                  <div className="w-[123.90px] h-[43.37px] bg-gray-200 flex justify-center items-center">
                    <div className="w-[127.09px] h-[43.37px] text-neutral-700 text-base font-normal font-['Helvetica'] flex justify-center items-center">
                      Blog Title :
                    </div>
                  </div>

                  <div className="cname-input ml-2  bg-[#F5F5F5]">
                    <input
                      type="text"
                      placeholder="shopify vs Magento"
                      className="w-[244.66px] pl-2 bg-[#F5F5F5] h-[43.37px] text-black text-base font-normal font-['Helvetica']"
                      onChange={(e) => Setblogtitle(e.target.value)}
                    />
                  </div>
                </div>

                {/* <div>
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
                </div> */}

                <div className="serverce-see">
                  <div className="companyname flex justify-start">
                    <div className="w-[123.90px] h-[43.37px] bg-gray-200 flex justify-center items-center">
                      <div className="w-[127.09px] h-[43.37px] text-neutral-700 text-base font-normal font-['Helvetica'] flex justify-center items-center">
                        Category :
                      </div>
                    </div>

                    <div className="cname-input ml-2  bg-[#F5F5F5]">
                      <select
                        className="w-[244.66px] pl-2 bg-[#F5F5F5] h-[43.37px] text-black text-base font-normal font-['Helvetica']"
                        name=""
                        id=""
                        onChange={(e) => Setblogcategory(e.target.value)}
                      >
                        <option
                          className="text-black font-bold"
                          value="Branding"
                        >
                          Branding
                        </option>
                        <option
                          className="text-black font-bold"
                          value="UI/UX Design"
                        >
                          UI/UX Design
                        </option>
                        <option className="text-black font-bold" value="SEO">
                          SEO
                        </option>
                        <option
                          className="text-black font-bold"
                          value="Social Media"
                        >
                          Social Media
                        </option>
                        <option
                          className="text-black font-bold"
                          value="Product Development"
                        >
                          Product Development
                        </option>
                        <option
                          className="text-black font-bold"
                          value="Digital Marketing"
                        >
                          Digital Marketing
                        </option>
                        <option
                          className="text-black font-bold"
                          value="eCommerce"
                        >
                          eCommerce
                        </option>
                        <option
                          className="text-black font-bold"
                          value="No Code"
                        >
                          No Code
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-company-input mt-10">
                <div className="w-[846.19px] h-[43.37px]  bg-[#EAEAEA]  text-[#383838] p-2 text-base font-normal font-['Helvetica']">
                  Paragraph :
                </div>
                <textarea
                  className="w-[846.40px] h-[167.76px] bg-neutral-100 text-black font-bold"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  onChange={(e) => Setblogpera(e.target.value)}
                ></textarea>
              </div>

              <div className="serverce-see mt-10">
                <div class="btn_upload">
                  <input
                    placeholder="Upload"
                    type="file"
                    id="upload_file"
                    name="blogimg"
                    onChange={(e) => Setblogimg(e.target.files[0])}
                  />
                </div>
                <div className="submit-btnt flex justify-center items-center w-full mt-20">
                  <button
                    onClick={handleSubmit}
                    className="submit- bg-slate-950 p-4 font-bold"
                  >
                    Post Blog
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

export default Blogupdate;
