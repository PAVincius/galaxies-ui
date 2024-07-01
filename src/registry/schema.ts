import { z } from "zod";

export const registrySchema = z.array(
  z.object({
    name: z.string(),
    dependencies: z.array(z.string()).optional(),
    devDependencies: z.array(z.string()).optional(),
    registryDependencies: z.array(z.string()).optional(),
    files: z.array(z.string()),
    type: z.enum([
      "components:atoms",
      "components:molecules",
      "components:organisms",
      "components:templates",
      "components:pages",
      "components:atoms:demo",
      "components:molecules:demo",
      "components:organisms:demo",
      "components:templates:demo",
      "components:pages:demo",
      "components:example",
      "components:disabled",
    ]),
  })
);

export type Registry = z.infer<typeof registrySchema>;
