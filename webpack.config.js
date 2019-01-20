const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader', 'eslint-loader']
            },
        ]
    }
}

module.exports = (env, options) => {
    let production = options.mode === 'production'
    config.devtool = production ? false : 'source-map' 

    return config;
}