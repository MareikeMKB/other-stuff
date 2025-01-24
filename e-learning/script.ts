interface Task {
    name: string;
}

let list: any[] = [];
let boxes: HTMLInputElement[] = [];

function showTask(task: Task, i: string, j: number) {
    let div = document.createElement('div');
    div.setAttribute("class",i);
    document.getElementById('box')!.appendChild(div);
    let box = document.createElement('input');
    box.setAttribute('type','checkbox');
    div.appendChild(box);
    let aufgabe = document.createElement('p');
    div.appendChild(aufgabe);
    aufgabe.innerHTML = task.name
    list.push(j);
    boxes.push(box);
}

let button = document.createElement('button');
    document.getElementById("box")!.appendChild(button);
    button.innerHTML = 'Absenden';
    button.addEventListener('click', function(){
        let c = 0
        for (var val of boxes) {
            if (val.checked) {
                if (list[c] == 1) {
                    let p = document.createElement("p");
                    document.getElementById('box')!.appendChild(p);
                    p.innerHTML = "Korrekt!"
                }
                else {
                    let p = document.createElement("p");
                    document.getElementById('box')!.appendChild(p);
                    p.innerHTML = "Inkorrekt!"
                }
            }
            c++;
       }
       for (var val of boxes) {
        this.parentNode!.removeChild(this)
       }
    })

    let test: Task= {
        name: "Platzhalter1"
    }
    let test2: Task= {
        name: "Platzhalter2"
    } 
    
    
    showTask(test, 'aufgabe', 0);
    showTask(test2, 'aufgabe', 1);


// Maybe copy paste everything and change all variable names for all the questions and answers
//Definitely not pretty but it would work probably

    document.getElementById("link")?.addEventListener('click', function() {
        button.parentNode!.parentNode!.removeChild(button.parentNode!)
        function change_page(){
            window.location.href = "test.html";
          } 
    })
