
let images = [
    "assets/rock1.png",
    "assets/paper1.png",
    "assets/scissors1.png"
]

let result_statement = [
    "Match is TIE!","YOU WIN!","COMPUTER WIN!"
]

let userScore = 0;
let compScore = 0;

let user = document.getElementById('userScore');
let comp = document.getElementById('compScore');
let results = document.getElementById('matchStatement');

let frame = document.querySelector('.start');

function changeFrame(){
    frame.style.opacity = "0";
    setTimeout(() => {
        frame.style.display = "none";
    }, 1000);
}

setInterval(() => {
    user.innerHTML = userScore;
    comp.innerHTML = compScore;
}, 100);

function shake(userindex,compindex) {
    
    // 1 1 T 
    // 1 2 C
    // 1 3 U
    // 2 1 U
    // 2 2 T
    // 2 3 C
    // 3 1 C
    // 3 2 U
    // 3 3 T

    document.getElementById('userImage').src = images[0];
    document.getElementById('compImage').src = images[0];
    document.getElementById('userImage').style.animation = "shakehand_1 1s linear 1";
    document.getElementById('compImage').style.animation = "shakehand_2 1s linear 1";
 
    setTimeout(() => {
    document.getElementById('userImage').style.animation = "";
    document.getElementById('compImage').style.animation = "";
    document.getElementById('userImage').src = images[userindex - 1];
    document.getElementById('compImage').src = images[compindex - 1];

    if(userindex == compindex){
        userScore += 0;
        compScore += 0;
        results.innerHTML = result_statement[0];
    }
    else if((userindex == 1 && compindex == 2) || (userindex == 2 && compindex == 3) || (userindex == 3 && compindex == 1)){
        userScore += 0;
        compScore += 1;
        results.innerHTML = result_statement[2];
    }
    else{
        userScore += 1;
        compScore += 0;
        results.innerHTML = result_statement[1];
    }

  }, 1000);
}

function randRet(){
    let randomn = (Math.floor(Math.random() * 3) + 1);
    console.log(randomn);
    return randomn;
}


