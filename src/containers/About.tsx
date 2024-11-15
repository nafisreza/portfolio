import { useEffect, useState } from 'react';
import { HeroImage, ListItem, Wrapper } from '../components';
import { getSectionAnimation } from '../animations';
import { aboutSection, author } from '../utils/portfolio';
import { getId } from '../utils/helper';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary flex items-center gap-4"><span className="text-[24px] text-accent font-mono tracking-tighter">01.</span> {title} <div className="h-[1px] w-32 md:w-60 bg-gray-100/30"></div></h2>
      <main className="flex gap-16 items-center lg:items-start flex-col lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hey there! I'm Nafis. I taught myself to code when I was a
            high school freshman (while most were trying to survive algebra).
            Since then,  it's been a nonstop journey of leveling up and expanding my skill set.
          </p>
          <p>
            Recently, I've been diving into{' '}
            <span className="text-accent">open source</span> because, hey, it's
            time to give back. I've even contributed to some big names like{' '}
            <span className="text-accent">Apache</span>,{' '}
            <span className="text-accent">Web-PHP</span>, and{' '}
            <span className="text-accent">TypeHero</span>.
          </p>
          <p>
            On the side, I freelance on{' '}
            <span className="text-accent">Fiverr</span>, where I’ve teamed up with over 60 clients from 17 countries, turning their ideas into web realities.
          </p>
          <p>
            As for the startup world, I was a founding engineer at{' '}
            <span className="text-accent">Guideasy</span> — a remote travel
            startup, building the MVP from scratch. Now, Guideasy operates
            across 3 countries and serves 50K+ users monthly.
          </p>
          {list && (
            <>
              <p>{list.title}</p>
              <ul className="text-sm gap-1 grid grid-cols-2 md:w-2/3 font-mono">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <HeroImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
