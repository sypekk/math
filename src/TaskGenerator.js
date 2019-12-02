export const Dodawanie = (id, range) => {
  const a = Math.floor(Math.random() * range);
  const b = Math.floor(Math.random() * (range - a) + 1);
  const c = a + b;
  // console.log(`${a} + ${b} = ${a + b}`);
  return {
    id,
    type: "+",
    a: a,
    b: b,
    c: c,
    answer: "",
    active: true
  };
};

export const Odejmowanie = (id, range) => {
  const a = Math.floor(Math.random() * range);
  const b = Math.floor(Math.random() * (range - a) + 1);
  if (a > b) {
    const c = a - b;
    return {
      id,
      type: "-",
      a: a,
      b: b,
      c: c,
      answer: "",
      active: true
    };
  } else {
    const c = b - a;
    return {
      id,
      type: "-",
      a: b,
      b: a,
      c: c,
      answer: "",
      active: true
    };
  }
};

export const Mnozenie = (id, range) => {
  const a = Math.floor(Math.random() * 10 + 1);
  const b = Math.floor(Math.random() * range + 1);
  const c = a * b;
  return {
    id,
    type: "*",
    a: a,
    b: b,
    c: c,
    answer: "",
    active: true
  };
};
