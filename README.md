# StringSoup

Use a variety of string similarity functions to find the best string in a group of strings.

# Example Usage

```typescript
import { StringSoup } from 'stringsoup';

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
/*
 {
  best: {
    token: 'wshng',
    match: { knownString: 'Washington', score: 0.7333333333333334 }
  },
  all: [
    {
      token: 'wshng',
      match: { knownString: 'Washington', score: 0.7333333333333334 }
    }
  ]
}
 */

const result = stringSoup.matchSoup(
  'I like to visit lndon, but I live elsewhere'
);
/*
{
  best: {
    token: 'lndon,',
    match: { knownString: 'London', score: 0.6527777777777778 }
  },
  all: [
    {
      token: 'lndon,',
      match: { knownString: 'London', score: 0.6527777777777778 }
    },
    {
      token: 'to',
      match: { knownString: 'Tokyo', score: 0.5666666666666667 }
    },
    {
      token: 'elsewhere',
      match: { knownString: 'Neverland', score: 0.5555555555555555 }
    },
    {
      token: 'visit',
      match: { knownString: 'Washington', score: 0.5222222222222221 }
    },
    { token: 'but', match: { knownString: 'Mumbai', score: 0.5 } },
    {
      token: 'like',
      match: { knownString: 'Tokyo', score: 0.48333333333333334 }
    },
    {
      token: 'live',
      match: { knownString: 'Sydney', score: 0.47222222222222215 }
    },
    { token: 'I', match: { knownString: 'London', score: 0 } },
    { token: 'I', match: { knownString: 'London', score: 0 } }
  ]
}
*/
```

# TODO

- Add options to `sanitize`
  - Charset transformations
  - Ignored characters
  - Replaced characters
- Add options to `tokenize`
  - Specify delimiters
- Add different distance functions
  - Currently only https://www.npmjs.com/package/jaro-winkler
