import React, { useEffect, useState } from 'react'
import * as ReactDOM from 'react-dom/client'
import { Map, Marker, Tooltip } from 'react-canvas-map'
import  { Coords } from 'react-canvas-map'
//import  '../../node_modules/react-canvas-map/dist/'


const SecondProgram = () => {
  const [markerImage] = useState(() => {
    const image = new Image()
    image.src = '../static/marker-blue.svg'
    return image
  })
  const [markers] = useState([
    {
      key: 'marker-1',
      coords: {x: 100, y: 200},
    },
    {
      key: 'marker-2',
      coords: {x: 200, y: 500},
    },
  ])
  const [activeMarker, setActiveMarker] = useState(null)

  useEffect(()=>{console.log(JSON.stringify(activeMarker))},[activeMarker])

  return (
    <>
      <p>Click on a marker to open the tooltip.</p>
      <div style={{height: '50vh', border: '1px solid #ddd', marginTop: '1rem'}}>
        <Map
          image="../static/map.jpg"
          onClick={() => {setActiveMarker(null)}}
        >
          {markers.map((marker) => {
            const active = marker.key === activeMarker
            return (
              <React.Fragment key={marker.key}>
                <Marker
                  markerKey={marker.key}
                  coords={marker.coords}
                  image={markerImage}
                  onClick={() => {
                    setActiveMarker(marker.key)
                  }}
                />
                {active && (
                  <Tooltip coords={{x: 100, y: 200}}>
                    <p>A link looks <a href="google.com">like this</a>.</p>
                    <p>I am marker {JSON.stringify(marker)}</p>
                  </Tooltip>
                )}
              </React.Fragment>
            )
          })}
        </Map>
      </div>
    </>
  )
}

export default SecondProgram

