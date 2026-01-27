import React, { useEffect } from 'react';
import Header from './inc/Header';
import { ProjectLayout, ProjectGallery, BackToTop } from './inc/Module';
import './css/Pages.css';

const KoiBento = () => {
  const projectImages = [
    // Paired images
    {
      type: 'pair',
      id: 'pair1',
      images: [
        {
          src: "/images/koi-bento/koi_bento_1.jpg",
          alt: "Koi Bento 5 kg bucket mockup"
        },
        {
          src: "/images/koi-bento/koi_bento_2.jpg", 
          alt: "Koi Bento 5 kg bucket label"
        }
      ],
      description: "Koi Bento 5 kg bucket: mock up (left) and label (right)"
    },
    {
      type: 'pair',
      id: 'pair2', 
      images: [
        {
          src: "/images/koi-bento/koi_bento_3.jpg",
          alt: "Koi Bento 1 kg bottle mockup"
        },
        {
          src: "/images/koi-bento/koi_bento_4.jpg",
          alt: "Koi Bento 1 kg bottle label"
        }
      ],
      description: "Koi Bento 1 kg bottle: mock up (left) and label (right)"
    },
    // Single image
    {
      type: 'single',
      id: 5,
      src: "/images/koi-bento/koi_bento_5.jpg",
      alt: "Koi Bento Instagram ads",
      description: "Koi Bento Instagram ads"
    },
    // Paired images
    {
      type: 'pair',
      id: 'pair3',
      images: [
        {
          src: "/images/koi-bento/koi_bento_6.jpg",
          alt: "Koi Bento t-shirt design"
        },
        {
          src: "/images/koi-bento/koi_bento_7.jpg",
          alt: "Koi Bento t-shirt mockup"
        }
      ],
      description: "Koi Bento t-shirts"
    },
    // Single image
    {
      type: 'single',
      id: 8,
      src: "/images/koi-bento/koi_bento_8.jpg",
      alt: "Font used for Koi Bento project",
      description: "Font used for this project"
    }
  ];

  const projectTitle = "Koi Bento";
  const projectDescription = `This is a branding project for a line of Koi fish food pellets. Koi are a Japanese breed of 
    colourful carp and are traditionally found in 'Zen inspired' water gardens. To capture the 
    traditional 'Zen water garden' look, I selected a font and colours that captures this environment. 
    The font I selected is a Japanese style brush font and used a solid black background. I used a 
    minimalist style, with a simple logo and bold solid colours.`;

    
  useEffect(() => {
    document.title = `Mark Tasaka - ${projectTitle}`;
    return () => {
      document.title = "Mark Tasaka";
    };
  }, [projectTitle]);


  return (
    <ProjectLayout activePage="work">
      <Header activePage="work" />
      <main>
        <section className="page standard-modules">
          <header className="page-header content">
            <h1 className="title">{projectTitle}</h1>
            <p className="description">{projectDescription}</p>
          </header>
          <ProjectGallery images={projectImages} />
        </section>
        <BackToTop />
      </main>
    </ProjectLayout>
  );
};

export default KoiBento;