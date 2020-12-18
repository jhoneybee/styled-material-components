const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './docs/app.tsx',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'docs.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'styled-material-components',
            template: path.resolve(__dirname, './docs/pages/document.ejs'),
        }),
    ],
}
