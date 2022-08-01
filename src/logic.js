function sum(a, b) {
  return a + b;
}

const shipFactory = (name, size) => {
  const length = size;
  const hits = [];
  const getName = () => name;
  const hit = position => {
    
  }

  return { getName, length, hits };
};

function createShips() {
  const carrier = shipFactory('Carrier', 5);
  const battleship = shipFactory('Battleship', 4);
  const cruiser = shipFactory('Carrier', 3);
  return { carrier, battleship, cruiser };
}

createShips();

module.exports = sum;
