export default [
  {
    name: "thesojourn",
    match: ["https://thesojourn.co"],
    state: {
      frontity: {
        url: "https://test.frontity.org",
        title: "Test Frontity Blog",
        description: "WordPress installation for Frontity development"
      }
    },
    packages: [
      {
        name: "sojourn"
      },
      {
        name: "@frontity/wp-source",
        state: {
          source: {
            url: "https://test.frontity.org",
            postTypes: [
              {
                type: "destinations",
                endpoint: "destinations",
                archive: "/destinations"
              }
            ]
          }
        }
      },
      "@frontity/tiny-router",
      "@frontity/html2react"
    ]
  },
  {
    name: "edwinsmith",
    match: ["https://edwinsmith.org"],
    packages: [
      {
        name: "edwinsmith"
      },
      "@frontity/tiny-router",
      "@frontity/html2react"
    ]
  }
]
