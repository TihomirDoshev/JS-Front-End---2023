function cut(string, start, countChars) {
  let result = string.slice(start, start + countChars);
  console.log(result);
}
cut("SkipWord", 4, 7);
