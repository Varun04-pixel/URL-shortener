const form = document.getElementById('form');
const button = document.getElementById('btn');
const originalURL = document.getElementById('originalURL');
const shortenedURLbox = document.getElementById("shortenedURLbox");
const shortenedURL = document.getElementById("shortenedURL");
const copyURL = document.getElementById("copyURL");
shortenedURLbox.style.display = 'none'

button.addEventListener('click', async () => {
    let data = await fetch('/shortenID', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: originalURL.value })
    })
    let result = await data.json();
    console.log(result)
    shortenedURLbox.style.display = 'flex'
    shortenedURL.value = result.shortenID;
    shortenedURL.style = 'color: #0D6EFD; text-decoration: underline; cursor: pointer;';
});

shortenedURL.addEventListener("click", () => {
    const url = shortenedURL.value;
    if (url) {
        window.open(url, "_blank"); // opens in new tab
    }
});

copyURL.addEventListener("click", async () => {
    const text = shortenedURL.value
    // const feedbackElement = document.getElementById('copyFeedback');
    try {
        await navigator.clipboard.writeText(text);
        copyURL.innerHTML = 'Copied !!';
        console.log('Text copied to clipboard');
        // feedbackElement.textContent = 'Copied!';
        // Revert feedback message after a short time
        setTimeout(() => {
            copyURL.innerHTML=`<img id="imageHide" width="20" height="20" src="https://img.icons8.com/ios/50/copy--v1.png" alt="copy--v1"/>`
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
        copyURL.innerHTML = 'Failed to copy';
        feedbackElement.textContent = 'Failed to copy';
    }
})
