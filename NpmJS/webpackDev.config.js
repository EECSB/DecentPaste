const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
    mode: "development",
    entry: ["./src/MonacoInterop.js", "./src/GunInterop.js"],
    output: {
        path: path.resolve(__dirname, "../wwwroot/js/webpack-bundle"),
        filename: "index.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                //Monaco's codicon font. This has to be an asset module rather than file-loader: under
                //webpack 5 file-loader hands back a JS module, which webpack then emits as an asset in its
                //own right — so the .ttf the CSS ends up pointing at contains that JS snippet instead of the
                //font, and the browser drops it ("downloadable font: rejected by sanitizer") leaving the
                //editor's icons as blank boxes. asset/resource emits the real binary and links to it.
                test: /\.ttf$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [new MonacoWebpackPlugin()],
    optimization: {
        //We don't want to minimize our code(while developing).
        minimize: false, //false
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                }
            })
        ]
    }
}