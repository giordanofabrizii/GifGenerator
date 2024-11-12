function updateGif(text){
    const key = '';
    const gifUrl = 'https://api.giphy.com/v1/gifs/search?api_key=' + key + '&q=' + text + '&limit=50';
    
    const frame = document.getElementById('myGif');
    
    axios.get(gifUrl)
        .then(function (response) {
            const totalGifs = (response.data.data).length; // Take all the gifs (maximum 50 by url)
            let randomNum = Math.floor(Math.random()*totalGifs); // Generate a random int from 0 to the number of gifs
            let gifSrc = (response.data.data[randomNum].images.fixed_height.url); // take the gif at the randomNum index
            frame.src = gifSrc; // add on page the gif
        });

        toggle();
}



document.addEventListener('DOMContentLoaded', function() {
    const buttonsEl = document.getElementById('buttons');

    const emotions = [
        [
            'Felicita',
            '&#128522;'
        ],
        [
            'Tristezza',
            '&#128557;'
        ],
        [
            'Stress',
            '&#128561;'
        ],
        [
            'Rabbia',
            '&#128545;'
        ]
    ];

    emotions.forEach(emotion => {
        let buttonEl = document.createElement('p');
        buttonEl.innerHTML = emotion[1];
        buttonEl.classList.add("emoji")
        buttonEl.value = emotion[0];
        buttonEl.title = emotion[0];
        buttonsEl.appendChild(buttonEl);
        buttonEl.addEventListener('click', function() {
            updateGif(emotion[0].toLowerCase());
        });
    });

    const backEl = document.getElementById('indietro');

    backEl.addEventListener('click', () => {
        toggle();
    })
});

function toggle(){
        // nascondi article e mostra img
        const articleEl = document.getElementById('selector');
        const gifEl = document.getElementById('gif');
    
        gifEl.classList.toggle('off');
        articleEl.classList.toggle('off');
}