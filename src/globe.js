import {useState, useRef, useEffect} from 'react';
import * as d3 from 'd3';
import {useGeoData} from './useGeoData.js';
import {hexGridCenters} from './hexGridCenters.js'

const hexPointStyle = {
  //fill: '#3399ffff',
  fill: '#FFFFffee',
  stroke: 'none',
  'stroke-width': `2px`,
  'fill-opacity': 0.0
};

const config = {
  speed: 0.00,
  verticalTilt: -30,
  horizontalTilt: 0
}

function randInt(max, min){
  return min + (Math.random() * (max - min));
}

function drawWorld(
  context,
  width,
  height,
  path,
  land
){
  context.clearRect(0, 0, width, height);
  context.save();

  context.beginPath();
  path({type: 'Sphere'});
  context.fillStyle = '#173058bb';
  context.strokeStyle = '#e0e0e050';
  context.fill();
  //context.stroke();

  context.beginPath();
  path(land);
  context.fillStyle = '#173058FF';
  context.fill();

  // context.beginPath();
  // path({type: 'Sphere'});
  // context.fillStyle = '#173058bb';
  // context.fill();
  // //context.stroke();

  context.restore();
}

function appendHexGrid(context, hexVar, styleObj, projection){
  for (let i = 0; i < hexVar.length; i++){
    const datum = hexVar[i];
    const projected = projection([datum.lon, datum.lat])
    context.beginPath();
    context.arc(
      projected[0],
      projected[1],
      randInt(0.7, 1),
      0,
      2 * Math.PI
    );
    context.fillStyle = Math.random() > 0.5 ? styleObj.fill : '#FFCB05';
    //context.fillStyle = styleObj.fill;
    context.fill()
  }
}

export default function Globe({
  width,
  height
}){

  const canvasRef = useRef();
  const countries = useGeoData();
  const translation = [width / 2, height / 2];

  const originalScale = height / 2;
  const scale = originalScale;


  const projection = d3.geoOrthographic()
    .scale(scale)
    .translate(translation)
    .clipAngle(90);

  const path = d3.geoPath()
    .projection(projection)
    .pointRadius(1);

  const r = projection.rotate();
  const rotation = [320, -35, 0];
  console.log(rotation);
  projection.rotate(rotation);


  useEffect(() => {
    const context = d3.select(canvasRef.current)
      .node()
      .getContext('2d');

    path.context(context);

    // d3.timer(function (elapsed) {
    //   projection.rotate([
    //     config.speed * elapsed - 120,
    //     config.verticalTilt,
    //     config.horizontalTilt
    //   ]);
      drawWorld(context, width, height, path, countries);
      appendHexGrid(
        context,
        hexGridCenters,
        hexPointStyle,
        projection
      );
    // });


    // appendHexGrid(
    //   context,
    //   econ18,
    //   hexPointStyle
    // );

  }, [countries]);

  return (
    <div className="canvasContain">
      <canvas ref={canvasRef} width={width} height={height}/>
    </div>
  )
}
