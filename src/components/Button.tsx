import Link from 'next/link';
import { motion, MotionProps } from 'framer-motion';
import { removeKeys } from '../utils/helper';

interface DefaultProps {
  children: React.ReactNode | string;
  className?: string;
  variant?: 'solid' | 'outlined';
  size?: 'lg' | 'sm';
  center?: boolean;
}

interface LinkProps extends DefaultProps {
  href: string;
  sameTab?: boolean;
}

interface ButtonProps extends DefaultProps {
  onClick?: (event: React.MouseEvent) => void;
}

type Props =
  | ({
      type?: 'button';
    } & ButtonProps)
  | ({
      type: 'link';
    } & LinkProps);

// For separating animation props from button props
const buttonProps: Array<keyof Props | keyof LinkProps> = [
  'center',
  'children',
  'className',
  'size',
  'variant',
  'type',
  'href',
];

const Button = (props: Props & MotionProps) => {
  const {
    className,
    children,
    type = 'button',
    variant = 'solid',
    size = 'sm',
    center = false,
    ...rest
  } = props;

  const classes = `${
    size === 'sm'
      ? 'p-2 px-4 text-sm border-[1.5px] '
      : 'text-sm p-4 px-6 border-2'
  } block ${
    center ? 'mx-auto' : ''
  } w-fit font-mono capitalize rounded border-accent text-accent hover:bg-accent-light focus:outline-none focus:bg-accent-light duration-300 cursor-pointer hover:-translate-y-1 ${className}`;

  // TODO: Needs to improve this framer motion logic
  if (props.type === 'link') {
    const { sameTab, ...motionProps } = props;
    removeKeys<Props & LinkProps>(motionProps, buttonProps);

    return (
      <motion.span {...motionProps}>
        <Link
          className={classes}
          href={props.href}
          target={sameTab ? '_self' : '_blank'}
          rel="noopener noreferrer"
        >
          {children}
        </Link>
      </motion.span>
    );
  }

  if (type == 'button') {
    return (
      <button type={type} className={classes} onClick={props.onClick}>
        {children}
      </button>
    );
  }

  return <></>;
};

export default Button;
