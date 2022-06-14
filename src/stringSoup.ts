import { default as jaroDistance } from 'jaro-winkler';

type StringSoupMatch = {
  knownString: string;
  score: number;
};
export type StringSoupMatchResult = {
  token: string;
  match: StringSoupMatch;
};

export type StringSoupResult = {
  best: StringSoupMatchResult;
  all: StringSoupMatchResult[];
};

export class StringSoup {
  private knownStrings: string[] = [];

  constructor(knownStrings: string[]) {
    this.knownStrings = knownStrings;
  }

  static sanitize = (soup: string) => {
    return soup;
  };
  static tokenize = (soup: string) => {
    return soup.split(' ');
  };
  static scoreString = (known: string, guess: string) => {
    return jaroDistance(known, guess);
  };
  static StringSoupMatchResultComparator = (
    result1: StringSoupMatchResult,
    result2: StringSoupMatchResult
  ) => {
    return result2.match.score - result1.match.score;
  };

  matchToken = (token: string) => {
    if (!this.knownStrings?.length) {
      throw 'StringSoup has been initialized with no known strings. Check your constructor usage.';
    }

    let bestKnownString: string = '';
    let bestScore = 0;
    this.knownStrings.forEach((knownString) => {
      const score = StringSoup.scoreString(knownString, token);
      if (score > bestScore || !bestKnownString) {
        bestKnownString = knownString;
        bestScore = score;
      }
    });
    return {
      knownString: bestKnownString,
      score: bestScore,
    } as StringSoupMatch;
  };

  matchSoup = (soup: string) => {
    // TODO: Add options about delimiters, characters to trim, conversion rules, and accepted charsets
    const cleanSoup = StringSoup.sanitize(soup);
    const tokens = StringSoup.tokenize(cleanSoup);

    const results: StringSoupMatchResult[] = [];
    tokens.forEach((token) => {
      results.push({
        token,
        match: this.matchToken(token),
      } as StringSoupMatchResult);
    });

    results.sort(StringSoup.StringSoupMatchResultComparator);
    return {
      best: results[0],
      all: results,
    };
  };
}
