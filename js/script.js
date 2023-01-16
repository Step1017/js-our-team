//MILESTONE 0: Creare l'array di oggetti con le informazioni fornite:
    

const members = [
    {
        Name: 'Wayne Barnett',
        Role: 'Founder & CEO',
        Picture: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        Name: 'Angela Caroll',
        Role: 'Chief Editor',
        Picture: 'angela-caroll-chief-editor.jpg'
    },
    {
        Name:'Walter Gordon',
        Role: 'Office Manager',
        Picture: 'walter-gordon-office-manager.jpg'
    },
    {
        Name: ' Angela Lopez',
        Role: 'Social Media Manager',
        Picture: 'angela-lopez-social-media-manager.jpj'
    },
    {
        Name: 'Scott Estrada',
        Role: 'Developer',
        Picture: 'scott-estrada-developer.jpj'
    },
    {
        Name:'Barbara Ramos',
        Role: 'Graphic Designer',
        Picture: 'barbara-ramos-grapghic-designer.jpj'
    }
];

//MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < members.length; i++) {
    console.log('Membro n° ' + (i + 1));

    for(let key in members[i]) {
        console.log(key + ': ' + members[i][key]);
    }

    console.log('-----------')
}


//MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
const infoMembers = document.getElementById('info-members');
for (let i = 0; i < members.length; i++) {       

    for(let key in members[i]) {        
        infoMembers.innerHTML += key + ': ' + members[i][key] + '<br>';
    }

    const hr = document.createElement('hr');
    infoMembers.append(hr);
}

