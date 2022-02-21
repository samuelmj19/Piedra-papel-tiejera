let cpuCount = 0;
let userCount = 0;
let reload = document.querySelector('.reload').addEventListener('click', _ =>{location.reload()})
document.getElementById('cpu-counter').innerHTML=cpuCount;
document.getElementById('user-counter').innerHTML=userCount;
// let arrayCard = ['piedra', 'papel', 'tijera'];
// let random = Math.floor(Math.random() * arrayCard.length);
// let cpu = arrayCard[random];
// console.log(cpu)



let piedra = document.querySelector('.card-piedra');
piedra.addEventListener('click', selectPiedra);
let papel = document.querySelector('.card-papel');
papel.addEventListener('click', selectpapel);
let tijera = document.querySelector('.card-tijera');
tijera.addEventListener('click', selecttijera);


function selectPiedra (){
    let arrayCard = ['piedra', 'papel', 'tijera'];
    let random = Math.floor(Math.random() * arrayCard.length);
    let cpu = arrayCard[random];
    console.log(cpu)
    play(cpu, 'piedra')
}
function selectpapel (){
    let arrayCard = ['piedra', 'papel', 'tijera'];
    let random = Math.floor(Math.random() * arrayCard.length);
    let cpu = arrayCard[random];
    console.log(cpu)
    play(cpu,'papel')
}
function selecttijera (){
    let arrayCard = ['piedra', 'papel', 'tijera'];
    let random = Math.floor(Math.random() * arrayCard.length);
    let cpu = arrayCard[random];
    console.log(cpu)
    play(cpu, 'tijera')
}

function play (cpuSelection, user){
    if (user == 'piedra'){
        switch(cpuSelection){
            case 'piedra':
                // let piedraUser = document.querySelector('.card-cpu');
                // piedraUser.classList.toggle('piedra');
                console.log('empate')
                document.getElementById('marcador').innerHTML='Tie';
            break;
            case 'papel':
                // let papelUser = document.querySelector('.card-cpu');
                // papelUser.classList.toggle('papel');
                cpuCount++;
                console.log('perdiste')
                document.getElementById('marcador').innerHTML='You Lose';
            break;
            case 'tijera':
                // let tijeraUser = document.querySelector('.card-cpu');
                // tijeraUser.classList.toggle('tijera');
                userCount++;
                console.log('haz ganado' + userCount)
                document.getElementById('marcador').innerHTML='You Won';
            break;
        }
    }
    if (user == 'papel'){
        switch(cpuSelection){
            case 'papel':
                // let papelUser = document.querySelector('.card-cpu');
                // papelUser.classList.toggle('papel');
                console.log('empate');
                document.getElementById('marcador').innerHTML='Tie';
            break;
            case 'tijera':
                // let tijeraUser = document.querySelector('.card-cpu');
                // tijeraUser.classList.toggle('tijera');
                cpuCount++;
                console.log('perdiste');
                document.getElementById('marcador').innerHTML='You Lose';
            break;
            case 'piedra':
                // let piedraUser = document.querySelector('.card-cpu');
                // piedraUser.classList.toggle('piedra');
                userCount++;
                console.log('haz ganado' + userCount);
                document.getElementById('marcador').innerHTML='You Won';
            break;
        }
    }
    if (user == 'tijera'){
        switch(cpuSelection){
            case 'tijera':
                // let tijeraUser = document.querySelector('.card-cpu');
                // tijeraUser.classList.toggle('tijera');
                console.log('empate');
                document.getElementById('marcador').innerHTML='Tie';
            break;
            case 'piedra':
                // let piedraUser = document.querySelector('.card-cpu');
                // piedraUser.classList.toggle('piedra');
                cpuCount++;
                console.log('perdiste');
                document.getElementById('marcador').innerHTML='You Lose';

            break;
            case 'papel':
                // let papelUser = document.querySelector('.card-cpu');
                // papelUser.classList.toggle('papel');
                userCount++;
                console.log('haz ganado' + userCount);
                document.getElementById('marcador').innerHTML='You Won';

            break;
        }
    }
    console.log(`Cpu: ${cpuCount} User: ${userCount}`)
    document.getElementById('cpu-counter').innerHTML=cpuCount;
    document.getElementById('user-counter').innerHTML=userCount;

}

function cpu(){
    let arrayCard = ['piedra', 'papel', 'tijera'];
    let random = Math.floor(Math.random() * arrayCard.length);
    let cpu = arrayCard[random];
    console.log(cpu)
}

