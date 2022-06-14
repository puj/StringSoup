import { StringSoup } from './stringSoup';
import { testSoups } from './data/testSoups';
import { testStations } from './data/testStations';

const jestConsole = console;

beforeEach(() => {
  global.console = require('console');
});

afterEach(() => {
  global.console = jestConsole;
});

test('TestStations', () => {
  const stringSoup = new StringSoup(testStations);
  testSoups.forEach((testSoup) => {
    const result = stringSoup.matchSoup(testSoup.soup);
    console.log('>>>>');
    console.log('For token (', testSoup.soup, ') found:');
    console.log(result.best);
    expect(result.best.match.knownString).toEqual(testSoup.expected);
  });
});

test('TestReadmeWashington', () => {
  const stringSoup = new StringSoup([
    'London',
    'Washington',
    'Mumbai',
    'Sydney',
    'Tokyo',
    'Moscow',
    'Neverland',
  ]);

  const result = stringSoup.matchSoup('wshng');
  console.log('>>>>');
  console.log('For token (wshng) found:');
  console.dir(result, { depth: null });
  expect(result.best.match.knownString).toEqual('Washington');
});

test('TestReadmeWashington', () => {
  const stringSoup = new StringSoup([
    'London',
    'Washington',
    'Mumbai',
    'Sydney',
    'Tokyo',
    'Moscow',
    'Neverland',
  ]);

  const result = stringSoup.matchSoup(
    'I like to visit lndon, but I live elsewhere'
  );
  console.log('>>>>');
  console.log('For token (I like to visit lndon, but I live elsewhere) found:');
  console.dir(result, { depth: null });
  expect(result.best.match.knownString).toEqual('London');
});
