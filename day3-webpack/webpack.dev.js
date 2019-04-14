const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports={
    entry:{
        index:path.join(__dirname,'./src/index.js'),
        app:path.join(__dirname,'./src/app.js')
    },// String | Array | Object
    output:{
        path:path.join(__dirname,'build'),
        filename:'[name]-[hash].js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }
            },
            {
                test:/\.css$/,
                // loader:'css-loader'
                use:['style-loader','css-loader']

            },
            {
                test:/\.scss$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader']
                })
                // use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.(jpg|png|gif|jpeg)$/,
                loader:'url-loader',
                options:{
                    limit:4000
                }
            },
            {
                test:/\.(svg|woff|eot|ttf)$/,
                loader:'file-loader',
                options:{
                    name:'./font/[name].[ext]'
                }
            }
        ]
    },
    plugins:[
        new ExtractTextWebpackPlugin('style.css'),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'index.html',
            filename:'app.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        port:9098,
        host:'localhost',
        open:true,
        hot:true,
        // inline:true,
        before(app){
            app.get('/api/list',(req,res,next)=>{
                res.send({})
            })
        },

    }
}