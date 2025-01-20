// button switches
let start= 1;
let buttons = 1;

// buttons
document.querySelector("#button1")!.addEventListener("click", function () {
    if (buttons == 1) {
        document.getElementById("zeit")!.removeChild(document.getElementById("present")!);
        let img = document.createElement("img");
        document.getElementById("zeit")!.appendChild(img);
        img.setAttribute("src", "future_thingies/attemptedweirdhealththing.png");
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
        img.setAttribute("src", "future_thingies/backtonature.png");
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
        img.setAttribute("src", "future_thingies/industrialthing.png");
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
        img.setAttribute("src", "future_thingies/talkingtostrangersthingy.png");
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
        img.setAttribute("src", "future_thingies/treedeath.png");
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
        let vid = document.createElement("video");
        document.getElementById("zeit")!.appendChild(vid);
        vid.setAttribute("src", "Konzeption/Present_Video_Format.mov");
        vid.setAttribute("autoPlay", "true");
        vid.setAttribute("loop", "true");
        vid.setAttribute("id", "present");
        start = 0;
    }
})

