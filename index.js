//document.getElementById("submitButtonId").disabled = true;

var textfieled = [];
//[{ 0: "11", 1: "11", 2: "11" }, { 0: "11", 1: "11", 2: "11" }, { 0: "11", 1: "11", 2: "11" }, { 0: "11", 1: "11", 2: "11" }, { 0: "11", 1: "11", 2: "11" }, { 0: "11", 1: "11", 2: "11" }, { 0: "11", 1: "11", 2: "11" }, { 0: "11", 1: "11", 2: "11" }, { 0: "11", 1: "11", 2: "11" }, { 0: "11", 1: "11", 2: "11" }, { 0: "224", 1: "224", 2: "224" }, { 0: "224", 1: "224", 2: "224" }, { 0: "224", 1: "224", 2: "224" }, { 0: "224", 1: "224", 2: "224" }, { 0: "224", 1: "224", 2: "224" }, { 0: "224", 1: "224", 2: "224" }, { 0: "224", 1: "224", 2: "224" }, { 0: "224", 1: "224", 2: "224" }, { 0: "224", 1: "224", 2: "224" }, { 0: "224", 1: "224", 2: "224" }, { 0: "3", 1: "3", 2: "3" }, { 0: "3", 1: "3", 2: "3" }, { 0: "3", 1: "3", 2: "3" }, { 0: "3", 1: "3", 2: "3" }, { 0: "3", 1: "3", 2: "3" }, { 0: "3", 1: "3", 2: "3" }, { 0: "3", 1: "3", 2: "3" }, { 0: "3", 1: "3", 2: "3" }, { 0: "3", 1: "3", 2: "404" }, { 0: "3", 1: "3", 2: "404" }];

var page = 0;
const container = document.getElementById("table-layout")
const btnDiv = document.createElement('div');
btnDiv.classList = "btndev"
container.appendChild(btnDiv);
const nextBtn = document.createElement('button');
nextBtn.textContent = "next";
const prevtBtn = document.createElement('button');
prevtBtn.textContent = "prev";
const table_body = document.querySelector('#table-body');
const txt = document.querySelectorAll('#add-row > input')



txt[3].addEventListener(("click"), function() {
    textfieled.push({ 0: txt[0].value, 1: txt[1].value, 2: txt[2].value });
    //console.log(textfieled);
    if (page > 0) {
        creat(textfieled.slice(10 * page))
    } else {
        creat(textfieled);
    }
});


nextBtn.addEventListener("click", function() {
    if (textfieled.length >= (page + 1) * 10) {
        page++;
        creat(textfieled.slice(10 * page))
    }
})
prevtBtn.addEventListener("click", function() {
    if (page > 0) {
        page -= 1;
        creat(textfieled.slice(10 * page))
    }
})

function creat(arr) {
    const table = document.querySelectorAll('#table-body > tr')
    table.forEach(element => element.remove());
    for (let j = 0; j < arr.length; j++) {
        if (j >= 10) {
            container.appendChild(btnDiv);
            btnDiv.appendChild(prevtBtn);
            btnDiv.appendChild(nextBtn);
        } else {
            const row = document.createElement('tr');
            table_body.appendChild(row);
            const colum = document.createElement('td')
            colum.textContent = (j + 1) + (page * 10);
            row.appendChild(colum);
            for (let i = 0; i < 3; i++) {
                const colum = document.createElement('td')
                colum.textContent = arr[j][i];
                row.appendChild(colum);
            }
            const btn = document.createElement('button');
            btn.textContent = "Delete";
            row.appendChild(btn);
            btn.addEventListener('click', function() {
                if (confirm(`Do you want to delete row : ${(j + 1) + (page * 10)}, ${textfieled[(j) + (page * 10)][0]} ${textfieled[(j) + (page * 10)][1]}`)) {
                    textfieled.splice(j + page * 10, 1)
                    if (textfieled.length == 9) { container.removeChild(btnDiv); }
                    creat(textfieled.slice(10 * page))
                }
            })
        }
    }
}
//////////////////////////sorting
const sort = document.getElementsByClassName("sort");
sort[0].addEventListener('click', function() {
    alert("Sort by first name: 0-9")
    page = 0;
    creat(textfieled.sort((a, b) => a[0] - b[0]));
});

sort[1].addEventListener('click', function() {
    page = 0;
    alert("Sort by second name: 0-9")
    creat(textfieled.sort((a, b) => a[1] - b[1]));
});

sort[2].addEventListener('click', function() {
    page = 0;
    alert("Sort by age: 0-9")
    creat(textfieled.sort((a, b) => a[2] - b[2]));
});

//////////////////////////
// Get the modal
var modal = document.getElementsByTagName('body')
const modal_tb = document.getElementById("table-container")
var span = document.getElementsByClassName("close")[0];

// Get the button that opens the modal
var btn = document.getElementsByClassName('num');


// When the user clicks the button, open the modal 
btn[0].addEventListener('click', function() {
    modal_tb.classList = 'modal-content'
    span.style.display = 'block';
    modal[0].classList = 'modal'
})



// When the user clicks anywhere outside of the modal, close it


span.onclick = function() {
    modal_tb.classList = ''
    modal[0].classList = ''
    span.style.display = '';

}