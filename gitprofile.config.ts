// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'TanmayBundiwal', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 12, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['TanmayBundiwal/cosmic-dashboard', 'TanmayBundiwal/DeathRowViz', 'TanmayBundiwal/StudentQueryGrade'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Tanmay Bundiwal',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'tbundiwal',
    // twitter: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    // researchGate: '',
    // facebook: '',
    // instagram: '',
    // youtube: '', // example: 'pewdiepie'
    // dribbble: '',
    // behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    // stackoverflow: '', // example: '1/jeff-atwood'
    // skype: '',
    // telegram: '',
    // website: 'https://www.arifszn.com',
    // phone: '',
    email: 'bundiwal[at]icloud[dot]com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'D3.js',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
    'Docker',
    'CSS',
    'AWS',
  ],
  experiences: [
    {
      company: 'Rama Retro Marks PVT LTD',
      position: 'Financial Strategy Consultant',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://linkedin.com/company/rama-retromarks-private-limited',
    },
    {
      company: 'Rama Retro Reflectives',
      position: 'Business Strategy Consultant & Sign Board Designer',
      from: 'May 2023',
      to: 'Present',
      companyLink: 'https://linkedin.com/company/rama-retro-reflectives',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Cloud Practioner',
      body: 'Amazon Web Services (AWS)',
      year: 'February 2024',
      link: 'https://www.credly.com/badges/871d2e2e-4dec-43f0-8371-4f113cd7b4c5/linked_in_profile',
    },
    {
      name: 'Agile with Atlassian Jira',
      body: 'Atlassian University',
      year: 'December 2023',
      link: 'https://www.coursera.org/account/accomplishments/certificate/9EKVCGFGSBE7',
    },
    {
      name: 'SaaS MasterClass: Sales, Marketing & Growth Metrics',
      body: 'Udemy',
      year: 'November 2023',
      link: 'https://www.udemy.com/certificate/UC-4a70ee6f-89c5-4301-aac0-ac5fc46c6f03/',
    },
    {
      name: 'Containerization using Docker',
      body: 'Coursera',
      year: 'April 2024',
      link: 'https://www.coursera.org/account/accomplishments/certificate/GKKBSWFM2UQV',
    },
    {
      name: 'Tools of the Trade: Linux CLI & SQL',
      body: 'Google',
      year: 'March 2024',
      link: 'https://www.coursera.org/account/accomplishments/certificate/7L27YSXSYGZ3',
    },
    {
      name: 'Node.js Backend Best Practices',
      body: 'Coursera',
      year: 'December 2023',
      link: 'https://www.coursera.org/account/accomplishments/certificate/2WVXCBP2PX5X',
    },
    {
      name: 'AWS Cloud Essentials',
      body: 'Amazon Web Services (AWS)',
      year: 'January 2024',
      link: 'https://www.credly.com/badges/6c391d37-a23e-483b-977b-bd5aa1f5109e/linked_in_profile',
    },
    {
      name: 'What is Data Science?',
      body: 'IBM',
      year: 'January 2019',
      link: 'https://www.coursera.org/account/accomplishments/certificate/V9BEJ758EGM3',
    },
    {
      name: '*Currently Pursuing* AWS Certified Solutions Architect - Associate',
      body: 'Amazon Web Services (AWS)',
      // year: 'January 2019',
      // link: 'https://www.coursera.org/account/accomplishments/certificate/V9BEJ758EGM3',
    },
    {
      name: '*Currently Pursuing* Financial Markets',
      body: 'Yale University',
      // year: 'January 2019',
      // link: 'https://www.coursera.org/account/accomplishments/certificate/V9BEJ758EGM3',
    },
  ],
  educations: [
    {
      institution: 'University of British Columbia - UBC Vancouver',
      degree: 'Bachelor of Science in Computer Science',
      from: '2020',
      to: '2023',
    },
    {
      institution: 'International Center for Applied Sciences - ICAS Manipal',
      degree: 'Bachelor of Science in Computer Science',
      from: '2018',
      to: '2020',
    },
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
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
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
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
      class="text-primary" href="https://github.com/TanmayBundiwal"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
