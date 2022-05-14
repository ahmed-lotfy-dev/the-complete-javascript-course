/*
// First 18 Lectures Assignments Solutions
const country = 'Egypt';
const continent = 'Africa';
let population = 134598147;
const isIsland = false;
populationInMillion = population.toString().slice(0, 3);

let language;
language = 'Arabic';

let halfPopulation = population / 2;

let description =
  country +
  ' is in ' +
  continent +
  ' and its ' +
  populationInMillion +
  ' Millions speaks ' +
  language;

let descriptionLiteral = `${country} is in ${continent} and its ${populationInMillion} Millions speaks ${language}`;

const halfPopulationOneAdded = Math.floor((halfPopulation += 1));
const finlandPopulation = 6e6;
const averagePopulation = 33e6;
console.log(finlandPopulation);
console.log(averagePopulation);
console.log(`country is ${country}`);
console.log(`continent is ${continent}`);
console.log(`population is ${population}`);
console.log(
  `${
    isIsland ? 'Your Country Is An Island' : "Your Country Isn't An Island"
  } ${isIsland}`
);
console.log(`Language is ${language}`);
console.log(`Half of population is ${halfPopulation}`);
console.log(`Half of population is One Added ${halfPopulationOneAdded + 1}`);
console.log(
  `My Country Population More Than Finland Population ? ${
    population > finlandPopulation
  }`
);
console.log(
  `My Country Population Less Than Average Population ? ${
    population < averagePopulation
  }`
);

console.log(description);
console.log(descriptionLiteral);

population = 13e6;

if (population > 33e6) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is  ${(population - averagePopulation)
      .toString()
      .slice(0, 3)} millions below average`
  );
}
*/
/*
LECTURE: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;
2. Execute the operations to check if you were right

console.log('9' - '5'); // 4;
console.log('19' - '13' + '17'); // 617;
console.log('19' - '13' + 17); // 23
console.log('123' < 57); //  false
console.log(5 + 6 + '4' - 9 - 4 - 2); // 11 + 4 = 15 - 9 - 4 - 2 = 0

*/

/*
LECTURE: Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
8. Reflect on why we should use the === operator and type conversion in this
situation


const numNeighbours = +prompt(
  'How Many Neighbours Countries Does Your Country Have ?'
);

console.log(typeof numNeighbours);
if (numNeighbours === 1) {
  console.log(`Only 1 Border`);
} else if (numNeighbours > 1) {
  console.log(`More Than 1 Border`);
} else if (numNeighbours === 0) {
  console.log(`No Borders`);
}
*/

/*
LECTURE: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
3. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true (unless you live in
Canada :D)


const country = 'USA';
const language = 'English';
const population = 30e6;
const isIsland = false;

if (language === 'English' && population < 50000000 && isIsland) {
  console.log(`You Sould Live In ${country}`);
} else {
  console.log(`${country} Does Not Meet Criteria`);
}
*/

/*
LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'

let language = 'spanish';
switch (language) {
  case 'chinese':
  case 'mandarin':
    console.log(`Most Number Of Native Speakers!`);
    break;
  case 'spanish':
    console.log(`2nd Most Spoken Language`);
    break;
  case 'english':
    console.log(`3rd Most Spoken Language`);
    break;
  case 'hindi':
    console.log(`4th Most Spoken Language`);
    break;
  case 'arabic':
    console.log(`5th Most Spoken Language`);
    break;
  default:
    console.log('Not A Known Language');
}

*/

/*
LECTURE: The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original

population = 325e5;
averae = 33e6;

population >= averae
  ? console.log(`Egypt population is above average`)
  : console.log(`Egypt population is below average`);
*/
