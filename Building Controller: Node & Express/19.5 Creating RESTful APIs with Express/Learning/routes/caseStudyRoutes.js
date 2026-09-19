const express = require("express");
const router = express.Router();
const caseStudyController = require("../controllers/caseStudyController")

router.get('/', caseStudyController.caseStudy_index)

router.get('/create', caseStudyController.caseStudy_create_get)

router.get('/:id', caseStudyController.caseStudy_detail)

router.post("/", caseStudyController.caseStudy_create_post)

router.delete('/:id', caseStudyController.caseStudy_delete)

module.exports = router;


/**
 * 
 * // mongoose and mongo sandbox routes

app.get('/add-caseStudy', (req, res) => {
    const caseStudy = new CaseStudy(
        {
            title: 'PlatePost - Designing a video-first menu platform for restaurants',
            snippet: 'PlatePost put video on restaurant menus so customers could see the food before ordering.',
            description: 'Read more about my PlatePost Case Study'
        },
        {
            title: 'Knowt: Designing a streak system that makes students come back every day',
            snippet: 'Knowt turns notes into quizzes, but users werent building a daily habit.',
            description: 'Read more about my Knowt Case Study'
        }
    )

    caseStudy.save()
        .then((results) => {
            res.send(results);
        })
        .catch((error) => {
            console.log(error);
        })
})

// Find all case studies
app.get('/all-caseStudy', (req, res) => {
    CaseStudy.find()
        .then((results) => {
            res.send(results);
        })
        .catch((error) => {
            console.log(error)
        })
})

// Find single case study
app.get('/one-caseStudy', (req, res) => {
    CaseStudy.findById("6aab884d1f244f2e9e067024")
        .then((results) => {
            res.send(results)
        })
        .catch((error) => console.log(error))
})
 */

