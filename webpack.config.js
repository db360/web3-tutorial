const path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:9000',
        './src/index.js'],
    output: {
        filename: 'main.js',
        path: path.join(__dirname, './dist')
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        port: 9000,
        compress: true,
    }
}