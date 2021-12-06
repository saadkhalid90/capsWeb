import * as d3 from 'd3';
import {json, csv} from 'd3';
import {feature} from 'topojson';
import {useState, useEffect} from 'react';

const worldUrl = 'https://gist.githubusercontent.com/larsvers/dab7c2d6ea5ab964d10df0ef1470b90e/raw/320e18d0778fe384c5b4ffa8b3bfc22a93629be6/world-110m-simple.json';
// a custom state that makes use of useState and useEffect and returns the value of the state

export function useGeoData(){
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    json(worldUrl)
      .then(topology => setGeoData(
        getFeatures(
          topology,
          feature,
          "countries"
        )
      ))
  }, []);

  return geoData;
}

function getFeatures(topojson, feature, objectName){
  return feature(topojson, topojson.objects[objectName]);
}
