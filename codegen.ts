import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [`${process.env.API_URL}/graphql`]: {
        headers: {
          authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      },
    },
  ],

  documents: "./src/db/graphql/queries.{gql,graphql}",
  generates: {
    "./src/db/graphql/types.ts": {
      config: {
        useTypeImports: true,
      },
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
    },
  },
};

export default config;
