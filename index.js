window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('tile'));
    const playerDisplay = document.querySelectorAll('.display-player');
    const resetButton = document.querySelectorAll('#reset');
    const announcer = document.querySelectorAll('.announcer');


    resetButton.addEventListener('click', resetBoard); 
})