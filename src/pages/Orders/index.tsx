import React from "react";
import styles from "./styles.module.css";
import { curve } from "../../Constans/ImagePath";
import { orders } from "../../Constans/Jsonassets";
import moment from "moment-timezone";
import Colors from "../../Constans/Colors";
import { useNavigate } from "react-router-dom";
import Backheader from '../../Components/Backheader'

interface Props {}

const Orders: React.FC<Props> = () => {
  let navigate = useNavigate();
  const checktime = (item: any) => {
    const now = moment.tz(item.ORDER_DATE_TIME, "US/Eastern");
    //  const currentTime = now.format("HH:mm");
    //  const comparisonTime = "18:00";
    const date = moment.tz("US/Eastern").format("YYYY-MM-DD");
    const time = "18:00:00";
    let holdcode = ["C", "F", "K", "M", "N", "O", "R", "S", "T", "W", "X"];
    if (holdcode.includes(item.ORDER_HOLD_CD)) {
      return Colors.red;
    } else if (now.isAfter(moment.tz(`${date} ${time}`, "US/Eastern"))) {
      return Colors.red;
    } else {
      return item.COMPLETE_PICKUP === "Y"
        ? "#89f589"
        : item.IS_DRAFT_ORDER
        ? Colors.yellow
        : Colors.white;
      // console.log('Current time is less than 6pm',  moment.tz("2023-11-06 10:00:00", 'US/Eastern'))
    }
  };
  const boxClickHandler=()=>{
    navigate ("/orderitems")
  }
  return (
    <>
        <Backheader />
      <div className={styles.container}>
        {/* ---SEARCH START--- */}
        <div className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <input
              placeholder="Search"
              type="text"
              className={styles.searchbar}
            />
          </div>
          <div className={styles.stopbutton}>
            <p style={{ color: "white" }}>Search</p>
          </div>
        </div>
        {/* ---SEARCH END--- */}

        {/* ---BODY START--- */}
        <div className={styles.boxcontainer}>
          {orders.data.map((item: any, index: any) => (
            <div
              className={styles.box}
              style={{ backgroundColor: checktime(item) }}
              key={index}
              onClick={boxClickHandler}
            >
              <div className={styles.boxupper}>
                <p className={styles.orderNmber}>{item.ORDER_NO}</p>
                <img src={curve} style={{ height: 20, width: 20 }} />
              </div>
              <div style={{ marginTop: 10 }} className={styles.boxupper}>
                <p>
                  Total Lines:
                  <span style={{ color: "red", fontWeight: 600 }}>
                    &nbsp;{item.TOTAL_LINES}
                  </span>
                </p>
                <p>
                  Total Pieces:
                  <span style={{ color: "red", fontWeight: 600 }}>
                    &nbsp;{item.TOTAL_PIECES}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* ---BODY END--- */}
      </div>
    </>
  );
};

export default Orders;
