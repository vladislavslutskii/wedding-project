import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/types";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;
  const isDev = mode === "development";

  return {
    mode: mode ?? "development",
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? "eval-cheap-module-source-map" : "source-map",
    devServer: isDev ? buildDevServer(options) : undefined,
    optimization: {
        splitChunks: {
            chunks: 'all', // Разделяет как синхронные, так и асинхронные chunks
        },
    },
     performance: {
        hints: false, // Отключить предупреждения о производительности
        maxEntrypointSize: 800000, // Увеличить допустимый размер точки входа (в байтах)
        maxAssetSize: 800000, // Увеличить допустимый размер одного файла
    },
  };
}
