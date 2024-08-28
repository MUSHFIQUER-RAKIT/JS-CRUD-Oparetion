// Its a Global VERiable
let row = null;
let msg = document.getElementById("msg");
let alertBox = document.getElementById("alert-box");
// JS CRUD OPARETIONNNNNNN

function subFunction() {
  var dataEntered = retrieveData();
  var readData = readinglocStorage(dataEntered);

  if (dataEntered == false) {
    msg.innerHTML = "Pelese Fill The Form";
    alertBox.classList.add("d-block", "alert-warning");
    alertBox.classList.remove("d-none", "alert-success");
  } else {
    if (row == null) {
      insert(readData);
      msg.innerHTML = "Form Submitted";
      alertBox.classList.add("d-block", "alert-success");
      alertBox.classList.remove("d-none", "alert-warning");
    } else {
      update();
      msg.innerHTML = "Form  Data Updated";
      alertBox.classList.add("d-block", "alert-success");
      alertBox.classList.remove("d-none", "alert-warning", "alert-danger");
    }
  }
  document.getElementById("form").reset();
}

// CRUD----CREATE
function retrieveData() {
  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  // const fullName = fName + " " + lName;
  const rollNumber = document.getElementById("rollNumber").value;
  const regNumber = document.getElementById("regNumber").value;

  let arr = [fName, lName, rollNumber, regNumber];
  if (arr.includes("")) {
    return false;
  } else if (fName.length == 2) {
    return false;
  } else {
    return arr;
  }
}
// CRUD----READ
function readinglocStorage(dataEntered) {
  // storing Data in localStorage
  let fName = localStorage.setItem("FirstName", dataEntered[0]);
  let lName = localStorage.setItem("LastName", dataEntered[1]);
  let roll = localStorage.setItem("RollNumber", dataEntered[2]);
  let reg = localStorage.setItem("RegistationNumber", dataEntered[3]);

  // getting values from local  to Table
  let fName2 = localStorage.getItem("FirstName", fName);
  let lName2 = localStorage.getItem("LastName", lName);
  let roll2 = localStorage.getItem("RollNumber", roll);
  let reg2 = localStorage.getItem("RegistationNumber", reg);

  let arr2 = [fName2, lName2, roll2, reg2];
  return arr2;
}
// CRUD----INSERT
// insert VAlue to Table
function insert(readData) {
  const table = document.getElementById("table");
  let i = table.rows.length;
  let row = table.insertRow(i);
  row.insertCell(0).innerHTML = readData[0];
  row.insertCell(1).innerHTML = readData[1];
  row.insertCell(2).innerHTML = readData[2];
  row.insertCell(3).innerHTML = readData[3];
  row.insertCell(
    4
  ).innerHTML = `<button onclick= edit(this)><i class="fa-regular fa-pen-to-square"></i></button>
  <button  onclick= remove(this)><i class="fa-solid fa-trash"></i></button>`;
}

// CRUD----EDIT
function edit(td) {
  row = td.parentElement.parentElement;
  document.getElementById("fName").value = row.cells[0].innerHTML;
  document.getElementById("lName").value = row.cells[1].innerHTML;
  document.getElementById("rollNumber").value = row.cells[2].innerHTML;
  document.getElementById("regNumber").value = row.cells[3].innerHTML;
}
// CRUD----UPDATE
function update() {
  row.cells[0].innerHTML = document.getElementById("fName").value;
  row.cells[1].innerHTML = document.getElementById("lName").value;
  row.cells[2].innerHTML = document.getElementById("rollNumber").value;
  row.cells[3].innerHTML = document.getElementById("regNumber").value;
  row = null;
}
// CRUD----DELETE
function remove(td) {
  let ans = confirm("Aer you sure you want to delete ths?");
  if (ans == true) {
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex - 1);
    // Alert box design
    msg.innerHTML = "Row successfully deleted";
    alertBox.classList.add("d-block", "alert-danger");
    alertBox.classList.remove("d-none", "alert-success");
  }
}
