function sum(a, b) {
  return a + b;
}

const shipFactory = (name, size,) => {
  const length = size;
  const hits = [];
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
          shipCoordinates.push(x, y+i)
          i +=1 ;
        }
      break;
      case 'down':
        while (i < size) {
          shipCoordinates.push([x, y-i])
          i +=1 ;
        }
      break;
      case 'left':
        while (i < size) {
          shipCoordinates.push([x-i, y])
          i +=1 ;
        }
      break;
      case 'right':
        while (i < size) {
          shipCoordinates.push(toString(x+i, y))
          i +=1 ;
        }
      break;
    }


  };

  const hit = (position) => {
    hits.push(position);
  };

  const isSunk = () => {
    let hitsSorted = hits.sort(function(a, b){return a - b});
    let newHits = hitsSorted.toString();
    let newHealth = health.toString();
    if (newHits = newHealth) {
      return true
    } else return false;
  };

  healthCalc();
  return {
    name, length, hits, health, hit, isSunk, healthCalc, coordinates, shipCoordinates,
  };
};

const gameBoard = () => {
  shipFactory()
}


module.exports = {
  shipFactory,
  sum,
};
