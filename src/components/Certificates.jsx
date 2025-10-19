import React, { useState } from "react";
import "./Certificates.css";

function Certificates() {
  const certificates = [
    {
      img: "src/assets/certificates/meta-logo.png",
      title: "Introduction to Front-End Development - Meta",
    },
    {
      img: "src/assets/certificates/meta-logo.png",
      title: "Introduction to Back-End Development - Meta ",
    },
    {
      img: "src/assets/certificates/infosys.png",
      title: "Infosys SpringBoard (JavaScript)",
    },
    {
      img: "src/assets/certificates/HackerRank_icon.png",
      title: "SQL (Basic) - HackerRank",
    },
    {
      img: "src/assets/certificates/microsoft.png",
      title: "Plasmid Industrial Training Certificate",
    },
    {
      img: "src/assets/certificates/google.png",
      title: "Google Data Analytics Certificate",
    },
    {
      img: "src/assets/certificates/ibm.png",
      title: "IBM Data Visualization Certificate",
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
