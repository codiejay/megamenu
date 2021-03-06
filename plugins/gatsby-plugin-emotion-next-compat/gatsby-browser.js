import * as React from "react";
import { cache } from "@emotion/css";
import { CacheProvider } from "@emotion/react";

export const wrapRootElement = ({ element }) => (
  <CacheProvider value={cache}>{element}</CacheProvider>
);
