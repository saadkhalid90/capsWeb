import * as d3 from 'd3';
import {json, csv} from 'd3';
import {feature} from 'topojson';
import {useState, useEffect} from 'react';

const capsAsiaUrl = 'https://gist.githubusercontent.com/saadkhalid90/c4dfdd91da09351bbfe6822d94952f8d/raw/68c0e21dd9dc399b4161b9e16839efb4a890d6de/CapsAsiaDis.json';
// a custom state that makes use of useState and useEffect and returns the value of the state

export function useAsianGeoData(){
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    json(capsAsiaUrl)
      .then(topology => setGeoData(
        getFeatures(
          topology,
          feature,
          "CapsAsiaDis"
        )
      ))
  }, []);

  return geoData;
}

function getFeatures(topojson, feature, objectName){
  return feature(topojson, topojson.objects[objectName]);
}
