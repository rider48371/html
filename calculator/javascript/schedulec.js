const el =document.getElementById('years');
const one =document.getElementById('one');

el.addEventListener('change', function handleChange(event){
    if (event.target.value === '1 Year') {
        box.style.visibility = 'visible';
    } else {
        box.style.visibility = 'hidden';
    }
    });
