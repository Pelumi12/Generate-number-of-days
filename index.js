let button = document.querySelector("button");
let month  = document.getElementById("month");
let year = document.getElementById("year");
let days = document.getElementById("days");

function daysInMonth() {
  if (month.value == "January" || month.value == "March" || month.value == "May" || month.value == "July" || month.value == "August" || month.value == "October" || month.value == "December" && year.value % 4 == 0) {
    days.innerHTML = 31
  } else {
    if (month.value == "January" || month.value == "March" || month.value == "May" || month.value == "July" || month.value == "August" || month.value == "October" || month.value == "December" && year.value % 4 == 1) {
      days.innerHTML = 31
    } else {
      if (month.value == "January" || month.value == "March" || month.value == "May" || month.value == "July" || month.value == "August" || month.value == "October" || month.value == "December" && year.value % 4 == 2) {
        days.innerHTML = 31
      } else {
        if (month.value == "January" || month.value == "March" || month.value == "May" || month.value == "July" || month.value == "August" || month.value == "October" ||month.value == "December" && year.value % 4 == 3) {
          days.innerHTML = 31
        } else {
          if (month.value == "February" && year.value % 4 == 0) {
            days.innerHTML = 29
          } else {
            if (month.value == "February" && year.value % 4 == 1) {
              days.innerHTML = 28
            } else {
              if (month.value == "February" && year.value % 4 == 2) {
                days.innerHTML = 28
              } else {
                if (month.value == "February" && year.value % 4 == 3) {
                  days.innerHTML = 28
                } else {
                  if (month.value == "April" || month.value == "June" || month.value == "September" || month.value == "November" && year.value % 4 == 0) {
                    days.innerHTML = 30
                  } else {
                    if (month.value == "April" || month.value == "June" || month.value == "September" || month.value == "November" && year.value % 4 == 1) {
                      days.innerHTML = 30
                    } else {
                      if (month.value == "April" || month.value == "June" || month.value == "September" || month.value == "November" && year.value % 4 == 2) {
                        days.innerHTML = 30
                      } else {
                        if (month.value == "April" || month.value == "June" || month.value == "September" || month.value == "November" && year.value % 4 == 3) {
                          days.innerHTML = 30
                        
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}



// month.addEventListener("keyup", e => {
//   e.preventDefault();
//   if (e.keyCode === 13) {
//     button.click();
//   } 
// });

// year.addEventListener("keyup", e => {
//   e.preventDefault();
//   if (e.keyCode === 13) {
//     button.click();
//   } 
// });

button.addEventListener('click', daysInMonth);

window.onload = function () {
  //Determine the Current Year.
  let currentYear = (new Date()).getFullYear();

  //Loop and add the Year values to DropDownList.
  
  for (let i = 1000; i <= 9999; i++) {
      let option = document.createElement("OPTION");
      option.innerHTML = i;
      option.value = i;
      year.appendChild(option);
  }
};
