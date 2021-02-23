const MiniCSSExtractPlugin = require("mini-css-extract-plugin")

const mode = process.env.NODE_ENV || "development"

module.exports = {
    mode: mode,

    plugins: [new MiniCSSExtractPlugin()],        

    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [MiniCSSExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
            }
        ]
    },

    devtool: "source-map"
}