const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
//Event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
butInstall.classList.toggle = 'visible';
});


// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
      }
    
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.setAttribute('disabled', true);
});

// An handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    butInstall.style.visibility = 'hidden';
    console.log('Jate PWA installed!', event);
});
