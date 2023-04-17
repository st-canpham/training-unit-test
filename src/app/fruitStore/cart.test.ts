import { FruitStoreCart, Fruit } from './cart';

const banana: Fruit = {
  id: '001',
  name: 'banana',
  price: 20000,
  discounts: [
    {
      quantity: 1,
      percent: 3
    },
    {
      quantity: 5,
      percent: 5
    },
    {
      quantity: 10,
      percent: 7
    },
  ],
  quantity: 6,
};

const orange: Fruit = {
  id: '002',
  name: 'orange',
  price: 15000,
  discounts: [
    {
      quantity: 3,
      percent: 5
    },
    {
      quantity: 10,
      percent: 10
    },
  ],
  quantity: 15,
};

describe('Test order fruits', () => {
  describe('Add fruit', () => {
    beforeEach(() => {
      cart.clearCart();
      calcTotalPriceMock.mockClear();
    });
    const cart = new FruitStoreCart([]);
    const calcTotalPriceMock = jest.spyOn(FruitStoreCart.prototype, 'calcTotalPrice');
    const addFruitMock = jest.spyOn(FruitStoreCart.prototype, 'addFruit');
    it ('Test add fruit called', () => {
      cart.addFruit(banana);
      expect(addFruitMock).toBeCalled();
      expect(addFruitMock).toBeCalledWith(banana);
      expect(calcTotalPriceMock).toBeCalled();
    });
    it ('Test argument is null', () => {
      cart.addFruit(null);
      expect(addFruitMock).toBeCalledWith(null);
      expect(calcTotalPriceMock).toBeCalledTimes(0);
      expect(cart.fruits).toEqual([]);
    });
    it ('Test argument is undefined', () => {
      cart.addFruit(undefined);
      expect(addFruitMock).toBeCalledWith(null);
      expect(calcTotalPriceMock).toBeCalledTimes(0);
      expect(cart.fruits).toEqual([]);
    });
    it ('Test add fruit success', () => {
      cart.addFruit(banana);
      expect(calcTotalPriceMock).toBeCalled();
      expect(cart.fruits).toHaveLength(1);
      expect(cart.fruits).toEqual([banana]);
    });
    it ('Test add fruit existed', () => {
      cart.addFruit(banana);
      cart.addFruit(banana);
      expect(calcTotalPriceMock).toBeCalled();
      expect(cart.fruits).toHaveLength(1);
      expect(cart.fruits).toEqual([{ ...banana, quantity: 12 }]);
    });
  });

  describe('Remove fruit', () => {
    beforeEach(() => {
      calcTotalPriceMock.mockClear();
    });
    const cart = new FruitStoreCart([banana, orange]);
    const removeFruitMock = jest.spyOn(FruitStoreCart.prototype, 'removeFruit');
    const calcTotalPriceMock = jest.spyOn(FruitStoreCart.prototype, 'calcTotalPrice');
    it ('Test remove fruit called', () => {
      cart.removeFruit('123');
      expect(removeFruitMock).toBeCalled();
      expect(removeFruitMock).toBeCalledWith('123');
      expect(calcTotalPriceMock).toBeCalledTimes(0);
    });
    it ('Test argument is null', () => {
      cart.removeFruit(null);
      expect(removeFruitMock).toBeCalledWith(null);
      expect(calcTotalPriceMock).toBeCalledTimes(0);
      expect(cart.fruits).toEqual([banana, orange]);
    });
    it ('Test argument is undefined', () => {
      cart.removeFruit(undefined);
      expect(removeFruitMock).toBeCalledWith(undefined);
      expect(calcTotalPriceMock).toBeCalledTimes(0);
      expect(cart.fruits).toEqual([banana, orange]);
    });
    it ('Test remove fruit does not exist', () => {
      cart.removeFruit('abc');
      expect(calcTotalPriceMock).toBeCalledTimes(0);
      expect(cart.fruits).toHaveLength(2);
      expect(cart.fruits).toEqual([banana, orange]);
    });
    it ('Test remove fruit success', () => {
      cart.removeFruit(banana.id);
      expect(calcTotalPriceMock).toBeCalled();
      expect(cart.fruits).toHaveLength(1);
      expect(cart.fruits).toEqual([orange]);
    });
  });

  describe('Test edit fruit', () => {
    beforeEach(() => {
      calcTotalPriceMock.mockClear();
    });
    const cart = new FruitStoreCart([banana, orange]);
    const editFruitMock = jest.spyOn(FruitStoreCart.prototype, 'editFruit');
    const calcTotalPriceMock = jest.spyOn(FruitStoreCart.prototype, 'calcTotalPrice');
    it ('Test edit fruit called', () => {
      cart.editFruit(orange);
      expect(editFruitMock).toBeCalled();
      expect(editFruitMock).toBeCalledWith(orange);
      expect(calcTotalPriceMock).toBeCalled();
    });
    it ('Test argument is null', () => {
      cart.editFruit(null);
      expect(editFruitMock).toBeCalledWith(null);
      expect(calcTotalPriceMock).toBeCalledTimes(0);
      expect(cart.fruits).toEqual([banana, orange]);
    });
    it ('Test argument is undefined', () => {
      cart.editFruit(undefined);
      expect(editFruitMock).toBeCalledWith(undefined);
      expect(calcTotalPriceMock).toBeCalledTimes(0);
      expect(cart.fruits).toEqual([banana, orange]);
    });
    it ('Test edit fruit does not exist', () => {
      cart.editFruit({ ...banana, id: '123' });
      expect(cart.fruits).toEqual([banana, orange]);
      expect(calcTotalPriceMock).toBeCalledTimes(0);
    });
    it ('Test edit fruit success', () => {
      cart.editFruit({ ...banana, quantity: 30 });
      expect(cart.fruits).toEqual([{ ...banana, quantity: 30 }, orange]);
      expect(calcTotalPriceMock).toBeCalled();
    });
  });
});
