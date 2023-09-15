import React, { useEffect, useState } from 'react'
import * as ReactDOM from 'react-dom/client'
import { Map, Marker, Tooltip } from 'react-canvas-map-pom'
import  { Coords } from 'react-canvas-map-pom'
//import  '../../node_modules/react-canvas-map/dist/'


const SecondProgram = () => {
  const [markerImage] = useState(() => {
    const image = new Image()
    image.src = '../static/marker-blue.svg'
    return image
  })
  // title:string
  // color:string
  // description:string
  // numberDisplay:number
  // fontSize:number
  // fontFamily:string
  // offsetX:number
  // offsetY:number
  const [markers] = useState([
    {
      key: 'marker-1',
      title:'(1)',
      description:'Boiler 001',
      fontSize:100,
      fontFamily:'sans-serif',
      offsetX:80,
      offsetY:80,
      
      coords: {x: 100, y: 200},
    },
    {
      key: 'marker-2',
      title:'(2)',
      description:'Boiler 002',
      fontSize:100,
      fontFamily:'sans-serif',

      offsetX:80,
      offsetY:80,
      coords: {x: 200, y: 800},
    },
    {
      key: 'marker-3',
      title:'(3)',
      description:'Boiler 003',
      fontSize:100,
      fontFamily:'sans-serif',
      offsetX:80,
      offsetY:80,
      coords: {x: 1000, y: 1000},
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
                  title={marker.title}
                  offsetX={marker.offsetX}
                  offsetY={marker.offsetY}
                  description={marker.description}

                  fontSize={marker.fontSize}

                  fontFamily={marker.fontFamily}


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

