export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61bcd691c2295a1c491d479e",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-4sr7fnia",
                  apiId: "79a76137-a3c0-4d73-836b-8c7a1f8ead09",
                },
                {
                  buildHookId: "61bcd691856b540094b985a4",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-f75wwxwr",
                  apiId: "536af764-93aa-412e-933f-81d9442a3918",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Bushraaltaf/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-f75wwxwr.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
