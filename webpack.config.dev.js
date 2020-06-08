const webpack = require("webpack");
const path = require("path");
const autoprefixer = require('autoprefixer');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    context: __dirname,

    output: {
        publicPath: "//localhost:8001/",
        filename: "material-ui-theme-[name].js"
    },

    entry: {
        "main": [
            path.join(__dirname, "src/app/app.scss"),
            path.join(__dirname, "src/app/app.js"),
        ],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                }
            },

            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "material-ui-theme.css",
                        },
                    },
                    {
                        loader: "extract-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [autoprefixer()]
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            sassOptions: {
                                includePaths: ["./node_modules"]
                            },
                        },
                    },
                ]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],

    devtool: "inline-source-map",
    devServer: {
        inline: true,
        hot: true,
        publicPath: "/",
        port: 8001,
        disableHostCheck: true,
        host: "0.0.0.0"
    },
};