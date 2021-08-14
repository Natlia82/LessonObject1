export default function orderByProps(obje, mass) {
  const newObject = [];
  const newObje = obje;
  for (let i = 0; i < mass.length; i += 1) {
    newObject[i] = { key: mass[i], value: obje[mass[i]] };
    delete newObje[mass[i]];
  }


  const countObj = Object.keys(obje).sort((a, b) => {
    let rezult;
    if (a >= b) {
      rezult = 1;
    } else rezult = -1;

    return rezult;
  });

  let j = newObject.length;
  for (let i = 0; i < countObj.length; i += 1) {
    newObject[j] = { key: countObj[i], value: newObje[countObj[i]] };
    j += 1;
  }

  return newObject;
}
