import path from "path";
import ExternalsPlugin from "webpack2-externals-plugin";

export default {
    entry: ["babel-polyfill", "./src/index.js"],
    target: "node",
    output: {
        libraryTarget: "umd",
        filename: "horpyrion.server.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015", "es2016", "es2017", "stage-0"],
                        plugins: [
                            [
                                "babel-plugin-transform-builtin-extend",
                                {
                                    globals: ["Error", "Array"]
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    devtool: "sourcemap",
    plugins: [
        new ExternalsPlugin({
            type: "commonjs",
            include: __dirname + "/node_modules"
        })
    ]
};
