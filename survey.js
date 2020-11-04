const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];
rl.question('What\'s your name? Nicknames are also acceptable:) ', (answer) => {
  answers.push(answer.trim());

  rl.question("What's an activity you like doing? ", (answer) => {
    answers.push(answer.trim());
  
    rl.question("What do you listen to while doing that? ", (answer) => {
      answers.push(answer.trim());
    
      rl.question("Which meal is your favorite? (eg: dinner, brunch, etc.) ", (answer) => {
        answers.push(answer.trim());
      
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          answers.push(answer.trim());
          
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            answers.push(answer.trim());
            
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              answers.push(answer.trim());
              
              let name = answers.shift();

              console.log(`\n${name} likes to ${answers.shift()} while listening to ${answers.shift()}. ${name}'s favorite ${answers.shift()} meal consists of ${answers.shift()}.  ${name} prefers ${answers.shift()} over any other sport.  If he could have any super power it would be ${answers.shift()}`);

              rl.close();
            });

          });

        });

      });
      
    });

  });

});

