console.log("TODO List");

const addBtn = document.getElementById('btn');

addBtn.addEventListener('click', () => {
    let inputTxt = document.getElementById('inputTxt');
    if (inputTxt.value === "") {
        alert("Please Enter the task !");
    } else {
        document.getElementById('list').innerHTML += `<div class="task">
            <span>${inputTxt.value}</span>
            <button class="remove">Delete</button>
        </div>`;

        inputTxt.value = "";

        // let deleteBtn = document.querySelectorAll(".remove");
        // deleteBtn.forEach(element => {
        //     element.onclick = function () {
        //         element.parentElement.remove();
        //     }
        // });
    }
})


const list = document.getElementById('list');

list.addEventListener('click',(event)=>{
    if (event.target.tagName == 'BUTTON') {
        console.log(event.target);
        deleteElement(event.target)
    }
})

function deleteElement(element) {
    element.parentElement.remove();
}
