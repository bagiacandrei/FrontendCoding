var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];
function showList() {
    var myTable = '<table class="table" border="1"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>Stergere</th><th>Vizualizare</th></tr>';
    for (var i in employeesList) {
        myTable += '<tr><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName + '</td><td>' + employeesList[i].phone + '</td><td>' +
            employeesList[i].salary +'</td><td><button onclick="deleteColumn('+i+')">Delete</button></td><td><button onclick="view(\''+employeesList[i].firstName+'\')">View</button></td></tr>';
    }
    myTable+='<tr><td>'+commonNames()+'</td><td>' + uniqueNames() + '</td><td>' + telephoneNumbers() +'</td><td>' + averageSalary() + '</td></tr>';
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}
var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}
function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));
    showList();
}
function salaryTotal() {
    var totalSalary =0.0;
    for (var i in employeesList) {
        totalSalary +=parseFloat(employeesList[i].salary);
    }
    var container = document.getElementById('listcontainer');
    container.innerHTML = totalSalary;
}
function deleteLastEmployee(){
    employeesList.pop();
    showList();
}
function deleteColumn(i){
       // console.log(i);
       employeesList.splice(i,1);
        showList();
}
function view(employee){
    alert(employee);
}
function commonNames() {
    var namesNumber;
    var max = 0;
    var index =0;
    for (i=0;i<employeesList.length;i++) {
        namesNumber = 0;
        for (j = i + 1;j<employeesList.length;j++) {
            if (employeesList[i].firstName == employeesList[j].firstName)
                namesNumber++;
        }
            if (namesNumber > max) {
                max = namesNumber;
                index = i;
            }
    }
    return employeesList[index].firstName;
}
function uniqueNames()
{
    var namesNumber=0;
    for (i=0;i<employeesList.length;i++)
            if(employeesList.indexOf(employeesList[i].lastName!=-1));
                namesNumber++;
    return namesNumber;
}
function telephoneNumbers()
{
    var counter;
    var max=0;
    var index;
    for(i=0;i<employeesList.length;i++){
        counter=0;
        for(j=i+1;j<employeesList.length;j++){
            if(employeesList[j].phone.slice(0,5).indexOf(employeesList[i].phone.slice(0,5))!=-1){
                counter++;
            }
        }
        if(counter>max){
            max=counter;
            index=i;
        }
    }
    return employeesList[index].phone.slice(0,5).split("");
}
function averageSalary()
{   var s=0.0;
    for(i=0;i<employeesList.length;i++) {
        s+=parseFloat(employeesList[i].salary);
    }
    return s/employeesList.length;

}