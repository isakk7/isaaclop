const resultRateLevel = (months, frequency, table) => {
    if (typeof months !== 'number' || typeof frequency !== 'number') {
        throw new Error('Parameters passed to the function must be numbers')
    }

    for (let column = 0; column < table.length; column++) {
        if (ageTable[column](months)) {
            return rateLevel(frequency, ...table[column])
        }
    }

    throw new Error(
        'Patient has excessed the number of months for this algorithm',
    )
}

const rateLevel = (freq, normal, mind, moderate, severe) => {
    if (range(normal, freq)) return 0
    else if (range(mind, freq)) return 1
    else if (range(moderate, freq)) return 2
    else if (range(severe, freq, true)) return 3
    return 0
    throw new Error(
        'frequency provided did not match with any of the given ranges',
    )
}

const range = (range, frequency, severe = false) => {
    if (typeof frequency !== 'number')
        throw new Error('Frequency must be a number')
    if (typeof range !== 'string') throw new Error('Range must be an string')

    if (severe) {
        return frequency >= parseInt(range.slice(1))
    }

    const [lowNumber, highNumber] = range.split('-')

    return frequency >= parseInt(lowNumber) && frequency <= parseInt(highNumber)
}

const ageTable = [
    months => months < 3,
    months => months >= 3 && months <= 5,
    months => months >= 6 && months <= 8,
    months => months >= 9 && months <= 11,
    months => months >= 12 && months <= 17,
    months => months >= 18 && months <= 23,
    months => months / 12 >= 2 && months / 12 < 3,
    months => months / 12 >= 3 && months / 12 < 4,
    months => months / 12 >= 4 && months / 12 < 6,
    months => months / 12 >= 6 && months / 12 < 8,
    months => months / 12 >= 8 && months / 12 < 12,
    months => months / 12 >= 12 && months / 12 < 15,
    months => months / 12 >= 15 && months / 12 < 19,
]

export default resultRateLevel
