import React, { useEffect } from 'react';
import Header from './inc/Header';
import { ProjectLayout, ProjectGallery, BackToTop } from './inc/Module';
import './css/Pages.css';

const Gallery2 = () => {
  const projectImages = [
    // Paired images
    {
      type: 'pair',
      id: 'pair1',
      images: [
        {
          src: "/images/art-gallery2/art2_1.jpg",
          alt: "Healer"
        },
        {
          src: "/images/art-gallery2/art2_2.jpg",
          alt: "Manimal"
        }
      ],
      description: "Mutant Crawl Classics Characters: Healer (left) and Manimal (right)"
    },
    { // Added missing opening curly brace
      type: 'pair',
      id: 'pair2', // Changed to unique id
      images: [
        {
          src: "/images/art-gallery2/art2_3.jpg",
          alt: "Mutant"
        },
        {
          src: "/images/art-gallery2/art2_4.jpg",
          alt: "Plantient"
        }
      ],
      description: "Mutant Crawl Classics Characters: Mutant (left) and Plantient (right)"
    },
    {
      type: 'single',
      id: 'single1',
      src: "/images/art-gallery2/art2_5.jpg",
      alt: "DCC Eastern Adventures Adventuring Party",
      description: "Mutant Crawl Classics Adventuring Party: Illustration created in Photoshop using a digital drawing tablet and pen tool."
    },
    {
      type: 'single',
      id: 'single2',
      src: "/images/art-gallery2/art2_6.jpg",
      alt: "DCC Eastern Adventures Mock Up",
      description: "Pencil conceptual sketches of the Mutant Crawl Classics Character Classes for the above digital illustrations."
    },
    {
      type: 'triple',
      id: 'triple1',
      images: [
        {
          src: "/images/art-gallery2/art2_7.jpg",
          alt: "DCC Eastern Adventures Character Sheet"
        },
        {
          src: "/images/art-gallery2/art2_8.jpg",
          alt: "Labrynth Lord Character Sheet"
        },
        {
          src: "/images/art-gallery2/art2_9.jpg",
          alt: "DCC Greenleaf Adventures Character Sheet"
        }
      ],
      description: "Mutant Crawl Classics Characters: Rover (left), Sentient (middle) and Shaman (right)"
    },
    {
      type: 'single',
      id: 'single3',
      src: "/images/art-gallery2/art2_10.jpg",
      alt: "Orc attack",
      description: "A party of adventurers battling Old School Orcs in the woods.  Illustration created in Photoshop using a digital drawing tablet and pen tool."
    },
    {
      type: 'single',
      id: 'single4',
      src: "/images/art-gallery2/art2_11.jpg",
      alt: "DCC Eastern Adventures Mock Up",
      description: "Pencil-and-paper conceptual and interior art sketches."
    },
  ];

  const projectTitle = "Art Gallery 2";
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

export default Gallery2;