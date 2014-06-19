var autodafe = require('autodafe'),
    vow = require('vow');

/**
 * @class MyComponent
 * @extends Component
 */
var MyComponent = module.exports = autodafe.Component.extend(/**@lends MyComponent#*/{
    /**
     * @protected
     */
    _props: function () {
        this._super();


    },

    /**
     * @constructs
     * @private
     */
    _init: function () {
        this._super();
    },

    processRequest: function (request) {
        var user = request.getData('user'),
            deferred = vow.defer();
        switch (request.getPath()) {
            case '/login':
                if (!user.isGuest()) {
                    deferred.resolve('You have already logged in');
                    break;
                }

                var name = request.getParams()['name'];
                if (name) {
                    this._app.get('users').login(request).then(function () {
                        user.set('name', name);
                        deferred.resolve('Authorization complete successfully');
                    }, deferred.reject, deferred);
                    break;
                }

                deferred.resolve('Please specify the name for login');
                break;

            case '/logout':
                if (user.isGuest()) {
                    deferred.resolve('You are not logged in');
                    break;
                }

                this._app.get('users').logout(request);
                break;

            default:
                deferred.resolve('Hello ' + (user.isGuest() ? 'guest' : user.get('name')));
                break;
        }

        return deferred.promise().then(function (value) {
            request.end(value);
        });
    },

    getDependentComponents: function () {
        return this._super().concat(['users']);
    }
});
