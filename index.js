// DOM VARIABLES
const conversionInput = document.getElementById('num-input')
const conversionBtn = document.getElementById('convert-btn')
const conversionResults = document.querySelectorAll('.conversion-results')

// UNIT ARRAY
const units = [
    ['meters', 'feets'],
    ['liters', 'gallons'],
    ['kilos', 'pounds']
]

const conversionFactor = ['3.281', '0.264', '2.204']

// LISTEN FOR CONVERT BUTTON CLICK
conversionBtn.addEventListener('click', function() {
    renderUnits(conversionInput.value)
})

// RENDER CONVERSION
function renderUnits(num) {
    for(let i = 0; i < conversionResults.length; i++) {
        const conversionEl = conversionResults[i].querySelector('.supporting-text')

        conversionEl.textContent = getconvertedUnit(num, conversionFactor[i], units[i])
    }
}
renderUnits(conversionInput.value)

// CONVERT UNIT FUNCTION
function getconvertedUnit(num, factor, unitArr) {
    num = Number(num)
    factor = Number(factor)

    // DESTRUCTURE UNITS ARRAY INTO SEPARATE VARIABLES
    const [unit1, unit2] = unitArr

    const result1 = ((num * 10)  * (factor * 10))/100
    const result2 = (num * 100) / (factor * 100)

    // RETURN FORMATED OUTPUT 
    return `${num} ${unit1} = ${(result1).toFixed(3)} ${unit2} | ${num} ${unit2} = ${result2.toFixed(3)} ${unit1}`
}


