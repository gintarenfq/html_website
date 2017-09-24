const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCss = new ExtractTextPlugin('app.css');

module.exports = {
    entry: [
        './public/js/app.js',
        './public/css/app.scss'
    ],

    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                use: extractCss.extract({
                    use: ['css-loader?url=false', 'sass-loader', 'import-glob-loader']
                })
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ 'es2015' ]
                    }
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },

    plugins: [
        extractCss
    ]
};