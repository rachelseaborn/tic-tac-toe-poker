//console.log("js connection test")



function play(clickedBoxId) {

    let playerSpan = document.getElementById('player');
    let clickedBox = document.getElementById(clickedBoxID); //clicked box value not getting passed in
    let scoreArr = [];
    let boardFull = true;

    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedBox.innerText = 'X';
        scoreArr[clickedBox] = 'X';
        console.log(scoreArr)

    } else {
        playerSpan.innerText = 'X';
        clickedBox.innerText = 'O';
        scoreArr[clickedBox] = 'O';
        console.log(scoreArr)
    }
    
    const topLeft = scoreArr[0];
    const topMiddle = scoreArr[1];
    const topRight = scoreArr[2];
    const middleLeft = scoreArr[3];
    const middleCenter = scoreArr[4];
    const middleRight = scoreArr[5];
    const bottomLeft = scoreArr[6];
    const bottomMiddle = scoreArr[7];
    const bottomRight = scoreArr[8];
        
    //Overkill on logical operators - not very readable - but will test
     if ((topLeft !== undefined) && ((topLeft === topMiddle && topLeft === topRight) ^ (topLeft === middleLeft && topLeft === bottomLeft) ^ (topLeft === middleCenter && topLeft === bottomRight))) {
         alert(`${topLeft} is the winner!`);
         return; 
     }

     if (topMiddle !== undefined && topMiddle === middleCenter && topMiddle === bottomCenter) {
        alert(`${topMiddle} is the winner!`);
        return;
     }

     if ((topRight !== undefined) && ((topRight === middleCenter && topRight === bottomLeft) ^ (topRight === middleRight && topRight === bottomRight))) {
        alert(`${topRight} is the winner!`);
        return; 
        }

     if (topMiddle !== undefined && topMiddle === middleCenter && topMiddle === bottomMiddle) {
        alert(`${topMiddle} is the winner!`);
        return; 
        }
      
     if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === bottomCenter) {
        alert(`${middleLeft} is the winner!`);
        return;
     }

     if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
         alert(`${bottomLeft} is the winner!`);
         return; 
     }
         

     for (i = 0; i < scoreArr.length; i++) {
        if (scoreArr[i] !== undefined) {
          boardFull === false;
     } else {
       return "Sorry, no winners!";
     }
    }
}