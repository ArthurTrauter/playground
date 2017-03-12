(function() {
    "use strict";

    exports.setupNewUser = function(info, callback) {
        var user = {
            name: info.name,
            nameLowercase: info.name.toLowerCase()
        };
        
        try {
            Database.save(user, callback);
        } catch (error) {
            callback(err);
        }
    }
})();