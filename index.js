// Write your solution in this file!
const employee = {David: "123 LakeView DR"}
const key1 = "streetAddress"
const val1 = "11 Broadway"

function updateEmployeeWithKeyAndValue(employee, key1, val1) {
    const newEmployee = {...employee}
    newEmployee[key1] = val1;
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key1, val1) {
    employee[key1] = val1;
    return employee
}

function deleteFromEmployeeByKey(employee, key1) {
    const newEmployee = {...employee}
    delete newEmployee[key1]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key1) {
    delete employee[key1]
    return employee
}