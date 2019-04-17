const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Vueloader = require('vue-loader/lib/plugin');
module.exports = {
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'build'),
        filename:'[name]-[hash].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'index.html',
            filename:'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new Vueloader()
    ],
    devServer:{
        port:9097,
        open:true,
        hot:true
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        },
        extensions: [".js", ".json",'.vue']
    }
};