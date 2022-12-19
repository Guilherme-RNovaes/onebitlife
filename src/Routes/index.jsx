import { useState } from "react";

import AllPages from "./AllPages"
import HomePage from "./HomePage";

function Routes() {
  const [showHome, setShowHome] = useState("false")
  return <>{showHome === "true" ? <HomePage /> : <AllPages />}</>;
}

export default Routes