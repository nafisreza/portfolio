import Image from 'next/image';
import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ProjectType } from '../types';
import { blurImageURL } from '../utils/config';

const ProjectCard = ({
  name,
  url,
  repo,
  description,
  img,
  tags,
  ...rest
}: ProjectType & MotionProps) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <motion.div {...rest} className="w-full">
      <div className="group h-full bg-bg-secondary rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={img}
            alt={name}
            width={400}
            height={300}
            placeholder="blur"
            blurDataURL={blurImageURL}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-bg-secondary/50 group-hover:bg-transparent transition-colors duration-300" />
        </div>
        
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-start">
            <h4 className="text-xl font-semibold group-hover:text-accent transition-colors">
              {name}
            </h4>
            <div className="flex space-x-3">
              {repo && (
                <a
                  href={repo}
                  className="hover:text-accent transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="tabler:brand-github" width={20} height={20} />
                </a>
              )}
              <a
                href={url}
                className="hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="ci:external-link" width={22} height={22} />
              </a>
            </div>
          </div>
          
          <p className="text-text-secondary text-sm">{description}</p>
          
          <div className="pt-2 flex flex-wrap gap-2">
            {tags.map(tag => (
              <span key={tag} className="text-xs font-mono text-accent">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  ) : null;
};

export default ProjectCard;
