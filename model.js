/* Importing required packages */
    var mongoose = require('mongoose');
    var schema = mongoose.Schema;

    mongoose.set('useCreateIndex',true);

/* Create a schema */
    var userschema = new schema({
        Name : {
            type : String
        },
        CertificateNumber : {
            type : String
        },
        Certification : {
            type : String
        },
        Issueon : {
            type : Date
        },
        Issueby : {
            type : String
        }

    });

/* Create a model */
    var User = mongoose.model('token',userschema);

/* Export the Model */
    module.exports = User;