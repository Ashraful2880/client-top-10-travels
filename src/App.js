import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            
            {/* <Route path="/blogs" element={<PrivateRoute><Blogs></Blogs></PrivateRoute>} /> */}
            {/* <Route path="jobDetails/:productId" element={<PrivateRoute> <JobDetails/> </PrivateRoute>}/> */}
            
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
