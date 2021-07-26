console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady() {
    console.log('We are ready');
    for (let i = 0; i < people.length; i++) {
        $('body').append(`
            <div>
                <img src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of Chris">
            </div>
        `)
    };
    alert('Guess who is below!')
    // grab random person
    let targetPerson = people[randomNumber(0,people.length-1)].name;
    // add to randomName tag
    $('#randomName').append(targetPerson);
    // add in listeners
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}