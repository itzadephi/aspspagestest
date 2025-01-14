let select_id = document.getElementById('select-id');
let lets_go = document.getElementById('lets-go');

select_id.addEventListener('input', function(ev){
    lets_go.disabled = (select_id.value === 'Choose smth')
});