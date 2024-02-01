trees = 0;
trees_per_second = 0;
username = '';
watercan_price = 10;
waterhose_price = 100;
farm_price = 1000;
forest_price = 10000;
planet_price = 100000;



hideGame();
load();
getHighScore();

const intervalId = setInterval(saveHighScore, 10000);
const intervalId2 = setInterval(getHighScore, 30000);


// Function to fetch data from the provided URL
async function getHighScore() {
    const url = 'https://dreamlo.com/lb/65b0dd218f40bbbdf0eb8543/json';

    try {
        // Fetch data from the URL
        const response = await fetch(url);

        // Check if the request was successful (status code 200)
        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        // Parse the JSON data
        const jsonData = await response.json();
        const sortedData = jsonData.dreamlo.leaderboard.entry.sort((a, b) => b.score - a.score);


        // Output the retrieved data
        let highScoreElement = document.getElementById('highScores');
        highScoreElement.innerHTML = '';
        for (let i = 0; i < Math.min(jsonData.dreamlo.leaderboard.entry.length, 10); i++) {
            highScoreElement.innerHTML += `<li>${sortedData[i].name}: ${sortedData[i].score}</li>`;      
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

 async function checkNewUsername(username) {
    usernameTaken=false;
    const url = 'https://dreamlo.com/lb/65b0dd218f40bbbdf0eb8543/json';

    try {
        // Fetch data from the URL
        const response =   await fetch(url);

        // Check if the request was successful (status code 200)
        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        // Parse the JSON data
        const jsonData =   await response.json();

        // Output the retrieved data
        for (let i = 0; i < jsonData.dreamlo.leaderboard.entry.length; i++) {
            var entry = jsonData.dreamlo.leaderboard.entry[i];
            console.log(entry.name, username, entry.name == username)
            if (entry.name == username) {
                document.getElementById('username').value = '';
                document.getElementById('username').placeholder = 'Username taken';
                usernameTaken = true;
            }
        }

        if (usernameTaken == false) {
            
            hideUserSubmit()
            showGame()
        }
    } catch (error) {
        console.error('Error:', error);
    }
}




setInterval(function() {
    addTrees(trees_per_second);
    }, parseInt(1000));

function submitUsername() {
    username = document.getElementById('username').value;
    checkNewUsername(username);  
}

function hideUserSubmit(){
    document.getElementById('username').style.display = 'none';
    document.getElementById('submitUsername').style.display = 'none';
    document.getElementById('usernameText').innerHTML = 'Welcome ' + username + '!';
}

function hideGame(){
    document.getElementById('game').style.display = 'none';
}

function showGame(){
    hideUserSubmit()
    document.getElementById('game').style.display = 'block';
}

// Show the tree count on the id amountOftrees
function showTrees() {
  document.getElementById('amountOfTrees').innerHTML = trees;
  save();
}

// Add one tree to the tree count
function addTrees(amount) {
  trees += amount;
  showTrees();
}

// Save the variables trees and trees_per_second so that the user can continue playing after closing the browser
function save() {
  localStorage.setItem('trees', trees);
  localStorage.setItem('trees_per_second', trees_per_second);
  localStorage.setItem('username', username);
  
}

// Load the variables trees and trees_per_second so that the user can continue playing after closing the browser
function load() {
// Check if there are trees stored
    if (localStorage.getItem('trees') === null) {
        // If there are no trees stored, set trees to 0
        localStorage.setItem('trees', 0);
        localStorage.setItem('trees_per_second', 0);
        localStorage.setItem('username', '');
    }
  trees = parseInt(localStorage.getItem('trees'));
  trees_per_second = parseInt(localStorage.getItem('trees_per_second'));
  username = localStorage.getItem('username');
  if (username != '') {
    showGame();
    showTrees();
  }
}

function reset() {
    localStorage.setItem('trees', 0);
    localStorage.setItem('trees_per_second', 0);
    localStorage.setItem('username', '');
    load();
    showTrees();
}


function buyWatercan() {
    if (trees >= watercan_price) {
        trees -= watercan_price;
        trees_per_second += 1;
        watercan_price*=1.5;
        showTrees();
    }
    }

function buyWaterhose() {
    if (trees >= waterhose_price) {
        trees -= waterhose_price;
        trees_per_second += 10;
        waterhose_price*=1.5;
        showTrees();
    }
    }

function buyFarm() {
    if (trees >= farm_price) {
        trees -= farm_price;
        trees_per_second += 100;
        farm_price*=1.5;
        showTrees();
    }
    }

function buyForest() {
    if (trees >= forest_price) {
        trees -= forest_price;
        trees_per_second += 1000;
        forest_price*=1.5;
        showTrees();
    }
    }

function buyPlanet() {
    if (trees >= planet_price) {
        trees -= planet_price;
        trees_per_second += 10000;
        planet_price*=1.5;
        showTrees();
    }
    }
    
// Function to make a POST request to the provided URL
async function saveHighScore() {
    if (trees === 0) {
        return;
    }

    const url = `https://dreamlo.com/lb/NUJ12f4V5kS4tfNyNOLJyQFleqhwJqWUauzuSPLm1-iw/add/${username}/${trees}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        });

        if (!response.ok) {
            throw new Error(`Failed to post data. Status: ${response.status}`);
        }

        // No need to parse or log the response

    } catch (error) {
        // console.error('Error:', error);
    }
}
