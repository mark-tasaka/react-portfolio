import React from 'react';
import Header from './inc/Header';
import './css/Pages.css';

const KoiBento = () => {
  const projectImages = [
    {
      id: 1,
      src: "/images/koi-bento/koi_bento_1.jpg",
      alt: "Koi Bento 5 kg bucket mockup",
      description: "Koi Bento 5 kg bucket: mock up (left) and label (right)"
    },
    {
      id: 2,
      src: "/images/koi-bento/koi_bento_2.jpg", 
      alt: "Koi Bento 5 kg bucket label",
      description: "" // No separate description for paired image
    },
    {
      id: 3,
      src: "/images/koi-bento/koi_bento_3.jpg",
      alt: "Koi Bento 1 kg bottle mockup", 
      description: "Koi Bento 1 kg bottle: mock up (left) and label (right)"
    },
    {
      id: 4,
      src: "/images/koi-bento/koi_bento_4.jpg",
      alt: "Koi Bento 1 kg bottle label",
      description: "" // No separate description for paired image
    },
    {
      id: 5,
      src: "/images/koi-bento/koi_bento_5.jpg",
      alt: "Koi Bento Instagram ads",
      description: "Koi Bento Instagram ads"
    },
    {
      id: 6,
      src: "/images/koi-bento/koi_bento_6.jpg",
      alt: "Koi Bento t-shirt design",
      description: "Koi Bento t-shirts"
    },
    {
      id: 7,
      src: "/images/koi-bento/koi_bento_7.jpg",
      alt: "Koi Bento t-shirt mockup",
      description: "" // No separate description for paired image
    },
    {
      id: 8,
      src: "/images/koi-bento/koi_bento_8.jpg",
      alt: "Font used for Koi Bento project",
      description: "Font used for this project"
    }
  ];

  return (
    <div className="project-container" id="top">
      <div className="page-container">
        <Header activePage="work" />
        
        <main>
          <section className="page standard-modules">
            <header className="page-header content">
              <h1 className="title">Koi Bento</h1>
              <p className="description">
                This is a branding project for a line of Koi fish food pellets. Koi are a Japanese breed of 
                colourful carp and are traditionally found in 'Zen inspired' water gardens. To capture the 
                traditional 'Zen water garden' look, I selected a font and colours that captures this environment. 
                The font I selected is a Japanese style brush font and used a solid black background. I used a 
                minimalist style, with a simple logo and bold solid colours.
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
                    
                    {image.description && (
                      <div className="project-module module text">
                        <div className="rich-text module-text">
                          <div>
                            <span className="image-description">
                              {image.description}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
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
        </main>
      </div>
    </div>
  );
};

export default KoiBento;