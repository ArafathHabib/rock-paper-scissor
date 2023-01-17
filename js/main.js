let round = document.getElementById('round');
let pic1 = document.getElementById('pic1');
let pic2 = document.getElementById('pic2');
let pic3 = document.getElementById('pic3');
let pcPic1 = document.getElementById('pcPic1');
let pcPic2 = document.getElementById('pcPic2');
let pcPic3 = document.getElementById('pcPic3');
let userRock = document.getElementById('userRock');
let userPaper = document.getElementById('userPaper');
let userScissor = document.getElementById('userScissor');
let pcRock = document.getElementById('pcRock');
let pcPaper = document.getElementById('pcPaper');
let pcScissor = document.getElementById('pcScissor');
let starRegular1 = document.getElementById('starRegular1');
let isClicked = false;
let userClick = 0;
let roundNum = 1;
let userWin = 0;
let pcWin = 0;
let roundWin = document.getElementById('roundWinUser');
let roundLose = document.getElementById('roundLoseUser');
let roundDraw = document.getElementById('roundDraw');


document.getElementById('loginBtn').addEventListener('click', function(){
    let name = document.getElementById('loginInput').value;
    if(name === ''){
        console.log('cant');
    }else{
        
    document.getElementById('login').style.display = 'none';
    document.getElementById('gameDash').style.display = 'block';
    document.getElementById('footer').style.display = 'none'
    }
    document.getElementById('name').innerText = name;
})

pic1.addEventListener('click', function(){
    pic2.style.visibility = 'hidden';
    pic3.style.visibility = 'hidden';
    userPaper.style.visibility = 'hidden';
    userScissor.style.visibility = 'hidden';
    //pic1.style.color = 'gray';
    //pic1.style.border = '5px solid gray';
    isClicked = true;
    userClick = 1;
})
pic2.addEventListener('click', function(){
    pic1.style.visibility = 'hidden';
    pic3.style.visibility = 'hidden';
    userRock.style.visibility = 'hidden';
    userScissor.style.visibility = 'hidden';
    //pic2.style.color = 'gray';
    //pic2.style.border = '5px solid gray';
    isClicked = true;
    userClick = 2;
})
pic3.addEventListener('click', function(){
    pic1.style.visibility = 'hidden';
    pic2.style.visibility = 'hidden';
    userRock.style.visibility = 'hidden';
    userPaper.style.visibility = 'hidden';
    //pic3.style.color = 'gray';
    //pic3.style.border = '5px solid gray';
    isClicked = true;
    userClick = 3;
})

//button

document.getElementById('done').addEventListener('click', function(){
    pcTurn();
})

//computer

function pcTurn(){
    if(isClicked == true){
        let random = Math.random()*3;
        let perfectRandom = Math.round(random);
        if(perfectRandom == 0){
            perfectRandom = 1;
        }
        console.log(perfectRandom);
        if(perfectRandom === 1){
            pcPic2.style.visibility = 'hidden';
            pcPic3.style.visibility = 'hidden';
            pcPic1.style.visibility = 'visible';
            pcPaper.style.visibility = 'hidden';
            pcScissor.style.visibility = 'hidden';
           // pcPic1.style.color = 'gray';
            //pcPic1.style.border = '5px solid gray';
        }else if(perfectRandom === 2){
            pcPic1.style.visibility = 'hidden';
            pcPic3.style.visibility = 'hidden';
            pcPic2.style.visibility = 'visible';
            pcRock.style.visibility = 'hidden';
            pcScissor.style.visibility = 'hidden';
            //pcPic2.style.color = 'gray';
            //pcPic2.style.border = '5px solid gray';
        }else if (perfectRandom === 3){
            pcPic1.style.visibility = 'hidden';
            pcPic2.style.visibility = 'hidden';
            pcRock.style.visibility = 'hidden';
            pcPaper.style.visibility = 'hidden';
            // pcPic3.style.color = 'gray';
            // pcPic3.style.border = '5px solid gray';
            pcPic3.style.visibility = 'visible';
        }

        if(perfectRandom === userClick){
            roundDraw.style.display = 'block';
            roundDraw.style.transition = '0.2s';
        }else if(userClick === 1 && perfectRandom === 2){
            roundLose.style.display = 'block';
            pcWin++;
        }else if(userClick === 1 && perfectRandom === 3){
            roundWin.style.display = 'block';
            userWin++;
        }else if(userClick === 2 && perfectRandom === 1){
            roundWin.style.display = 'block';
            userWin++;
        }else if(userClick === 2 && perfectRandom === 3){
            roundLose.style.display = 'block';
            pcWin++;
        }else if(userClick === 3 && perfectRandom === 1){
            roundLose.style.display = 'block';
            pcWin++;
        }else if(userClick === 3 && perfectRandom === 2){
            roundWin.style.display = 'block';
            userWin++;
        }
        const timeOut = setTimeout(makeVisible, 4000);
        isClicked = false;
    }
}


function makeVisible(){
    pic1.style.visibility = 'visible';
    pic2.style.visibility = 'visible';
    pic3.style.visibility = 'visible';
    pcPic1.style.visibility = 'visible';
    pcPic2.style.visibility = 'visible';
    pcPic3.style.visibility = 'visible';
    userRock.style.visibility = 'visible';
    userPaper.style.visibility = 'visible';
    userScissor.style.visibility = 'visible';
    pcRock.style.visibility = 'visible';
    pcPaper.style.visibility = 'visible';
    pcScissor.style.visibility = 'visible';
    roundWin.style.display = 'none';
    roundLose.style.display = 'none';
    roundDraw.style.display = 'none';
    roundNum++;
    document.getElementById('round').innerText = roundNum;
    if(userWin === 1){
        document.getElementById('starSolid1').style.visibility = 'visible';
    }
    if(userWin === 2){
        document.getElementById('starSolid2').style.visibility = 'visible';
    }
    if(userWin === 3){
        document.getElementById('starSolid3').style.visibility = 'visible';
        document.getElementById('gameDash').style.display = 'none';
        document.getElementById('userWin').style.display = 'block';
    }
    if(pcWin === 1){
        document.getElementById('starSolid4').style.visibility = 'visible';
    }
    if(pcWin === 2){
        document.getElementById('starSolid5').style.visibility = 'visible';
    }
    if(pcWin === 3){
        document.getElementById('starSolid6').style.visibility = 'visible';
        document.getElementById('gameDash').style.display = 'none';
        document.getElementById('userLose').style.display = 'block';
    }
    console.log('userwin =', userWin)
}

document.getElementById('reload').addEventListener('click', function(){
    location.reload();
})
document.getElementById('reload2').addEventListener('click', function(){
    location.reload();
})