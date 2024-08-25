// JS CRUD OPARETIONNNNNNN

// Its Global VERiable
function subFunction() {
  var dataEntered = retrieveData();
  var readData = localStorage(dataEntered);
}

// CRUD----CREATE
// Input kora Data retrieve kore dataEntered  a Joma hbe 1st
function retrieveData() {
  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  const fullName = fName + " " + lName;
  const rollNumber = document.getElementById("rollNumber").value;
  const regNumber = document.getElementById("regNumber").value;

  let arr = [fullName, rollNumber, regNumber];
  return arr;
}
