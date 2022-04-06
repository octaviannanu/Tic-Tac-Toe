var mooves = 9;

function playAgain() {
   location.reload();
}

function choice(number) {
    if(mooves > 0) {
        if (mooves % 2 == 0) {
            document.getElementById(number).innerHTML = "0";
            --mooves;
            document.getElementById(number).disabled = true;
            document.getElementById(number).setAttribute("value", "0");
        } else if (mooves % 2 != 0) {
            document.getElementById(number).innerHTML = "X";
            --mooves;
            document.getElementById(number).disabled = true;
            document.getElementById(number).setAttribute("value", "1");
        }
    } 
    if (mooves == 0) {
       document.getElementById("message").innerHTML = "NO MORE MOOVES. PLEASE PUSH START GAME";
    }
}

function verify() {
    var goodChoices = [['1','2','3'], ['4','5','6'], ['7','8','9'], ['1','4','7'], ['2','5','8'], ['3','6','9'], ['1','5','9'], ['3','5','7']];
    for(let i = 0; i < 8; ++i) {
		let winX = 0;
		let win0 = 0;
		for (let j = 0; j < 3; ++j) {
			if (document.getElementById(goodChoices[i][j]).value === '1') {
				++winX;
			} else if (document.getElementById(goodChoices[i][j]).value === '0') {
				++win0;
			}
			if (winX == 3) {
				document.getElementById("winner").innerHTML = "The winner is Mr X";
                mooves = 0;
			} else if (win0 === 3) {
				document.getElementById("winner").innerHTML = "The winner is Mr. O";
                mooves = 0;
            }
        }
    }
}
if (mooves == 0 && document.getElementById("winner").innerHTML == "") {
    document.getElementById("winner").innerHTML = "Sorry, no one won. Play again!";
}
