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
                    "616f36c77c6df300b1331034",
                  title: "Sanity Studio",
                  name: "savemeabook-studio",
                  apiId: "89f71634-aeb1-4c01-8aa0-c2ce4240f635",
                },
                {
                  buildHookId: "616f36c7a8d48719b07ed6b3",
                  title: "Blog Website",
                  name: "savemeabook",
                  apiId: "626c4771-8c3a-4fa0-9274-ffd8aeb68e27",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Jdbain67/saveMeABook",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://savemeabook.netlify.app",
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
