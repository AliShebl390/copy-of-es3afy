var selectedRow = null;
function onFormSubmit() {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
}
function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["mobile"] = document.getElementById("mobile").value;
    formData["id"] = document.getElementById("id").value;
    formData["email"] = document.getElementById("email").value;
    formData["status"] = document.getElementById("status").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("employeeList");
    var newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.mobile;
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.id;
    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    let cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.status;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<i onClick="onEdit(this); show()" class="fas fa-edit edit-icon"></i>
    <i  onClick="onDelete(this)" class="fas fa-trash delete-icon"></i>`;
}
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("id").value = "";
    document.getElementById("email").value = "";
    document.getElementById("status").value = "";
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("mobile").value = selectedRow.cells[1].innerHTML;
    document.getElementById("id").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("status").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.mobile;
    selectedRow.cells[2].innerHTML = formData.id;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.status;
}
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
const closeIcon =document.querySelector('.close-icon');
const addIcon = document.querySelector('.add-icon')
const submitBtn = document.querySelector('.submit-btn')
const overlay =document.querySelector('.overlay');
closeIcon.addEventListener('click',function(){
    overlay.style.display="none";
})
addIcon.addEventListener('click',function(){
    overlay.style.display="block";
})
submitBtn.addEventListener('click',function(){
    overlay.style.display="none";
})
function show(){
    overlay.style.display="block";
}
const searchIcon = document.querySelector('.search-icon')
const searchInput = document.querySelector('.search-input')
const searchContainer= document.querySelector('.search-container')
searchIcon.addEventListener('click',function(){
searchContainer.classList.toggle('show')
searchInput.focus();
})
