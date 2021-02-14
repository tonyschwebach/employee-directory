import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';
import EmployeeGrid from './containers/EmployeeDirectory/EmployeeDirectory';

function App() {
  return (
    <div className="App">
    <Banner />
    {/* Search component */}
    <EmployeeGrid />
    </div>
  );
}

export default App;
