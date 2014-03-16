module.exports = require("autodafe").config({
    basePath: __dirname,

    components: {
        http: {
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