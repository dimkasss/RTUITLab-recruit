import { useEffect, useMemo, useState } from "react";
import { getCurrentPos } from "../utils/positionHandler";

const WeatherPage = () => {
  const [pos, setPos] = useState<number[]>();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position =>
        setPos([position.coords.latitude, position.coords.longitude]));
    }
    setPos(getCurrentPos())
  }, [])

  if (pos == undefined) return <div>Position could not be handled</div>

  return (
    <>
      <div>
        {pos[0]}, {pos[1]}
      </div>
    </>
  )
}

export default WeatherPage;