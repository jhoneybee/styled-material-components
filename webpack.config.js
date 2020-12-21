const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default
const styledComponentsTransformer = createStyledComponentsTransformer()

module.exports = {
    entry: './docs/app.tsx',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
                    },
                },
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
