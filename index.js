


import readlineSync from "readline-sync";
// const kuler = require("kuler");

import kuler from "kuler";

// let kuler = require("kuler");
// let readlineSync = require("readline-sync");

// this used to read the question from the user.
let  userName  = readlineSync.question("What is your Name? ");
console.log(kuler(`hello ${userName} welcome to quizify `, "#dc2636"))


let score =0;
/**Creating data set */
const database = {
  // category:{
  //   name :"javascript",
    data :[
      {
        question : `let a = {}, b={}
console.log(a==b)
console.log(a===b)`,
        options :{
          a : "false false",
          b: "false true",
          c: "true false",
          d:"true true" 
        },
        correctAnswer :"a"
      },
      {
        question : "object.assign(target,source) creates which typeof copy? ",
        options :{
          a: "Deep copy",
          b: "shallow Copy",
          c: "Nested copy",
          d: "Creates a new reference"
        },
        correctAnswer : "b"
      },
      {
        question: "Is method chaining is possibe with for each?",
        options:{
          a:"yes",
          b:"no"
        },
        correctAnswer:"b"
      },



    ]
  // }
  
}

/** creating the leaderboard table */
const leaderBoard ={
  data :[
    {
      name: "riya",
      score : 1
    },
    {
      name: "Ajay",
      score : 3

    },
    {
      name: "jashan",
      score : 4
    }
  ]
}

/** function use to verify the answer */
function playGame(userAnswer,correctAnswer){
  // we have to check the user answer either it is correct or not.
  if(userAnswer === correctAnswer){
    console.log(kuler("correct Answer", "#059669"));
    score ++;

  }else{
    console.log(kuler("incorrect Answer", "#b91c1c"))
    console.log(kuler(`Correct Answer : ${correctAnswer}`, "#1d4ed8"))
  }

}

// now next step to display this:
/** main logic */
function showQuesAndAnswer(database){
  for(let i =0; i<database.data.length;i++){
    // console.log(database.data[i].question);
    console.log(`\nQ${i+1} -${database.data[i].question}\n`);
    for(let key in database.data[i].options){
      console.log(`${key} - ${database.data[i].options[key]}`)
    }
     // it is used to get the output from the user.
    let userAnswer = readlineSync.question("Enter Your Answer -(a/b/c/d) - ").toLowerCase();

    playGame(userAnswer,database.data[i].correctAnswer)
  }

}
/** pushing score and name to leaderboard and sort the leaderboard on the basis of score.  */
function highScore(leaderBoard){
  leaderBoard.data.push({name : userName, score : score})
  // console.log(leaderBoard);
  let sortedScoreList = leaderBoard.data.sort((a,b) => b.score-a.score ); // it will sort the scorelist.
   console.log(kuler("\n check your name to the LeaderBoard  ","#fde047"))
  // console.log(sortedScoreList);
  for(let leader of sortedScoreList){
    console.log(kuler(`${leader.name} - Score: ${leader.score}`, "#9333ea"))
  }
}


showQuesAndAnswer(database);
console.log(kuler(`\nYour Score is - ${score}`,"#5eead4"));
highScore(leaderBoard)

