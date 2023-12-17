// gitprofile.config.js

const config = {
  github: {
    username: 'chrismar-dev', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'christian-mar',
    dev: '',
    phone: '',
    email: 'cjmarbury03@gmail.com',
  },
  resume: {
    fileUrl:
      'https://1drv.ms/b/s!AgAXHNvYj6Ijo2abZa_mbDvGCeKM?e=xmznt1', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Node.js',
    'Next.js',
    'Angular',
    'Java',
    'Python',
    'C++',
    'C#',
    'AWS',
    'Azure',
    'MySQL',
    'Git',
    'Docker',
    'Linux',
    'PHP',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Mount San Antonio College Information Technology',
      position: 'Software Engineer Intern',
      from: 'August 2022',
      to: 'March 2023',
      companyLink: 'https://www.mtsac.edu/it/',
    },
    {
      company: 'Mount San Antonio College Information Technology',
      position: 'Software Engineer Intern',
      from: 'March 2023',
      to: 'October 2023',
      companyLink: 'https://www.mtsac.edu/it/',
    },
  ],
  certifications: [
    {
      name: 'Intermediate Web Development, Spring 2024',
      body: 'CodePath',
      year: 'Spring 2024',
      link: 'https://www.codepath.org/'
    },
  ],
  education: [
    {
      institution: 'Santa Monica College',
      degree: 'BS Computer Science',
      from: '',
      to: '2025',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'DevPulse - Full Stack MERN Social Media App',
      description:
        'A place for computer science students and Interns to connect. Full Stack MERN application. Click to see the demo and github code ',
      imageUrl: 'https://cdn.discordapp.com/attachments/551947007564972057/1185490989419348060/image.png?ex=658fcd85&is=657d5885&hm=8fea57fd53b41178d31745872940bde3425ac116662f15508c60e12e29453bdb&',
      link: 'https://www.devpulsebycm.net',
    },
    {
      title: 'In Progress REST API | .NET',
      description:
        'A .NET 6 REST API that follows CRUD operations. Click to see github code and a demo',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png',
      link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3A.NET_Core_Logo.svg&psig=AOvVaw3TCEOh1whQBqratyBzMLEP&ust=1702909049535000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCy89rUloMDFQAAAAAdAAAAABAD',
    },
    {
      title: 'In Progress C++ OpenGL Graphics/Game Engine',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'In Progress Serverless AWS Management Tool',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
