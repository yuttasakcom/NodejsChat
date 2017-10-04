'use strict';

module.exports = function(_) {
  return {
    SetRouting: function(router) {
      router.get('/', this.indexPage);
      router.get('/signup', this.getSignup);
    },
    indexPage: function(req, res) {
      return res.render('index', {
        test: 'This is a test',
      });
    },
    getSignup: function(req, res) {
      return res.render('signup');
    }
  }
}