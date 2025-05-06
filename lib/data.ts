export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Certificate {
  id: number;
  title: string;
  organization: string;
  date: string;
  image: string;
}

export interface Skill {
  id: number;
  name: string;
  logo: string;
  category: 'frontend' | 'backend' | 'other';
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js, including product catalog, cart, and checkout functionality.',
    image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://github.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A task management application built with React and Firebase, featuring real-time updates and user authentication.',
    image: 'https://images.pexels.com/photos/6956353/pexels-photo-6956353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://github.com'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current weather conditions and forecasts for multiple locations.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://github.com'
  },
  {
    id: 4,
    title: 'Fitness Tracking App',
    description: 'A fitness tracking application that helps users track their workouts, set goals, and monitor their progress.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://github.com'
  },
  {
    id: 5,
    title: 'Recipe Finder',
    description: 'A recipe finder application that allows users to search for recipes by ingredients, cuisine, or dietary restrictions.',
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://github.com'
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with Next.js and TailwindCSS to showcase projects and skills.',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://github.com'
  }
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    organization: 'Udemy',
    date: 'March 2022',
    image: 'https://images.pexels.com/photos/8636666/pexels-photo-8636666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    title: 'React - The Complete Guide',
    organization: 'Coursera',
    date: 'January 2021',
    image: 'https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    title: 'UI/UX Design Fundamentals',
    organization: 'Design School',
    date: 'November 2020',
    image: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    title: 'Advanced JavaScript',
    organization: 'Frontend Masters',
    date: 'July 2020',
    image: 'https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const skills: Skill[] = [
  {
    id: 1,
    name: 'HTML',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    category: 'frontend'
  },
  {
    id: 2,
    name: 'CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    category: 'frontend'
  },
  {
    id: 3,
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    category: 'frontend'
  },
  {
    id: 4,
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    category: 'frontend'
  },
  {
    id: 5,
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    category: 'frontend'
  },
  {
    id: 6,
    name: 'Next.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    category: 'frontend'
  },
  {
    id: 7,
    name: 'Tailwind CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    category: 'frontend'
  },
  {
    id: 8,
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    category: 'backend'
  },
  {
    id: 9,
    name: 'Express',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    category: 'backend'
  },
  {
    id: 10,
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    category: 'backend'
  },
  {
    id: 11,
    name: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    category: 'backend'
  },
  {
    id: 12,
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    category: 'other'
  },
  {
    id: 13,
    name: 'Docker',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    category: 'other'
  },
  {
    id: 14,
    name: 'Figma',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    category: 'other'
  },
  {
    id: 15,
    name: 'Firebase',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    category: 'backend'
  },
  {
    id: 16,
    name: 'Redux',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    category: 'frontend'
  }
];