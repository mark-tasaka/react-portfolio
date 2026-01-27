import React from 'react';
import Header from './inc/Header';
import { ProjectLayout, ProjectGallery, BackToTop } from './inc/Module';
import './css/Pages.css';

const AdaraFusion = () => {
  const projectImages = [
    // Paired images - adara_1.jpg and adara_2.jpg
    {
      type: 'pair',
      id: 'pair1',
      images: [
        {
          src: "/images/adara-fusion/adara_1.jpg",
          alt: "Adara Fusion food menu cover"
        },
        {
          src: "/images/adara-fusion/adara_2.jpg", 
          alt: "Adara Fusion food menu layout"
        }
      ],
      description: "Food menu layout"
    },
    // Paired images - adara_3.jpg and adara_4.jpg
    {
      type: 'pair',
      id: 'pair2', 
      images: [
        {
          src: "/images/adara-fusion/adara_3.jpg",
          alt: "Adara Fusion food menu mockup"
        },
        {
          src: "/images/adara-fusion/adara_4.jpg",
          alt: "Adara Fusion food menu presentation"
        }
      ],
      description: "Food menu mock up"
    },
    // Paired images - adara_5.jpg and adara_6.jpg
    {
      type: 'pair',
      id: 'pair3',
      images: [
        {
          src: "/images/adara-fusion/adara_5.jpg",
          alt: "Adara Fusion wine menu cover"
        },
        {
          src: "/images/adara-fusion/adara_6.jpg",
          alt: "Adara Fusion wine menu layout"
        }
      ],
      description: "Wine menu layout"
    },
    // Paired images - adara_7.jpg and adara_8.jpg
    {
      type: 'pair',
      id: 'pair4',
      images: [
        {
          src: "/images/adara-fusion/adara_7.jpg",
          alt: "Adara Fusion wine menu mockup"
        },
        {
          src: "/images/adara-fusion/adara_8.jpg",
          alt: "Adara Fusion wine menu presentation"
        }
      ],
      description: "Wine menu mock up"
    },
    // Paired images - adara_9.jpg and adara_10.jpg
    {
      type: 'pair',
      id: 'pair5',
      images: [
        {
          src: "/images/adara-fusion/adara_9.jpg",
          alt: "Adara Fusion digital menu design"
        },
        {
          src: "/images/adara-fusion/adara_10.jpg",
          alt: "Adara Fusion digital menu layout"
        }
      ],
      description: "Digital menu layout"
    },
    // Paired images - adara_11.jpg and adara_12.jpg
    {
      type: 'pair',
      id: 'pair6',
      images: [
        {
          src: "/images/adara-fusion/adara_11.jpg",
          alt: "Adara Fusion digital menu on tablet"
        },
        {
          src: "/images/adara-fusion/adara_12.jpg",
          alt: "Adara Fusion digital menu mockup"
        }
      ],
      description: "Digital menu mock up"
    },
    // Paired images - adara_13.jpg and adara_14.jpg
    {
      type: 'pair',
      id: 'pair7',
      images: [
        {
          src: "/images/adara-fusion/adara_13.jpg",
          alt: "Romanica font specimen"
        },
        {
          src: "/images/adara-fusion/adara_14.jpg",
          alt: "Adara Fusion color palette"
        }
      ],
      description: "Font used for the menu and the colours selected for the menu"
    }
  ];

  const projectTitle = "Adara Fusion";
  const projectDescription = `Adara is a fictional Greek-Western fusion restaurant located in Vancouver. The word Adara is a Greek word that translates into 'beauty', which I believe captures the atmosphere and the quality of food served in a fine dining restaurant. The font 'Romanica' is used as it embodies the look and feel of the Ancient World (Roman Empire, Ancient Greece, etc.). A Laurel Wreath is part of the restaurant's title as laurel wreaths are symbols from Greek Mythology.

The colour blue is a popular colour for Greek restaurants. Thus, when selecting a colour for the cover of the menu, I choose to select a tone of blue. While Greek restaurants typically use a lighter tone of blue, I choose a darker tone as navy blue is historically associated with the aristocracy and wealth; thus, fitting better with the atmosphere of a fine dinning restaurant. Since the interior of the restaurant is dimly lit (candle lights, low intensity light bulbs, etc.), the interior of the menu consists of high-quality white paper with black text. Due to the glare of a digital tablet, the digital menu consists of a black background with white text.`;

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

export default AdaraFusion;