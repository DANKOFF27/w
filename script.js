class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    constructor() {
        this.residents = [];
    }

    addResident(person) {
        this.residents.push(person);
    }
}

class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        } else {
            console.log("Cannot add more apartments. Maximum limit reached.");
        }
    }
}


const person1 = new Person("John", "Male");
const person2 = new Person("Jane", "Female");

const apartment1 = new Apartment();
apartment1.addResident(person1);

const apartment2 = new Apartment();
apartment2.addResident(person2);

const house = new House(2);
house.addApartment(apartment1);
house.addApartment(apartment2);


/* let number1 = prompt('number');
let number2 = prompt('number');
let number3 = prompt('number');

alert((Number(number1) + Number(number2) + Number(number3)) / 2); */

/* let rik = prompt('Pік народження?');


if(rik === null){
    alert(`Шкода, що Ви не захотіли ввести свій(ю) дату народження`); 
    } else if (rik != null){
        let city = prompt('В якому місті ти живеш?');
        if(city === null){
            alert(`Шкода, що Ви не захотіли ввести свійє місто`);
        } else if(city != null){
            let sport = prompt('Улюблений вид спорту?');
            if (sport ===  null){
                alert(`Шкода, що Ви не захотіли ввести свій вид спорту`);
            } else if(sport != null){
                if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
                    if(sport === "Box" || sport === "MMA" || sport === "Judo"){
                        if(sport === "Box"){
                            alert(`${rik}\nТи живеш у столиці ${city}\nКруто! Хочеш стати Олександром Усиком?`);
                        } else if(sport === "MMA"){
                            alert(`${rik}\nТи живеш у столиці ${city}\nКруто! Хочеш стати Шоном Стриклендом?`);
                        } else if(sport === "Judo"){
                            alert(`${rik}\nТи живеш у столиці ${city}\nКруто! Хочеш стати Арманом Адамяном?`);
                        }
                    } else{
                        alert(`${rik}\nТи живеш у столиці ${city}`);
                    }
                } else {
                    if(sport === "Box" || sport === "MMA" || sport === "Judo"){
                        if(sport === "Box"){
                            alert(`${rik}\nТи живеш у місті ${city}\nКруто! Хочеш стати Олександром Усиком?`);
                        } else if(sport === "MMA"){
                            alert(`${rik}\nТи живеш у місті ${city}\nКруто! Хочеш стати Шоном Стриклендом?`);
                        } else if(sport === "Judo"){
                            alert(`${rik}\nТи живеш у місті ${city}\nКруто! Хочеш стати Арманом Адамяном?`);
                        }
                    } else{
                        alert(`${rik}\nТи живеш у місті ${city}`);
                    }
                }
            }
        }
    }
            
            
            
             */

/* } else (rik === null){
    alert(`Шкода, що Ви не захотіли ввести свій(ю) дату народження`);
} else if (city === null){
    alert(`Шкода, що Ви не захотіли ввести свій(ю) місто`);
} else if (sport === null){
    alert(`Шкода, що Ви не захотіли ввести свій(ю) вид спорту`); */