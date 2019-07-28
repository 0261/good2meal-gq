import nodeExternals from 'webpack-node-externals';
import path from 'path';
export default {
    mode: 'development',
    entry: './index.ts',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        libraryTarget: 'commonjs',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts'],
    },
    module: {
        rules: [{ test: /\.ts?$/, loader: 'ts-loader' }],
    },
};
