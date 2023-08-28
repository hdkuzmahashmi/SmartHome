import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });
  let nIntervId;
  useEffect(() => {
    setInterval(getISSCoords, 5000);
  }, []);

  //if (!nIntervId) {
  //nIntervId = setInterval(getISSCoords, 5000);
  //}

  async function getISSCoords() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      setCoords({ latitude: data.latitude, longitude: data.latitude });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
