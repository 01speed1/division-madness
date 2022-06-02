import "./styles.css";

import { useState } from "react";
import DivisionData from "./DivisionData";
import Division from "./Division";

export default function App() {
  const [divider, setDivider] = useState("1");
  const [dividend, setDividend] = useState("0");
  const [isHideDivisionData, setIsHideDivisionData] = useState(false);

  const buildDivsion = (event) => {
    const isValid = [divider, dividend].map(Boolean);

    if (!isValid) {
      alert("Completa los campos");
    }

    setIsHideDivisionData(isValid);
  };

  const divisionDataParameters = {
    divider: { divider, setDivider },
    dividend: { dividend, setDividend },
    buildDivsion
  };

  const divisionParameters = { divider, dividend };

  return (
    <div className="App">
      <h1></h1>
      {!isHideDivisionData && <DivisionData {...divisionDataParameters} />}

      {isHideDivisionData && <Division {...divisionParameters} />}
    </div>
  );
}
