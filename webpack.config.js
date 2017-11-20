const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        hello:path.resolve(__dirname,"src/script/hello.js"),

    },
    output: {
        path: path.resolve(__dirname , "dist"),
        filename: "[name].js",
        publicPath:"/dist/"
    },
    devtool: 'none',
    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    module: {
        rules: [
            {
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
            },
            {
              test:/\.css$/,
              loader: "style-loader!css-loader"
            },
            {
              test:/\.scss$/,
              loaders:["style-loader","css-loader","sass-loader"]
            },
            {
              test:/\.less$/,
              loaders:["style-loader","css-loader","less-loader"]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('By Leroy'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
    ],
};
