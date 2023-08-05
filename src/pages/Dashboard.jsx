// // Dashboard.jsx
// import React, { useState } from "react";
// import mockData from "../assets/data.json";
// import timestamps from "../assets/timeStamps.json";
// import Dropdown from "../component/dropdown/Dropdown";
// import HeaderTitle from "../component/header-title/HeaderTitle";
// import Search from "../component/search/Search";
// import List from "../component/list/List";
// import styles from "./Dashboard.module.css";
// import Card from "../component/card/Card";

// const Dashboard = () => {
//   const [currency, setCurrency] = useState("EUR");
//   const [searchText, setSearchText] = useState("");
//   const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
//   const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});

//   // Dummy conversion rates for "GBP", "JPY", and "EUR" with respect to USD
//   const conversionRates = {
//     GBP: 0.73, // 1 USD = 0.73 GBP
//     JPY: 110.87, // 1 USD = 110.87 JPY
//     EUR: 0.85, // 1 USD = 0.85 EUR
//   };

//   return (
//     <div>
//       <div className={styles.header}>
//         <HeaderTitle primaryTitle="Orders" secondaryTitle="6 orders" />
//         <div className={styles.actionBox}>
//           <Search
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//           <Dropdown
//             options={["GBP", "USD", "JPY", "EUR"]}
//             onChange={(e) => setCurrency(e.target.value)}
//             selectedItem={currency}
//           />
//         </div>
//       </div>
//       <div className={styles.content}>
//         <div className={styles.section}>
//           <Card
//             cardData={selectedOrderDetails}
//             title="Selected Order Details"
//           />
//           <Card
//             cardData={selectedOrderTimeStamps}
//             title="Selected Order Timestamps"
//           />
//         </div>
//         <List
//           rows={mockData.results}
//           selectedCurrency={currency}
//           conversionRates={conversionRates}
//         />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// Dashboard.jsx






// import React, { useState } from "react";
// import mockData from "../assets/data.json";
// import timestamps from "../assets/timeStamps.json";
// import Dropdown from "../component/dropdown/Dropdown";
// import HeaderTitle from "../component/header-title/HeaderTitle";
// import Search from "../component/search/Search";
// import List from "../component/list/List";
// import styles from "./Dashboard.module.css";
// import Card from "../component/card/Card";

// const Dashboard = () => {
//   const [currency, setCurrency] = useState("EUR");
//   const [searchText, setSearchText] = useState("");
//   const [selectedOrderDetails, setSelectedOrderDetails] = useState(null); // Use null to indicate no order selected
//   const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});

//   // Dummy conversion rates for "GBP", "JPY", and "EUR" with respect to USD
//   const conversionRates = {
//     GBP: 0.73, // 1 USD = 0.73 GBP
//     JPY: 110.87, // 1 USD = 110.87 JPY
//     EUR: 0.85, // 1 USD = 0.85 EUR
//   };

//   const handleOrderSelect = (order) => {
//     setSelectedOrderDetails(order); // Update the selected order data in the state
//   };

//   return (
//     <div>
//       <div className={styles.header}>
//         <HeaderTitle primaryTitle="Orders" secondaryTitle="6 orders" />
//         <div className={styles.actionBox}>
//           <Search
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//           <Dropdown
//             options={["GBP", "USD", "JPY", "EUR"]}
//             onChange={(e) => setCurrency(e.target.value)}
//             selectedItem={currency}
//           />
//         </div>
//       </div>
//       <div className={styles.content}>
//         <div className={styles.section}>
//           <Card
//             cardData={selectedOrderDetails}
//             title="Selected Order Details"
//           />
//           <Card
//             cardData={selectedOrderTimeStamps}
//             title="Selected Order Timestamps"
//           />
//         </div>
//         <List
//           rows={mockData.results}
//           selectedCurrency={currency}
//           conversionRates={conversionRates}
//           onOrderSelect={handleOrderSelect} // Pass the handler function to the List component
//         />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useState } from "react";
// import mockData from "../assets/data.json";
// import timestamps from "../assets/timeStamps.json";
// import Dropdown from "../component/dropdown/Dropdown";
// import HeaderTitle from "../component/header-title/HeaderTitle";
// import Search from "../component/search/Search";
// import List from "../component/list/List";
// import styles from "./Dashboard.module.css";
// import Card from "../component/card/Card";

// const Dashboard = () => {
//   const [currency, setCurrency] = useState("EUR");
//   const [searchText, setSearchText] = useState("");
//   const [selectedOrderDetails, setSelectedOrderDetails] = useState("Selected Order Details"); // Use null to indicate no order selected
//   const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});

//   // Dummy conversion rates for "GBP", "JPY", and "EUR" with respect to USD
//   const conversionRates = {
//     GBP: 0.73, // 1 USD = 0.73 GBP
//     JPY: 110.87, // 1 USD = 110.87 JPY
//     EUR: 0.85, // 1 USD = 0.85 EUR
//   };

//   const handleOrderSelect = (order) => {
//     setSelectedOrderDetails({
//       timestamps: {
//         orderReceived: order.timestamps.orderReceived,
//         orderStatusUpdated: order.timestamps.orderStatusUpdated,
//         orderSubmitted: order.timestamps.orderSubmitted,
//       },
//     });
//     setSelectedOrderTimeStamps({
//       timestamps: {
//         orderReceived: order.timestamps.orderReceived,
//         orderStatusUpdated: order.timestamps.orderStatusUpdated,
//         orderSubmitted: order.timestamps.orderSubmitted,
//       },
//     });
//   };

//   return (
//     <div>
//       <div className={styles.header}>
//         <HeaderTitle primaryTitle="Orders" secondaryTitle="6 orders" />
//         <div className={styles.actionBox}>
//           <Search
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//           <Dropdown
//             options={["GBP", "USD", "JPY", "EUR"]}
//             onChange={(e) => setCurrency(e.target.value)}
//             selectedItem={currency}
//           />
//         </div>
//       </div>
//       <div className={styles.content}>
//         <div className={styles.section}>
//           <Card
//             cardData={selectedOrderDetails}
//             title="Selected Order Details"
//           />
          

//           <Card
//             cardData={selectedOrderTimeStamps}
//             title="Selected Order Timestamps"
//           />
//         </div>
//         <List
//           rows={mockData.results}
//           selectedCurrency={currency}
//           conversionRates={conversionRates}
//           onOrderSelect={handleOrderSelect} // Pass the handler function to the List component
//         />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState } from "react";
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState("Selected Order Details");
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});

  // Dummy conversion rates for "GBP", "JPY", and "EUR" with respect to USD
  const conversionRates = {
    GBP: 0.73, // 1 USD = 0.73 GBP
    JPY: 110.87, // 1 USD = 110.87 JPY
    EUR: 0.85, // 1 USD = 0.85 EUR
    USD: 1
  };

  const handleOrderSelect = (order) => {
    setSelectedOrderDetails(order); // Update the selected order data in the state
  };

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle="6 orders" />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={["GBP", "USD","JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.cardContainer}>
            <Card
              cardData={selectedOrderDetails}
              title="Selected Order Details"
            />
            <Card
              cardData={selectedOrderTimeStamps}
              title="Selected Order Timestamps"
            />
          </div>
        </div>
        <List
          rows={mockData.results}
          selectedCurrency={currency}
          conversionRates={conversionRates}
          onOrderSelect={handleOrderSelect}
        />
      </div>
    </div>
  );
};

export default Dashboard;
