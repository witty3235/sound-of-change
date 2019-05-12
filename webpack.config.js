const path = require('path');
const webpack = require('webpack')

module.exports = {
    mode: "development", // "production" | "development" | "none"

    // Chosen mode tells webpack to use its built-in optimizations accordingly.
    entry: "./src/app/app.js", // string | object | array

    // defaults to ./src
    // Here the application starts executing
    // and webpack starts bundling
    output: {
        // options related to how webpack emits results
        path: path.resolve(__dirname, "src/themes/frontend/js"), // string
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        filename: "all.js", // string
        // the filename template for entry chunks
        publicPath: "/themes/frontend/js/", // string
        // the url to the output directory resolved relative to the HTML page
    },
    resolve: {
        // options for resolving module requests
        // (does not apply to resolving to loaders)
        modules: [
          "node_modules",
          path.resolve(__dirname, "src/app")
        ],
        // directories where to look for modules
        extensions: [".js", ".json", ".jsx", ".css"],
        // extensions that are used
    },
    module: {
        // configuration regarding modules
        rules: [
            // rules for modules (configure loaders, parser options, etc.)
            {
                test: /\.jsx?$/,
            }
        ]
    },
    externals: [
        'angular',
        {
            'vz': 'VIZ',
            '@google/markerclustererplus': 'MarkerClusterer'
        },
        /^@google/i,
        /^(jquery|\$)$/i
    ],
    plugins: [
    ]
}