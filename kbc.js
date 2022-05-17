list = [".How many continents are there?", ".What is the capital of India?", ".NG mei kaun se course padhaya jaata hai?"]
opt = [["Four", "Nine", "Seven", " Eight"], [" Chandigarh", "Bhopal", " Chennai", "Delhi"], ["Software Engineering", " Counseling", "Tourism", "Agriculture"]]
fiftyfifty = [['four', 'seven'], ['Delhi', 'Bhopal'], ['Tourism', 'software engineering']]
ans1 = [2, 1, 2]
ans = [3, 4, 1]
var i = 0;
var c = 0;
while (i < list.length) {
    console.log("WELCOME TO WHO WANTS TO BECOME KON BANEGA CODER")
    console.log("your question is");
    console.log(i + 1, list[i])
    j = 0;
    console.log("you option are")
    while (j <= opt.length) {
        console.log(j + 1, opt[i][j]);
        j++
    }
    var readlineSync = require("readline-sync")
    var n = readlineSync.questionInt("enter the solu =")
    if (n == ans[i]) {
        console.log("you are right")

    }
    else if (n == 5050) {
        if (c == 0) {
            var m = 0
            while (m < fiftyfifty[i].length) {
                console.log(m + 1, fiftyfifty[i][m])
                m++
            }
            c++
            var num = readlineSync.questionInt("enter the solution=")
            if (num == ans1[i]) {
                console.log("correct")
            }
            else {
                console.log("your option is wrong");
                console.log("quit")
                break
            }

        }
        else {
            console.log("you used 5050 lifeline")
            var num1 = readlineSync.questionInt("enter your option")
            if (num1 == ans[i]) {
                console.log("congrats")
            }
            else {
                console.log("your option is wrong")
                break
            }

        }
    }
    else {
        console.log("wrong answer");
        break
    }
    i++
}


