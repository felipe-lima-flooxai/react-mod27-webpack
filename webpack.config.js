const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: "./ex/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    devServer: {
        port: 8080,
        static: {
            directory: path.join(__dirname, "public")
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/, // ou /\.jsx?$/ se quiser incluir JSX
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    }
}
