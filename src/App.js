import './App.css';
import Banner from './components/Banner';
import Rows from './components/Rows';
import requests from './request';
import Nav from './components/Nav';
function App() {
  return (
    <div>
      <Nav fetchUrl={requests.fetchNetflixOriginals}/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Rows isPoster={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Rows title="trending in india" fetchUrl={requests.fetchTrending}/>
      <Rows title="top rated"fetchUrl={requests.fetchTopRated}/>
      <Rows title="action movies" fetchUrl={requests.fetchActionMovies}/>
      <Rows title="comedy movies" fetchUrl={requests.fetchComedyMovies}/>
      <Rows title="horror movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Rows title="romantic movies" fetchUrl={requests.fetchRomanceMovies}/>

    
    </div>
  );
}

export default App;
