var date = new Date();

//getShortTime
var hours = date.getHours();
var min = date.getMinutes();
var ampm = (hours >= 12) ? "PM" : "AM";
var getShortTime = hours + ":" + min + " " + ampm;

console.log(getShortTime);

//getLongTime
var hours = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var ampm = (hours >= 12) ? "PM" : "AM";
var getLongTime = hours + ":" + min + ":" + sec + " " + ampm;

console.log(getLongTime);

//getShortDate
var month = (date.getMonth() + 1);
var day = date.getUTCDate();
var year = date.getFullYear();
var getShortDate = month + "/" + day + "/" + year;

console.log(getShortDate);

//getLongDate
var monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
var month = (date.getMonth());
var day = date.getUTCDate();
var year = date.getFullYear();
var getLongDate = monthNames[month] + " " + day + "th" + "," + " " + year;

console.log(getLongDate);

//getShortDateTime
console.log(getShortDate + " " + getShortTime);

//getLongDateTime
console.log(getLongDate + " " + getShortTime);

//getExtendedDateTime
var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var day = date.getUTCDate();
var getExtendedDateTime = weekDays[day] + "," + " " + getLongDate + " " + getShortTime;

console.log(getExtendedDateTime);