let rock = 0
let paper = 1
let scissor = 2
let userValue;
let compValue;
let userScore = 0;
let compScore = 0;
let ubox = document.getElementById("ubox")
let cbox = document.getElementById("cbox")
let count = 5;
let btnRock = document.getElementById("rock")
let btnPaper = document.getElementById("paper")
let btnScissors = document.getElementById("scissors")

function btnFinder(data) {
    compValue = Math.floor(Math.random() * 3)
    console.log(compValue);
    userValue = data
}

function scoreEval() {
    if (userValue == compValue) {
        document.getElementById("tie").innerHTML = `⚠️Tie`
        if (userValue == 0) {
            ubox.src = "./images/rock.jpg"
            cbox.src = "./images/rock.jpg"
        } else if (userValue == 1) {
            ubox.src = "./images/paper.jpg"
            cbox.src = "./images/paper.jpg"
        } else if (userValue == 2) {
            ubox.src = "./images/scissors.jpg"
            cbox.src = "./images/scissors.jpg"
        }
    } else if (userValue == 0 && compValue == 1) {
        compScore += 1
        document.getElementById("comp").innerHTML = `Computer Score:${compScore}`
        document.getElementById("tie").innerHTML = ""
        ubox.src = "./images/rock.jpg"
        cbox.src = "./images/paper.jpg"
    } else if (userValue == 0 && compValue == 2) {
        userScore += 1
        document.getElementById("user").innerHTML = `User Score:${userScore}`
        document.getElementById("tie").innerHTML = ""
        ubox.src = "./images/rock.jpg"
        cbox.src = "./images/scissors.jpg"
    } else if (userValue == 1 && compValue == 0) {
        userScore += 1
        document.getElementById("user").innerHTML = `User Score:${userScore}`
        document.getElementById("tie").innerHTML = ""
        ubox.src = "./images/paper.jpg"
        cbox.src = "./images/rock.jpg"
    } else if (userValue == 1 && compValue == 2) {
        compScore += 1
        document.getElementById("comp").innerHTML = `Computer Score:${compScore}`
        document.getElementById("tie").innerHTML = ""
        ubox.src = "./images/paper.jpg"
        cbox.src = "./images/scissors.jpg"
    } else if (userValue == 2 && compValue == 0) {
        compScore += 1
        document.getElementById("comp").innerHTML = `Computer Score:${compScore}`
        document.getElementById("tie").innerHTML = ""
        ubox.src = "./images/scissors.jpg"
        cbox.src = "./images/rock.jpg"
    } else if (userValue == 2 && compValue == 1) {
        userScore += 1
        document.getElementById("user").innerHTML = `User Score:${userScore}`
        document.getElementById("tie").innerHTML = ""
        ubox.src = "./images/scissors.jpg"
        cbox.src = "./images/paper.jpg"
    } else if (userValue == 'x') {
        document.getElementById("user").innerHTML = `User Score:${userScore = 0}`
        document.getElementById("comp").innerHTML = `Computer Score:${compScore = 0}`
        document.getElementById("tie").innerHTML = ""
        ubox.src = "./images/user.png"
        cbox.src = "./images/computer.png"
        document.getElementById("attempt").innerHTML = `Game=0`
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`count${i}`).className = `fa-solid fa-heart countHeart`
        }
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`starUser${i}`).className = `fa-regular fa-star`
        }
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`starComp${i}`).className = `fa-regular fa-star`
        }      
        btnRock.disabled = false;
        btnPaper.disabled = false;
        btnScissors.disabled = false;
    }
    //star 

    if (userScore >= 1 && userScore <= 5) {
        document.getElementById(`starUser${userScore}`).className = `fa-solid fa-star starUser`
    }
    if (compScore >= 1 && compScore <= 5) {
        document.getElementById(`starComp${compScore}`).className = `fa-solid fa-star starComp`
    }

}

function counter() {
    if (count == 5) {
        document.getElementById("attempt").innerHTML = `Game=1`
        document.getElementById("count5").className = `fa-regular fa-heart `
    } else if (count == 4) {
        document.getElementById("attempt").innerHTML = `Game=2`
        document.getElementById("count4").className = `fa-regular fa-heart `
    } else if (count == 3) {
        document.getElementById("attempt").innerHTML = `Game=3`
        document.getElementById("count3").className = `fa-regular fa-heart `
    } else if (count == 2) {
        document.getElementById("attempt").innerHTML = `Game=4`
        document.getElementById("count2").className = `fa-regular fa-heart `
    } else if (count == 1) {
        document.getElementById("attempt").innerHTML = `Game Over`
        document.getElementById("attempt").style.color = `#ff2f00`
        document.getElementById("count1").className = `fa-regular fa-heart `
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
    }
    count -= 1;
}