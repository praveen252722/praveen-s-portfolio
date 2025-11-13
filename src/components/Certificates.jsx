import React, { useState } from "react";
import "./Certificates.css";

// ✅ Import all certificate images properly
import metaLogo from "../assets/certificates/meta-logo.png";
import infosysLogo from "../assets/certificates/infosys.png";
import hackerRankLogo from "../assets/certificates/HackerRank_icon.png";
import microsoftLogo from "../assets/certificates/microsoft.png";
import geminiLogo from "../assets/certificates/geminiai.jpeg";

function Certificates() {
  // ✅ Use imported images instead of string paths
  const certificates = [
    {
      img: metaLogo,
      title: "Introduction to Front-End Development - Meta",
    },
    {
      img: infosysLogo,
      title: "Infosys SpringBoard (JavaScript)",
    },
    {
      img: hackerRankLogo,
      title: "SQL (Basic) - HackerRank",
    },
    {
      img: microsoftLogo,
      title: "Microsoft Azure SQL",
    },
    {
      img: geminiLogo,
      title: "Introduction to Gemini for Google Workspace",
    },
    {
      img: metaLogo,
      title: "Introduction to Front-End Development - Meta",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  const handleNext = () => {
    if (startIndex + itemsPerPage < certificates.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleCertificates = certificates.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="card2">
      <h3 className="card-title">Certificates</h3>

      <div className="cert-container">
        <button
          onClick={handlePrev}
          className="nav-btn"
          disabled={startIndex === 0}
        >
          &lt;
        </button>

        <ul className="cert-list">
          {visibleCertificates.map((cert, index) => (
            <li key={index} className="cert-item">
              <img src={cert.img} alt={cert.title} className="cert-img" />
              <p>{cert.title}</p>
            </li>
          ))}
        </ul>

        <button
          onClick={handleNext}
          className="nav-btn"
          disabled={startIndex + itemsPerPage >= certificates.length}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Certificates;
