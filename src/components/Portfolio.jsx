import React from 'react';
import Header from './inc/Header';
import './css/Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Optimal Treats",
      image: "/images/cover/optimal-treats.jpg",
      link: "/optimal-treats"
    },
    {
      id: 2,
      title: "Enso Blend",
      image: "/images/cover/enso-blend.jpg",
      link: "/enso-blend"
    },
    {
      id: 3,
      title: "UFO Report",
      image: "/images/cover/ufo.jpg",
      link: "/ufo-report"
    },
    {
      id: 4,
      title: "Adara Fusion",
      image: "/images/cover/adara.jpg",
      link: "/adara-fusion"
    },
    {
      id: 5,
      title: "Koi Bento",
      image: "/images/cover/koi-bento.jpg",
      link: "/koi-bento"
    },
    {
      id: 6,
      title: "End UAP Secrecy",
      image: "/images/cover/uap-secrecy.jpg",
      link: "/end-uap-secrecy"
    }
  ];

  return (
    <div className="portfolio-container" id="top"> 
      <Header activePage="work" />

      <main>
        <section className="project-covers">
          {projects.map((project) => (
            <a 
              key={project.id}
              className="project-cover" 
              href={project.link}
            >
              <div className="cover-content-container">
                <div className="cover-image-wrap">
                  <div className="cover-image">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="cover-img"
                    />
                  </div>
                </div>
                <div className="details-wrap">
                  <div className="details">
                    <div className="details-inner">
                      <div className="title">{project.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </section>

        <section className="back-to-top">
          <a href="#top">  
            <span className="arrow">↑</span>
            <span>Back to Top</span>
          </a>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;