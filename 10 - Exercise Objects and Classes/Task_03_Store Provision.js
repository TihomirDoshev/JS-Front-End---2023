function makeUpdateStore(currentStore, updateStore) {
  let store = {};
  for (let index = 0; index < currentStore.length; index += 2) {
    let product = currentStore[index];
    let quantity = Number(currentStore[index + 1]);

    if (!store.hasOwnProperty(product)) {
      store[product] = quantity;
    } else {
      store[product] += quantity;
    }
  }
  for (let index = 0; index < updateStore.length; index += 2) {
    let product = updateStore[index];
    let quantity = Number(updateStore[index + 1]);

    if (!store.hasOwnProperty(product)) {
      store[product] = quantity;
    } else {
      store[product] += quantity;
    }
  }
  for (const key in store) {
    console.log(`${key} -> ${store[key]}`);
  }
}
makeUpdateStore(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
