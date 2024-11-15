import { motion } from 'framer-motion';
import { Tablist } from '../components';
import { getSectionAnimation } from '../animations';
import { experienceSection } from '../utils/portfolio';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="py-24 max-w-2xl mx-auto"
      {...getSectionAnimation}
    >
      <h2 className="heading-secondary flex items-center gap-4"><span className="text-[24px] text-accent font-mono">02.</span> {experienceSection.title} <div className="h-[1px] w-32 md:w-60 bg-gray-100/30"></div> </h2>

      <Tablist experiences={experienceSection.experiences} />
    </motion.section>
  );
};

export default Experience;
