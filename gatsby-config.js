const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Luden`,
    seoTitle: `Luden is a great theme`,
    description: `Luden is a great theme`,
    author: `@tsaristbomba`,
    image: "/june.png",
    logo: "logo.svg",
    form: false,
    svgImgs: false,
    attach: false,
    themes: {
      light: {
        title: "light",
        colors: {
          primary: "#FFA729", // Brand color
          primaryDark: "#B36900",
          primaryLight: "#D8D6D6", // H
          secondary: "#B36900",
          secondaryLight: "#FFA729",
          neutralDark: "#2d2d2d", // Text color
          neutralMedium: "#D8D6D6", // Heavier medium (gotta be gray)
          neutralLight: "#fff", // bg color
        },
      },
      dark: {
        title: "dark",
        colors: {
          primary: "#B36900", // Brand color
          primaryDark: "#FFA729",
          primaryLight: "#484848", // H
          secondary: "#FFA729",
          secondaryLight: "#B36900",
          neutralDark: "#fff", // Text color
          neutralMedium: "#777777", // Heavier medium (gotta be gray)
          neutralLight: "#2d2d2d", // bg color
        },
      },
    },
    footerLinks: [
      {
        title: "Learn About Us",
        links: [
          { title: "About", slug: "#About" },
          {
            title: "Services",
            slug: "#Services",
          },
          { title: "Team", slug: "#Team" },
          { title: "Contact", slug: "#Contact" },
          { title: "Plans", slug: "#Plans" },
          { title: "FAQ", slug: "#FAQ" },
          { title: "Newsletter", slug: "#Banner" },
        ],
      },
      {
        title: "Legal",
        links: [
          { title: "Terms & Conditions", slug: "terms-conditions" },
          { title: "Privacy Policy", slug: "privacy-policy" },
        ],
      },
    ],
    navLinks: [
      {
        name: "About Us",
        slug: "about",
      },
      {
        name: "Services",
        slug: "services",
      },
      {
        name: "Team",
        slug: "team",
      },
      {
        name: "FAQ",
        slug: "faq",
      },
    ],
    socials: [
      { title: "INSTAGRAM", link: "https://instagram.com/archilect" },
      { title: "YOUTUBE", link: "https://youtube.com/pewdiepie" },
      { title: "TWITTER", link: "https://twitter.com/naval" },
      { title: "WHATSAPP", link: "https://twitter.com/naval" },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/gatsby-theme-luden/images/icon.jpeg`, // This path is relative to the root of the site.
      },
    },
    { resolve: "@teefe/gatsby-theme-luden", options: {} },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
