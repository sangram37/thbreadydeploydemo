import React from "react";
import styles from "./styles.module.css";
import { itemData } from "../../Constans/Jsonassets";
interface Props {}

const OrderItems: React.FC<Props> = (props: any) => {
  return (
    <>
      <div className={styles.orders_wrapper}>
        <div className={styles.ordersdetails_action}>
          <div className={styles.orders_details}>
            <h4>Name</h4>
            <p>
              ORDER<strong>#495849</strong>
            </p>
            <p>
              SHIP-VIA<strong>-FO6-786-STD</strong>
            </p>
            <p>CONTAINER ID-</p>
          </div>
          <div className={styles.order_action}>
            <p>05-FEB-2024</p>
            <div className={styles.order_action_button}>
              <button className={`${styles.gray_btn} ${styles.button}`}>
                Complete pickup
              </button>
              <button className={`${styles.yellow_btn} ${styles.button}`}>
                Add container id
              </button>
            </div>
          </div>
        </div>
        <div className={styles.order_table_wrapper}>
          <table>
            <thead>
              <tr>
                <th>Line</th>
                <th>Item No.</th>
                <th>Description</th>
                <th>Qty</th>
                <th>Loc</th>
                <th>On Hand</th>
                <th>Pick Qty</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {itemData.map((item: any, index: any) => (
                <>
                  <tr key={index}>
                    <td>{item.LINE_NO}</td>
                    <td>
                      {item.ITEM_NO}
                      <span className={styles.restock}>Restock</span>
                    </td>
                    <td>{item.ITEM_DESC}</td>
                    <td>{item.QTY_ORDER}</td>
                    <td>
                      {item?.LOCATION.map((val: any, i: any) => (
                        <span
                          key={i}
                          className={styles.Loc}
                          style={{
                            backgroundColor:
                              item.SELECTED_LOCATION == val.LOCATION
                                ? "red"
                                : "",
                            color:
                              item.SELECTED_LOCATION == val.LOCATION
                                ? "white"
                                : "black",
                          }}
                        >
                          {val.LOCATION}
                        </span>
                      ))}
                    </td>
                    {/* <td>11</td> */}
                    <td>
                      {item?.LOCATION.map((val: any, i: any) => (
                        <span key={i} className={styles.Loc}>
                          {val.ON_HAND}
                        </span>
                      ))}
                    </td>
                    <td>
                      <input />
                    </td>
                    <td>
                      <span className={styles.status}>stockout</span>
                      <span className={styles.status}>packed</span>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OrderItems;
