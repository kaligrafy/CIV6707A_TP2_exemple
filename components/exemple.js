class Human 
{
    constructor (age=0)
    {
        this.age = age ;
    }
    calculerAgeDansNAns (N=0) 
    { 
       return this.age + N
    }
}

class ExpertEnTransport extends Human 
{
    constructor (age)
    {
        super(age);
        this.CeQueJaime =
        [
            'bus' ,
            'tram' ,
            'metro'
        ];
    }
}

const monAmi = new Human (); //new pour créer un nouvelle humain
const catherineMorency = new ExpertEnTransport(123);
console.log(monAmi,age)
console.log(catherineMorency.age)
console.log(catherineMorency.CeQueJaime)