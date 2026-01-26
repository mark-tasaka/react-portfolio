import React from 'react';
import Header from './inc/Header';
import './css/Pages.css';

const EndUapSecrecy = () => {
  const projectImages = [
    {
      id: 1,
      src: "/images/uap-secrecy/uap_secrecy_1.jpg",
      alt: "End UAP Secrecy Vinyl laptop sticker",
      description: "End UAP Secrecy Vinyl laptop sticker"
    },
    {
      id: 2,
      src: "/images/uap-secrecy/uap_secrecy_2.jpg", 
      alt: "End UAP Secrecy Vinyl bumper sticker",
      description: "End UAP Secrecy Vinyl bumper sticker"
    },
    {
      id: 3,
      src: "/images/uap-secrecy/uap_secrecy_3.jpg",
      alt: "End UAP Secrecy promotional mugs", 
      description: "End UAP Secrecy promotional mugs"
    },
    {
      id: 4,
      src: "/images/uap-secrecy/uap_secrecy_4.jpg",
      alt: "Font used for End UAP Secrecy",
      description: "Font used for End UAP Secrecy"
    }
  ];

  return (
    <div className="project-container" id="top">
      <div className="page-container">
        <Header activePage="work" />
        
        <main>
          <div className="page-container">
            <section className="page standard-modules">
              <header className="page-header content">
                <h1 className="title">End UAP Secrecy</h1>
                <p className="description">
                  End UAP Secrecy is a branding project designed to create material for the End UAP Secrecy movement. 
                  UAPs, short for Unidentified Aerial Phenomena, is an alternative term for UFOs, which has been adopted 
                  for the scientific study of the phenomenon. The goal of this project is to create affordable and highly 
                  visible branding materials, which takes the form of vinyl laptop stickers, bumper stickers and mugs.
                </p>
              </header>

              <div className="page-content">
                <div className="project-modules modules content">
                  {projectImages.map((image) => (
                    <div key={image.id}>
                      <div className="project-module module image">
                        <div className="lightbox-link">
                          <img 
                            className="project-image"
                            src={image.src}
                            alt={image.alt}
                          />
                        </div>
                      </div>
                      
                      <div className="project-module module text">
                        <div className="rich-text module-text">
                          <div>
                            <span className="image-description">
                              {image.description}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="back-to-top">
              <a href="#top">
                <span className="arrow">↑</span>
                <span>Back to Top</span>
              </a>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EndUapSecrecy;