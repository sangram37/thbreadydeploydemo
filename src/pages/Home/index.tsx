import React from "react";
import styles from "./styles.module.css";
import { check, logout } from "../../Constans/ImagePath";
import { data } from "../../Constans/Jsonassets";
import { useNavigate } from "react-router-dom";
interface Props {}

const Home: React.FC<Props> = () => {
  const navigate = useNavigate();

  const gotoOrders = () => {
    navigate("orders");
  };
  return (
    <>
      {/* ---HEADER HOME START--- */}
      <div className={styles.headers}>
        <p className={styles.displayname}> John Corner</p>
        <div className={styles.updatebutton}>
          <p>UPDATE</p>
        </div>
        <div className={styles.updatebutton}>
          <p>SHIFT</p>
        </div>
        <div className={styles.stopbutton}>
          <p>STOP</p>
        </div>
        <div>
          <p>
            <img className={styles.logout} src={logout} />
          </p>
        </div>
      </div>
      {/* ---HEADER HOME END--- */}

      {/* ---BODY START--- */}
      <div className={styles.bodyStyle}>
        <div className={styles.boxcontainer}>
          {data.data.map((item: any, index: any) => (
            <div className={styles.box} onClick={gotoOrders} key={index}>
              <p className={styles.companyName}>{item.CLIENT_NAME}</p>
              <div className={styles.innerBox}>
                No of pick list: &nbsp;
                <span style={{ color: "red", fontWeight: "bold" }}>
                  {item.TOTAL_ORDER}
                </span>
              </div>
              <div className={styles.completedview}>
                <img className={styles.checkimage} src={check} />
                <span>
                  Completed:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {item.TOTAL_PICKED}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ---BODY END--- */}
    </>
  );
};

export default Home;
