import {useState, useRef, useEffect} from 'react';
import * as d3 from 'd3';
import {useAsianGeoData} from './useAsianGeoData.js';
import {useData} from './useData.js';

const lineGenerator = d3.line()
                        .curve(d3.curveCardinal);

export default function NetworkMap({
  svgWidth,
  svgHeight,
  mapStyles,
  landkey,
  geoPath}
){
  const topoData = useAsianGeoData();
  const networkLocs = useData();
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (networkLocs){
      d3.selectAll('path.connLines')
        .data(networkLocs)
        .each(function(d, i){
          const pathLength = d3.select(this).node().getTotalLength();
          d.totLen = pathLength;
        })

      d3.selectAll('text')
        .data(networkLocs)

      d3.selectAll('path.connLines')
       .attr("stroke-dasharray", d => d.totLen + " " + d.totLen)
       .attr("stroke-dashoffset", d => d.totLen);
    }
  }, [networkLocs])

  useEffect(() => {
    if (trigger){
      d3.selectAll('path.connLines')
        .transition()
        .duration(2500)
        .attr("stroke-dashoffset", 0);

      d3.selectAll('text')
        .transition()
        .duration(2500)
        .attr("fill-opacity", 1);
    }
    else {

      d3.selectAll('path.connLines')
        .interrupt()
        .attr("stroke-dasharray", d => d.totLen + " " + d.totLen)
        .attr("stroke-dashoffset", d => d.totLen);

       d3.selectAll('text')
         .interrupt()
         .attr("fill-opacity", d => (d.Economy == "Hong Kong") ? 1 : 0);
    }
  }, [trigger])



  if (!topoData | !networkLocs) {
    return (
      <div className="vizContain">
        <pre>Loading . . .</pre>
      </div>
    )
  }
  else {
    return (
      <div className="vizContain">
          <div className="buttonDiv">
            <button type="button" onClick={e => setTrigger(!trigger)}>{trigger ? "Stop Trigger" : "Start Trigger"}</button>
          </div>
          <svg width={svgWidth} height={svgHeight}>
            <g className="mapGrp">
              {
                topoData.features.map(feature => (
                  <path style={mapStyles} key={landkey} d={geoPath(feature)}></path>
                ))
              }
            </g>
            <g className="networkGrp">
              {
                networkLocs.map(loc => (
                  <g className="locGrp" key={loc.Economy}>
                    <circle cx ={loc.x} cy={loc.y} r={loc.Economy == "Hong Kong" ? 25 : 10} fill={"#172F58"}/>
                    <text
                      x={loc.x}
                      y={loc.y}
                      dy={loc.Economy == "Hong Kong" ? 37 : 20}
                      fill={"#172F58"}
                      fillOpacity={loc.Economy == "Hong Kong" ? 1 : 0}
                      textAnchor="middle"
                      fontSize={loc.Economy == "Hong Kong" ? '14px' : '11px'}
                    >
                      {loc.Economy}
                    </text>
                    <path className="connLines" d={lineGenerator([[loc.sx, loc.sy], [loc.cx, loc.cy], [loc.x, loc.y]])} strokeWidth={"3px"} stroke={"#172F58"} fill="none" strokeOpacity={0.05} strokeLinecap="round"/>
                  </g>
                ))
              }
            </g>
          </svg>
      </div>
    )
  }
}
