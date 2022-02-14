import "./styles.css";

import data from "./data";
import MyComp from "./MyComp";

// import businessesData from "./data2";
// import BusinessClasification from "./BusinessClasification";

export default function App() {
  return (
    <div className="App">
      <MyComp data={data} />
      <hr />
      {/* <BusinessClasification data={businessesData} /> */}
    </div>
  );
}
