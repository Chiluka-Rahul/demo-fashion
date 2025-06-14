
import { motion } from 'framer-motion';
import './Image.css';
import { opacity } from '../anim';

export default function Image({ src, selectedLink }) {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={selectedLink?.isActive ? 'open' : 'closed'}
      className="imageContainer"
    >
      <img
        src={`${src}`}
        alt="visual"
        className="img"
      />
    </motion.div>
  );
}
