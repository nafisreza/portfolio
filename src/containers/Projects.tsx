import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { Wrapper } from '../components';
import { projectsSection } from '../utils/portfolio';
import { getSectionAnimation } from '../animations';

const Projects = () => {
  const { projects, title } = projectsSection;

  return (
    <Wrapper id="projects" animate={false}>
      <h2 className="heading-secondary flex items-center gap-4"><span className="text-[24px] text-accent font-mono">03.</span> {title} <div className="h-[1px] w-32 md:w-60 bg-gray-100/30"></div> </h2>
      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id} 
            {...getSectionAnimation}
          >
            <div className="relative">
              {/* Project Container */}
              <div className={`flex flex-col lg:flex-row items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Image Container - Takes up more space */}
                <div className="w-full lg:w-2/3 relative group">
                  <div className="relative h-[250px] md:h-[360px] rounded overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                   
                  </div>
                </div>

                {/* Content Container - Positioned absolutely for overlap */}
                <div className={`w-full lg:w-1/2 md:absolute lg:relative top-0 h-full flex `}>
                  <div className={`p-6 md:p-8 rounded-lg self-center
                    ${index % 2 === 0 ? 'lg:-ml-24 md:text-right text-center' : 'lg:-mr-24 md:text-left text-center'} 
                    md:relative z-10 max-w-xl`}
                  >
                    <h2 className="md:text-xl text-dark-1 font-bold mb-4">{project.name}</h2>
                    <div className="bg-[#112240] p-6 rounded-lg text-text-secondary text-sm mb-4">
                      {project.description}
                    </div>
                    <div className="font-mono text-sm space-x-4 text-accent mb-6">
                      {project.tags.map(tag => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <div className={`flex space-x-4 ${index % 2 === 0 ? 'md:justify-end justify-center' : 'md:justify-start justify-center'}`}>
                      {project.repo && (
                        <a 
                          href={project.repo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors"
                        >
                          <Icon icon="tabler:brand-github" width={24} height={24} />
                        </a>
                      )}
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors"
                      >
                        <Icon icon="ci:external-link" width={24} height={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Projects;
