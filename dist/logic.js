function sum(a, b) {
  return a + b;
}

const shipFactory = (name, size,) => {
  const length = size;
  const hits = [];
  let hitsCounter = 0;
  const health = [];
  const shipCoordinates = [];
  // const getName = () => name;

  const healthCalc = () => {
    let i = 0;
    while (i < size) {
      health.push(i);
      i += 1;
    }
  };

  const coordinates =  (x, y, direction) => {
    let i = 0;
    switch(direction) {
      case 'up':
        while (i < size) {
          let cord = [x, y+i]
          shipCoordinates.push(cord);
          i +=1 ;
        }
      break;
      case 'down':
        while (i < size) {
          let cord = [x, y-i]
          shipCoordinates.push([cord]);
          i +=1 ;
        }
      break;
      case 'left':
        while (i < size) {
          let cord = [x-i, y]
          shipCoordinates.push([cord]);
          i +=1 ;
        }
      break;
      case 'right':
        while (i < size) {
          let cord = [x+i, y]
          shipCoordinates.push(cord);
          i +=1 ;
        }
      break;
    }


  };

  const hit = () => {
    hits.push(hitsCounter);
    hitsCounter += 1;
  };

  const isSunk = () => {
    let hitsSorted = hits.sort(function(a, b){return a - b});
    let newHits = hitsSorted.toString();
    let newHealth = health.toString();
    if (newHits == newHealth) {
      return true
    } else return false;
  };

  healthCalc();
  return {
    name, length, hits, health, hit, isSunk, healthCalc, coordinates, shipCoordinates,
  };
};

const gameBoard = (name) => {
  receiveAttack
}


module.exports = {
  shipFactory,
  sum,
};
