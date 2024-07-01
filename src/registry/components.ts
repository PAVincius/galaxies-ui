import { Registry } from "./schema";

const atoms: Registry = [
  {
    name: "h1",
    type: "components:atoms",
    dependencies: ["h1"],
    files: ["atoms/h1.tsx"],
  },
  {
    name: "h2",
    type: "components:atoms",
    dependencies: ["h2"],
    files: ["atoms/h2.tsx"],
  },
  {
    name: "h3",
    type: "components:atoms",
    dependencies: ["h3"],
    files: ["atoms/h3.tsx"],
  },
  {
    name: "h4",
    type: "components:atoms",
    dependencies: ["h4"],
    files: ["atoms/h4.tsx"],
  },
  {
    name: "p",
    type: "components:atoms",
    dependencies: ["p"],
    files: ["atoms/p.tsx"],
  },
  {
    name: "blockquote",
    type: "components:atoms",
    dependencies: ["blockquote"],
    files: ["atoms/blockquote.tsx"],
  },
];

const molecules: Registry = [
  {
    name: "button",
    type: "components:molecules",
    dependencies: ["button"],
    files: ["molecules/button.tsx"],
  },
]

const organisms: Registry = [
  {
    name: "file-upload",
    type: "components:organisms",
    dependencies: ["react-dropzone"],
    files: ["organisms/file-upload.tsx"],
  },
  {
    name: "multi-select",
    type: "components:organisms",
    dependencies: ["command", "cmdk"],
    files: ["organisms/multi-select.tsx"],
  },
  {
    name: "otp-input",
    type: "components:organisms",
    dependencies: ["react-otp-input"],
    files: ["organisms/otp-input.tsx"],
  },
  {
    name: "carousel",
    type: "components:organisms",
    dependencies: ["embla-carousel-react", "embla-carousel"],
    files: ["organisms/carousel.tsx"],
  },
  {
    name: "breadcrumb",
    type: "components:organisms",
    dependencies: ["Button", "@radix-ui/react-popover"],
    files: ["organisms/breadcrumb.tsx"],
  },
  {
    name: "image-carousel-upload",
    type: "components:organisms",
    dependencies: ["react-dropzone", "embla-carousel-react", "embla-carousel"],
    files: ["organisms/image-carousel-upload.tsx"],
  },
];

const demos: Registry = [
  {
    name: "button-demo",
    type: "components:molecules:demo",
    registryDependencies: ["button"],
    files: ["example/button-demo.tsx"],
  },
  {
    name: "file-upload-demo",
    type: "components:organisms:demo",
    registryDependencies: ["file-upload"],
    files: ["example/file-upload-demo.tsx"],
  },
  {
    name: "multi-select-demo",
    type: "components:organisms:demo",
    registryDependencies: ["multi-select"],
    files: ["example/multi-select-demo.tsx"],
  },
  {
    name: "otp-input-demo",
    type: "components:organisms:demo",
    registryDependencies: ["otp-input"],
    files: ["example/otp-input-demo.tsx"],
  },
  {
    name: "carousel-demo",
    type: "components:organisms:demo",
    registryDependencies: ["carousel"],
    files: ["example/carousel-demo.tsx"],
  },
  {
    name: "breadcrumb-demo",
    type: "components:organisms:demo",
    registryDependencies: ["breadcrumb"],
    files: ["example/breadcrumb-demo.tsx"],
  },
  {
    name: "tree-view-demo",
    type: "components:organisms:demo",
    registryDependencies: ["tree-view"],
    files: ["example/tree-view-demo.tsx"],
  },
  {
    name: "typography-demo",
    type: "components:atoms:demo",
    registryDependencies: ["typography-demo"],
    files: ["example/typography-demo.tsx"],
  },
  {
    name: "shadow-demo",
    type: "components:atoms:demo",
    registryDependencies: ["shadow-demo"],
    files: ["example/shadow-demo.tsx"],
  },
  {
    name: "colors-demo",
    type: "components:atoms:demo",
    registryDependencies: ["colors-demo"],
    files: ["example/colors-demo.tsx"],
  },
];

const examples: Registry = [
  {
    name: "carousel-orientation",
    type: "components:example",
    registryDependencies: ["carousel"],
    files: ["example/carousel/carousel-orientation.tsx"],
  },
  {
    name: "carousel-plugin",
    type: "components:example",
    registryDependencies: ["carousel"],
    files: ["example/carousel/carousel-plugin.tsx"],
  },
  {
    name: "carousel-indicator",
    type: "components:example",
    registryDependencies: ["carousel"],
    files: ["example/carousel/carousel-indicator.tsx"],
  },
  {
    name: "carousel-rtl-support",
    type: "components:example",
    registryDependencies: ["carousel"],
    files: ["example/carousel/carousel-rtl-support.tsx"],
  },
  {
    name: "multi-select-state",
    type: "components:example",
    registryDependencies: ["multi-select"],
    files: ["example/multi-select/multi-select-state.tsx"],
  },
  {
    name: "multi-select-zod",
    type: "components:example",
    registryDependencies: ["multi-select"],
    files: ["example/multi-select/multi-select-zod.tsx"],
  },
  {
    name: "otp-input-zod",
    type: "components:example",
    registryDependencies: ["otp-input"],
    files: ["example/otp-input/otp-input-zod.tsx"],
  },
  {
    name: "file-upload-dropzone",
    type: "components:example",
    registryDependencies: ["file-upload"],
    files: ["example/file-upload/file-upload-dropzone.tsx"],
  },
  {
    name: "file-upload-zod",
    type: "components:example",
    registryDependencies: ["file-upload"],
    files: ["example/file-upload/file-upload-zod.tsx"],
  },
  {
    name: "breadcrumb-separator",
    type: "components:example",
    registryDependencies: ["breadcrumb"],
    files: ["example/breadcrumb/breadcrumb-separator.tsx"],
  },
  {
    name: "breadcrumb-variants",
    type: "components:example",
    registryDependencies: ["breadcrumb"],
    files: ["example/breadcrumb/breadcrumb-variants.tsx"],
  },
  {
    name: "breadcrumb-popover",
    type: "components:example",
    registryDependencies: ["breadcrumb"],
    files: ["example/breadcrumb/breadcrumb-popover.tsx"],
  },
  {
    name: "breadcrumb-active",
    type: "components:example",
    registryDependencies: ["breadcrumb"],
    files: ["example/breadcrumb/breadcrumb-active.tsx"],
  },
  {
    name: "breadcrumb-orientation",
    type: "components:example",
    registryDependencies: ["breadcrumb"],
    files: ["example/breadcrumb/breadcrumb-orientation.tsx"],
  },
  {
    name: "tree-view-guide",
    type: "components:example",
    registryDependencies: ["tree-view-api"],
    files: ["example/tree-view/tree-view-guide.tsx"],
  },
  {
    name: "image-carousel-upload-example",
    type: "components:example",
    registryDependencies: ["image-carousel-upload"],
    files: ["example/image-carousel-upload-example.tsx"],
  },
];

export const registry: Registry = [...atoms, ...molecules, ...organisms, ...demos, ...examples];
