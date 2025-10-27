import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import {decodeBase64} from '../../../utils/decodeBase64.js';

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    window.location.href = 'https://www.humanrightsfirst.org/';
  };

  return (
    <div className='flex-c w-[100vw] secondary-c'>
      {/* Hero Section */}
      <div className='flex-c items-center py-12 px-6'>
        <h1 className='text-5xl font-bold text-[#4a4a4a] mb-4 text-center'>
          Asylum Office Grant Rate Tracker
        </h1>
        <p className='text-lg text-[#4a4a4a] text-center max-w-4xl'>
          The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public an interactive tool to explore USCIS data on Asylum Office decisions.
        </p>
      </div>

      {/* Graphs Section */}
      <div className='flex-c items-center py-8 px-6'>
        <div className='flex flex-wrap justify-center gap-8 mb-8 max-w-7xl'>
          <div className='flex-c items-center'>
            <img src={barGraph} alt='Grant Rates By Office' className='w-64 h-48 object-contain mb-4' />
            <h3 className='text-[#4a4a4a] font-semibold text-center'>Search Grant Rates By Office</h3>
          </div>
          <div className='flex-c items-center'>
            <img src={pieChart} alt='Grant Rates By Nationality' className='w-64 h-48 object-contain mb-4' />
            <h3 className='text-[#4a4a4a] font-semibold text-center'>Search Grant Rates By Nationality</h3>
          </div>
          <div className='flex-c items-center'>
            <img src={lineGraph} alt='Grant Rates Over Time' className='w-64 h-48 object-contain mb-4' />
            <h3 className='text-[#4a4a4a] font-semibold text-center'>Search Grant Rates Over Time</h3>
          </div>
        </div>

        {/* Buttons */}
        <div className='flex gap-4 mt-8'>
          <button 
            onClick={() => navigate('/graphs')}
            className='px-6 py-3 border-2 border-[#666555] text-[#666555] rounded hover:bg-[#666555] hover:text-white transition-colors'
          >
            View the Data
          </button>
          <button 
            onClick={downloadCSV}
            className='px-6 py-3 border-2 border-[#666555] text-[#666555] rounded hover:bg-[#666555] hover:text-white transition-colors'
          >
            Download the Data
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className='flex flex-wrap items-center justify-center gap-8 py-12 px-6 max-w-7xl mx-auto'>
        <div className='flex-shrink-0'>
          <img src={paperStack} alt='Paper files' className='w-80 h-96 object-cover' />
        </div>
        <div className='flex-1 max-w-2xl'>
          <p className='text-[#4a4a4a] text-lg leading-relaxed'>
            Human Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum decisions between FY 2016 and May 2021 by the USCIS Asylum Office, which we received through a Freedom of Information Act request. You can search for information on asylum grant rates by year, nationality, and asylum office, visualize the data with charts and heat maps, and download the data set.
          </p>
        </div>
      </div>

      {/* Systemic Disparity Insights Section */}
      <div className='flex-c items-center py-12 px-6 bg-white'>
        <h2 className='text-4xl font-bold text-[#4a4a4a] mb-12 text-center'>
          Systemic Disparity Insights
        </h2>
        <div className='flex flex-wrap justify-center gap-8 max-w-6xl mb-8'>
          <div className='flex-c items-center max-w-xs text-center'>
            <div className='text-6xl font-bold text-[#4a4a4a] mb-4'>36%</div>
            <p className='text-[#4a4a4a] text-base leading-relaxed'>
              By the end of the Trump administration, the average asylum office grant rate had fallen 36% from an average of 44 percent in fiscal year 2016 to 28 percent in fiscal year 2020.
            </p>
          </div>
          <div className='flex-c items-center max-w-xs text-center'>
            <div className='text-6xl font-bold text-[#4a4a4a] mb-4'>5%</div>
            <p className='text-[#4a4a4a] text-base leading-relaxed'>
              The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.
            </p>
          </div>
          <div className='flex-c items-center max-w-xs text-center'>
            <div className='text-6xl font-bold text-[#4a4a4a] mb-4'>6x Lower</div>
            <p className='text-[#4a4a4a] text-base leading-relaxed'>
              Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was 6 times lower than the San Francisco asylum office.
            </p>
          </div>
        </div>

        <div className='flex-c items-center gap-4'>
          <button 
            onClick={handleReadMore}
            className='px-8 py-3 bg-[#666555] text-white rounded hover:bg-[#555444] transition-colors'
          >
            Read More
          </button>
          <button 
            onClick={scrollToTop}
            className='text-[#666555] hover:text-[#555444] transition-colors'
          >
            Back To Top ^
          </button>
        </div>
      </div>
    </div>
  );
};
