document.addEventListener("DOMContentLoaded", function () {
    //Javascript document to demonstrate Javascript loop , single and multi-dimensional arrays, their methods and properties.

    //Looping variables
    let n, a;

    //Variable to hold the content to be appointed to the 'array-content'
    let arrayContent = "";

    //Declare a single dimensional array of student name,
    let studentNames = ["Justin", "Matthew", "Alexander", "Pascal", "Zakaria", "Miranda", "Teka", "Sahara", "Fatma", "Mapena"];
    //Populate this 'array-content' div with the student names above
    for (n = 0; n < studentNames.length; n++) {
        arrayContent += 'Student ' + (n + 1) + ': ' + studentNames[n] + '<br>';
    }

    //Get the number of students in the class
    arrayContent += '<p>The number of students in the class is: ' + studentNames.length + '</p>';

    //Admit/add new students to the class
    studentNames.push("George", "Yorusalien", "Levi", "Hana", "Abigail", "Tesfai");

    //Paragraph element to display the names new admissions/students
    arrayContent += '<h4>New admissions/students:</h4>';
    //Display only the newly added students (last 6)
    for (n = studentNames.length - 6; n < studentNames.length; n++) {
        arrayContent += 'Student ' + (n + 1) + ': ' + studentNames[n] + '<br>';
    }

    //Display all students before sorting
    for (n = 0; n < studentNames.length; n++) {
        arrayContent += 'Student ' + (n + 1) + ': ' + studentNames[n] + '<br>';
    }

    //Sort the studentNames in ascending order
    studentNames.sort();
    arrayContent += '<h4>Sorted Student Names (Ascending):</h4>';
    for (n = 0; n < studentNames.length; n++) {
        arrayContent += (n + 1) + '. ' + studentNames[n] + '<br>';
    }

    //Sort the names in reverse order
    studentNames.reverse();
    arrayContent += '<h4>Sorted Student Names (Descending):</h4>';
    for (n = 0; n < studentNames.length; n++) {
        arrayContent += (n + 1) + '. ' + studentNames[n] + '<br>';
    }

    //Two dimensional arrays
    //Heading for the staff section
    arrayContent += '<h2 class="section-heading">ADSE2509 Staff Salary Report</h2>';

    //Declare and initialise a 2-D array to hold staff salary
    let staffSalary = new Array(10);

    //Initialize the rows
    staffSalary[0] = ["Justin", "001", 10000, 30000, 5000];
    staffSalary[1] = ["Matthew", "002", 10000, 30000, 5000];
    staffSalary[2] = ["Alexander", "003", 10000, 30000, 5000];
    staffSalary[3] = ["Pascal", "004", 10000, 30000, 5000];
    staffSalary[4] = ["Zakaria", "005", 10000, 30000, 5000];
    staffSalary[5] = ["Miranda", "006", 10000, 30000, 5000];
    staffSalary[6] = ["Teka", "007", 10000, 30000, 5000];
    staffSalary[7] = ["Sahara", "008", 10000, 30000, 5000];
    staffSalary[8] = ["Fatma", "009", 10000, 30000, 5000];
    staffSalary[9] = ["Mapena", "010", 10000, 30000, 5000];

    //Displaying the 2D Array in a table
    arrayContent += '<table border="1" style="border-collapse:collapse; width:100%;">';
    arrayContent += '<tr><th>Name</th><th>Employee ID</th><th>Basic</th><th>House Allowance</th><th>Travel Allowance</th><th>Gross Pay</th></tr>';

    //Use a nested loop to display employee salary details
    for (n = 0; n < staffSalary.length; n++) {
        if (staffSalary[n]) {
            let grossPay = 0;
            arrayContent += '<tr>';
            for (a = 0; a < staffSalary[n].length; a++) {
                arrayContent += '<td style="padding:5px;">' + staffSalary[n][a] + '</td>';
                // Calculate gross pay sum for numeric fields (Basic, start at index 2)
                if (a > 1) {
                    grossPay += Number(staffSalary[n][a]);
                }
            }
            // Add the Gross Pay column
            arrayContent += '<td style="padding:5px; font-weight:bold;">' + grossPay + '</td>';
            arrayContent += '</tr>';
        }
    }
    arrayContent += '</table>';

    //display the contents of the arrayContent variable safely
    const contentDiv = document.getElementById("array-content");
    if (contentDiv) {
        contentDiv.innerHTML = arrayContent;
    } else {
        console.error("Element with id 'array-content' not found!");
    }
});