let data = [];
let question_number = 0;
let score = 0;
getdata();
async function getdata() {
    data = JSON.parse(sessionStorage.getItem('data'));
}

function printQuestion() {
    question_data = data[question_number];
    document.getElementById('last_number').innerText = data.length;
    document.getElementById('first_number').innerText = question_number + 1;
    document.getElementById('question').innerText = question_data.question;
    document.querySelector('#ans').innerHTML = "";
    question_data.options.forEach((element, key) => {
        document.querySelector('#ans').innerHTML += `<div class="my-3 border border-primary p-2" style="background-color: #EFFAFF;cursor:pointer" onclick="check(${key})" id="option${key}">${element}</div>`
    });
}
printQuestion();

function questionSwap(type) {
    if (type == "next") {
        if (question_number < data.length - 1) {
            question_number++;
            printQuestion()
        }
    } else if (type == "previous") {
        if (question_number > 0) {
            question_number--;
            printQuestion();
        }
    }
}
function check(key) {
    if (data[question_number].correct_ans == key) {
        score++;
        document.getElementById(`option${key}`).classList.add('bg-success');
        disableOption(key,data[question_number].correct_ans)
    } else if (data[question_number].correct_ans != key) {
        document.getElementById(`option${key}`).classList.add('bg-danger');
        document.getElementById(`option${data[question_number].correct_ans}`).classList.add('bg-success');
        disableOption(key,data[question_number].correct_ans)
    }
}
function disableOption(key_pressed,rignt_ans) {
    let options = document.querySelectorAll('#ans div');
    for (var i = 0; i < Array.from(options).length; i++){
        options[i].removeAttribute('onclick');
        if (i != key_pressed) {
            options[i].classList.add('disable');
        }
    }
}




