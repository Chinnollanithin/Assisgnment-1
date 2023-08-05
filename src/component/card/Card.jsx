
// // Card.jsx
// const Card = ({ cardData }) => {
//   if (!cardData) return null;

//   const {
//     executionDetails,
//     statsDetails,
//     bestExecutionData,
//     transactionDetails,
//     timestamps,
//   } = cardData;

//   return (
//     <div className={styles.container}>
//       {/* ... */}
//       <div className={styles.title}>Timestamps</div>
//       <div className={styles.cell}>
//         <div className={styles.label}>Order Submitted Date:</div>
//         <div className={styles.value}>{timestamps.orderSubmittedDate}</div>
//       </div>
//       {/* ... */}
//     </div>
//   );
// };

// export default Card;
import React from "react";
import styles from "./Card.module.css";
import timespaces from "../../assets/timeStamps.json";

const Card = ({ cardData, title }) => {
  if (!cardData) return null;

  if (title === "Selected Order Details") {
    // const { executionDetails } = cardData;
    return (
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.cell}>
          <div className={styles.value}>Buy/SellIndicator:</div>
          {/* <div className={styles.value}>{executionDetails.buySellIndicator}</div> */}
          <div className={styles.value}>{["BUYl"]}</div>
        </div>
        <div className={styles.cell}>
          <div className={styles.value}>OrderStatus:</div>
          {/* <div className={styles.value}>{executionDetails.orderStatus}</div> */}
          <div className={styles.value}>{"NEWO"}</div>

        </div>
        <div className={styles.cell}>
          <div className={styles.value}>OrderType:</div>
          {/* <div className={styles.value}>{executionDetails.orderType}</div> */}
          <div className={styles.value}>{"Market"}</div>

        </div>
      </div>
    );
  } else if (title === "Selected Order Timestamps") {
    // const { timestamps } = cardData;
    return (
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.cell}>
          <div className={styles.value}>OrderReceived:</div>
          {/* <div className={styles.value}>{timestamps.orderReceived}</div> */}
          <div className={styles.value}>{"2022-11-04T15:29:00Z"}</div>

        </div>
        <div className={styles.cell}>
          <div className={styles.value}>OrderStatusUpdated:</div>
          {/* <div className={styles.value}>{timestamps.orderStatusUpdated}</div> */}
          <div className={styles.value}>{"2022-11-04T15:29:00Z"}</div>

        </div>
        <div className={styles.cell}>
          <div className={styles.value}>OrderSubmitted:</div>
          {/* <div className={styles.value}>{timestamps.orderSubmitted}</div> */}
          <div className={styles.value}>{"2022-11-04T15:29:00Z"}</div>

        </div>
      </div>
    );
  } else {
    return null; // If the title doesn't match any of the cards, don't show anything
  }
};

export default Card;

