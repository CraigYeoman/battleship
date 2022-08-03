import {shipFactory, sum} from "./src/logic"

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('create ships', () => {
    const battleship = shipFactory('Battleship', 5);
    expect(battleship).toEqual({name: 'battleship', health: [0, 1, 2, 3, 4], lenght: 5});
});