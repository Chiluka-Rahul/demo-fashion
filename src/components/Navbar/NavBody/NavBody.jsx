
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import './NavBody.css';
import { blur, translate } from '../anim';

// export default function NavBody({ links, selectedLink, setSelectedLink }) {

//     const getChars = (word) => {
//         let chars = [];
//         word.split("").forEach( (char, i) => {
//           chars.push(
//             <motion.span 
//                 custom={[i * 0.02, (word.length - i) * 0.01]} 
//                 variants={translate} initial="initial" 
//                 animate="enter" 
//                 exit="exit" 
//                 key={char + i}>
//                 {char}
//             </motion.span>
//             )
//         })
//         return chars;
//     }

//   return (
//     <div className="navbody">
//       {links.map((link, index) => {
//         const { title, href } = link;
//         return (
//           <Link key={`l_${index}`} to={href}>
//             <motion.p
//               onMouseOver={() => setSelectedLink({ isActive: true, index })}
//               onMouseLeave={() => setSelectedLink({ isActive: false, index })}
//               variants={blur}
//               animate={
//                 selectedLink.isActive && selectedLink.index !== index
//                   ? "open"
//                   : "closed"
//               }
//             >
//               {getChars(title)}
//             </motion.p>
//           </Link>
//         );
//       })}
//     </div>
//   );
// }

export default function NavBody({ links, selectedLink, setSelectedLink }) {
  const getChars = (word) => {
    return word.split("").map((char, i) => (
      <motion.span
        custom={[i * 0.02, (word.length - i) * 0.01]}
        variants={translate}
        initial="initial"
        animate="enter"
        exit="exit"
        key={char + i}
      >
        {char}
      </motion.span>
    ));
  };

  let itemIndex = 0; 

  return (
    <div className="navbody-columns">
      {links.map((group, groupIndex) => (
        <div className="nav-column" key={`group_${groupIndex}`}>
          <h4>{group.category}</h4>
          {group.items.map((link, linkIndex) => {
            const currentIndex = itemIndex;
            itemIndex++;
            return (
              <Link key={`l_${groupIndex}_${linkIndex}`} to={link.href}>
                <motion.p
                  onMouseOver={() =>
                    setSelectedLink({ isActive: true, index: currentIndex })
                  }
                  onMouseLeave={() =>
                    setSelectedLink({ isActive: false, index: currentIndex })
                  }
                  variants={blur}
                  animate={
                    selectedLink.isActive && selectedLink.index !== currentIndex
                      ? "open"
                      : "closed"
                  }
                >
                  {getChars(link.title)}
                </motion.p>
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
}
