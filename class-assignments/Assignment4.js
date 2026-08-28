// Question No. 1

// Reason: The JavaScript gets the starting value from innerHTML,
//  so count will start from 50 and the next click will make it 51.

// Questiion No. 2

// document.querySelectorAll("img").forEach(img => img.style.display = "none");

// Question No. 3


document.getElementById("img1").style.display = "block";
document.getElementById("img2").style.display = "none"
document.getElementById("img3").style.display = "none"


let count = Number(document.getElementById("count").innerHTML);


let button = document.querySelector("button");


button.addEventListener("click", counter);

function counter() {
    count++;

    if (count === 100) {
        count = 0;
    }

    document.getElementById("count").innerHTML = count;


    document.querySelectorAll("img").forEach(img => {
        img.style.display = "none";
    });


    if (count <= 33) {
        document.getElementById("img1").style.display = "block";
    }
    else if (count > 33 && count < 66) {
        document.getElementById("img2").style.display = "block";
    }
    else {
        document.getElementById("img3").style.display = "block";
    }
}