const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path')

module.exports = ({ mode }) => ({
    mode: mode,
    entry: {
        index: './src/ts/index.ts',
        ratings: './src/ts/ratings.ts'
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, 'public/assets'),
        libraryTarget: 'umd',
        library: 'ratingPlugin',
        libraryExport: 'default'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: mode === 'production' ? false : "source-map",
    target: mode === 'production' ? "browserslist" : "web",
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.(s[ac]|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    devServer: {
        open: true,
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
        writeToDisk: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })
    ],
    performance: {
        hints: false
    }
})