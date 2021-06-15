const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');
const image4 = document.getElementById('img4');
const p1 = document.getElementById('name1');
const p2 = document.getElementById('name2');
const p3 = document.getElementById('name3');
const p4 = document.getElementById('name4');
const button = document.querySelector('button');
const divInicial = document.getElementById('inicial')
const div1 = document.getElementById('imagem1')
const div2 = document.getElementById('imagem2')
const div3 = document.getElementById('imagem3')
const div4 = document.getElementById('imagem4')
const numeroMaximoDePersonagens = 671;


generateRandomNumber = () => {
    return Math.floor(Math.random() * numeroMaximoDePersonagens);
}

getCharacter1 = () => {

    const id = generateRandomNumber();
    return fetch("https://rickandmortyapi.com/api/character/" + id, {
        method: 'GET', headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image1.src = data.image;
        p1.innerHTML = 'NOME: '  + data.name + '<br>' + ' STATUS: ' + data.status +  '<br>' + ' SPECIES: ' + data.species +  
        '<br>' + ' ORIGIN: ' + data.origin.name;
        div1.style.display = 'block';
    })
}
getCharacter2 = () => {

    const id = generateRandomNumber();
    return fetch("https://rickandmortyapi.com/api/character/" + id, {
        method: 'GET', headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image2.src = data.image;
        p2.innerHTML = 'NOME: '  + data.name + '<br>' + ' STATUS: ' + data.status +  '<br>' + ' SPECIES: ' + data.species +  
        '<br>' + ' ORIGIN: ' + data.origin.name;
        div2.style.display = 'block';

    })
}
getCharacter3 = () => {

    const id = generateRandomNumber();
    return fetch("https://rickandmortyapi.com/api/character/" + id, {
        method: 'GET', headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image3.src = data.image;
        p3.innerHTML = 'NOME: '  + data.name + '<br>' + ' STATUS: ' + data.status +  '<br>' + ' SPECIES: ' + data.species +  
        '<br>' + ' ORIGIN: ' + data.origin.name;
        div3.style.display = 'block';
    })
}
getCharacter4 = () => {

    const id = generateRandomNumber();
    return fetch("https://rickandmortyapi.com/api/character/" + id, {
        method: 'GET', headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image4.src = data.image;
        p4.innerHTML = 'NOME: '  + data.name + '<br>' + ' STATUS: ' + data.status +  '<br>' + ' SPECIES: ' + data.species +  
        '<br>' + ' ORIGIN: ' + data.origin.name;
        div4.style.display = 'block';
    })
}


handleWithTheGame = () => {
    this.getCharacter1()
    this.getCharacter2()
    this.getCharacter3()
    this.getCharacter4()
    button.innerHTML = 'CONTINUAR'
    divInicial.style.display = 'none';

}


button.onclick = handleWithTheGame