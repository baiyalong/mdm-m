/**
 * Created by yalong on 2015/5/20.
 */
Template.login.onRendered(function () {


});

Session.setDefault('remember', true);

Template.login.helpers({
    remember: function () {
        return Session.get('remember');
    }
});


Template.login.events({

    'click .mima': function (e, t) {
        Session.set('remember', !Session.get('remember'))
    },
    'click login': function (e, t) {


    }
});