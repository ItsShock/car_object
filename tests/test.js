const car = require('..');

describe('Obiekt car', () => {
  it('powinien posiadać pole "name" o wartości "Toyota Yaris"', async () => {
    expect(typeof car.name).toBe('string');
    expect(car.name.toLowerCase()).toBe('toyota yaris');
  });

  it('powinien posiadać pole "price" o wartości 50000', async () => {
    expect(typeof car.price).toBe('number');
    expect(car.price).toBe(50000);
  });

  it('powinien posiadać pole "color" o wartości "blue"', async () => {
    expect(typeof car.color).toBe('string');
    expect(car.color).toBe('blue');
  });

  it('powinien posiadać pole "led" będące prawdą logiczną', async () => {
    expect(typeof car.led).toBe('boolean');
    expect(car.led).toBeTruthy();
  });
});
