const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "assets/images/[name][hash][ext]"
    },
    plugins: [        
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: "./src/assets/images/logo/favicon.png"
        }),
        new HtmlWebpackPlugin({
            filename: "about.html",
            template: "./src/about.html"
        }),
        new HtmlWebpackPlugin({
            filename: "skills.html",
            template: "./src/skills.html"
        }),
        new HtmlWebpackPlugin({
            filename: "work.html",
            template: "./src/work.html"
        }),
        new HtmlWebpackPlugin({
            filename: "contact.html",
            template: "./src/contact.html"
        }),
        
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
});