import logo from './logo.svg';
import './App.css';
import NetworkMap from './networkMap.js';
import {projection, geoPath} from './projections.js'

const mapStyles = {
  fill: 'lightgrey',
  fillOpacity: '1',
  stroke: 'darkgrey',
  strokeWidth: '1px',
  strokeOpacity: '0.0'
};

function App() {
  return (
    <div className="App">
      <NetworkMap
        svgWidth={1200}
        svgHeight={800}
        mapStyles={mapStyles}
        landkey={"capsAsiaMap"}
        geoPath={geoPath}
      />
    </div>
  );
}

export default App;
