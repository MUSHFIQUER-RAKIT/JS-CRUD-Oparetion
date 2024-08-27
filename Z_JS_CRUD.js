// Its a Global VERiable
var row = null;
// JS CRUD OPARETIONNNNNNN

function subFunction() {
  var dataEntered = retrieveData();
  var readData = readinglocStorage(dataEntered);
  insert(readData);
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
  return arr; /* Array te return korte hne */
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
  const row = table.insertRow(0);
  row.insertCell(0).innerHTML = readData[0] + " " + readData[1];
  row.insertCell(1).innerHTML = readData[2];
  row.insertCell(2).innerHTML = readData[3];
  row.insertCell(
    3
  ).innerHTML = `<button onclick= edit(this)><i class="fa-regular fa-pen-to-square"></i></button>
  <button  onclick= remove(this)><i class="fa-solid fa-trash"></i></button>`;
}

// CRUD----EDIT
function edit(td) {
  row = td.parentElement.parentElement;
  document.getElementById("fName").value = row.cells[0].innerHTML;
  document.getElementById("rollNumber").value = row.cells[1].innerHTML;
  document.getElementById("regNumber").value = row.cells[2].innerHTML;
}
// CRUD----UPDATE
function update() {
  row.cells[0].innerHTM = document.getElementById("fName").value;
  row.cells[1].innerHTM = document.getElementById("lName").value;
  row.cells[2].innerHTM = document.getElementById("rollNumber").value;
  row.cells[3].innerHTM = document.getElementById("regNumber").value;
}
// CRUD----DELETE
function remove(td) {
  let ans = confirm("Aer you sure you want to delete ths?");
  if (ans == true) {
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex - 1);

    // Alert box design
    document.getElementById("msg").innerHTML = "Row successfully deleted";
    document.getElementById("alert-box").classList.add("d-block");
    document.getElementById("alert-box").classList.remove("d-none");
  }
}
