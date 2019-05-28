let obj = {
    http: {
        get: function(api, data) {
            return $.when(
                $.ajax()
            )
        },
        post: function(api, data) {

        }
    }
}

module.exports = obj;