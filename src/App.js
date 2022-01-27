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
import Contact from './Pages/Contact/Contact';
import Signin from './Pages/Signin/Signin';
import Register from './Pages/Register/Register';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Service from './Pages/Service/Service';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/register" element={<Register />} />
            
            {/* <Route path="/blogs" element={<PrivateRoute><Blogs></Blogs></PrivateRoute>} /> */}
            {/* <Route path="jobDetails/:productId" element={<PrivateRoute> <JobDetails/> </PrivateRoute>}/> */}
            
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
