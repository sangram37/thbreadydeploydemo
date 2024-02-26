interface Item {
  id: number;
  quantity: number;
  productId?: number;
  image?: string;
  discount_type?: "percentage" | "flat";
  discount_amount?: number;
  order_amount?: number;
}

export function generateImageLinks(list: Item[]): string[] {
  let imageLinks: string[] = [];
  if (list.length > 0) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].image) {
        imageLinks.push(list[i].image!);
      }
    }
    return imageLinks;
  } else {
    return [];
  }
}

export function createItemForPlaceOrder(
  cartList: Item[]
  // merchant_id: number
): Item[] {
  let cartListLocal: Item[] = [];

  cartList.map((item) => {
    let newObj: Item = {
      id: item.id,
      quantity: item.quantity,
      productId: item.productId,
    };
    cartListLocal.push(newObj);
  });
  return cartListLocal;
}

export function createOrderDetailsForPlaceOrder(
  delivery_address: string,
  total_amount: number,
  order_date: Date,
  user_id: number,
  payment_type: string,
  payment_id: number,
  payment_order_id: number
): any[] {
  let detailsOrder = [
    {
      delivery_address: delivery_address,
      total_amount: total_amount,
      order_date: order_date,
      user_id: user_id,
      payment_type: payment_type,
      payment_id: payment_id,
      payment_order_id: payment_order_id,
    },
  ];

  return detailsOrder;
}

export function getDiscountValue(params: any, item: any): number {
  switch (item.discount_type) {
    case "percentage":
      return parseFloat(
        (((item.discount_amount ?? 0) / 100) * params.order_amount).toFixed(2)
      );

    case "flat":
      return item.discount_amount;
    default:
      return 0;
  }
}

export function getAddedCart(cartList: Item[], item: Item): number {
  let cartListType = cartList;
  let addedItem = 0;
  let findIndex = cartListType.findIndex((o) => o.id == item.id);
  if (findIndex != -1) {
    addedItem = cartListType[findIndex].quantity;
  }
  return addedItem;
}
