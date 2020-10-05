var index, table = document.getElementById("table");
var gender;
var name;
var age;
var city;
var gender_val;


/* Reset Data in form*/
function resetData(){
    document.getElementById('name').value= "";
    document.getElementById('age').value= "";
    document.getElementById('city').value= "";
}


/* selecting data*/
function selectData() {
    for(var i=1; i<=table.rows.length; i++) {

        table.rows[i].onclick = function() 
        {
            index = this.rowIndex;

            document.getElementById("name").value = this.cells[0].innerHTML;
            document.getElementById("city").value = this.cells[3].innerHTML;
            document.getElementById("age").value = this.cells[2].innerHTML;

        };
    }
}

function addData() {

    newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3);
    cell5 = newRow.insertCell(4);
    name = document.getElementById("name").value;
    gender = document.getElementsByName('gender');
    age  = document.getElementById("age").value;
    city  = document.getElementById("city").value;

    for (var i = 0; i < gender.length; i++){
        if(gender[i].checked){
            gender_val = gender[i].value;
        }
    }
   
    cell1.innerHTML = name;
    cell2.innerHTML = gender_val;
    cell3.innerHTML = age;
    cell4.innerHTML = city;
    cell5.innerHTML = "<button class='btn btn-danger' onclick='deleteData(this);'>Remove</button> / <button class='btn btn-info' onclick='selectData();'>Update</button>"
    selectData();
}

function updateData() {
    
    name = document.getElementById("name").value;
    gender = document.getElementsByName('gender');
    age = document.getElementById("age").value;
    city = document.getElementById("city").value;

    for (var i=0;i<gender.length;i++) {
        if (gender[i].checked) {
            gender_val = gender[i].value;
        }
    }
    table.rows[index].cells[0].innerHTML = name;
    table.rows[index].cells[1].innerHTML = gender_val;
    table.rows[index].cells[2].innerHTML = age;
    table.rows[index].cells[3].innerHTML = city;

}


/* Deleting data in a row*/
function deleteData(name) {
    try {
        var p=name.parentNode.parentNode;
        p.parentNode.removeChild(p);
    }catch(e) {
        alert(e);
    }
}