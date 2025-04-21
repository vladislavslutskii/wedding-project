
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildOptions } from "./types/types";
import { ModuleOptions } from "webpack";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  

  
  const assetLoader = {
        test: /\.(png|jpe?g|gif|svg)$/i,
      type: "asset/resource"
  };
  const svgLoader = {
    test: /\.svg$/,
  use: ["@svgr/webpack"]
  }
  const cssLoaderWithModules = {

    loader: "css-loader",
    options: {
      esModule: true,
      modules: {
        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8}",

      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Создает узлы `style` из строк JS
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Переводит CSS в CommonJS
      cssLoaderWithModules,
      // Компилирует Sass в CSS
      "sass-loader",
    ],
  };
  const tsLoader = {
    //   ts-loader умпеет рабоать с jsx
    //     Если бы мы не использовали тайпскрипт нубыл был бы babel
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  

  return [scssLoader, tsLoader, assetLoader,svgLoader ];
}
