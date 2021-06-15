// TODO: PASSAR VARIAVEIS PARA OBJETOS OU ARRAY
const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');
const image4 = document.getElementById('img4');
const p1 = document.getElementById('info1');
const p2 = document.getElementById('info2');
const p3 = document.getElementById('info3');
const p4 = document.getElementById('info4');
const button = document.querySelector('button');
const divInitial = document.getElementById('initial')
const div1 = document.getElementById('pic1')
const div2 = document.getElementById('pic2')
const div3 = document.getElementById('pic3')
const div4 = document.getElementById('pic4')


const maximumNumberOfCharacters = 671;
generateRandomNumber = () => {return Math.floor(Math.random() * maximumNumberOfCharacters);}

getFirstPersonage = () => {
    const id = generateRandomNumber();
    return fetch("https://rickandmortyapi.com/api/character/" + id, {
        method: 'GET', headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image1.src = data.image;
        p1.innerHTML = 'NOME: ' + data.name + '<br>' + 'STATUS: ' + data.status + '<br>' + 'SPECIES: ' + data.species +
            '<br>' + ' ORIGIN: ' + data.origin.name;
        div1.style.display = 'block';       
    })
    // TODO: Implementar catch
    // .catch((error) => {console.log(error)}) 
}
getSecondPersonage = () => {
    const id = generateRandomNumber();
    return fetch("https://rickandmortyapi.com/api/character/" + id, {
        method: 'GET', headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image2.src = data.image;
        p2.innerHTML = 'NOME: ' + data.name + '<br>' + 'STATUS: ' + data.status + '<br>' + 'SPECIES: ' + data.species +
            '<br>' + ' ORIGIN: ' + data.origin.name;
        div2.style.display = 'block';
    })
}
getThirdPersonage = () => {
    const id = generateRandomNumber();
    return fetch("https://rickandmortyapi.com/api/character/" + id, {
        method: 'GET', headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image3.src = data.image;
        p3.innerHTML = 'NOME: ' + data.name + '<br>' + 'STATUS: ' + data.status + '<br>' + 'SPECIES: ' + data.species +
            '<br>' + ' ORIGIN: ' + data.origin.name;
        div3.style.display = 'block';
    })
}
getFourthPersonage = () => {
    const id = generateRandomNumber();
    return fetch("https://rickandmortyapi.com/api/character/" + id, {
        method: 'GET', headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image4.src = data.image;
        p4.innerHTML = 'NOME: ' + data.name + '<br>' + 'STATUS: ' + data.status + '<br>' + 'SPECIES: ' + data.species +
            '<br>' + ' ORIGIN: ' + data.origin.name;
        div4.style.display = 'block';       
    }) 
    
}
handleWithTheGame = () => {
    this.getFirstPersonage()
    this.getSecondPersonage()
    this.getThirdPersonage()
    this.getFourthPersonage()
    button.innerHTML = 'CONTINUAR'
    divInitial.style.display = 'none';
}
button.onclick = handleWithTheGame