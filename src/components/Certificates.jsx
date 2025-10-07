import React from "react";
import "./Certificates.css";

function Certificates() {
  const certificates = [
    {
       img: "src/assets/certificates/meta-logo.png",
      title: "Introduction to Front-End Development - Meta",
     
    },
    {
      title: "Introduction to Back-End Development",
     img: "src/assets/certificates/meta-logo.png",
    },
    {
      title: "Infosys SpringBoard (JavaScript)",
     img: "src/assets/certificates/infosys.png",
    },
    {
      title: "SQL (Basic) - HackerRank",
     img: "src/assets/certificates/HackerRank_icon.png",
    },
    {
      title: "Plasmid Industrial Training Certificate",
     img: "src/assets/certificates/microsoft.png",
    },
  ];

  return (
    <div className="card2">
      <h3 className="card-title">Certificates</h3>
      <ul className="cert-list">
        {certificates.map((cert, index) => (
          <li key={index} className="cert-item">
             <img src={cert.img} alt={cert.title} className="cert-img" />
            <p>{cert.title}</p>
           
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Certificates;
