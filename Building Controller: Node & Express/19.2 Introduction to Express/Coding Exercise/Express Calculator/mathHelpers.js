
function mean(nums) {

    if (!nums.length) return undefined;
    const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return sum / nums.length;
}

function median(nums) {
    if (!nums.length) return undefined;

    // Sort the array
    const sorted = [...nums].sort((a, b) => a - b);

    // finding midpoint index
    const middle = Math.floor(sorted.length / 2);

    // check for even
    return sorted.length % 2 === 0 ? (sorted[middle - 1] + sorted[middle]) / 2 : sorted[middle]
}

function mode(nums) {
    if (!nums.length) return undefined;

    const counts = {}
    let maxCount = 0;
    let mode = []

    nums.forEach(num => {
        counts[num] = (counts[num] || 0) + 1
    });

    for (const key in counts) {
        const count = counts[key];

        if (count > maxCount) {
            maxCount = count;
            mode = [Number(key)];
        }
        else if (count === maxCount) {
            mode.push(Number(key))
        }
    }

    return mode.length === 1 ? mode[0] : mode;
}

module.exports = { mean, median, mode }