function startGame(){
    var main = document.querySelector('main');

    // Add 9 buttons to the main tag
    for (var i = 0; i < 9; i++) {
        var button = document.createElement('button');
        button.textContent = 'Dont follow this';
        button.onclick = function() {
            alert('You lose!');
        }
        main.appendChild(button);
        }
    
        var button = document.createElement('button');
        button.textContent = 'Follow this';
        button.onclick = win;
        main.appendChild(button); 

        // Move the buttons around 20 times with a delay in between each move
        for (var i = 0; i < 20; i++) {
            var random = Math.floor(Math.random() * 10);
            main.appendChild(main.children[random]);
        }

        
}




function win() {
    alert('You win!');
}
