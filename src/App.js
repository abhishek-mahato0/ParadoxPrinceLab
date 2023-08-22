import BottomContainer from './components/BottomContainer';
import MiddleContainer from './components/MiddleContainer';
import Navabar from './components/Navabar';
import VideoComp from './components/VideoComp';

function App() {
  return (
    <div className="w-screen mb-20">
      {/* this is the navbar of the webpage */}
      <Navabar />
      {/* this is the component containing video */}
      <VideoComp />
      {/* the component has middle section of the web page */}
      <MiddleContainer />
      {/* this section has bottom section of the web page */}
      <BottomContainer />
    </div>
  );
}
export default App;
