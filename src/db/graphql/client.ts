import { cacheExchange, createClient, fetchExchange } from "@urql/core";

const client = createClient({
  url: `${import.meta.env.API_URL}/graphql`,
  requestPolicy: "cache-and-network",
  exchanges: [fetchExchange, cacheExchange],
  fetchOptions: () => {
    return {
      headers: { authorization: `Bearer ${import.meta.env.API_TOKEN}` },
    };
  },
});

export default client;
