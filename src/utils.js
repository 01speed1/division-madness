export const randomNumberWithDigits = (digits) => {
  let range = ["1"];
  for (let index = 1; index <= digits; index++) {
    range.push("0");
  }

  range = +range.join("");

  return Math.floor(Math.random() * range);
};
