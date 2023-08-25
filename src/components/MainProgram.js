import { useState } from "react";
import { Map, Marker } from "react-canvas-map";

function MainPrograme() {
  const [markerOneImage] = useState(() => {
    const image = new Image();
    image.src = "./static/marker-blue.svg";
    return image;
  });
  const [markerTwoImage] = useState(() => {
    const image = new Image();
    image.src = "./static/marker-red.svg";
    return image;
  });
  const [markerOneCoords, setMarkerOneCoords] = useState({ x: 100, y: 200 });
  const [markerTwoCoords, setMarkerTwoCoords] = useState({ x: 150, y: 20 });
  return (
    <div
      style={{ height: "50vh", border: "1px solid #ddd", marginTop: "1rem" }}
    >
      <Map image="./static/map.jpg">
        <Marker
          markerKey="marker-one"
          coords={markerOneCoords}
          onDragTick={setMarkerOneCoords}
          onDragEnd={setMarkerOneCoords}
          image={markerOneImage}
          onClick={() => {
            alert("You clicked marker one!");
          }}
        />
        <Marker
          markerKey="marker-two"
          coords={markerTwoCoords}
          onDragTick={setMarkerTwoCoords}
          onDragEnd={setMarkerTwoCoords}
          image={markerTwoImage}
          onClick={() => {
            alert("You clicked marker two!");
          }}
        />
      </Map>
    </div>
  );
}

export default MainPrograme;
