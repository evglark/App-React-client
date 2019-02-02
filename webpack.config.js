const path = require('path');
const autoprefixerPlugin = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, options) => {
    let DEV = options.mode === 'development';
    let entry = {entry: path.resolve(__dirname, './src')};
    let output, devTools, devServer,
        moduleRulesUseCss, moduleRulesUseSass,
        optimization;

    const cssStyles = [
        {
            loader: 'css-loader',
            options: {
                sourceMap: true,
                sourceComments: true,
                importLoaders: 1,
            },
        }, {
            loader: 'postcss-loader',
            options: {
                plugins: [
                    autoprefixerPlugin({
                        browsers: ['> 1%', 'last 2 versions'],
                    }),
                ],
            },
        },
    ];

    const sassStyles = cssStyles.concat([
        {
            loader: 'sass-loader',
            options: {
                sourceMap: true,
                sourceComments: true,
            },
        },
    ]);

    if (DEV) {
        console.log('DEV MODE ON');

        output = {
            output: {
                path: path.resolve(__dirname, './dist'),
                publicPath: 'http://localhost:3002/',
                filename: '[name].js'
            }
        };
        devTools = {devtool: 'source-map'};
        devServer = {
            devServer: {
                port: 3002,
                overlay: true,
                historyApiFallback: true,
            }
        };
        moduleRulesUseCss = ['style-loader'].concat(cssStyles);
        moduleRulesUseSass = ['style-loader'].concat(sassStyles);
        optimization = {optimization: {}};
    } else {
        console.log('PROD MODE ON');

        output = {
            output: {
                path: path.resolve(__dirname, './dist'),
                filename: '[name].js',
                chunkFilename: '[name].js',
            }
        };
        devTools = {devtool: false};
        devServer = {devServer: {}};
        moduleRulesUseCss = [MiniCssExtractPlugin.loader].concat(sassStyles);
        moduleRulesUseSass = [MiniCssExtractPlugin.loader].concat(sassStyles);
        optimization = {
            optimization: {
                minimizer: [
                    new MiniCssExtractPlugin({
                        filename: './style/[name].css',
                        chunkFileName: './style/[id].css',
                    }),
                ]
            }
        };
    }

    return ({
        ...entry,
        ...output,
        ...devTools,
        ...devServer,
        ...optimization,
        entry: {
            main: path.resolve(__dirname, './src')
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
            modules: ['node_modules', path.resolve(__dirname, './src')]
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    use: 'awesome-typescript-loader'
                },
                {
                    test: /\.(js|jsx)$/,
                    use: ['babel-loader', 'eslint-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.(css)$/,
                    use: moduleRulesUseCss
                },
                {
                    test: /\.(sass|scss)$/,
                    use: moduleRulesUseSass
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: 'image-webpack-loader'
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: ['file-loader', {
                        loader: 'url-loader',
                        options: { limit: 40000 }
                    }]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(['./dist']),
            new HtmlWebpackPlugin({ template: './public/index.html', inject: false })
        ],
    });
}