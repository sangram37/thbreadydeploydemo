interface Item {
  id: number;
  quantity: number;
  // Add other properties of the item if needed
}

export function assignToMerchantCart(
  merchantCartList: Item[],
  itemForCart: Item
): Item[] {
  let localCartList: Item[] = merchantCartList;

  if (localCartList.length != 0) {
    let findIndex = localCartList.findIndex((o) => o.id == itemForCart.id);
    if (findIndex != -1) {
      localCartList.map((item, index) => {
        if (index == findIndex) {
          item.quantity = item.quantity + 1;
        }
      });
    } else {
      localCartList.push({ ...itemForCart, quantity: 1 });
    }
  } else {
    localCartList.push({ ...itemForCart, quantity: 1 });
  }
  return localCartList;
}

export function assignToRestaurantCart(
  restaurantCartList: Item[],
  itemForCart: Item
): Item[] {
  let localCartList: Item[] = restaurantCartList;

  if (localCartList.length != 0) {
    let findIndex = localCartList.findIndex((o) => o.id == itemForCart.id);
    if (findIndex != -1) {
      localCartList.map((item, index) => {
        if (index == findIndex) {
          item.quantity = item.quantity + 1;
        }
      });
    } else {
      localCartList.push({ ...itemForCart, quantity: 1 });
    }
  } else {
    localCartList.push({ ...itemForCart, quantity: 1 });
  }
  return localCartList;
}