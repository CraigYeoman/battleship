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
    battleship.hit();
    battleship.hit();
    battleship.hit();
    battleship.hit();
    battleship.hit();
    expect(battleship.hits).toEqual([0, 1, 2, 3 ,4]);
})

test('Testing if ship has been sunk', () => {
    const battleship = shipFactory('Battleship', 5);
    battleship.hit();
    battleship.hit();
    battleship.hit();
    battleship.hit();
    battleship.hit();
    expect(battleship.isSunk()).toEqual(true);
})

test('Testing if ship has not been sunk', () => {
    const battleship = shipFactory('Battleship', 5);
    battleship.hit();
    battleship.hit();
    battleship.hit();
    battleship.hit();
    expect(battleship.isSunk()).toBe(false);
})

test('coordinates up', () => {
    const battleship = shipFactory('Battleship', 5);
    battleship.coordinates(1, 1, 'up');
    expect(battleship.shipCoordinates).toEqual(
        [[1, 1], [1, 2], [1, 3], [1, 4], [1, 5]]);
})

test('coordinates right', () => {
    const battleship = shipFactory('Battleship', 5);
    battleship.coordinates(1, 1, 'right');
    expect(battleship.shipCoordinates).toEqual(
        [[1, 1], [2, 1], [3, 1], [4, 1], [5, 1]]);
})