import './App.css';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import NewsLetterContent from './Components/NewsLetterContent';
import NewsLetterHeader from './Components/NewsLetterHeader';
import SlidingGallery from './Components/SlidingGallery';


function App() {
  return (
    <div>
         <Gallery/>
         <SlidingGallery/>
         <NewsLetterHeader/>
         <NewsLetterContent/>
         <Footer/>
    </div>
  );
}

export default App;
