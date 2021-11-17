const path = require('path');
const HtmlWebPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        polyfill: 'babel-polyfill',
        app: './app.js'
    },
    output: {
        filename: '[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        new HtmlWebPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
    devServer:{
        port: 9000
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            }
        ]
    }
}