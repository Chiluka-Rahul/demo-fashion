import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Nav.css';
import { height } from '../anim';
import NavBody from '../NavBody/NavBody';
import Image from '../Image/Image';

const links = [
  {
    category: "Highlights",
    items: [
      {
        title: "Summer '25 Lookbook",
        href: "/lookbook/summer-25",
        src: "https://adoore.se/cdn/shop/files/Ossi-black-block_2a341e11-01fc-4bda-904b-fba11f1d69e7.jpg?v=1749450216&width=1540"
      },
      {
        title: "Signature Drapes",
        href: "/collection/signature-drapes",
        src: "https://www.oscardelarenta.com/cdn/shop/files/hompage_V4.jpg?v=1747854240&width=2560"
      },
      {
        title: "Bold in Black",
        href: "/collection/bold-black",
        src: "https://cdn.prod.website-files.com/63cffb7c16ab3347fc9734c8/63d2279606000f5f8a92b792_home-hero.webp"
      },
      {
        title: "Runway Edit",
        href: "/collection/runway-edit",
        src: "https://framerusercontent.com/images/tzlLMHyfSP3naJjRsFMXvCc6nGI.webp"
      },
      {
        title: "Crafted Essentials",
        href: "/collection/crafted-essentials",
        src: "https://akkeknitwear.com/website/wp-content/uploads/2023/10/akke-3-1.jpg"
      }
    ]
  },
  {
    category: "Men's",
    items: [
      { title: "T-Shirts", href: "/men/tshirts", src: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/350` },
      { title: "Jeans", href: "/men/jeans", src: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/350` },
      { title: "Jackets", href: "/men/jackets", src: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/350` },
      { title: "Shoes", href: "/men/shoes", src: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/350` },
      { title: "Accessories", href: "/men/accessories", src: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/350` },
    ]
  },
  {
    category: "Women's",
    items: [
      { title: "Tops", href: "/women/tops", src: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/350` },
      { title: "Skirts", href: "/women/skirts", src: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/350` },
      { title: "Heels", href: "/women/heels", src: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/350` },
      { title: "Bags", href: "/women/bags", src: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/350` },
      { title: "Jewelry", href: "/women/jewelry", src: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/350` },
    ]
  }
];


export default function Index() {
  const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });
  const allItems = links.flatMap(group => group.items);

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className="nav-nav"
    >
      <div className="wrapper-nav">
        <div className="container-nav">
          <NavBody
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
        </div>
        <Image src={allItems[selectedLink.index]?.src} selectedLink={selectedLink} />
      </div>
    </motion.div>
  );
}
