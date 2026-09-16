const express = require("express");

const { mean, median, mode } = require('./mathHelpers.js');

const app = express();

function parseAndValidateArray(queryString) {
    if (!queryString) {
        return { error: true, message: "nums are required" }
    }

    const strArray = queryString.split(',');
    const validNums = [];

    for (const strVal of strArray) {

        const num = Number(strVal);

        if (Number.isNaN(num)) {
            return { error: true, message: `${strVal} is not a number` }
        }
        validNums.push(num);
    }

    return { error: false, nums: validNums };
}


app.get('/mean', (req, res) => {
    const result = parseAndValidateArray(req.query.nums);

    if (result.error) {
        return res.status(400).json({ error: result.message });
    }
    return res.json(
        {
            operation: "mean",
            value: mean(result.nums)
        }
    )
}
)

app.get('/median', (req, res) => {
    const result = parseAndValidateArray(req.query.nums);

    if (result.error) {
        return res.status(400).json({ error: result.message });
    }

    return res.json(
        {
            operation: "median",
            value: median(result.nums)
        }
    )
}
)

app.get('/mode', (req, res) => {
    const result = parseAndValidateArray(req.query.nums);

    if (result.error) {
        return res.status(400).json({ error: result.message });
    }

    return res.json(
        {
            operation: "mode",
            value: mode(result.nums)
        }
    )
}
)


module.exports = app;