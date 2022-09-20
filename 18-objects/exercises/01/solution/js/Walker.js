/* # Feladatok

1. Adott az alábbi objektum:

Alakítsd ár a következőket figyelembe véve:
- Legyen külön konstruktor függvény, melynek neve: `Walker`
- A konstruktor függvény paraméterként kapja meg a `name` és `state` értékeket
- A `name` alapértelmezett értéke: "John Doe"
- A `state` alapértelmezett értéke: "dead"
- Készítsd el a  `walk`, `eat` és `speak` metódusokat a `Walker` `prototype`-hoz rendelve
- A metódusoknál a shorthand megadási módot használd
- Mindenhol tamplate stringet használj
- A metódus paraméternek legyen alapértelmezett értéke az alábbiak szerint:
    - `walk()`: speedInMph = 10
    - `eat()`:  foodName = "meat"
    - `speak()`: sound = "grrrrrr"
- Legyen egy `firstName`, és egy `lastName` getter/setter.
A `firstName` a név első felét adja vissza/módosítja,
míg a `lastName` a név második felét adja vissza/módosítja.
Ezeket a `defineProperties` metódus segítségével
add hozzá a objektumhoz a kontruktor függvényen belül.
 */

/* const Walker = {
  name: "John Doe",
  state: "dead",
  walk: function (speedInMph) {
    return (
      this.name + " the " + this.state + " walks with " + speedInMph + " mph!"
    );
  },
  eat: function (foodName) {
    return this.name + " the " + this.state + " eats " + foodName + "!";
  },
  speak: function (sound) {
    return this.name + " the " + this.state + " says " + sound + "!";
  },
}; */

function Walker(name = "John Doe", state = "dead") {
  this.name = name;
  this.state = state;
  this.walk = function (speedInMph = 10) {
    return `${this.name} the ${this.state} walks with ${speedInMph} mph!`;
  };
  this.eat = function (foodName = "meat") {
    return `${this.name} the ${this.state} eats ${foodName}!`;
  };
  this.speak = function (sound = "grrrrrr") {
    return `${this.name} the ${this.state} says ${sound}!`;
  };
  Object.defineProperty(this, "firstName", {
    get() {
      return this.name.split(" ")[0];
    },
    set(value) {
      this.name = `${value} ${this.name.split(" ")[1]}`;
    },
  });
  Object.defineProperty(this, "lastName", {
    get() {
      return this.name.split(" ")[1];
    },
    set(value) {
      this.name = `${this.name.split(" ")[0]} ${value}`;
    },
  });
}

export default Walker;
