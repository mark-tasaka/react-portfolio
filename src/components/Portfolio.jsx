import React from 'react';
import Header from './inc/Header';
import { BackToTop } from './inc/Module'; // Add this import
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
    },
    
    {
      id: 7,
      title: "Art Gallery 1",
      image: "/images/cover/gallery1.jpg",
      link: "/art-gallery-1"
    },
    {
      id: 8,
      title: "Art Gallery 2",
      image: "/images/cover/gallery2.jpg",
      link: "/art-gallery-2"
    },
    {
      id: 9,
      title: "Art Gallery 3",
      image: "/images/cover/gallery3.jpg",
      link: "/art-gallery-3"
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

        <BackToTop /> {/* Replace the hardcoded section with this component */}
      </main>
    </div>
  );
};

export default Portfolio;