const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: '/'
    },
    devServer: {
        overlay: true
    },
    plugins: [
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin({ template: './public/index.html', inject: false }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ]
            }
        ]
    }
}

module.exports = (env, options) => {
    let production = options.mode === 'production'
    config.devtool = production ? false : 'source-map'

    return config;
}