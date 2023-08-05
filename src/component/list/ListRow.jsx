import styles from "./ListRow.module.css";

const ListCell = ({ children }) => {
  return <tr className={styles.cell}>{children}</tr>;
};

export default ListCell;

// import React from "react";
// import styles from "./ListRow.module.css";

// const ListRow = ({ children, onClick }) => {
//   return (
//     <tr className={styles.row} onClick={onClick}>
//       {children}
//     </tr>
//   );
// };

// export default ListRow;
