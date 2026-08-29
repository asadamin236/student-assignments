// Question No. 1

// if (c.toLowerCase() === name.toLowerCase())


let c = prompt("Enter Your Name")
let name = "inshal"
let id1 = 10;

const promises = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (c.toLowerCase() === name.toLowerCase()) {
            alert("Logged In")
            resolve("Operation Successdfull")
            console.log({ name: name, id: id1 })
        }
        else {
            alert("Please Try Again")
            reject("Something Went Wrong")
        }
    }, 2000);
})

promises.then((result) => {
    console.log(result)
})
    .catch((error) => {
        console.log(error)
    })

// Questioon No. 2 (4 Digit PIN Lock)

let pin = prompt("Enter your 4-digit PIN:");
const pinLock = new Promise((resolve, reject) => {

    if (pin === "1234") {
        setTimeout(() => {
            resolve("Access Granted");
        }, 3000);
    }
    else {
        reject("Wrong PIN")
    }

})
pinLock
    .then((message) => {
        console.log(message);
        alert(message);
    })
    .catch((error) => {
        console.log(error);
        alert(error);
    });

// Question No. 3 (Balance Check Logic)

let names = prompt("Enter your name:");
let amount = Number(prompt("Enter withdrawal amount:"));

const transaction = new Promise((resolve, reject) => {
    if (name === "inshal" && amount <= 500) {
        resolve("Transaction Successful");
    }
    else if (amount > 500) {
        reject("Insufficient Balance")
    }

})

transaction.then((message) => {
    console.log(message);
    alert(message)
})

    .catch((error) => {
        console.log(error)
        alert(error)
    })

// Question No. 4 (Custom Timeout Failure)

let startTime = Date.now();
let score = 80;
let timeTaken = Date.now() - startTime;

const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        if (timeTaken > 5000) {
            reject("Request Timed Out");
        } else {
            resolve("User Score: " + score);
        }

    }, 6000);
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// Question 5 Double Password Matching
 

let password = prompt("Enter Password:");
let confirmPassword = prompt("Confirm Password:");

const passwords = new Promise((resolve, reject) => {

    if (password === confirmPassword && password.length > 6) {
        resolve("Password Matched Successfully");
    } else {
        reject("Password does not match or is too short");
    }

});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });