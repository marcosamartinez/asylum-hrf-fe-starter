import { useAppContext } from '../../context/AppContext.jsx';
import { mapTypes } from '../pages/DataVisualizations/getMapView.jsx';

const { ScatterPlot, ChoroplethMap, HeatMap } = mapTypes;

export const GraphButtons = ({ mapView, setMapView }) => {
  const { updateQuery, clearQuery } = useAppContext();

  return (
    <section className='data-buttons flex-c justify-center gap-6'>
      <section className='plot-buttons flex-c gap-1'>
        <button 
          className={`scatter-plot border-2 border-[#60a5fa] text-[#60a5fa] rounded hover:bg-[#60a5fa] hover:text-white transition-colors px-4 py-2 ${mapView === ScatterPlot ? 'bg-[#60a5fa] text-white' : ''}`}
          onClick={() => setMapView(ScatterPlot)}
        >
          Time Series
        </button>
        <button 
          className={`heat-map border-2 border-[#60a5fa] text-[#60a5fa] rounded hover:bg-[#60a5fa] hover:text-white transition-colors px-4 py-2 ${mapView === HeatMap ? 'bg-[#60a5fa] text-white' : ''}`}
          onClick={() => setMapView(HeatMap)}
        >
          USCIS Asylum Offices Heat Map
        </button>
        <button 
          className={`choropleth-map border-2 border-[#60a5fa] text-[#60a5fa] rounded hover:bg-[#60a5fa] hover:text-white transition-colors px-4 py-2 ${mapView === ChoroplethMap ? 'bg-[#60a5fa] text-white' : ''}`}
          onClick={() => setMapView(ChoroplethMap)}
        >
          Citizenship of Asylum Seeker
        </button>
      </section>

      <section className='query-buttons flex-c gap-1'>
        <button 
          className='update-query border-2 border-[#60a5fa] text-[#60a5fa] rounded hover:bg-[#60a5fa] hover:text-white transition-colors px-4 py-2'
          onClick={updateQuery}
        >
          Update Query
        </button>
        <button 
          className='clear-query border-2 border-[#60a5fa] text-[#60a5fa] rounded hover:bg-[#60a5fa] hover:text-white transition-colors px-4 py-2'
          onClick={clearQuery}
        >
          Clear Query
        </button>
      </section>
    </section>
  );
};
