import type { MockServerConfig } from "mock-config-server";

import { DATABASE } from "./mock";

const mockServerConfig: MockServerConfig = {
  baseUrl: "/api",
  staticPath: {
    path: "/mock/static",
    prefix: "/static",
  },
  database: {
    data: DATABASE,
    routes: {
      "/api/anime": "/animes",
      "/api/anime/:id": "/animes/:id",
    },
  },
};

export default mockServerConfig;
