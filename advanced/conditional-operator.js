// const myAge = 46;
// const message = myAge >= 18 ? 'You can vote' : 'Sorry Charlie';
// console.log(message);

const myAge = 18;

const showPage = () => {
  console.log('Showing The Page');
};

const showErrorPage = () => {
  console.log('Showing The Error Page');
};

myAge >= 21 ? showPage() : showErrorPage();

const team = ['Bozo', 'Molly', 'Crystal', 'Marci', `Shellie`];

console.log(team.length <= 4 ? `Team Size: ${team.length}` : `Too many people`);
