//normal function
const name = "Roony from primerLeage";//global scope

function Name() {
    const name = "Roony from Laliga Leage";//function scope
    //console.log(name);
    if(true) {
        const name = "Roony from  Seri A"//block scope
        console.log(name); //2
    }
    console.log(name);//3
}
console.log(name); //1
Name();

//another  example
//using arrow function
const fplayer = "messi from laliga";

const messi_league = () => {
    const fplayer = "messi from league1";

    if(true) {
        const fplayer = "messi from major-league-score"
        console.log(fplayer);
    }
    console.log(fplayer);
}
console.log(fplayer);
messi_league();
