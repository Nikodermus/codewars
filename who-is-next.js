function whoIsNext(people, iterations) {
  if (iterations - 1 < people.length) {
    return people[iterations - 1];
  }


  const people_obj = {};
  for (let i = 0; i < people.length; i += 1) {
    people_obj[i + 1] = people[i];
  }


  for (let i = 0; i <= iterations; i += 1) {
    const people_keys = Object.keys(people_obj);
    // if (true) debugger;
    people_obj[Number(people_keys[people_keys.length - 1]) + 1] = people_obj[people_keys[0]];
    people_obj[Number(people_keys[people_keys.length - 1]) + 2] = people_obj[people_keys[0]];

    if (people_obj[iterations]) return people_obj[iterations];
    delete people_obj[people_keys[0]];
  }
}
