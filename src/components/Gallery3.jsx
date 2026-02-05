import React, { useEffect } from 'react';
import Header from './inc/Header';
import { ProjectLayout, ProjectGallery, BackToTop } from './inc/Module';
import './css/Pages.css';

const Gallery3 = () => {
  const projectImages = [
    // Single image - art1_1.jpg
    {
      type: 'single',
      id: 'single1',
      src: "/images/art-gallery3/art3_1.jpg",
      alt: "White Box Eastern Adventures Advanced Ed Mock Up",
      description: "Photoshop mock up of the White Box Eastern Adventures Advanced Edition."
    },
    {
      type: 'pair',
      id: 'pair1',
      images: [
        {
          src: "/images/art-gallery3/art3_2.jpg",
          alt: "White Box Eastern Adventures Advanced Ed Front Cover"
        },
        {
          src: "/images/art-gallery3/art3_3.jpg",
          alt: "White Box Eastern Adventures Advanced Ed Back Cover"
        }
      ],
      description: "The cover illustration for White Box Eastern Adventures Advanced Edition.  Hand drawn with a digital pen in Photoshop."
    },
    {
      type: 'pair',
      id: 'pair1',
      images: [
        {
          src: "/images/art-gallery3/art3_4.jpg",
          alt: "Raven and the Moon"
        },
        {
          src: "/images/art-gallery3/art3_5.jpg",
          alt: "Cawing Crow and the Moon"
        }
      ],
      description: "The Crow, the Moon and the UAP (Hand drawn digital illustrations using a digital pen and Photoshop)"
    },
    {
      type: 'triple',
      id: 'triple1',
      images: [
        {
          src: "/images/art-gallery3/art3_8.jpg",
          alt: "Pair of Crows, a Ring and the UAP"
        },
        {
          src: "/images/art-gallery3/art3_6.jpg",
          alt: "Holiday Card Mock up"
        },
        {
          src: "/images/art-gallery3/art3_7.jpg",
          alt: "Holiday Card Mock up"
        }
      ],
      description: "Pair of Crows: The Digital Illustrations were hand drawn with a digital pen in Adobe Photoshop."
    },
    {
      type: 'triple',
      id: 'triple2',
      images: [
        {
          src: "/images/art-gallery3/art3_11.jpg",
          alt: "Pair of Crows, a Ring and the UAP"
        },
        {
          src: "/images/art-gallery3/art3_9.jpg",
          alt: "Holiday Card Mock up"
        },
        {
          src: "/images/art-gallery3/art3_10.jpg",
          alt: "Holiday Card Mock up"
        }
      ],
      description: "Pair of Crows: The Digital Illustrations were hand drawn with a digital pen in Adobe Photoshop."
    },
    {
      type: 'triple',
      id: 'triple3',
      images: [
        {
          src: "/images/art-gallery3/art3_12.jpg",
          alt: "Cleric"
        },
        {
          src: "/images/art-gallery3/art3_13.jpg",
          alt: "Magic User"
        },
        {
          src: "/images/art-gallery3/art3_14.jpg",
          alt: "Halfling"
        }
      ],
      description: "Cleric, Magic User and Halfling: Hand drawn illustrations created with a digital pen"
    },
    {
      type: 'triple',
      id: 'triple4',
      images: [
        {
          src: "/images/art-gallery3/art3_15.jpg",
          alt: "Pen and Paper Sketches"
        },
        {
          src: "/images/art-gallery3/art3_16.jpg",
          alt: "Pen and Paper Sketches"
        },
        {
          src: "/images/art-gallery3/art3_17.jpg",
          alt: "Pen and Paper Sketches"
        }
      ],
      description: "Pencil and paper conceptual and interior art sketches"
    }
  ];

  const projectTitle = "Art Gallery 3";
  const projectDescription = `The digital art pieces in this gallery were hand-drawn with a digital pen tool in Adobe Photoshop. The illustrations are for my hobby role-playing game websites, and for a series of tabletop game books I published.`;

  // Update document title when component mounts
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

export default Gallery3;