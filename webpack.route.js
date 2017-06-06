var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./route/index.js',
    output:{
        path:path.resolve('build'),
        filename:'bundle.js'
    },
    devServer:{
        inline:true,
        port:8080,
        contentBase:'./build'
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test:/\.(woff|woff2|svg|eot|ttf)$/,
                loader:'url-loader'
            },
            {
                test:/\.jsx?$/,
                loader:'babel-loader',
                query:{//查询对象
                    presets:["react","es2015"]
                },
                exclude:/node_modules///排除的模块
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./route/index.html'
        })
    ]
};