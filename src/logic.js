function sum(a, b) {
  return a + b;
}

const shipFactory = (name, size) => {
  const length = size;
  const health = [];
  const healthCalc = () => {
    let i = 0;
    while (i < size) {
      health.push(i);
      i += 1;
    }
  };
  healthCalc();
  const hits = [];
  const getName = () => name;
  // const hit = position => {
  //
  // }

  return {
    name, getName, length, hits, health,
  };
};

function createShips() {
  const carrier = shipFactory('Carrier', 5);
  const battleship = shipFactory('Battleship', 4);
  const cruiser = shipFactory('Carrier', 3);
  return { carrier, battleship, cruiser };
}

createShips();

module.exports = {
  shipFactory,
  sum,
};
