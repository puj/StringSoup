export type TestSoup = {
  soup: string;
  expected: string;
};
export const testSoups: TestSoup[] = [
  {
    soup: '100 blueberries at alvk',
    expected: 'Alvik',
  },
  {
    soup: 'karlapl. har 10 styck OV',
    expected: 'Karlaplan',
  },
];
