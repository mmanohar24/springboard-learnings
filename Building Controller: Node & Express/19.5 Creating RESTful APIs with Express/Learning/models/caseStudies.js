const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const caseStudySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true });


const CaseStudy = mongoose.model('CaseStudy', caseStudySchema);

module.exports = CaseStudy;