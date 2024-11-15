type Props = {
  children: React.ReactNode;
  className?: string;
  href: string;
};

const SocialLink = ({ href, children, className = '' }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`block text-sm p-2.5 hover:text-accent hover:-translate-y-1 focus:outline-none focus:text-accent focus:-translate-y-1 duration-300 ease-in-out ${className}`}
    >
      {children}
    </a>
  );
};

export default SocialLink;
