// List.jsx
// import React from "react";
// import ListRow from "./ListRow";
// import ListRowCell from "./ListRowCell";
// import ListHeader from "./ListHeader";
// import ListHeaderCell from "./ListHeaderCell";
// import styles from "./List.module.css";

// const List = ({ rows, selectedCurrency, conversionRates }) => {
//   const convertCurrency = (amount, fromCurrency, toCurrency) => {
//     if (fromCurrency === "USD") {
//       return amount * conversionRates[toCurrency];
//     }
//     if (toCurrency === "USD") {
//       return amount / conversionRates[fromCurrency];
//     }
//     return (amount / conversionRates[fromCurrency]) * conversionRates[toCurrency];
//   };

//   return (
//     <table className={styles.container}>
//       <thead>
//         <ListHeader>
//           <ListHeaderCell>Order ID</ListHeaderCell>
//           <ListHeaderCell>Buy/Sell</ListHeaderCell>
//           <ListHeaderCell>Country</ListHeaderCell>
//           <ListHeaderCell>Order Submitted</ListHeaderCell>
//           <ListHeaderCell>Order Volume / {selectedCurrency}</ListHeaderCell>
//         </ListHeader>
//       </thead>
//       <tbody>
//         {rows.map((row) => {
//           // Check if the timestamps object exists and has the orderSubmitted property
//           const orderSubmittedDate = row.timestamps?.orderSubmitted;

//           return (
//             <ListRow key={row["&id"]}>
//               <ListRowCell>{row["&id"]}</ListRowCell>
//               <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
//               <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
//               <ListRowCell>{orderSubmittedDate || "N/A"}</ListRowCell> {/* Display "N/A" if the date is missing */}
//               <ListRowCell>
//                 {convertCurrency(
//                   row.bestExecutionData.orderVolume.USD,
//                   "USD",
//                   selectedCurrency
//                 ).toFixed(2)}
//               </ListRowCell>
//             </ListRow>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };

// export default List;


// List.jsx
// import React, { useState } from "react";
// import ListRow from "./ListRow";
// import ListRowCell from "./ListRowCell";
// import ListHeader from "./ListHeader";
// import ListHeaderCell from "./ListHeaderCell";
// import styles from "./List.module.css";

// const List = ({ rows, selectedCurrency, conversionRates, onOrderSelect }) => {
//   const convertCurrency = (amount, fromCurrency, toCurrency) => {
//     if (fromCurrency === "USD") {
//       return amount * conversionRates[toCurrency];
//     }
//     if (toCurrency === "USD") {
//       return amount / conversionRates[fromCurrency];
//     }
//     return (amount / conversionRates[fromCurrency]) * conversionRates[toCurrency];
//   };

//   return (
//     <table className={styles.container}>
//       <thead>
//         <ListHeader>
//           <ListHeaderCell>Order ID</ListHeaderCell>
//           <ListHeaderCell>Buy/Sell</ListHeaderCell>
//           <ListHeaderCell>Country</ListHeaderCell>
//           <ListHeaderCell>Order Submitted</ListHeaderCell>
//           <ListHeaderCell>Order Volume / {selectedCurrency}</ListHeaderCell>
//         </ListHeader>
//       </thead>
//       <tbody>
//         {rows.map((row) => {
//           const orderSubmittedDate = row.timestamps?.orderSubmitted;

//           return (
//             <ListRow
//               key={row["&id"]}
//               onClick={() => onOrderSelect(row)} // Pass the selected order data to the parent component
//             >
//               <ListRowCell>{row["&id"]}</ListRowCell>
//               <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
//               <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
//               <ListRowCell>{orderSubmittedDate || "N/A"}</ListRowCell>
//               <ListRowCell>
//                 {convertCurrency(
//                   row.bestExecutionData.orderVolume.USD,
//                   "USD",
//                   selectedCurrency
//                 ).toFixed(2)}
//               </ListRowCell>
//             </ListRow>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };

// export default List;

// import React, { useState } from "react";
// import ListRow from "./ListRow";
// import ListRowCell from "./ListRowCell";
// import ListHeader from "./ListHeader";
// import ListHeaderCell from "./ListHeaderCell";
// import styles from "./List.module.css";

// const List = ({ rows, selectedCurrency, conversionRates, onOrderSelect }) => {
//   const convertCurrency = (amount, fromCurrency, toCurrency) => {
//     // ... your existing conversion logic ...
//     if (fromCurrency === "USD") {
//             return amount * conversionRates[toCurrency];
//           }
//           if (toCurrency === "USD") {
//             return amount / conversionRates[fromCurrency];
//           }
//           return (amount / conversionRates[fromCurrency]) * conversionRates[toCurrency];
//           // return Number(convertedAmount.toFixed(2));
//   };

//   return (
//     <table className={styles.container}>
//       <thead>
//         <ListHeader>
//           <ListHeaderCell>Order ID</ListHeaderCell>
//           <ListHeaderCell>Buy/Sell</ListHeaderCell>
//           <ListHeaderCell>Country</ListHeaderCell>
//           <ListHeaderCell>Order Submitted</ListHeaderCell>
//           <ListHeaderCell>Order Volume / {selectedCurrency}</ListHeaderCell>
//         </ListHeader>
//       </thead>
//       <tbody>
//         {rows.map((row) => {
//           // Check if the timestamps object exists and has the orderSubmitted property
//           const orderSubmittedDate = row.timestamps?.orderSubmitted;

//           return (
//             <ListRow
//               key={row["&id"]}
//               onClick={() => onOrderSelect(row)}
//             >
//               <ListRowCell>{row["&id"]}</ListRowCell>
//               <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
//               <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
//               <ListRowCell>{orderSubmittedDate || "N/A"}</ListRowCell> {/* Display "N/A" if the date is missing */}
//               <ListRowCell>
//                 {convertCurrency(
//                   row.bestExecutionData.orderVolume.USD,
//                   "USD",
//                   selectedCurrency
//                 ).toFixed(2)}
//               </ListRowCell>
//             </ListRow>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };

// export default List;

import React from "react";
import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";
import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";
import styles from "./List.module.css";

const List = ({ rows, selectedCurrency, conversionRates, onOrderSelect }) => {
  const convertCurrency = (amount, fromCurrency, toCurrency) => {
    if (fromCurrency === "USD") {
      return amount * conversionRates[toCurrency];
    }
    if (toCurrency === "USD") {
      return amount / conversionRates[fromCurrency];
    }
    return (amount / conversionRates[fromCurrency]) * conversionRates[toCurrency];
  };

  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {selectedCurrency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row) => {
          const orderSubmittedDate = row.timestamps?.orderSubmitted;
          return (
            <ListRow key={row["&id"]} onClick={() => onOrderSelect(row)}>
              <ListRowCell>{row["&id"]}</ListRowCell>
              <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
              <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
              <ListRowCell>{orderSubmittedDate || "N/A"}</ListRowCell>
              <ListRowCell>
                {convertCurrency(
                  row.bestExecutionData.orderVolume.USD,
                  "USD",
                  selectedCurrency
                ).toFixed(2)}
              </ListRowCell>
            </ListRow>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;



