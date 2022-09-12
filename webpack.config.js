const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require ("path");
const config = {
    mode: "production",
    entry: "./public/js/index.js",
    output:{
        path: __dirname + "/public/dist",
        filename: "bundle.js"
    },
    plugins: [
        new WebpackPwaManifest({
           name:"budget-app", 
           short_name:"ba", 
           theme_color: "#FFFFFF",
           background_color: "#1778F2",
           start_url: "/",
           display: "browser",
           icons:[{
            src:path.resolve("public/icons/icon-192x192.png"),
            sizes:[
                96,192
            ], 
            destination: path.join("icons")
           }]   
           
        })
    ]
};

module.exports = config