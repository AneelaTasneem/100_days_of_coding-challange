//Making a Student Template:

// Creating a blueprint (interface) for student information:
interface student{
name: string, 
age:number,
subjects:string[]
};

//filling blue print with appropriate information:
let student:student ={
    name: "Ahad",
    age: 12,
    subjects:["Math", "Science", "History"]
}

// Showing the student's information:
console.log(student )

