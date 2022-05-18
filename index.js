// Your code here
function createEmployeeRecord(array){  
    const object = {firstName: array[0], familyName: array[1], title: array[2], payPerHour: array[3], timeInEvents: [],timeOutEvents: [] }
return object
}

function createEmployeeRecords(arrays){
  const listedEmployees = arrays.map((isElement) => createEmployeeRecord(isElement))
return listedEmployees
}

function createTimeInEvent(isRecord, dateTimeStamp){
const parsedDate = dateTimeStamp.split(' ')[0]
const parsedTime = dateTimeStamp.split(' ')[1]
const hours = parseInt(parsedTime)
const timeInObject = {type: 'TimeIn', hour: hours, date: parsedDate}
isRecord.timeInEvents.push(timeInObject)
return isRecord
}

function createTimeOutEvent(isRecord, dateTimeStamp){
    const parsedDate = dateTimeStamp.split(' ')[0]
    const parsedTime = dateTimeStamp.split(' ')[1]
    const hours = parseInt(parsedTime)
    const timeInObject = {type: 'TimeOut', hour: hours, date: parsedDate}
    isRecord.timeOutEvents.push(timeInObject)
    return isRecord
    }

    function hoursWorkedOnDate(isRecord, dateTimeStamp){
    const timeIn = isRecord.timeInEvents
    const timeOut = isRecord.timeOutEvents
    let totalTimeOut = 0
    timeOut.forEach((currentElement) => {
        //console.log(currentElement)
        if (currentElement.date == dateTimeStamp || !dateTimeStamp) {
            totalTimeOut += currentElement.hour 
        }
    })
    let totalTimeIn = 0
    timeIn.forEach((currentElement) => {
        if (currentElement.date == dateTimeStamp || !dateTimeStamp) {
            totalTimeIn += currentElement.hour 
        }
    })
const hoursWorked = totalTimeOut - totalTimeIn
return hoursWorked / 100
    }

    function wagesEarnedOnDate(isRecord, dateTimeStamp){
        const payEarned = isRecord.payPerHour * hoursWorkedOnDate(isRecord, dateTimeStamp)
        return payEarned
    }

    function allWagesFor(isRecord){
        const isOwed = hoursWorkedOnDate(isRecord) * isRecord.payPerHour
        return isOwed
    }

    function calculatePayroll(array){
        let totalPay = 0
        array.forEach((currentElement) => {
            console.log(currentElement)
            totalPay+= allWagesFor(currentElement)
        })
        return totalPay
    }

