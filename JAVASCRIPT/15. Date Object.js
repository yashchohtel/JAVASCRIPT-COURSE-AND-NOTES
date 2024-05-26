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
*/ 
