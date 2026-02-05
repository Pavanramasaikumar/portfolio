import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Gayatri Vidya Parishad College of Engineering",
      duration: "2023-2027",
      grade: "CGPA: 8.6/10"
    },
    {
      degree: "12th (Senior Secondary)",
      institution: "State Board",
      duration: "2021-2023",
      grade: "97%"
    },
    {
      degree: "10th (Secondary)",
      institution: "State Board",
      duration: "2020-2021",
      grade: "95%"
    }
  ];

  return (
    <div id="education" className="pb-16 border-b border-gray-300">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.0 }}
        className="my-20 text-4xl text-center"
      >
        Education🎓
      </motion.h1>
      
      {educationData.map((edu, index) => (
        <motion.section 
          key={index}
          className="mb-6 text-center"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}  // Adding delay to stagger the animations
        >
          <motion.h2 
            className="mb-1 text-2xl font-bold"
            whileHover={{ scale: 1.05 }}  // Optional hover effect
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {edu.degree}
          </motion.h2>
          <motion.p 
            className="mb-1"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {edu.institution}
          </motion.p>
          <motion.p 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {edu.duration}
          </motion.p>
          <motion.p 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {edu.grade}
          </motion.p>
        </motion.section>
      ))}
    </div>
  );
};

export default Education;

