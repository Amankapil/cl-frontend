import axios from "axios";
import React, { useEffect, useState } from "react";

const Clientdetails = () => {
  const [clientData, setClientData] = useState([]);
  useEffect(() => {
    // Fetch data from the server using axios
    axios
      .get("http://localhost:4500/code/getclientdata")
      .then((response) => {
        console.log(response.data);
        setClientData(response.data);
        console.log(clientData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const [imgurl, setImgurl] = useState();

  const [imageSrc, setImageSrc] = useState([]);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4500/code/getcltimg"
        );

        console.log(response.data);
        setImageSrc(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImage();
  }, []);
  return (
    <>
      <div className="clients-bakend flex gap-10 justify-center items-center">
        {clientData.map((jobs) => (
          <>
            <div
              key={jobs.id}
              className="w-[278.57px] h-[244.51px] bg-white p-5 flex flex-col gap-4"
            >
              <div className="w-[247.62px] h[16.87px] flex gap-1">
                <div>
                  {imageSrc.map((jobs) => (
                    <img
                      src={`http://localhost:4500/addhomeimg/` + jobs.homeimg}
                      alt="YourImage"
                    />
                  ))}
                </div>
                <p className="text-stone-500 text-base font-bold font-['Helvetica']">
                  Name:
                </p>
                <p className="text-stone-500 text-base font-normal font-['Helvetica']">
                  {jobs.clientName}
                </p>
              </div>

              <div className="w-[247.62px] h-[101.55px] flex gap-2">
                <p className="text-stone-500 text-base font-bold font-['Helvetica']">
                  Description:
                </p>
                <p className="text-stone-500 text-base font-normal font-['Helvetica']">
                  {jobs.aboutCompany}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Clientdetails;
