import empathy from "../../Blog/Images/Frame 1000001793.png";

export default function Trendhero({ isDarkMode, toggleDarkMode ,handleButtonHover }) {
  return (
    <section className="empathy-hero">
      <div className="empathy-container">
        <div className="empathy-inner-content">
          <h1
            style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
            className="empathy-hero-h1"
          >
          AI-Powered Design Tools
          </h1>
          <div className="blog-date">
            <p
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="date"
            >Rohith Narasimhan </p>
            <p
              style={{ color: isDarkMode ? "#00000099" : "#848484" }}
              className="date"
            >29th aug 2023</p>
          </div>
        </div>
      </div>
      <img src={empathy} alt="" className="empathy" />
    </section>
  );
}
