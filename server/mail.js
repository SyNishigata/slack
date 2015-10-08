Meteor.startup(function () {
    smtp = {
        username: 'synishigata101@yahoo.com',
        password: 'wnNUkQSelJsa0F_U4vAjAQ',
        server:   'smtp.mandrillapp.com',
        port: 587
    };

    process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});