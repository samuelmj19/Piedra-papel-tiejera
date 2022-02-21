let cpuCount = 0;
let userCount = 0;
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
            break;
            case 'papel':
                // let papelUser = document.querySelector('.card-cpu');
                // papelUser.classList.toggle('papel');
                cpuCount++;
                console.log('perdiste')
            break;
            case 'tijera':
                // let tijeraUser = document.querySelector('.card-cpu');
                // tijeraUser.classList.toggle('tijera');
                userCount++;
                console.log('haz ganado' + userCount)

            break;
        }
    }
    if (user == 'papel'){
        switch(cpuSelection){
            case 'papel':
                // let papelUser = document.querySelector('.card-cpu');
                // papelUser.classList.toggle('papel');
                console.log('empate');
            break;
            case 'tijera':
                // let tijeraUser = document.querySelector('.card-cpu');
                // tijeraUser.classList.toggle('tijera');
                cpuCount++;
                console.log('perdiste');
            break;
            case 'piedra':
                // let piedraUser = document.querySelector('.card-cpu');
                // piedraUser.classList.toggle('piedra');
                userCount++;
                console.log('haz ganado' + userCount);
            break;
        }
    }
    if (user == 'tijera'){
        switch(cpuSelection){
            case 'tijera':
                // let tijeraUser = document.querySelector('.card-cpu');
                // tijeraUser.classList.toggle('tijera');
                console.log('empate');
            break;
            case 'piedra':
                // let piedraUser = document.querySelector('.card-cpu');
                // piedraUser.classList.toggle('piedra');
                cpuCount++;
                console.log('perdiste');
            break;
            case 'papel':
                // let papelUser = document.querySelector('.card-cpu');
                // papelUser.classList.toggle('papel');
                userCount++;
                console.log('haz ganado' + userCount);
            break;
        }
    }
    console.log(`Cpu: ${cpuCount} User: ${userCount}`)
}

function cpu(){
    let arrayCard = ['piedra', 'papel', 'tijera'];
    let random = Math.floor(Math.random() * arrayCard.length);
    let cpu = arrayCard[random];
    console.log(cpu)
}

