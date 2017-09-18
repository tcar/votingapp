const webpack = require('webpack')
const path = require('path')

module.exports ={
devtool:'inline-sourcemap',
entry: './client/index.js',
output:{
path: path.resolve(__dirname, "dist"),
filename:'bundle.js',
publicPath:'/dist/'
},
module:{
    loaders:[
        {
            test:/\.js$/,
            loaders:'babel-loader',
            exclude: /(node_modules)/,
            query:{
                presets:['react', 'es2015', "stage-3"],
                plugins: ["transform-object-rest-spread"]
                
            }
    },
    {
        test:/\.css$/,
        loaders:[
            'style-loader',
            'css-loader'
        ]
    },
    {
        test: /\.(gif|ttf|png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {} 
              
          }
        ]
}
]
}

}