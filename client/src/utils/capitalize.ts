export const capitalize = (value: string) => {
  const firstLetter = value.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = value.slice(1);

  return firstLetterCap + remainingLetters;
};
