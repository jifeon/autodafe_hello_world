module.exports = require("autodafe").config({
    basePath: __dirname,

    components: {
        http: {
            port: 3000
        }
    }
});