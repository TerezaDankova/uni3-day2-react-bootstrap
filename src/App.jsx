
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import MyFooter from './components/MyFooter';
import LatesRelease from './components/LatestRelease';

function App() {
  return (
    <div className="App">
    <MyNav title="BOOK STORE"/>
    <Welcome title="Welcome!" text="You can find here Best Romance Novels of All Time "/>
    <LatesRelease />
    <MyFooter storeName="BOOK STORE" adress="@book-store.com" button="shop here" />
    </div>
  );
}

export default App;
