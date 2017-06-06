var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./app/index.js',
    output:{
        path:path.resolve('./build'),
        filename:'bundle.js'
    },
    devServer:{
        port:8080,
        contentBase:'./build',
        inline:true //当原代码修改后自动编译打包并刷新浏览器
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
                query:{
                    presets:["react","es2015"]
                },
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./app/index.html'
        })
    ]
};