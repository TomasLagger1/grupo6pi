const mainController = {
    index: function (req, res) {
        return res.render('index')
    },
    login: function (req, res) {
        return res.render('login')
    },
    product: function (req, res) {
        return res.render('product')
    },
    productAdd: function (req, res) {
        return res.render('productAdd')
    },
    profile: function (req, res) {
        return res.render('profile')
    },
    register: function (req, res) {
        return res.render('register')
    },
    searchResults: function (req, res) {
        return res.render('searchResults')
    }
    
}

module.exports = mainController