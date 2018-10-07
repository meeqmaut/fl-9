// 1
function assign(main, ...others) {
  for (let i = 0; i < others.length; i++) {
    let currentObject = others[i];
    for (let key in currentObject) {
      if (currentObject.hasOwnProperty(key)) {
        main[key] = currentObject[key];
      }
    }
  }
  return main;
}



// 2
function Bot(params) {
  this.name = params.name;
  this.speed = params.speed;
  this.coordinate = {
    x: params.x,
    y: params.y
  };
  this.defaultSpeed = params.speed;
}

Bot.prototype.getSpeed = function() {
  return this.speed;
};
Bot.prototype.setSpeed = function(newSpeed) {
  this.speed = newSpeed;
};
Bot.prototype.getDefaultSpeed = function() {
  return this.defaultSpeed;
};
Bot.prototype.getCoordinates = function() {
  return this.coordinate;
};
Bot.prototype.setCoordinates = function(newX, newY) {
  this.coordinate.x = newX;
  this.coordinate.y = newY;
};
Bot.prototype.move = function(direction) {
  if (typeof direction === 'string') {
    switch (direction) {
      case 'left':
        this.coordinate.x -= this.getSpeed();
        break;
      case 'right':
        this.coordinate.x += this.getSpeed();
        break;
      case 'down':
        this.coordinate.y -= this.getSpeed();
        break;
      case 'up':
        this.coordinate.y += this.getSpeed();
        break;
      default:
        console.log('Incorrect dirrection');
    }
  } else {
    console.log('Incorrect input');
  }
};

Bot.prototype.showPosition = function() {
  return console.log(`I'm Bot ${this.name}. I'm located at ${this.coordinate.x}:${this.coordinate.y}`);
};



function Racebot(params) {
  Bot.call(this, params);
  this.previousDirection = '';
}
Racebot.prototype = Object.create(Bot.prototype);
Racebot.prototype.constructor = Bot;
Racebot.prototype.move = function(direction) {
  if (typeof direction === 'string') {
    if (this.previousDirection === direction) {
      this.speed++;
    } else {
      this.speed = this.defaultSpeed;
    }
    this.previousDirection = direction;
    switch (direction) {
      case 'left':
        this.coordinate.x -= this.speed;
        break;
      case 'right':
        this.coordinate.x += this.speed;
        break;
      case 'down':
        this.coordinate.y -= this.speed;
        break;
      case 'up':
        this.coordinate.y += this.speed;
        break;
      default:
        console.log('Incorrect dirrection');
    }
  } else {
    console.log('Incorrect input');
  }
};
Racebot.prototype.showPosition = function() {
  return console.log(`I'm Racebot ${this.name}. I'm located at ${this.coordinate.x}:${this.coordinate.y}`);
};



function Speedbot (params){
    Bot.call(this, params)
    this.prepareEngineCounter = false;
}
Speedbot.prototype = Object.create(Bot.prototype);
Speedbot.prototype.constructor = Bot;
Speedbot.prototype.prepareEngine = function(){
    this.speed += 2;
    this.prepareEngineCounter = true;
}
Speedbot.prototype.move = function(direction){
    Bot.prototype.move.call(this,direction);
    if(this.prepareEngineCounter){
        if(this.speed > this.defaultSpeed){
            this.speed--;
        }
        if(this.speed === this.defaultSpeed){
            this.prepareEngineCounter = false;
        }
    }
}
Speedbot.prototype.showPosition = function() {
  return console.log(`I'm Speedbot ${this.name}. I'm located at ${this.coordinate.x}:${this.coordinate.y}`);
};