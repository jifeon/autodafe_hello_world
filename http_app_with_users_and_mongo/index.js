module.exports = require("autodafe").config({
    basePath: __dirname,

    components: {
        http: {
            path: '../node_modules/autodafe-http/',
            port: 3000
        },
        users: {
            path: '../node_modules/autodafe-users/'
        },
        my: {
            path: 'MyComponent'
        }
    }
});
