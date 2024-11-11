const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
//Event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
butInstall.style.visibility = 'visible';
});


// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    event.prompt();
    butInstall.setAttribute('disabled', true);
});

// An handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    butInstall.style.visibility = 'hidden';
    console.log('Jate PWA installed!', event);
});
