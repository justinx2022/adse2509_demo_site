//JavaScrip document to demonstrate JS custom/user-defined objects and built-in JS objects
//Helper array to build the HTML content
const contentParts = [];
//Create a Student object using object literal
const singleStudent = {
    surname: "Abraham",
    otherNames: "James Akshar",
    age: 22,
    gender: "Male",
    course: "ADSE 2509",
    fullname() {
        return `${this.surname} ${this.otherNames}`;
    }

};

//Creat a section heading and add it to the contentParts array
contentParts.push(`<h3 class = "section-heading">Student Details</h3>`);
contentParts.push(`
    <p>
    Student's name: ${singleStudent.fullname()}<br/>
    Student's age: ${singleStudent.age}<br/>
    Student's gender: ${singleStudent.gender}<br/>
    Student's course: ${singleStudent.course}<br/>
    </p>`);
//Render all the content to the DOM
document.getElementById("object-content").innerHTML = contentParts.join("");