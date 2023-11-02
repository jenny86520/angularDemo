import { WordPipe } from './word.pipe';

describe('WordPipe', () => {
  let pipe: WordPipe;
  beforeEach(() => {
    pipe = new WordPipe();
  });

  it('can transform "abcdefg" to "abc..." by default', () => {
    expect(pipe.transform('abcdefg')).toBeTruthy();
  });

  it('can transform "abcdefg" to "abc==="', () => {
    expect(pipe.transform('abcdefg', '===')).toBeTruthy();
  });
});
