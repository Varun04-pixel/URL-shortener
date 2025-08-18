const form = document.getElementById('form');
const button = document.getElementById('btn');
const originalURL = document.getElementById('originalURL');
const shortenedURLbox = document.getElementById("shortenedURLbox");
const shortenedURL = document.getElementById("shortenedURL");
shortenedURLbox.style.display = 'none'

button.addEventListener('click', async () => {
    let data = await fetch('/shortenID', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({url: originalURL.value})
    })
    let result = await data.json();
    console.log(result)
    shortenedURLbox.style.display = 'flex'
    shortenedURL.value = result.shortenID;
})