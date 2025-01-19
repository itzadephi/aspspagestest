let select_id = document.getElementById('select-id');
let lets_go = document.getElementById('lets-go');
let state_screen = 'main';

let myname = localStorage.getItem('myname');
let current_subtest = localStorage.getItem('subtest');

const SUBTEST_TIME = {
    'Quantitative Reasoning': 600,
    'Mathematical Reasoning': 900
    // TODO: Add to these
};

const SUBTEST_CODE = {
    'Quantitative Reasoning': 'qr',
    'Mathematical Reasoning': 'mr'
    // TODO: Add to these
}

if(myname == null){
    let rnum = Math.floor(Math.random() * 10000)
    localStorage.setItem('myname', 'user' + rnum);
    let myname = localStorage.getItem('myname');
}

if(current_subtest == null){
    localStorage.setItem('subtest', 'Quantitative Reasoning');
    current_subtest = localStorage.getItem('subtest');
}

select_id.addEventListener('input', function(ev){
    lets_go.disabled = (select_id.value === 'Choose smth');
});

lets_go.addEventListener('click', function(ev){
    localStorage.setItem('subtest', select_id.value);
    current_subtest = localStorage.getItem('subtest');
    document.querySelector('.main-screen').style['display'] = 'none';
    state_screen = 'solve';
    //window.history.pushState(null, '', window.location.href + 'solve');
    enterSolveState();
});

function enterMainState(){
    document.querySelector('.main-screen').style['display'] = 'block';
}

function enterSolveState(){
    document.querySelector('.solve-screen').style['display'] = 'block';
    loadQuestion(1);
}

function loadQuestion(qn){
    let passage = fetch('subtests/' + SUBTEST_CODE[current_subtest] + '/p' + qn + '.json')
    .then((response) => response.json());
    let question = fetch('subtests/' + SUBTEST_CODE[current_subtest] + '/' + qn + '.json')
    .then((response) => response.json());
    document.querySelector('.passage').innerHTML = passage['content'];
    switch(question['option-type']) {
        case 'mcq':

            break;
    }
}

addEventListener('popstate', (ev) => {
    
});

setInterval(() => {
    document.querySelector('.times-up-bg').style['display'] = 'flex';
}, 3000);