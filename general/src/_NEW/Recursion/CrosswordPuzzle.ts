/**
 * I believe that if your interviewer gives you this question, they probably don't want you to succeed :P
 * You are to solve this question using recursion, with a brute-force strategy as there is no elegant and efficient
 * way to solve it (as far as I know).
 *
 * To solve it, I took the following steps:
 * 1 - Separate the words string into an array of String, that is easier to manage.
 * 2 - Get all possible coordinates in the crosswords that we can use to start a word.
 * 3 - Get all permutations of said words
 * 4 - For each of the combinations obtained from mixing each permutation and each coordinate, try filling the cross-
 * words in whichever valid way possible.
 */

'use strict';



/*
 * Complete the 'crosswordPuzzle' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY crossword
 *  2. STRING words
 */


type Direction = "accross" | "down"
type Pos = [number, number];
type Slot = {
  dir: Direction,
  pos: [number, number],
  length: number,
};

function crosswordPuzzle(crossword: string[], ws: string): string[] {
  // Write your code here
  const words = ws.split(";");
  // find paths horizontal
  const slots = [
    ...findSlots(crossword, "accross"),
    ...findSlots(crossword, "down"),
  ];
  const slotCombos = permutator(slots);
  // try fitting the words in to every combination of slots
  const answer = slotCombos.reduce((finish: false | string[], slotCombo) => {
    if (finish) return finish;
    try {
      // will throw an error if there's a letter conflice
      return doPuzzle(words, slotCombo, crossword);
    } catch(e) {
      return false;
    }
  }, false);
  if (answer === false) {
    throw new Error("no answer");
  }
  return answer;
}

function findSlots(crossword: string[], dir: "accross" | "down"): Slot[] {
  function transpose(a: string[]): string[] {
    const r = Object.keys(a[0]).map(function(c: string) {
      // @ts-ignore
      return a.map(function(r: string) { return r[c]; });
    });
    return r.map((row) => row.join(""));
  }
  const field = dir === "accross" ? crossword : transpose(crossword);
  return field.reduce((res: Slot[], levelStr, level) => {
    const slots = levelStr.split("+").filter(x => x.length > 1);
    if (slots.length > 0) {
      return [
        ...res,
        ...slots.map((slot, i): Slot => ({
          dir,
          pos: dir === "accross"
              ? [levelStr.indexOf(slot), level]
              : [level, levelStr.indexOf(slot)],
          length: slot.length,
        })),
      ];
    }
    return res;
  }, []);
}

function insert(word: string, slot: Slot, crossword: string[]): string[] {
  function insertInLine(char: string, x: number, line: string): string {
    const ret = line.slice(0).split("");
    const prev = ret[x];
    if (prev !== "-" && prev !== char) {
      throw new Error("character conflict");
    }
    ret[x] = char;
    const r = ret.join("");
    return r;
  }
  function insertChar(char: string, pos: Pos, field: string[]): string[] {
    return field.reduce((lines: string[], line, i) => {
      const doneLine = (i === pos[1])
          ? insertInLine(char, pos[0], line)
          : line;
      return [
        ...lines,
        doneLine,
      ];
    }, []);
  }
  function advancePos(pos: Pos, dir: Direction, i: number): Pos {
    if (dir === "down") {
      return [pos[0], pos[1] + i];
    }
    return [pos[0] + i, pos[1]];
  }

  return word.split("").reduce((field: string[], char, i) => {
    return insertChar(
        char,
        advancePos(slot.pos, slot.dir, i),
        field,
    );
  }, crossword);
}

const permutator = (inputArr: Slot[]) => {
  let result: Slot[][] = [];

  const permute = (arr: Slot[], m: Slot[] = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
      }
    }
  }
  permute(inputArr)
  return result;
}

function doPuzzle(words: string[], slotCombo: Slot[], crossword: string[]): string[] {
  const { puzzle } = words.reduce(({ slotsRemaining, puzzle }: {
    puzzle: string[],
    slotsRemaining: Slot[],
  }, word) => {
    const slotI = slotsRemaining.findIndex((s) => s.length === word.length);
    const newSlotsRemaining = slotsRemaining.filter((s, i) => i !== slotI);
    return {
      puzzle: insert(word, slotsRemaining[slotI], puzzle),
      slotsRemaining: newSlotsRemaining,
    };
  }, { puzzle: crossword, slotsRemaining: slotCombo });
  return puzzle;
}

