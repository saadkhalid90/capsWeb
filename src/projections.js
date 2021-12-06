// list all the projections and path functions for East and West Pakistan

import * as d3 from 'd3';

// projections
const projection = d3.geoMercator()
                    .center([90, 37])
                    .scale(150 * 3.5);

// geoPath functions computed from projections
const geoPath = d3.geoPath(projection);

export {
  projection,
  geoPath
}
