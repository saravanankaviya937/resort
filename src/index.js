
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cottages from "./pages/Cottages";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/Nopages";
import Acitivity from "./pages/Acitivity"
import Giftvoucher from './pages/Giftvoucher';
import Ourstory from './pages/Ourstory';
import BookNow from './pages/BookNow';
export default function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/Home" element={<Home />} />
           {/* <Route index element={<Home />} /> */}
           <Route path="/Cottages" element={<Cottages />} />
           <Route path="/Blogs" element={<Blogs />} />
           <Route path="/Contact" element={<Contact />} />
           <Route path="*" element={<NoPage />} />
           <Route path="/Acitivity" element={<Acitivity />} />
           <Route path="/Giftvoucher" element={<Giftvoucher />} />
           <Route path="/Ourstory" element={<Ourstory />} />
           <Route path="/BookNow" element={<BookNow />} />
        </Route>
       </Routes>
    </BrowserRouter>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)
