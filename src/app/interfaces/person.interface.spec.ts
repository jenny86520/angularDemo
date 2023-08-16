import { Person } from './person.interface';

describe('Person', () => {
  it('should create an instance', () => {
    expect(new Person()).toBeTruthy();
  });
});
