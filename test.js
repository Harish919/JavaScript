const name = 'ronny from premier leage'

function Truename() {
    const name='roony from laliga leage'
    if (true) {
        const name='roony from itlay leage'
        console.log(name);//roony from itlay leage 2nd --block scope
    }
    console.log(name);//roony from laliga leage' 3rd --function scope
}
console.log(name);//'ronny from premier leage' 1st -- global Scope
Truename()