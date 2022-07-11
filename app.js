let employees = []

function Employee(name, jobTitle, salary, status = "Full Time") {
this.name = name 
this.jobTitle = jobTitle
this.salary = salary
this.status = status 
 
function printEmployeeForm () {

    console.log("Name: "+name+",", "Job Title :"+jobTitle +",","Salary: "+ salary+ ",","Status: " +status)
    }
printEmployeeForm()
}
let employee1 = new Employee("Jim", "Host", "10k/year", )
employee1.status = "Contract"
// ask about the printEmployeeForm problem where the status overide wasnt working 
let employee2 = new Employee("Alyssa", "Manager", "30k/year" )
let employee3 = new Employee("Craig", "Dish Washer", "15k/year")

employees.push(employee1,employee2,employee3)
console.log(employees)
// employee1.printEmployeeForm()
// console.log(employee1,employee2,employee3)

// console.log(`This is an   example.  ${employee1.name}
//     second line
// `)