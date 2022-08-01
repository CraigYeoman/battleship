const sum = require('./src/logic');
const shipFactory = require('./src/logic');
const createShips = require('./src/logic');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('create ships', () => {
    expect(createShips()).toBe('Carrier', 5);
});