let gatsbyParty = [
    'Francesco',
    'Nadia',
    'Alessio',
    'Franco',
    'Barbara'
];

const buttonElement = document.querySelector('button');

buttonElement.addEventListener('click', function() {
    const userChoice = document.getElementById('input-name').value;
    let isNameFound = false

    for (let i = 0 ; i < gatsbyParty.length ; i++){
        if (userChoice == gatsbyParty[i]){
            isNameFound = true;
        }
    }
    
    console.log(isNameFound);
})

