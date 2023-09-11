import Controls from "../Controls/index";
import Map from "../Map/index";
import useSwr from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ISSTracker() {
  const { data, error, isLoading, mutate } = useSwr(URL, fetcher, {
    refreshInterval: 5000,
  });

  const coords = data
    ? { longitude: data.longitude, latitude: data.latitude }
    : { longitude: 0, latitude: 0 };

  const { longitude, latitude } = coords;

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;
  return (
    <main>
      <Map longitude={longitude} latitude={latitude} />
      <Controls
        longitude={longitude}
        latitude={latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
