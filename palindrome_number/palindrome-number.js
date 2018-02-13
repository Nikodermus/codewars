function palindromize(number) {
  let counter = 0;
  while (!(number.toString() === [...number.toString()].reverse().join(''))) {
    number += Number([...number.toString()].reverse().join(''));
    counter += 1;
  }
  return `${counter} ${number}`;
}
