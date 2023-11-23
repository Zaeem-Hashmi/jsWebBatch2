let data =[];
let question_number = 0;
getdata();
async function getdata() {
    data = JSON.parse(sessionStorage.getItem('data'));
}

function printQuestion() {
    question_data = data[question_number];
    document.getElementById('last_number').innerText = data.length;
    document.getElementById('first_number').innerText = question_number+1;
    document.getElementById('question').innerText = question_data.question;
    document.querySelector('#ans').innerHTML = "";
    question_data.options.forEach(element => {
        document.querySelector('#ans').innerHTML += `<div class="my-3 border border-primary p-2" style="background-color: #EFFAFF;">${element}</div>`
    });
}
printQuestion();

function questionSwap(type) {
    if (type == "next") {
        if (question_number < data.length-1) {
            question_number++;
            printQuestion()
        }
    }else if(type == "previous"){
        if (question_number > 0) {
            question_number--;
            printQuestion();
        }
    }
}




