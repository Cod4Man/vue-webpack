const path = require('path'); // 导入node.js的路径模块
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 根路径映射
const htmpPlugin = new HtmlWebpackPlugin({ 
    template: './src/index.html',
    filename: 'index.html'
});

module.exports = {
    mode: 'development', // or production
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins:[htmpPlugin], // 插件
    module:{
        rules:[ // loader规则
            {test:/\.css$/,use:['style-loader','css-loader']}
        ]
    }
}