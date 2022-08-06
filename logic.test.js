import {shipFactory, sum} from "./dist/logic"

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('checking ship health', () => {
    const battleship = shipFactory('Battleship', 5);
    //battleship.healthCalc();
    expect(battleship.health).toEqual([0, 1, 2, 3 ,4]);
})

test('Adding if a ship has been hit', () => {
    const battleship = shipFactory('Battleship', 5);
    battleship.hit(0);
    battleship.hit(1);
    battleship.hit(2);
    battleship.hit(3);
    battleship.hit(4);
    expect(battleship.hits).toEqual([0, 1, 2, 3 ,4]);
})

test('Testing if ship has been sunk', () => {
    const battleship = shipFactory('Battleship', 5);
    battleship.hit(0);
    battleship.hit(1);
    battleship.hit(2);
    battleship.hit(3);
    battleship.hit(4);
    expect(battleship.isSunk()).toEqual(true);
})

test('Testing if ship has not been sunk', () => {
    const battleship = shipFactory('Battleship', 5);
    battleship.hit(0);
    battleship.hit(1);
    battleship.hit(2);
    battleship.hit(3);
    expect(battleship.isSunk()).toBe(false);
})

test('coordinates', () => {
    const battleship = shipFactory('Battleship', 5);
    battleship.coordinates(1, 1, 'up');
    expect(battleship.shipCoordinates).toEqual([0]);
})