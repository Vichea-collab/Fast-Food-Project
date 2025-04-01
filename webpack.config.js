module.exports = {
    module: {
        rules: [
            {
                test: /\.mjs$/,
                resolve: { fullySpecified: false },
                enforce: 'pre',
                use: ['source-map-loader'],
                exclude: /node_modules\/@mediapipe\/tasks-vision/,
            },
        ],
    },
};