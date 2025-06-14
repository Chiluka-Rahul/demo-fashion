import './Productsgallery.css';

const StaticImage = ({ src, alt }) => (
  <div className="ecomm-image-container">
    <div className="ecomm-image-inner-container">
      <div className="ecomm-image">
        <img src={src} alt={alt} />
      </div>
    </div>
  </div>
);

export default function Productsgallery() {
  return (
    <div className="gallery-wrapper">
      <div className="gallery-left">
        <StaticImage
          src="https://cdn.prod.website-files.com/63cffb7c16ab3347fc9734c8/63d2279606000f5f8a92b792_home-hero.webp"
          alt="Main Side Image"
        />
      </div>
      <div className="gallery-right">
        <div className="right-top">
          <StaticImage
            src="https://adoore.se/cdn/shop/files/Ossi-black-block_2a341e11-01fc-4bda-904b-fba11f1d69e7.jpg?v=1749450216&width=1540"
            alt="Side Column Image 1"
          />
        </div>
        <div className="right-bottom">
          <StaticImage
            src="https://adoore.se/cdn/shop/files/Sicily-yellow-block.jpg?v=1749450216&width=1540"
            alt="Side Column Image 2"
          />
        </div>
      </div>
    </div>
  );
}
