let select_id = document.getElementById('select-id');
let lets_go = document.getElementById('lets-go');
let state_screen = 'main';

let myname = localStorage.getItem('myname');
let current_subtest = localStorage.getItem('subtest');

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
    window.history.replaceState(null, '', window.location.href + 'solve');
});

function enterMainState(){
    document.querySelector('.main-screen').style['display'] = 'block';
}

function enterSolveState(){
    document.querySelector('.solve-screen').style['display'] = 'block';
    
}

addEventListener('backbutton', (ev) => {
    if(state_screen == 'solve'){
        state_screen = 'main';
        enterMainState();
        ev.preventDefault();
    }
});
