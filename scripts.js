// function myFunction() {
//   let table = document.getElementById("table");

//   let fName = document.getElementById("fName").value;
//   let lName = document.getElementById("lName").value;
//   let fullName = fName + " " + lName;

//   let rollNumber = document.getElementById("rollNumber").value;
//   let regNumber = document.getElementById("regNumber").value;

//   document.getElementById("row1").innerHTML = fullName;
//   document.getElementById("row2").innerHTML = rollNumber;
//   document.getElementById("row3").innerHTML = regNumber;
// }

function subFunction() {
  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  const fullName = fName + " " + lName;

  const rollNumber = document.getElementById("rollNumber").value;
  const regNumber = document.getElementById("regNumber").value;

  const edit = document.createElement("button");
  edit.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>' + "";
  const del = document.createElement("button");
  del.innerHTML = '<i class="fa-solid fa-trash"></i>';

  const row = document.createElement("tr");

  const td1 = document.createElement("td");
  td1.innerText = fullName;
  row.appendChild(td1);

  const td2 = document.createElement("td");
  td2.innerText = rollNumber;
  row.appendChild(td2);

  const td3 = document.createElement("td");
  td3.innerText = regNumber;
  row.appendChild(td3);

  const td4 = document.createElement("td");
  td4.appendChild(edit, del);
  row.appendChild(td4);

  document.getElementById("table").appendChild(row);
}
