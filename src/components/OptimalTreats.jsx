import React, { useEffect } from 'react';
import Header from './inc/Header';
import { ProjectLayout, ProjectGallery, BackToTop } from './inc/Module';
import './css/Pages.css';

const OptimalTreats = () => {
  const projectImages = [
    // Paired images - optimal-treats_1.jpg and optimal-treats_2.jpg
    {
      type: 'pair',
      id: 'pair1',
      images: [
        {
          src: "/images/optimal-treats/optimal-treats_1.jpg",
          alt: "Optimal Treats Wild Salmon package mockup"
        },
        {
          src: "/images/optimal-treats/optimal-treats_2.jpg", 
          alt: "Optimal Treats Wild Salmon package layout"
        }
      ],
      description: "Wild Salmon flavour 250 g bag. Package mock up (left) and product layout (right)."
    },
    // Paired images - optimal-treats_3.jpg and optimal-treats_4.jpg
    {
      type: 'pair',
      id: 'pair2', 
      images: [
        {
          src: "/images/optimal-treats/optimal-treats_3.jpg",
          alt: "Optimal Treats Chicken package mockup"
        },
        {
          src: "/images/optimal-treats/optimal-treats_4.jpg",
          alt: "Optimal Treats Chicken package layout"
        }
      ],
      description: "Chicken flavour 250 g bag. Package mock up (left) and product layout (right)."
    },
    // Paired images - optimal-treats_5.jpg and optimal-treats_6.jpg
    {
      type: 'pair',
      id: 'pair3',
      images: [
        {
          src: "/images/optimal-treats/optimal-treats_5.jpg",
          alt: "Optimal Treats Beef package mockup"
        },
        {
          src: "/images/optimal-treats/optimal-treats_6.jpg",
          alt: "Optimal Treats Beef package layout"
        }
      ],
      description: "Beef flavour 250 g bag. Package mock up (left) and product layout (right)."
    },
    // Triple images - optimal-treats_7.jpg, optimal-treats_8.jpg, and optimal-treats_9.jpg
    {
      type: 'triple',
      id: 'triple1',
      images: [
        {
          src: "/images/optimal-treats/optimal-treats_7.jpg",
          alt: "Optimal Treats Wild Salmon can label"
        },
        {
          src: "/images/optimal-treats/optimal-treats_8.jpg",
          alt: "Optimal Treats Chicken can label"
        },
        {
          src: "/images/optimal-treats/optimal-treats_9.jpg",
          alt: "Optimal Treats Beef can label"
        }
      ],
      description: "Paper labels (canned product) for the three soft food flavours of Optimal Treats: Wild Salmon, Chicken, and Beef."
    },
    // Single image - optimal-treats_10.jpg
    {
      type: 'single',
      id: 10,
      src: "/images/optimal-treats/optimal-treats_10.jpg",
      alt: "Optimal Treats canned product mockups",
      description: "Mock ups of the canned product of Optimal Treats."
    },
    // Paired images - optimal-treats_11.jpg and optimal-treats_12.jpg
    {
      type: 'pair',
      id: 'pair4',
      images: [
        {
          src: "/images/optimal-treats/optimal-treats_11.jpg",
          alt: "Optimal Treats business cards"
        },
        {
          src: "/images/optimal-treats/optimal-treats_12.jpg",
          alt: "Optimal Treats business card stack"
        }
      ],
      description: "Optimal Treats company business cards."
    },
    // Paired images - optimal-treats_13.jpg and optimal-treats_14.jpg
    {
      type: 'pair',
      id: 'pair5',
      images: [
        {
          src: "/images/optimal-treats/optimal-treats_13.jpg",
          alt: "Optimal Treats dog food bowls"
        },
        {
          src: "/images/optimal-treats/optimal-treats_14.jpg",
          alt: "Optimal Treats dog food bowl mockup"
        }
      ],
      description: "Promotional product: Optimal Treats dog food bowls."
    },
    // Single image - optimal-treats_15.jpg
    {
      type: 'single',
      id: 15,
      src: "/images/optimal-treats/optimal-treats_15.jpg",
      alt: "Optimal Treats magazine and digital ad",
      description: "Optimal Treats magazine and digital ad."
    },
    // Single image - optimal-treats_16.jpg
    {
      type: 'single',
      id: 16,
      src: "/images/optimal-treats/optimal-treats_16.jpg",
      alt: "Optimal Treats color selection and font",
      description: "Colour selection for the three flavours of Optimal Treats: Wild Salmon, Chicken, and Beef. Font used."
    }
  ];

  const projectTitle = "Optimal Treats";
  const projectDescription = `A branding project for a fictional line of premium dog treats called Optimal Treats. The packaging is aimed at dog owners; bright playful colours are used in combinations with pictures of active happy dogs, as a way of communicating to the dog owners that Optimal Treats are part of their pet's active lifestyle. A 'hand drawn' style of logo was created (heart) with a paw print in the centre, to create a playful look for the product. The project aims to create the association between the branding of this product and the active healthy lifestyles of dogs consuming this product.`;

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

export default OptimalTreats;