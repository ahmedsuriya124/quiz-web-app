let mainPage = document.querySelector('.mainPage');
let quizContainer = document.querySelector('.quizContainer');
let scoreBoard = document.querySelector('.scoreBoard')
let subjectHeading = document.getElementById('subjectHeading');
let notSelectOption = document.getElementById('notSelectOption');
let homeBtn = document.getElementById('homeBtn');
let ansCheckBtn = document.getElementById('ansCheckBtn');
let quizQues = document.getElementById('quizQues');
let option1 = document.getElementById('option1')
let option2 = document.getElementById('option2')
let option3 = document.getElementById('option3')
let option4 = document.getElementById('option4')
let radioLabel1 = document.getElementById('radioLabel1');
let radioLabel2 = document.getElementById('radioLabel2');
let radioLabel3 = document.getElementById('radioLabel3');
let radioLabel4 = document.getElementById('radioLabel4');
let radio1 = document.getElementById('radio1')
let radio2 = document.getElementById('radio2')
let radio3 = document.getElementById('radio3')
let radio4 = document.getElementById('radio4')
let scoreMsg = document.getElementById('scoreMsg');
let scoreStatus = document.getElementById('scoreStatus');
let scoreRemarkMsg = document.getElementById('scoreRemarkMsg');
let urduBtn = document.getElementById('urduBtn');
let engBtn = document.getElementById('engBtn');
let mathBtn = document.getElementById('mathBtn');
let physBtn = document.getElementById('physBtn');
let nextBtn = document.getElementById('nextBtn');
let urduQues = ['What does Aloo mean?', 'What does tehzeeb mean?', 'What does Dil mean?', 'How do you say book in Urdu?', 'How do you say fat in Urdu?'];
let engQues = ['What _______ when I called?', 'Which word form is not correct?', 'Nothing _________ done when the boss is away.', 'You can use my car ______ tomorrow.', 'What _______ your favorite food as a child?'];
let mathQues = ['What is the sum of 555 + 555 + 123?', 'What is 15 times 12?', 'What is 50 divided by 5?', 'What is 5^3?', 'Subtract 54 from 693'];
let physQues = ['Which of the following is responsible for the fact that Tennis ball bounces higher at high altitudes than in plains?', 'What is the focal length of a concave lense with number -5D?', 'Zero point energy is the lowest possible energy that a quantum mechanical physical system may have. “Who among the following proposed this concept?', 'Which among the following is true about latent heat ?', 'Which of the following waves can be used to measure the speed of a approaching car?'];
let urduAns = ['Potato', 'Manners', 'Heart', 'Kitab', 'Mota']
let engAns = ['were you doing', 'Clotheful', 'Gets', 'Until', 'Was']
let mathAns = ['1233', '180', '10', '125', '639']
let physAns = ['Less dense air', '20 cm', 'Albert Einstein and Otto Stern', 'It causes change in state or phase but not in temperature', 'Radio waves']
let urduOption = [{ opt1: 'Carrot', opt2: 'Turnip', opt3: 'Potato', opt4: 'Eye' }, { opt1: 'Confidence', opt2: 'Manners', opt3: 'Trust', opt4: 'Love' }, { opt1: 'Lungs', opt2: 'Brain', opt3: 'Heart', opt4: 'Hands' }, { opt1: 'Naan', opt2: 'Chua', opt3: 'Chawal', opt4: 'Kitab' }, { opt1: 'Mota', opt2: 'Patla', opt3: 'Chapati', opt4: 'Daal' }]
let engOption = [{ opt1: 'was you doing', opt2: 'was you do', opt3: 'were you doing', opt4: 'you were doing' }, { opt1: 'Clotheful', opt2: 'Clothing', opt3: 'Clothed', opt4: 'Clothe' }, { opt1: 'Becomes', opt2: 'Gets', opt3: 'Been', opt4: 'Got' }, { opt1: 'Yet', opt2: 'Since', opt3: 'Until', opt4: 'Around' }, { opt1: 'Will', opt2: 'Was', opt3: 'Would', opt4: 'Is' }]

let mathOption = [{ opt1: '1123', opt2: '1233', opt3: '1103', opt4: '1223' }, { opt1: '172', opt2: '164', opt3: '180', opt4: '162' }, { opt1: '10', opt2: '15', opt3: '5', opt4: '45' }, { opt1: '8', opt2: '125', opt3: '75', opt4: '15' }, { opt1: '747', opt2: '3742', opt3: '639', opt4: '654' }]

let physOption = [{ opt1: 'Low Gravity', opt2: 'High Gravity', opt3: 'Less dense air', opt4: 'Low atmospheric temperature' }, { opt1: '5 cm', opt2: '10 cm', opt3: '15 cm', opt4: '20 cm' }, { opt1: 'Max Planck', opt2: 'Albert Einstein and Otto Stern', opt3: 'Hendrik B. G. Casimir', opt4: 'Gribbin, John' }, { opt1: 'It causes change in temperature as well as change in state or phase', opt2: 'It causes change in temperature only', opt3: 'It causes change in state or phase but not in temperature', opt4: 'It causes change in Pressure' }, { opt1: 'Light waves', opt2: 'Micro waves', opt3: 'Radio waves', opt4: 'Sound waves' }]

let count = 0;
urduBtn.onclick = () => {
    mainPage.classList.add('active');
    quizContainer.classList.remove('quizContainer');
    subjectHeading.textContent = 'Urdu'
    quizQues.textContent = `Q${count + 1}: ${urduQues[count]}`;
    option1.textContent = `${urduOption[count].opt1}`;
    option2.textContent = `${urduOption[count].opt2}`;
    option3.textContent = `${urduOption[count].opt3}`;
    option4.textContent = `${urduOption[count].opt4}`;
}
engBtn.onclick = () => {
    mainPage.classList.add('active');
    quizContainer.classList.remove('quizContainer');
    subjectHeading.textContent = 'English';
    quizQues.textContent = `Q${count + 1}: ${engQues[count]}`;
    option1.textContent = `${engOption[count].opt1}`;
    option2.textContent = `${engOption[count].opt2}`;
    option3.textContent = `${engOption[count].opt3}`;
    option4.textContent = `${engOption[count].opt4}`;
}
mathBtn.onclick = () => {
    mainPage.classList.add('active');
    quizContainer.classList.remove('quizContainer');
    subjectHeading.textContent = 'Mathematics';
    quizQues.textContent = `Q${count + 1}: ${mathQues[count]}`;
    option1.textContent = `${mathOption[count].opt1}`;
    option2.textContent = `${mathOption[count].opt2}`;
    option3.textContent = `${mathOption[count].opt3}`;
    option4.textContent = `${mathOption[count].opt4}`;
}
physBtn.onclick = () => {
    mainPage.classList.add('active');
    quizContainer.classList.remove('quizContainer');
    subjectHeading.textContent = 'Physics';
    quizQues.textContent = `Q${count + 1}: ${physQues[count]}`;
    option1.textContent = `${physOption[count].opt1}`;
    option2.textContent = `${physOption[count].opt2}`;
    option3.textContent = `${physOption[count].opt3}`;
    option4.textContent = `${physOption[count].opt4}`;
}
homeBtn.onclick = () => {
    mainPage.classList.remove('active');
    score = 0;
    count = 0;
}

let score = 0;

nextBtn.onclick = () => {
    if (subjectHeading.textContent === 'Urdu') {
        nextbuttonfunc(urduQues, urduAns, urduOption)
    } else if (subjectHeading.textContent === 'English') {
        nextbuttonfunc(engQues, engAns, engOption)
    } else if (subjectHeading.textContent === 'Mathematics') {
        nextbuttonfunc(mathQues, mathAns, mathOption)
    } else {
        nextbuttonfunc(physQues, physAns, physOption)
    }
}
let backgroundRedColor = false;
function nextbuttonfunc(Ques, Ans, Option) {
    if (radio1.checked && count < Ques.length) {
        if (option1.textContent === Ans[count]) {
            notSelectOption.textContent = '';
            radioLabel1.style.backgroundColor = 'lightgreen';
            radio1.checked = false;
            radioButtonDisable(true)
            // count++;
        } else {
            notSelectOption.textContent = '';
            radioLabel1.style.backgroundColor = '#ff8383';
            backgroundRedColor = true;
            radio1.checked = false;
            radioButtonDisable(true)
            if (option2.textContent === Ans[count]) {
                notSelectOption.textContent = '';
                radioLabel2.style.backgroundColor = 'lightgreen';
                radio1.checked = false;
                radioButtonDisable(true)
            } else if (option3.textContent === Ans[count]) {
                notSelectOption.textContent = '';
                radioLabel3.style.backgroundColor = 'lightgreen';
                radio1.checked = false;
                radioButtonDisable(true)
            } else if (option4.textContent === Ans[count]) {
                notSelectOption.textContent = '';
                radioLabel4.style.backgroundColor = 'lightgreen';
                radio1.checked = false;
                radioButtonDisable(true)
            }
        }
    } else if (radioLabel1.style.backgroundColor === 'lightgreen') {
        radioButtonDisable(false)
        if (backgroundRedColor) {
            backgroundRedColor = false;
            radioLabel1.style.backgroundColor = '';
            radioLabel2.style.backgroundColor = '';
            radioLabel3.style.backgroundColor = '';
            radioLabel4.style.backgroundColor = '';
            if (count < Ques.length - 1) {
                count++;
                quizQues.textContent = `Q${count + 1}: ${Ques[count]}`;
                option1.textContent = `${Option[count].opt1}`;
                option2.textContent = `${Option[count].opt2}`;
                option3.textContent = `${Option[count].opt3}`;
                option4.textContent = `${Option[count].opt4}`;
            } else {
                if (score < 3) {
                    scoreBoardfunc(score, Ans, 'Fail', 'Better Luck Next Time!')
                } else {
                    scoreBoardfunc(score, Ans, 'Pass', 'Congratulations!')
                }
                quizContainer.classList.add('quizContainer');
                scoreBoard.classList.remove('scoreBoard');
            }
        } else {
            radioLabel1.style.backgroundColor = '';
            radioLabel2.style.backgroundColor = '';
            radioLabel3.style.backgroundColor = '';
            radioLabel4.style.backgroundColor = '';
            score++;
            if (count < Ques.length - 1) {
                count++;
                quizQues.textContent = `Q${count + 1}: ${Ques[count]}`;
                option1.textContent = `${Option[count].opt1}`;
                option2.textContent = `${Option[count].opt2}`;
                option3.textContent = `${Option[count].opt3}`;
                option4.textContent = `${Option[count].opt4}`;
            } else {
                if (score < 3) {
                    scoreBoardfunc(score, Ans, 'Fail', 'Better Luck Next Time!')
                } else {
                    scoreBoardfunc(score, Ans, 'Pass', 'Congratulations!')
                }
                quizContainer.classList.add('quizContainer');
                scoreBoard.classList.remove('scoreBoard');
            }
        }
    }
    else if (radio2.checked && count < Ques.length) {
        if (option2.textContent === Ans[count]) {
            notSelectOption.textContent = '';
            radioLabel2.style.backgroundColor = 'lightgreen';
            radio2.checked = false;
            radioButtonDisable(true)
        } else {
            notSelectOption.textContent = '';
            radioLabel2.style.backgroundColor = '#ff8383';
            backgroundRedColor = true;
            radio2.checked = false;
            radioButtonDisable(true)
            if (option1.textContent === Ans[count]) {
                notSelectOption.textContent = '';
                radioLabel1.style.backgroundColor = 'lightgreen';
                radio1.checked = false;
                radioButtonDisable(true)
            } else if (option3.textContent === Ans[count]) {
                notSelectOption.textContent = '';
                radioLabel3.style.backgroundColor = 'lightgreen';
                radio1.checked = false;
                radioButtonDisable(true)
            } else if (option4.textContent === Ans[count]) {
                notSelectOption.textContent = '';
                radioLabel4.style.backgroundColor = 'lightgreen';
                radio1.checked = false;
                radioButtonDisable(true)
            }
        }
    } else if (radioLabel2.style.backgroundColor === 'lightgreen') {
        radioButtonDisable(false)
        if (backgroundRedColor) {
            backgroundRedColor = false;
            radioLabel1.style.backgroundColor = '';
            radioLabel2.style.backgroundColor = '';
            radioLabel3.style.backgroundColor = '';
            radioLabel4.style.backgroundColor = '';
            if (count < Ques.length - 1) {
                count++;
                quizQues.textContent = `Q${count + 1}: ${Ques[count]}`;
                option1.textContent = `${Option[count].opt1}`;
                option2.textContent = `${Option[count].opt2}`;
                option3.textContent = `${Option[count].opt3}`;
                option4.textContent = `${Option[count].opt4}`;
            } else {
                if (score < 3) {
                    scoreBoardfunc(score, Ans, 'Fail', 'Better Luck Next Time!')
                } else {
                    scoreBoardfunc(score, Ans, 'Pass', 'Congratulations!')
                }
                quizContainer.classList.add('quizContainer');
                scoreBoard.classList.remove('scoreBoard');
            }
        } else {

            radioLabel1.style.backgroundColor = '';
            radioLabel2.style.backgroundColor = '';
            radioLabel3.style.backgroundColor = '';
            radioLabel4.style.backgroundColor = '';
            score++;
            if (count < Ques.length - 1) {
                count++;
                quizQues.textContent = `Q${count + 1}: ${Ques[count]}`;
                option1.textContent = `${Option[count].opt1}`;
                option2.textContent = `${Option[count].opt2}`;
                option3.textContent = `${Option[count].opt3}`;
                option4.textContent = `${Option[count].opt4}`;
            }
            else {
                if (score < 3) {
                    scoreBoardfunc(score, Ans, 'Fail', 'Better Luck Next Time!')
                } else {
                    scoreBoardfunc(score, Ans, 'Pass', 'Congratulations!')
                }
                quizContainer.classList.add('quizContainer');
                scoreBoard.classList.remove('scoreBoard');
            }
        }
    }
    else if (radio3.checked && count < Ques.length) {
        if (option3.textContent === Ans[count]) {
            notSelectOption.textContent = '';
            radioLabel3.style.backgroundColor = 'lightgreen';
            radio3.checked = false;
            radioButtonDisable(true)

        } else {
            notSelectOption.textContent = '';
            radioLabel3.style.backgroundColor = '#ff8383';
            backgroundRedColor = true;
            radio3.checked = false;
            radioButtonDisable(true)
            if (option1.textContent === Ans[count]) {
                notSelectOption.textContent = '';
                radioLabel1.style.backgroundColor = 'lightgreen';
                radio3.checked = false;
                radioButtonDisable(true)
            } else if (option2.textContent === Ans[count]) {
                notSelectOption.textContent = '';
                radioLabel2.style.backgroundColor = 'lightgreen';
                radio3.checked = false;
                radioButtonDisable(true)
            } else if (option4.textContent === Ans[count]) {
                notSelectOption.textContent = '';
                radioLabel4.style.backgroundColor = 'lightgreen';
                radio3.checked = false;
                radioButtonDisable(true)
            }
        }
    } else if (radioLabel3.style.backgroundColor === 'lightgreen') {
        radioButtonDisable(false)
        if (backgroundRedColor) {
            backgroundRedColor = false;
            radioLabel1.style.backgroundColor = '';
            radioLabel2.style.backgroundColor = '';
            radioLabel3.style.backgroundColor = '';
            radioLabel4.style.backgroundColor = '';
            if (count < Ques.length - 1) {
                count++;
                quizQues.textContent = `Q${count + 1}: ${Ques[count]}`;
                option1.textContent = `${Option[count].opt1}`;
                option2.textContent = `${Option[count].opt2}`;
                option3.textContent = `${Option[count].opt3}`;
                option4.textContent = `${Option[count].opt4}`;
            } else {
                if (score < 3) {
                    scoreBoardfunc(score, Ans, 'Fail', 'Better Luck Next Time!')
                } else {
                    scoreBoardfunc(score, Ans, 'Pass', 'Congratulations!')
                }
                quizContainer.classList.add('quizContainer');
                scoreBoard.classList.remove('scoreBoard');
            }
        } else {
            radioLabel1.style.backgroundColor = '';
            radioLabel2.style.backgroundColor = '';
            radioLabel3.style.backgroundColor = '';
            radioLabel4.style.backgroundColor = '';
            score++;
            if (count < Ques.length - 1) {
                count++;
                quizQues.textContent = `Q${count + 1}: ${Ques[count]}`;
                option1.textContent = `${Option[count].opt1}`;
                option2.textContent = `${Option[count].opt2}`;
                option3.textContent = `${Option[count].opt3}`;
                option4.textContent = `${Option[count].opt4}`;
            }
            else {
                if (score < 3) {
                    scoreBoardfunc(score, Ans, 'Fail', 'Better Luck Next Time!')
                } else {
                    scoreBoardfunc(score, Ans, 'Pass', 'Congratulations!')
                }
                quizContainer.classList.add('quizContainer');
                scoreBoard.classList.remove('scoreBoard');
            }
        }
    }
    else if (radio4.checked && count < Ques.length) {
        if (option4.textContent === Ans[count]) {
            notSelectOption.textContent = '';
            radioLabel4.style.backgroundColor = 'lightgreen';
            radio4.checked = false;
            radioButtonDisable(true)

        } else {
            notSelectOption.textContent = '';
            console.log(Ans[count], 'wrong')
            radioLabel4.style.backgroundColor = '#ff8383';
            backgroundRedColor = true;
            radio4.checked = false;
            radioButtonDisable(true)
            if (option1.textContent === Ans[count]) {
                notSelectOption.textContent = '';
                radioLabel1.style.backgroundColor = 'lightgreen';
                radio4.checked = false;
                radioButtonDisable(true)
            } else if (option2.textContent === Ans[count]) {
                notSelectOption.textContent = '';
                radioLabel2.style.backgroundColor = 'lightgreen';
                radio4.checked = false;
                radioButtonDisable(true)
            } else if (option3.textContent === Ans[count]) {
                notSelectOption.textContent = '';
                radioLabel3.style.backgroundColor = 'lightgreen';
                radio4.checked = false;
                radioButtonDisable(true)
            }

        }
    } else if (radioLabel4.style.backgroundColor === 'lightgreen') {
        radioButtonDisable(false)
        if (backgroundRedColor) {
            backgroundRedColor = false;
            radioLabel1.style.backgroundColor = '';
            radioLabel2.style.backgroundColor = '';
            radioLabel3.style.backgroundColor = '';
            radioLabel4.style.backgroundColor = '';
            if (count < Ques.length - 1) {
                count++;
                quizQues.textContent = `Q${count + 1}: ${Ques[count]}`;
                option1.textContent = `${Option[count].opt1}`;
                option2.textContent = `${Option[count].opt2}`;
                option3.textContent = `${Option[count].opt3}`;
                option4.textContent = `${Option[count].opt4}`;
            } else {
                if (score < 3) {
                    scoreBoardfunc(score, Ans, 'Fail', 'Better Luck Next Time!')
                } else {
                    scoreBoardfunc(score, Ans, 'Pass', 'Congratulations!')
                }
                quizContainer.classList.add('quizContainer');
                scoreBoard.classList.remove('scoreBoard');
            }
        } else {
            radioLabel1.style.backgroundColor = '';
            radioLabel2.style.backgroundColor = '';
            radioLabel3.style.backgroundColor = '';
            radioLabel4.style.backgroundColor = '';
            score++;
            if (count < Ques.length - 1) {
                count++;
                quizQues.textContent = `Q${count + 1}: ${Ques[count]}`;
                option1.textContent = `${Option[count].opt1}`;
                option2.textContent = `${Option[count].opt2}`;
                option3.textContent = `${Option[count].opt3}`;
                option4.textContent = `${Option[count].opt4}`;
            } else {
                console.log('done');
                console.log('score', score);
                if (score < 3) {
                    scoreBoardfunc(score, Ans, 'Fail', 'Better Luck Next Time!')
                } else {
                    scoreBoardfunc(score, Ans, 'Pass', 'Congratulations!')
                }
                quizContainer.classList.add('quizContainer');
                scoreBoard.classList.remove('scoreBoard');
            }
        }
    } else {
        notSelectOption.textContent = 'Select any Option'
    }
}

function scoreBoardfunc(score, Ans, status, msg) {
    scoreMsg.textContent = `${score} / ${Ans.length}`;
    scoreStatus.textContent = `Status: ${status}`;
    scoreRemarkMsg.textContent = `${msg}`
}
function radioButtonDisable(a) {
    radio1.disabled = a;
    radio2.disabled = a;
    radio3.disabled = a;
    radio4.disabled = a;
}