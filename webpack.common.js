const path = require("path");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: {
                    loader: "html-loader-srcset",
                    options: {
                        attrs: [':src', ':srcset']
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource'
            },        
        ],
    },
}