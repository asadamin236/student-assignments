// Q1 — Basic Student Promise

function getStudentid(student, id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (id === 1) {
                console.log(student, id)
                resolve("Student Found")

            }
            else {
                reject("Student Not Found")
            }
        }, 2000);
    })
}
getStudentid("Inshal", 1)
    .then((result) => {
        console.log(result)

    })
    .catch((error) => {
        console.log(error)
    })

// Q2 — Fetch Three Students Using .then() 

function fetchStudent(name, id) {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log(name, id);

            resolve();

        }, 2000);

    });
}

fetchStudent("Student1", 1)
    .then(() => {
        return fetchStudent("Student2", 2)
    })
    .then(() => {
        return fetchStudent("Student3", 3)
    })
    .then(() => {
        console.log("All students fetched");
    })


// Q3 — Fetch Three Students Using async/await

function fetchData(student, id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(student, id)
            resolve()
        }, 2000);
    })
}

async function getAllstudents() {
    await fetchData("Inshal", 1)
    await fetchData("Lubna", 2)
    await fetchData("Aiman", 3)

    console.log("All students fetched");

}

getAllstudents()




// Q4 — Student Result

function getResult(studentId) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (studentId === 1) {
                resolve({
                    studentId: studentId,
                    score: 85
                })
            }
            else {
                reject("Student not found")
            }

        }, 2000);

    });
}

getResult(1)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });