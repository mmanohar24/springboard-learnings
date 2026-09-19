const { render } = require('ejs');
const CaseStudy = require('../models/caseStudies');


const caseStudy_index = (req, res) => {
    CaseStudy.find().sort({ createdAt: -1 })
        .then((results) => {
            res.render('caseStudyView/index', {
                title: 'All Case Studies',
                caseStudies: results
            });
        })
        .catch((error) => {
            console.log(error);
        })
}

const caseStudy_detail = (req, res) => {
    const id = req.params.id;

    CaseStudy.findById(id)
        .then((results) => {
            res.render('caseStudyView/details', { caseStudy: results, title: "Case Study Details" })
        })
        .catch((error) => {
            res.status(404).render('404', {title: 'Case Study not found'})
        })
}

const caseStudy_create_get = (req, res) => {
    res.render('caseStudyView/addCaseStudy', {
        title: 'Create a new Case Study'
    });
}

const caseStudy_create_post = (req, res) => {
    const caseStudy = new CaseStudy(req.body);

    caseStudy.save()
        .then((result) => {
            res.redirect("/case-studies")
        })
        .catch((error) => {
            console.log(error)
        })
}

const caseStudy_delete = (req, res) => {
    const id = req.params.id;

    CaseStudy.findByIdAndDelete(id)
        .then((results) => {
            res.json({ redirect: '/case-studies' })
        })
        .catch((err) => {
            console.log(err)
        })
}


module.exports = {
    caseStudy_index,
    caseStudy_detail,
    caseStudy_create_get,
    caseStudy_create_post,
    caseStudy_delete
}