

// Define a Dolphin class
class Dolphin {
  constructor(name) {
      this.name = name;
      this.brainHalves = ['left', 'right'];
      this.sleepingHalf = null;
      this.pod = null; // reference to the pod this dolphin belongs to
    }
  

  sleep(half) {
    if (this.brainHalves.includes(half)) {
      this.sleepingHalf = half;
      console.log(`${this.name} is sleeping with ${half} brain half.`);
    } else {
      console.log('Invalid brain half!');
    }
  }

  wakeUp() {
    if (this.sleepingHalf) {
      console.log(`${this.name} is waking up from ${this.sleepingHalf} brain half.`);
      this.sleepingHalf = null;
    } else {
      console.log(`${this.name} is already awake!`);
    }
  }

  alert() {
    if (this.sleepingHalf) {
      console.log(`${this.name} is alert and awake on the ${this.brainHalves.find(half => half !== this.sleepingHalf)} brain half.`);
    } else {
      console.log(`${this.name} is already alert and awake!`);
    }
  }
  communicate(message) {
        console.log(`${this.name} says: ${message}`);
    }
  
  
    hunt() {
      // use echolocation to locate prey
      const prey = new Prey('fish');
      console.log(`${this.name} caught a ${prey.type}!`);
    }
  
    play(toy) {
      console.log(`${this.name} is playing with ${toy.type}!`);
    }
  
    recognizeSelf(mirror) {
      console.log(`${this.name} recognizes itself in the mirror!`);
    }
  }
  
  // Define a Pod class
 // Define a Pod class
class Pod {
  constructor() {
    this.dolphins = [];
    this.lastMessage = null;
    this.lastMessageAuthor = null;
  }

  addDolphin(dolphin) {
    this.dolphins.push(dolphin);
    dolphin.pod = this;
  }

  greet() {
    if (this.lastMessage) {
      this.dolphins.forEach(dolphin => {
        if (dolphin !== this.lastMessageAuthor) {
          dolphin.communicate(this.lastMessage, true);
        }
      });
    } else {
      console.log('No previous message to respond to.');
    }
  }

  updateLastMessage(message, author) {
    this.lastMessage = message;
    this.lastMessageAuthor = author;
  }
}

// Define a Prey class
class Prey {
  constructor(type) {
    this.type = type;
  }
}

// Define a Toy class
class Toy {
  constructor(type) {
    this.type = type;
  }
}

// Define a Mirror class
class Mirror {
  constructor() {}
}
//


class Life{ //"life is asynchronous" - wartly, 2024
  constructor(){}
  live() { 
    const delphi = new Dolphin('Delphi');
    const tommy = new Dolphin('Tommy');

    const pod = new Pod();
    pod.addDolphin(delphi);
    pod.addDolphin(tommy);

    delphi.communicate('Hi everyone!', false);
    pod.updateLastMessage('Hi everyone!', delphi);

    pod.greet();
  }
}


const life = new Life();




life.live();
//RIP Dolphins