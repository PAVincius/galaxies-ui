export type DocsConfig = {
  title: string;
  description?: string;
  path?: string;
  pages?: DocsConfig[];
};

export const Pages: DocsConfig[] = [
  {
    title: "Docs",
    path: "/docs/introduction",
  },
  {
    title: "Components",
    path: "/components",
    pages: [
      {
        title: "Atoms",
        description: "Master the building blocks: inputs, buttons, labels, and icons.",
        path: "/components/atoms",
      },
      {
        title: "Molecules",
        description: "Combine atoms into functional units: forms, cards, and more.",
        path: "/components/molecules",
      },
      {
        title: "Organisms",
        description: "Build complex sections: headers, dashboards, and others.",
        path: "/components/organisms",
      },
      {
        title: "Templates",
        description: "Define page structure with complete layouts.",
        path: "/components/templates",
      },
      {
        title: "Pages",
        description: "Combine everything for interactive final interfaces!",
        path: "/components/pages",
      },
    ],
  },
  {
    title: "Builder",
    path: "/builder",
    pages: [
      {
        title: "Landing Pages",
        path: "/components/tree-view",
      },
      {
        title: "Institutional Sites",
        path: "/components/tree-view",
      },
      {
        title: "E-Commerce",
        path: "/components/tree-view",
      },
    ],
  },
];

export const docsConfig: DocsConfig[] = [
  {
    title: "Getting Started",
    pages: [
      {
        title: "Introduction",
        path: "/docs/introduction",
      },
      {
        title: "Installation",
        path: "/docs/installation",
      },
      {
        title: "Changelog",
        path: "/docs/changelog",
      },
    ],
  },
  {
    title: "Components",
    pages: [
      {
        title: "Atoms",
        path: "/docs/atoms",
      },
      {
        title: "Tree view",
        path: "/docs/tree-view",
      },
      {
        title: "Carousel",
        path: "/docs/carousel",
      },
      {
        title: "Multi select",
        path: "/docs/multi-select",
      },
      {
        title: "Breadcrumb",
        path: "/docs/breadcrumb",
      },
      {
        title: "Otp input",
        path: "/docs/otp-input",
      },
      {
        title: "File upload",
        path: "/docs/file-upload",
      },
    ],
  },
];
