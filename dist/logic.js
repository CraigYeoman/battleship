function sum(a, b) {
  return a + b;
}

const shipFactory = (name, size) => {
  const length = size;
  const hits = [];
  const health = [];
  // const getName = () => name;

  const healthCalc = () => {
    let i = 0;
    while (i < size) {
      health.push(i);
      i += 1;
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
    name, length, hits, health, hit, isSunk, healthCalc,
  };
};

const battleship = shipFactory('Battleship', 5);
battleship.hit(0);
battleship.hit(1);
battleship.hit(2);
battleship.hit(3);
battleship.hit(4);


module.exports = {
  shipFactory,
  sum,
};
