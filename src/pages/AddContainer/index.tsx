import React, { useState } from "react";
import styles from "./styles.module.css";
import Backheader from "../../Components/Backheader";
import { bin } from "../../Constans/ImagePath";
interface Props {}

const AddContainer: React.FC<Props> = () => {
  const [arr, setArr] = useState<any>([{ val: "" }]);

  const addinputs = () => {
    setArr([...arr, { val: "" }]);
  };

  const deleteVal = (index: any) => {
    const updatedArray = [...arr];
    updatedArray.splice(index, 1);
    setArr(updatedArray);
  };
  const handleInputChange = (index: any, newValue: any) => {
    const updatedArray = [...arr];
    updatedArray[index].val = newValue;
    setArr(updatedArray);
  };

  return (
    <>
      <Backheader />
      <div className={styles.inputContainer}>
        <button onClick={addinputs}>Add Container +</button>
        <div>
          <span>CONTAINER ID</span>
        </div>
        {arr.map((item: any, index: any) => {
          return (
            <div className={styles.containeridbox}>
              <input
                placeholder="Search"
                type="text"
                className={styles.searchbar}
                value={item.val}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
              <img
                onClick={() => deleteVal(index)}
                src={bin}
                style={{ height: 30, width: 30 }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AddContainer;
