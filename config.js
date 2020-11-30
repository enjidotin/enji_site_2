module.exports = {
  pathPrefix: '',
  siteUrl: 'https://enji.in',
  siteTitle: 'Naman Garg',
  siteDescription: 'Product Developer DevOps Engineer',
  author: 'Naman Garg',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://enji-2.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    resume: 'resume',
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/superBaniya',
    facebook: 'https://www.facebook.com/',
    twitter: 'https://twitter.com/superbaniya',
    instagram: 'https://www.instagram.com/superbaniya/',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/0e15ff8e-dd0e-495d-b9b2-14418e7523b4',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  tags: {
    career: {
      name: 'career',
      description: 'a career is defined as a person\'s life\'s work. we spend more time trying to defining it than working.',
      color: '#f9c646',
    },


  },
};
