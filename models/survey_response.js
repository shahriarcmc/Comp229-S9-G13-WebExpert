/* COMP229 - Fall 2021 - - Sec 09
Group - 13
WEbExpert */

let mongoose = require('mongoose');

// Create a model class
let surveyResponseSchema = mongoose.Schema(
    {
        surveyID: {
            type: String,
        },
        choices: {
            type: [String], default: []
        }
    },
    {
        collection: "survey_response"
    }
);

module.exports = mongoose.model('SurveyResponse', surveyResponseSchema);