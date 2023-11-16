var dateDiffInDays = function (date1, date2) {
  //   write your code here
let datee1= new Date(date1);
let datee2= new Date(date2);
let year1= datee1.getFullYear();
let year2= datee2.getFullYear();
let month1= datee1.getMonth();
let month2= datee2.getMonth();
let day1= datee1.getDate();
let day2= datee2.getDate();
let yearcount=0,monthcount=0,daycount=0;
let yearDiff= year2-year1;
let monthDiff= month2-month1;
let dayDiff=day2-day1;
for(let i=0;i<yearDiff;i++)
{
    yearcount++;
}
for(let i=0;i<monthDiff;i++)
{
    monthcount++;
}
let ans= (yearcount*365)+(monthcount*30)+dayDiff;
return ans;
	
};
// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));