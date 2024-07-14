// Add player js cdn
const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://assets.mediadelivery.net/playerjs/player-0.1.0.min.js';
document.head.appendChild(script);


script.onload = function () {
    document.querySelectorAll('[data-flowappz="video-popup-toggle-button"]').forEach((element) => {

        const popupOverlay = element.parentElement.querySelector('[data-flowappz="video-popup-overlay"]')
        const popupVideo = element.parentElement.querySelector('[data-flowappz="flowappz-video"]')

        const player = new playerjs.Player(popupVideo);

        element.addEventListener('click', () => {

            if (popupOverlay) {

                popupOverlay.style.display = 'flex'
                popupVideo.classList.remove('close-video-popup')
                popupVideo.classList.add('open-video-popup')
            }

        })

        document.addEventListener('click', (e) => {
            if (e.target.contains(popupVideo)) {
                popupVideo.classList.add('close-video-popup')
                popupVideo.classList.remove('open-video-popup')
                popupOverlay.style.display = 'none'
                player.pause();
            }

        })

    })
}


const customStyle = `

    .open-video-popup{
        animation: scale-display .3s;
        display: inline-flex;
    }
    .close-video-popup{
        animation: scale-display--reversed .3s;
        animation-fill-mode:forwards;
        display: inline-flex;
    }
    @keyframes scale-display {
        0% {
        opacity: 0;
        transform: scale(0);
            -webkit-transform: scale(0);
        }
        
        100% {
        opacity: 1;
        transform: scale(1);
            -webkit-transform: scale(1);
        }
        }
        
        @keyframes scale-display--reversed {
        0% {
        display: inline-flex;
        opacity: 1;
        transform: scale(1);
        -webkit-transform: scale(1);
        }
        99% {
        display: inline-flex;
        opacity: 0;
        transform: scale(0);
        -webkit-transform: scale(0);
        }
        100% {
        display: none;
        opacity: 0;
        transform: scale(0);
        -webkit-transform: scale(0);
        }
    }
`
const styleSheet = new CSSStyleSheet()
styleSheet.replaceSync(customStyle)

document.adoptedStyleSheets.push(styleSheet);
