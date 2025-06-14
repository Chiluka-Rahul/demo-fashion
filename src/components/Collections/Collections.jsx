  import React, { useEffect, useRef, useState } from 'react';
  import './Collections.css';

  const Collections = () => {
    const scrollRef = useRef(null);
    const imageCount = 5;
    // const [images, setImages] = useState([]);

  const products = [
      {
        image: 'https://cdn-img.prettylittlething.com/0/4/1/1/0411ba2f3b5847653acd1706831705023cb06110_CNN1537_1_lemon_mesh_ruched_backless_halter_neck.jpg?imwidth=600',
        title: 'Lemon Mesh Ruched Backless Halter Neck',
        price: '$26.00',
      },
      {
        image: 'https://cdn-img.prettylittlething.com/8/e/b/2/8eb2bd6114c951e1b2cf6b4431e0148317834c9c_CNJ9182_1_mocha_fine_knit_twist_neck_vest_top.jpg?imwidth=600',
        title: 'Mocha Fine Knit Twist Neck Vest Top',
        price: '$20.00',
      },
      {
        image: 'https://cdn-img.prettylittlething.com/f/e/3/3/fe330fdc4b1d1868178d37a52ef9118815eec019_CNC0203_1_stone_oversized_belted_hem_cropped_biker_jacket.jpg?imwidth=600',
        title: 'Stone Oversized Belted Hem Cropped Biker Jacket',
        price: '$40.00',
      },
      {
        image: 'https://cdn-img.prettylittlething.com/e/4/0/e/e40e283e4b1b6fe8d087757420a5952ec078665e_CNL9411_1_sage_textured_sheer_floral_lace_corset.jpg?imwidth=600',
        title: 'Sage Textured Sheer Floral Lace Corset',
        price: '$28.00',
      },
      {
        image: 'https://cdn-img.prettylittlething.com/b/2/1/5/b215c1aca504c564f83ec316d158393020be9782_cng7945_1.jpg?imwidth=600',
        title: 'Black Stretch Woven Contrast Tiered Shift Dress',
        price: '$25.00',
      },
      {
        image: 'https://cdn-img.prettylittlething.com/6/6/4/c/664c81d5c86940e2b65c2663c428a02f1f79ab99_cnf3371_2.jpg?imwidth=600',
        title: 'Champagne Stretch Satin Split Side Maxi Skirt',
        price: '$20.00',
      },
    ];


    useEffect(() => {
      const container = scrollRef.current;
      const handleScroll = () => {
        const containerRect = container.getBoundingClientRect();
        const imgs = container.querySelectorAll('.img');

        imgs.forEach((img) => {
          const imgRect = img.getBoundingClientRect();
          const offsetFromCenter =
            imgRect.left + imgRect.width / 2 - (containerRect.left + containerRect.width / 2);
          const parallaxOffset = offsetFromCenter * -0.1; // adjust strength here
          img.style.transform = `translateX(${parallaxOffset}px)`;
        });
      };

      container.addEventListener('scroll', handleScroll);
      handleScroll(); // initial call

      return () => container.removeEventListener('scroll', handleScroll);
    }, [products]);

    return (
     <>
     <div className='collections-rapid'>
      <h2 className="collections-title">
  Our <span className="italic-highlight">Selection</span> of Favourite
</h2>
<div className="collections-container">
  <div className="vertical-text">Shop All <br /> Products</div>
  <div className="collections-scroll" ref={scrollRef}>
    {products.map((item, idx) => (
      <div className="collections-card-wrapper" key={idx}>
        <div className="product-index">{`00${idx + 1}`}</div>
        <div className="collections-card">
          <div className="img-wrapper">
            <div className="img" style={{ backgroundImage: `url(${item.image})` }} />
          </div>
        </div>
        <div className="product-details">
                <h4>{item.title}</h4>
                <p className="price">{item.price}</p>
          </div>
      </div>
    ))}
  </div>
</div>
</div>
     </>
    );
  };

  export default Collections;
