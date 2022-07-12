let employees = []

function Employee(name, jobTitle, salary, status = "Full Time") {
this.name = name 
this.jobTitle = jobTitle
this.salary = salary
this.status = status 
    this.printEmployeeForm = function() {
        console.log("Name: "+this.name+",", "Job Title :"+this.jobTitle +",","Salary: "+ this.salary+ ",","Status: " +this.status)
    }
}
let employee1 = new Employee("Jim", "Host", "10k/year", )
employee1.status = "Contract"

let employee2 = new Employee("Alyssa", "Manager", "30k/year" )
let employee3 = new Employee("Craig", "Dish Washer", "15k/year")

employees.push(employee1,employee2,employee3)
console.log(employees)

employee1.printEmployeeForm()
// console.log(employee1,employee2,employee3)

// console.log(`This is an   example.  ${employee1.name}
//     second line
// `)