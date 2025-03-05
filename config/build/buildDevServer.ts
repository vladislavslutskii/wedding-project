import { BuildOptions } from "config/build/types/types";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    open: true,
    port: options.port ?? 5000,
  };
}
