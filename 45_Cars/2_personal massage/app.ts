let personName :string = '';

personName = prompt('what is your name?') || '';

if(personName !== null && personName !== ''){
    alert(`Hello $(peNamerson), would you like to learn some Python today?`)
}
else{
    alert('you have to fill your name !')
}