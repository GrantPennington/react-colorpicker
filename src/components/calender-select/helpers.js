/* helper functions to generate the years,months,and days for a calender */

const MONTH_MAP = {
    1:'January',
    2:'February',
    3:'March',
    4:'April',
    5:'May',
    6:'June',
    7:'July',
    8:'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
}

const DAY_LABELS = [{ label: 'Sunday', abr: 'Su' }, { label: 'Monday', abr: 'Mo' }, { label: 'Tuesday', abr: 'Tu' }, { label: 'Wednesday', abr: 'We' }, 
    { label: 'Thursday', abr: 'Th' }, { label: 'Friday', abr: 'Fr' }, { label: 'Saturday', abr: 'Sa' }, 
]

const generateDays = (year, month) => {
    const daysInMonth = new Date(year, month, 0).getDate()
    const daysArray = []

    for(let day = 1; day <= daysInMonth; day++){
        daysArray.push(new Date(year, month-1, day))
    }

    return daysArray
}

const generateMonths = () => {
    return Array.from({ length: 12 }, (_, index) => index + 1)
}

const generateYears = (start, end) => {
    const yearsArray = []
    for(let year = start; year <= end; year++) {
        yearsArray.push(year)
    }
    return yearsArray
}

const generateFullCalender = () => {
    let calender = {}
    let newYear = new Date().getFullYear()+4
    const years = generateYears(parseInt(2000),parseInt(newYear))
    const months = generateMonths()
    years.map((year) => {
        months.map((month) => {
            calender[year] = {
                ...calender[year],
                [month]: generateDays(year, month)
            }
        })
    })
    console.log('CALENDER: ',calender)
    return calender
}

export default generateFullCalender
export { generateDays, generateMonths, generateYears, MONTH_MAP, DAY_LABELS }