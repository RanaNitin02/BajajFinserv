const processPayload = (data) => {
  const odd_numbers = [];
  const even_numbers = [];
  const alphabets = [];
  const special_characters = [];
  const concat_letters = [];

  let sum = 0;

  data.forEach((item) => {
    if (/^\d+$/.test(item)) {
      const num = parseInt(item);
      sum += num;
      (num % 2 === 0 ? even_numbers : odd_numbers).push(item);
    } else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
      concat_letters.push(item);
    } else {
      special_characters.push(item);
    }
  });

  const reversed = concat_letters.join("").split("").reverse();
  const concat_string = reversed
    .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");

  return {
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string,
  };
};

module.exports = { processPayload };
