console.log('Here are all the available people:', people);

let targetPerson = people[randomNumber(0,people.length-1)].name;

$(document).ready(onReady);

function onReady() {
    console.log('We are ready');
    for (let i = 0; i < people.length; i++) {
        $('body').append(`
            <div class="images">
                <img data-index="${i}" src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of Chris">
            </div>
        `)
    };
    alert('Guess who is below!')
    // grab random person
    // add to randomName tag
    $('#randomName').append(targetPerson);
    // add in listeners
    $('img').on('click', onClick)
    $('.images').css('display', 'inline-block');
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function onClick() {
    let name = people[$(this).data('index')].name;
    if (name === targetPerson) {
        alert('You guessed correctly! Guess another person!')
        targetPerson = people[randomNumber(0,people.length-1)].name;
        $('#randomName').empty();
        $('#randomName').append(targetPerson);
    } else {
        alert('Incorrect, try again!')
    }
}