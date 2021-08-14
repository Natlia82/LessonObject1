// import { test } from 'media-typer';
import orderByProps from '../orderBy';

test('one', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const rezult = orderByProps(obj, ['name', 'level']);
  expect(rezult).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});

test('two', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const rezult = orderByProps(obj, ['name', 'defence']);
  expect(rezult).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'defence', value: 40 },
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
  ]);
});
