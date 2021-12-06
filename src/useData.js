import * as d3 from 'd3';
import {useState, useEffect} from 'react';
import networkLocs from './networkLocs.csv';
import {projection} from './projections.js'

// a custom state that makes use of useState and useEffect and returns the value of the state
export function useData(){
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.csv(networkLocs, preProc)
      .then(setData)
  }, []);

  function preProc(row){
    const projcoords = projection([+row.Lon, +row.Lat]);
    const cProjcoords = projection([+row.cLon, +row.cLat]);
    const sProjcoords = projection([+row.sLon, +row.sLat]);
    row.x = projcoords[0];
    row.y = projcoords[1];
    row.cx = cProjcoords[0];
    row.cy = cProjcoords[1];
    row.sx = sProjcoords[0];
    row.sy = sProjcoords[1];
    return row;
  }

  return data;
}
