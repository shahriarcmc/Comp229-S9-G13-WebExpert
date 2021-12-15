/* COMP229 - Fall 2021 - - Sec 09
Group - 13
WEbExpert */

let mongoose = require('mongoose');

// Create a model class
let mc_surveySchema = mongoose.Schema(
    {
        Title: {
            type: String,
            required: true,
        },
        UserID: String,
        Questions: {
            type: [],
        },
        Choices: {
            type: [[]],
        },
        targetIndex: Number
    },
    {
        collection: "text_survey"
    }
);

module.exports = mongoose.model('Survey', mc_surveySchema);