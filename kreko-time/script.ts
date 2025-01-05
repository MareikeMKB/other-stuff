// button switches
let start= 1;
let buttons = 1;

// buttons
document.querySelector("#button1")!.addEventListener("click", function () {
    if (buttons == 1) {
        document.getElementById("zeit")!.removeChild(document.getElementById("present")!);
        let img = document.createElement("img");
        document.getElementById("zeit")!.appendChild(img);
        img.setAttribute("src", "tunnel-14747_256.gif");
        img.setAttribute("id", "future");
        buttons = 0;
        setTimeout(() => {
            start= 1;
            buttons = 1;
            document.getElementById("zeit")!.removeChild(document.getElementById("future")!);
            let img = document.createElement("img");
            document.getElementById("zeit")!.appendChild(img);
            img.setAttribute("src", "100206b.tif");
            img.setAttribute("id", "past");
        },3000); //hier unten ist Zeit Timeout in ms, *überall* ändern
    }
})
document.querySelector("#button2")!.addEventListener("click", function () {
    if (buttons == 1) {
        document.getElementById("zeit")!.removeChild(document.getElementById("present")!);
        let img = document.createElement("img");
        document.getElementById("zeit")!.appendChild(img);
        img.setAttribute("src", "feather-13992_256.gif");
        img.setAttribute("id", "future");
        buttons = 0;
        setTimeout(() => {
            start= 1;
            buttons = 1;
            document.getElementById("zeit")!.removeChild(document.getElementById("future")!);
            let img = document.createElement("img");
            document.getElementById("zeit")!.appendChild(img);
            img.setAttribute("src", "100206b.tif");
            img.setAttribute("id", "past");
        },3000);
    }
})
document.querySelector("#button3")!.addEventListener("click", function () {
    if (buttons == 1) {
        document.getElementById("zeit")!.removeChild(document.getElementById("present")!);
        let img = document.createElement("img");
        document.getElementById("zeit")!.appendChild(img);
        img.setAttribute("src", "christmas-tree-15498_256.gif");
        img.setAttribute("id", "future");
        buttons = 0;
        setTimeout(() => {
            start= 1;
            buttons = 1;
            document.getElementById("zeit")!.removeChild(document.getElementById("future")!);
            let img = document.createElement("img");
            document.getElementById("zeit")!.appendChild(img);
            img.setAttribute("src", "100206b.tif");
            img.setAttribute("id", "past");
        },3000);
    }
})
document.querySelector("#button4")!.addEventListener("click", function () {
    if (buttons == 1) {
        document.getElementById("zeit")!.removeChild(document.getElementById("present")!);
        let img = document.createElement("img");
        document.getElementById("zeit")!.appendChild(img);
        img.setAttribute("src", "sci-fi-16832_256.gif");
        img.setAttribute("id", "future");
        buttons = 0;
        setTimeout(() => {
            start= 1;
            buttons = 1;
            document.getElementById("zeit")!.removeChild(document.getElementById("future")!);
            let img = document.createElement("img");
            document.getElementById("zeit")!.appendChild(img);
            img.setAttribute("src", "100206b.tif");
            img.setAttribute("id", "past");
        },3000);
    }
})
document.querySelector("#button5")!.addEventListener("click", function () {
    if (buttons == 1) {
        document.getElementById("zeit")!.removeChild(document.getElementById("present")!);
        let img = document.createElement("img");
        document.getElementById("zeit")!.appendChild(img);
        img.setAttribute("src", "tunnel-14747_256.gif");
        img.setAttribute("id", "future");
        buttons = 0;
        setTimeout(() => {
            start= 1;
            buttons = 1;
            document.getElementById("zeit")!.removeChild(document.getElementById("future")!);
            let img = document.createElement("img");
            document.getElementById("zeit")!.appendChild(img);
            img.setAttribute("src", "100206b.tif");
            img.setAttribute("id", "past");
        },3000);
    }
})

document.querySelector("#start")!.addEventListener("click", function () {
    if (start == 1) {
        document.getElementById("zeit")!.removeChild(document.getElementById("past")!);
        let img = document.createElement("img");
        document.getElementById("zeit")!.appendChild(img);
        img.setAttribute("src", "716411778153709628.gif");
        img.setAttribute("id", "present");
        start = 0;
    }
})

