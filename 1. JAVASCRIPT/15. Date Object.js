/*

DATE OBJECT IN JAVASCRIPT :-

The Date object in JavaScript is a built-in object that allows you to work with dates and times. It provides methods for creating, manipulating, and formatting dates and times.

-----------------------
CURRENT DATE AND TIME:-
-----------------------

1) new Date() : creates a date object representing the currennt date and time.

const now = new Date();
console.log(now); // Output: current date and time

This is the ISO 8601 format, which is a standart for representing dates and times in this format, the date and time are represented together, sepreated by the letter "T" the  "Z" at the end indicates that the time is in utc (coordinated universal time). 

But the same when you run on browser it will return more human-redable format.

2) new Date(dateString) : creates a Date object based on the provided date string.
const datesString

const datesString = "2024-02-19T10:44:09.274Z";
const dateFromStrin = new Date(datesString);
console.log(dateFromStrin);

3) new Date(year,month) : creates a date object with the specified year and month.

const date1 = new Date(2014,1);
console.log(date1);

4) new Date(year,month,day) : creates a date object with the specified year month and day.

const date1 = new Date(2014,1,10);
console.log(date1);

5) new Date(year,month,day,huors) : creates a date object with the specified year month day and hours.

const date1 = new Date(2014,1,10,22);
console.log(date1);

6) new Date(year,month,day,huors,minutes) : creates a date object with the specified year month day hours and minute.

const date1 = new Date(2014,1,10,22,45);
console.log(date1);

7) new Date(year,month,day,huors,minutes,second) : creates a date object with the specified year month day hours minute and second.

const date1 = new Date(2014,1,10,22,45,45);
console.log(date1);

8) new Date(year,month,day,huors,minutes,second,millisecond) : creates a date object with the specified year month day hours minute second and milliseconds.

const date1 = new Date(2014,1,10,22,45,45,276);
console.log(date1);

9) new Date(milliseconds) : creates a date object represeinting the number of milliseconds since the unix epoch (january 1, 1970, 00:00: utc).

const curMillisecond = new Date().getTime();
console.log(curMillisecond);

---------
NOTES :- 
---------

1. Javascript counts months from 0 to 1: 
[January = 0, February = 1, March = 2, April = 3, May = 4, June = 5, July = 6, August = 7, September = 8, October = 9, November = 10, December = 11]

2. Javascript stores dates as Milliseconds: Javascript stores dates as number milliseconds since january 01, 1970.

Date String Format : if the dateString is in a recognizable format, the date object will be created accordingly.

new Date(date string) creates a date object from a date string

const date1 = new Date("2024-01-05"); // year-month-day
const date2 = new Date("January 5, 2024"); // month day, year
console.log(date1);
console.log(date2);

---------------------------------------------------
JAVASCRIPT GET DATE METHODS / GETTING COMPONENTS:-
---------------------------------------------------

You can get various components of a date uisng the methods of the date object : in a date object, the date is static.

In javascript, the first day of the week (day 0) is sunday. day of the week (0 for sunday, 1 for monday, _ _ _ _, 6 for saturday);

const currentDate = new Date(); 
console.log(currentDate)

const year = currentDate.getFullYear();
console.log(year)

const month = currentDate.getMonth(); // zero based index.
console.log(month)

const date = currentDate.getDate();
console.log(date)

const day = currentDate.getDay();
console.log(day)

---------------------------------------------------
JAVASCRIPT SET DATE METHODS / SETTING COMPONENTS:-
---------------------------------------------------

1) setFullYear(yearValue,[, monthValue, [, dayValue]]): sets the full year for a specified date according to local time.

const date = new Date();
date.setFullYear(2025);
console.log(date); // date object with the year set to 2025;

2) setMonth(monthValue[, dayValue]): sets the month for a spcified date accoring to local time.

const date = new Date();
date.setMonth(5); // June (months are zero based)
console.log(date); // date object with the year set to June;
 
3) setDate(dayValue): sets the day of the month for a spcified date accoring to local time.

const date = new Date();
date.setDate(15); // June (months are zero based)
console.log(date); // date object with the day of the month set to 15;

---------------------------------------------------
JAVASCRIPT GET TIME METHODS / GETTING COMPONENTS:-
---------------------------------------------------

const currentTime = new Date();
console.log(currentTime)

1) hours
const currentTime = new Date();
const hours = currentTime.getHours();
console.log(hours)

2) minute
const currentTime = new Date();
const minute = currentTime.getMinutes();
console.log(minute)

3) second
const currentTime = new Date();
const second = currentTime.getSeconds();
console.log(second)

4) time
const currentTime = new Date();
const time = currentTime.getTime();
console.log(time);

---------------------------------------------------
JAVASCRIPT SET TIME METHODS / SETTING COMPONENTS:-
---------------------------------------------------

1) setHours(hourValue[, minuteValue[, secondValue[, millisecondValue]]]) : sets the hours for a specied date according to local time.

const date = new Date();
date.setHours(19)
console.log(date);

2) setMinute( minuteValue[, secondValue[, millisecondValue]]) : sets the minutes for a specied date according to local time.

const date = new Date();
date.setMinutes(3)
console.log(date);

3) setSeconds(secondValue[, millisecondValue]) : sets the second for a specied date according to local time.

const date = new Date();
date.setSeconds(33)
console.log(date);

4) setMillisecond(millisecondValue) : sets the millisecond for a specied date according to local time.

const date = new Date();
date.setMilliseconds(33)
console.log(date);

5) setTime(timeValue): sets the date object to the time represented by a number of millsecond since january 1, 1970, 00:00:00 utc

const date = new Date();
date.setMilliseconds(1716743118103)
console.log(date);

-----------------------------------------------------
FEW USEFUL METHODS OF THE DATE OBJECTS IN JAVASCRIPT
-----------------------------------------------------

1) toLocalString() : returns a string representing the date time portion of a date object using the current local's conventions.

const date = new Date();
const localString = date.toDateString();
console.log(localString); // output : current day/month/date/year

2) toLocalDateString() : returns a string representing the date portion of a date object using the current locale's conventions

const date = new Date();
const localDateString = date.toLocaleDateString();
console.log(localDateString); // output : current date/month/year

3) toLocaltimeString() : returns a string representing the time porting of a date object using the current locale's conventions.

const date = new Date();
const localtimeString = date.toLocaleTimeString();
console.log(localtimeString); // output : current hour/minute/second/meridion

4) parse() : parses a string representation of a date and returns the number of milliseconds since january 1, 1970,

const date = "2024-05-26T13:50:17.972Z";
const parseDate = Date.parse(date);
console.log(parseDate); // output : 1716731417972

-----------------------------------------------------
FEW USEFUL METHODS OF THE DATE OBJECTS IN JAVASCRIPT
-----------------------------------------------------

let newDate = new Date();
console.log(Date.now());
console.log(newDate.getTime());

Date.now() is a static method of the date object.
Use Date.now() if you want the timestamp right this second. 
it returns the current timeStamp (number of milliseconds) representing the current moment. 
use new Date().getTime() if you have an existing date object from elsewhere and want its timestamp.

*/ 






