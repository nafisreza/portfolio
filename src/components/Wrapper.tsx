import { ReactNode, HTMLAttributes, ElementType } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface Props extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  id?: string;
  animate?: boolean;
}

const Wrapper = ({
  children,
  as = 'section',
  className = '',
  id = '',
  animate = true,
  ...rest
}: Props & MotionProps) => {
  if (animate) {
    const MotionTag = motion(as);

    return (
      <MotionTag id={id} className={`py-14 md:py-20 ${className}`} {...rest}>
        {children}
      </MotionTag>
    );
  }

  if (as === 'section') {
    return (
      <motion.section
        id={id}
        className={`py-16 md:py-24 ${className}`}
        {...rest}
      >
        {children}
      </motion.section>
    );
  }

  const CustomTag = `${as}` as ElementType;

  return (
    <CustomTag id={id} className={`py-20 md:py-28 ${className}`} {...rest}>
      {children}
    </CustomTag>
  );
};

export default Wrapper;
