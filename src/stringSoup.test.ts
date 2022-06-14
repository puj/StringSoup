import { StringSoup, StringSoupResult } from './stringSoup';
import { testSoups } from './data/testSoups';
import { testStations } from './data/testStations';

const jestConsole = console;

beforeEach(() => {
  global.console = require('console');
});

afterEach(() => {
  global.console = jestConsole;
});

test('TestSoups', () => {
  const stringSoup = new StringSoup(testStations);
  testSoups.forEach((testSoup) => {
    const result = stringSoup.matchSoup(testSoup.soup);
    console.log('>>>>');
    console.log('For token (', testSoup.soup, ') found:');
    console.log(result.best);
    expect(result.best.match.knownString).toEqual(testSoup.expected);
  });
});
