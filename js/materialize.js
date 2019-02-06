// Select dom elements
const nxtBtn = document.querySelector("#nxt-Btn");
const myBar = document.getElementById("myBar");

// Addeventlisteners
// nxtBtn.addEventListener("click", move);
document.addEventListener("DOMContentLoaded", myFuntions);

// Materialize functions
function myFuntions() {
  //   Sidenav
  const sideNav = document.querySelector(".sidenav");
  M.Sidenav.init(sideNav, {});
  //Modal for Menu
  var modal = document.querySelectorAll(".modal");
  M.Modal.init(modal, {});

  // Date picker
  var dtPicker = document.querySelector(".datepicker");
  M.Datepicker.init(dtPicker, {
    format: "dddd-mm-yyyy",
    setDefaultDate: true,
    onSelect: showDate
  });
  // method to showDate dat picked in console
  function showDate(e) {
    console.log(e.toString());
  }

  // Select for People
  var select = document.querySelector("#select-people");
  let g = M.FormSelect.init(select, {});

  //  Get input selected for people
  const slct1 = document.querySelector("#select-people");
  slct1.onchange = selected;
  function selected() {
    let strPeople = slct1[slct1.selectedIndex].text;
    console.log(strPeople);
  }


}

// Method to control slider
// let width = 20;
// function move() {
//   myBar.style.width = width + "%";
//   myBar.innerHTML = width + "%";
//   if (width < 100) {
//     width = width + 20;
//   }
// }
