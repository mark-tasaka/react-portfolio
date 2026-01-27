import React, { useEffect } from 'react';
import Header from './inc/Header';
import { ProjectLayout, ProjectGallery, BackToTop } from './inc/Module';
import './css/Pages.css';

const EnsoBlend = () => {
  const projectImages = [
    // Paired images - enso-blend_1.jpg and enso-blend_2.jpg
    {
      type: 'pair',
      id: 'pair1',
      images: [
        {
          src: "/images/enso-blend/enso-blend_1.jpg",
          alt: "Enso Blend loose tea flavours mockups"
        },
        {
          src: "/images/enso-blend/enso-blend_2.jpg", 
          alt: "Enso Blend three loose tea flavours"
        }
      ],
      description: "Mock ups of the three loose tea flavours: Lotus Zest, Calming Stones, and Jade Forest."
    },
    // Paired images - enso-blend_3.jpg and enso-blend_4.jpg
    {
      type: 'pair',
      id: 'pair2', 
      images: [
        {
          src: "/images/enso-blend/enso-blend_3.jpg",
          alt: "Jade Forest loose tea package mockup"
        },
        {
          src: "/images/enso-blend/enso-blend_4.jpg",
          alt: "Jade Forest loose tea package dimensions"
        }
      ],
      description: "Jade Forest loose tea blend: package mock up (left) and package dimensions (right)."
    },
    // Paired images - enso-blend_5.jpg and enso-blend_6.jpg
    {
      type: 'pair',
      id: 'pair3',
      images: [
        {
          src: "/images/enso-blend/enso-blend_5.jpg",
          alt: "Lotus Zest loose tea package mockup"
        },
        {
          src: "/images/enso-blend/enso-blend_6.jpg",
          alt: "Lotus Zest loose tea package dimensions"
        }
      ],
      description: "Lotus Zest loose tea blend: package mock up (left) and package dimensions (right)."
    },
    // Paired images - enso-blend_7.jpg and enso-blend_8.jpg
    {
      type: 'pair',
      id: 'pair4',
      images: [
        {
          src: "/images/enso-blend/enso-blend_7.jpg",
          alt: "Calming Stones loose tea package mockup"
        },
        {
          src: "/images/enso-blend/enso-blend_8.jpg",
          alt: "Calming Stones loose tea package dimensions"
        }
      ],
      description: "Calming Stones loose tea blend: package mock up (left) and package dimensions (right)."
    },
    // Paired images - enso-blend_9.jpg and enso-blend_10.jpg
    {
      type: 'pair',
      id: 'pair5',
      images: [
        {
          src: "/images/enso-blend/enso-blend_9.jpg",
          alt: "Jade Forest bagged tea box layout"
        },
        {
          src: "/images/enso-blend/enso-blend_10.jpg",
          alt: "Jade Forest bagged tea box mockup"
        }
      ],
      description: "Jade Forest bagged tea box: box layout (left) and product mock up (right)."
    },
    // Paired images - enso-blend_11.jpg and enso-blend_12.jpg
    {
      type: 'pair',
      id: 'pair6',
      images: [
        {
          src: "/images/enso-blend/enso-blend_11.jpg",
          alt: "Lotus Zest bagged tea box layout"
        },
        {
          src: "/images/enso-blend/enso-blend_12.jpg",
          alt: "Lotus Zest bagged tea box mockup"
        }
      ],
      description: "Lotus Zest bagged tea box: box layout (left) and product mock up (right)."
    },
    // Paired images - enso-blend_13.jpg and enso-blend_14.jpg
    {
      type: 'pair',
      id: 'pair7',
      images: [
        {
          src: "/images/enso-blend/enso-blend_13.jpg",
          alt: "Calming Stones bagged tea box layout"
        },
        {
          src: "/images/enso-blend/enso-blend_14.jpg",
          alt: "Calming Stones bagged tea box mockup"
        }
      ],
      description: "Calming Stones bagged tea box: box layout (left) and product mock up (right)."
    },
    // Triple images - enso-blend_15.jpg, enso-blend_16.jpg, and enso-blend_17.jpg
    {
      type: 'triple',
      id: 'triple1',
      images: [
        {
          src: "/images/enso-blend/enso-blend_15.jpg",
          alt: "Enso Blend promotional mugs"
        },
        {
          src: "/images/enso-blend/enso-blend_16.jpg",
          alt: "Enso Blend business cards"
        },
        {
          src: "/images/enso-blend/enso-blend_17.jpg",
          alt: "Enso Blend business card stack"
        }
      ],
      description: "Promotional products (mugs) and company business cards."
    },
    // Paired images - enso-blend_18.jpg and enso-blend_19.jpg
    {
      type: 'pair',
      id: 'pair8',
      images: [
        {
          src: "/images/enso-blend/enso-blend_18.jpg",
          alt: "Enso Blend fonts and typography"
        },
        {
          src: "/images/enso-blend/enso-blend_19.jpg",
          alt: "Enso Blend image references"
        }
      ],
      description: "Fonts use for Enso Blend and references of the images used for the products."
    }
  ];

  const projectTitle = "Enso Blend";
  const projectDescription = `Enso Blend is a branding project for a fictional lines of green tea fusion teas. The word 'Enso' is of Japanese origins and refers to the calligraphy Zen circle. The style of this product emulates a traditional Japanese style; distinct colours are selected for the different tea blends. Gradient colour backgrounds, as opposed to solid colours, are used to represent the blending cultures in the fusions of the tea flavours.`;

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

export default EnsoBlend;