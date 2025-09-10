// Date Objects = Objects that contain values that represent dates and times


// --------- args = Date(year,month,day,hour,minute,second,ms)---------------------
const date = new Date()

const date1 = new Date(2024,0,1,2,3,4,0) // Create custom time

console.log(date)
console.log(date1)

// --------------- Get only part of the date and time ----------------

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate()
const dayOfWeek = date.getDay()
const hora = date.getHours()

// ------------ Set date -----------------------------------

const date2 = new Date();
date2.setFullYear(2024)
date2.setMonth(0) // January is 0!!!!!
date2.setDate(12);

console.log(date2)

//----------------- Compare dates -----------------------

const date3 = new Date("2023-12-31")
const date4 = new Date("2024-01-01");

if(date4>date3){
    console.log("Happy new year ")
}