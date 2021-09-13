import { Age } from './../src/solar-age.js';

describe('Age', () => {
//tests to ensure age is a number and positive value
    test('should correctly create an age object that takes a number', () => {
      const age = new Age(25);
      expect(age.earthAge).toEqual(25);
    });

    test('should correctly determine whether Age is negative', () => {
      const negativeAge = new Age(-20);
      expect(negativeAge.negativeCheck()).toEqual("age is negative")
    });
