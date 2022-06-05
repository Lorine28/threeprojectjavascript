let data =[
    {
        name:'Mateo',
        age:'30'
    },
    {
        name:'Lisa',
        age:'23'
    },
    {
        name:'John',
        age:'33'
    },
    {
        name:'Clara',
        age:'20'
    },
    {
        name:'Lonzo',
        age:'25'
    },
    {
        name:'Marta',
        age:'34'
    }
];

const info = document.querySelector('#info');
let details = data.map (function (item) {
    return '<div>' + item.name +' '+ 'is '+ item.age + ' years old' + '</div>';
});
 info.innerHTML = details.join('\n');
