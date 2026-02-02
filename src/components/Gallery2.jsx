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
      description: ""
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
      description: ""
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