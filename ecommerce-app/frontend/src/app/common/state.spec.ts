import { State } from './state';

describe('State', () => {
  it('should create an instance with id and name', () => {
    const state = new State(1, 'California');

    expect(state.id).toBe(1);
    expect(state.name).toBe('California');
  });

  it('should create an instance with default values if no arguments provided', () => {
    const state = new State();

    expect(state.id).toBeUndefined();
    expect(state.name).toBeUndefined();
  });
});
