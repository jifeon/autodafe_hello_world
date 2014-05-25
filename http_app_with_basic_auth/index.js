module.exports = require("autodafe").config({
    basePath: __dirname,

    components: {
        http: {
            path: '../node_modules/autodafe-http/',
            port: 3000,
            basicAuth: {
                message: 'Private zone',
                users: {
                    user: 'pass'
                }
            }
        }
    }
});
