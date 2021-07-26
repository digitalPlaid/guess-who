console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady() {
    console.log('We are ready');
    
    $('body').append(`
        <div>
            <img src="https://github.com/${people[0].githubUsername}.png?size=250" alt="Profile image of Chris">
        </div>
    `)
}
