
import { motion } from "framer-motion";

const iconvariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});
const Codingprofiles = () => {
  return (
    <div className="pb-24 border-b border-neutral-900 ">
      <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      
       className="my-20 text-4xl text-center">Coding Profiles 🎯</motion.h1>
      <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{ opacity:0, x:-100 }}
        transition={{ duration: 1.5 }}
      className="flex flex-wrap items-center justify-center gap-4">
    {/* GitHub */}
  <motion.a
   variants={iconvariants(0)}
   initial="initial"
   animate="animate"
  href="https://github.com/Pavanramasaikumar" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="GitHub" width="40" height="40"/>
  </motion.a>
  {/* LinkedIn */}
  <motion.a
  variants={iconvariants(0)}
  initial="initial"
  animate="animate"
  href="https://www.linkedin.com/in/pavan-rama-sai-kumar-siriginidi-57b1a1372/" target="_blank" rel="noreferrer">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg"  alt="LinkedIn" width="40" height="40"/>
</motion.a>
{/* Instagram */}
<motion.a
  variants={iconvariants(0)}
  initial="initial"
  animate="animate"
  href="https://www.instagram.com/pavan_naidu_sirigineedi" target="_blank" rel="noreferrer">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/instagram/instagram-original.svg" alt="Instagram" width="40" height="40" />
</motion.a>
    </motion.div>
    </div>
  )
}

export default Codingprofiles
