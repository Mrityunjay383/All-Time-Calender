window.onload = function() {
  year1.value = 20;
}


/*This function is used for making the basic HTML structure  dynamic*/
function datechange(s1, s2) {

  /*This is used for checking the year is a leap year or not*/
  var leap = year1.value + year2.value;
  var l = 0;
  if ((leap % 4) == 0) {
    if ((leap % 100) != 0) {
      l = 1;
    } else if ((leap % 400) == 0) {
      l = 1;
    }
  }

  /*It is used for dynamic date dropdown*/

  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  s2.innerHTML = "";

  if (l == 0) {
    if (s1.value == "January" || s1.value == "March" || s1.value == "May" || s1.value == "July" || s1.value == "August" || s1.value == "October" || s1.value == "December") {
      var optionArray = ["|", "1|1", "2|2", "3|3", "4|4", "5|5", "6|6", "7|7", "8|8", "9|9", "10|10", "11|11", "12|12", "13|13", "14|14", "15|15", "16|16", "17|17", "18|18", "19|19", "20|20", "21|21", "22|22", "23|23", "24|24", "25|25", "26|26", "27|27", "28|28", "29|29", "30|30", "31|31"];
    } else if (s1.value == "February") {
      var optionArray = ["|", "1|1", "2|2", "3|3", "4|4", "5|5", "6|6", "7|7", "8|8", "9|9", "10|10", "11|11", "12|12", "13|13", "14|14", "15|15", "16|16", "17|17", "18|18", "19|19", "20|20", "21|21", "22|22", "23|23", "24|24", "25|25", "26|26", "27|27", "28|28"]
    } else {
      var optionArray = ["|", "1|1", "2|2", "3|3", "4|4", "5|5", "6|6", "7|7", "8|8", "9|9", "10|10", "11|11", "12|12", "13|13", "14|14", "15|15", "16|16", "17|17", "18|18", "19|19", "20|20", "21|21", "22|22", "23|23", "24|24", "25|25", "26|26", "27|27", "28|28", "29|29", "30|30"];
    }
  } else if (l == 1) {
    if (s1.value == "January" || s1.value == "March" || s1.value == "May" || s1.value == "July" || s1.value == "August" || s1.value == "October" || s1.value == "December") {
      var optionArray = ["|", "1|1", "2|2", "3|3", "4|4", "5|5", "6|6", "7|7", "8|8", "9|9", "10|10", "11|11", "12|12", "13|13", "14|14", "15|15", "16|16", "17|17", "18|18", "19|19", "20|20", "21|21", "22|22", "23|23", "24|24", "25|25", "26|26", "27|27", "28|28", "29|29", "30|30", "31|31"];
    } else if (s1.value == "February") {
      var optionArray = ["|", "1|1", "2|2", "3|3", "4|4", "5|5", "6|6", "7|7", "8|8", "9|9", "10|10", "11|11", "12|12", "13|13", "14|14", "15|15", "16|16", "17|17", "18|18", "19|19", "20|20", "21|21", "22|22", "23|23", "24|24", "25|25", "26|26", "27|27", "28|28", "29|29"]
    } else {
      var optionArray = ["|", "1|1", "2|2", "3|3", "4|4", "5|5", "6|6", "7|7", "8|8", "9|9", "10|10", "11|11", "12|12", "13|13", "14|14", "15|15", "16|16", "17|17", "18|18", "19|19", "20|20", "21|21", "22|22", "23|23", "24|24", "25|25", "26|26", "27|27", "28|28", "29|29", "30|30"];
    }
  }

  /*It is used for adding dynamic date as option*/
  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    s2.options.add(newOption);
  }
  if (year2.value === 0) {
    year2.value = "0" + year2.value;
  }
  if (year2.value === 1) {
    year2.value = "0" + year2.value;
  }
  if (year2.value === 2) {
    year2.value = "0" + year2.value;
  }
  if (year2.value === 3) {
    year2.value = "0" + year2.value;
  }
  if (year2.value === 4) {
    year2.value = "0" + year2.value;
  }
  if (year2.value === 5) {
    year2.value = "0" + year2.value;
  }
  if (year2.value === 6) {
    year2.value = "0" + year2.value;
  }
  if (year2.value === 7) {
    year2.value = "0" + year2.value;
  }
  if (year2.value === 8) {
    year2.value = "0" + year2.value;
  }
  if (year2.value === 9) {
    year2.value = "0" + year2.value;
  }



  if (year2.value > 99) {
    alert("The last part of year should be less than or equal to 99")
    year2.value = "99";
    x.innerHTML = "";
  } else if (year2.value < 0) {
    alert("The last part of year should be greater than or equal to 00")
    year2.value = "00";
    x.innerHTML = "";
  }
}




/*This function is used for finding the day of any date*/

function findingday() {

  /*This is used for checking the leap year*/
  var leap = year1.value + year2.value;
  var l = 0;
  if ((leap % 4) == 0) {
    if ((leap % 100) != 0) {
      l = 1;
    } else if ((leap % 400) == 0) {
      l = 1;

    }
  }

  /*These variable are used for giving every year a unique code*/

  var rem = year2.value % 4
  var que = (year2.value - rem) / 4

  var yearcode = (parseFloat(year2.value) + parseFloat(que)) % 7


  /*These variable are use for giving every month a unique code*/
  var jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec, cor, monthcode, daycode, day;

  mar = 2;
  apr = 5;
  may = 0;
  jun = 3;
  jul = 5;
  aug = 1;
  sep = 4;
  oct = 6;
  nov = 2;
  dec = 4;

  if (l == 0) {
    jan = 6;
    feb = 2;
  } else if (l == 1) {
    jan = 5;
    feb = 1;
  }

  /*It is use for giving every centuary a particular value*/

  if (year1.value == 17) {
    cor = 2;
  } else if (year1.value == 18) {
    cor = 3;
  } else if (year1.value == 19) {
    cor = 1;
  } else if (year1.value == 20) {
    cor = 0;
  } else if (year1.value == 21) {
    cor = 5;
  }

  /*It is used for connection the monthcode with the display month*/
  if (month.value == "January") {
    monthcode = jan;
  } else if (month.value == "February") {
    monthcode = feb;
  } else if (month.value == "March") {
    monthcode = mar;
  } else if (month.value == "April") {
    monthcode = apr;
  } else if (month.value == "May") {
    monthcode = may;
  } else if (month.value == "June") {
    monthcode = jun;
  } else if (month.value == "July") {
    monthcode = jul;
  } else if (month.value == "August") {
    monthcode = aug;
  } else if (month.value == "September") {
    monthcode = sep;
  } else if (month.value == "October") {
    monthcode = oct;
  } else if (month.value == "November") {
    monthcode = nov;
  } else if (month.value == "December") {
    monthcode = dec;
  }

  /*It is used for relating all days with a unique code*/
  daycode = (parseFloat(date.value) + parseFloat(monthcode) + parseFloat(cor) + parseFloat(yearcode)) % 7



  /*It is used for displaying the day on any particular date*/
  if (daycode == 0) {
    day = "Sunday"
  } else if (daycode == 1) {
    day = "Monday"
  } else if (daycode == 2) {
    day = "Tuesday"
  } else if (daycode == 3) {
    day = "Wednesday"
  } else if (daycode == 4) {
    day = "Thusday"
  } else if (daycode == 5) {
    day = "Friday"
  } else if (daycode == 6) {
    day = "Saturday"
  }

  x.innerHTML = "<p class='jsP'>Date :- " + date.value + " " + month.value + ", " + leap + "</p> Day :- " + "<b>" + day + "</b>";

  if (month.value == "" || date.value == "" || year2.value == "") {
    alert("Please fill all the information");
    x.innerHTML = "";
  }



}

function changeyear1() {
  month.value = "";
  date.value = "";
  x.innerhtml = "";
}

function changeyear2() {
  month.value = "";
  date.value = "";
  x.innerHTML = "";
}

function rese() {
  x.innerHTML = "";
  year1.value = "20";
  year2.value = "20";
  month.value = "";
  date.value = "";
}
