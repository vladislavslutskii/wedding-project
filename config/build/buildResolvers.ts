
import { Configuration } from "webpack";
import * as path from "path";
import { BuildOptions } from "./types/types";

export function buildResolvers(options: BuildOptions): Configuration["resolve"] {
  return {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".jpg", ".png", ".gif", ".svg"],
    alias: {
      "@assets": path.resolve(__dirname, "../../src/assets"),
      "@components": path.resolve(__dirname, "../../src/components")
    }
  };
}
