
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const toOrdinalSuffix = (numb) => {
    const theInt = parseInt(numb),
        digits = [theInt % 10, theInt % 100],
        ordinals = ['st', 'nd', 'rd', 'th'],
        oPattern = [1, 2, 3, 4],
        tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
    return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
        ? theInt + ordinals[digits[0] - 1]
        : theInt + ordinals[3];
}

const formatDate = (dateObj) => {
    const theMonth = monthNames[dateObj.getMonth()];
    const theDay = toOrdinalSuffix(dateObj.getDate());
    const theYr = dateObj.getFullYear();

    //returns date in form: "29th May, 2020"
    return `${theDay} ${theMonth}, ${theYr}`;
};

export default formatDate
