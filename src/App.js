import "./App.css";
import About from "./About/about";
import Contact from "./Contact/contact";
import First from "./First/first";
import Second from "./First/second";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Page/homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>

    // <>
    //   <div class="max-w-sm rounded-lg overflow-hidden shadow-lg">
    //     <img class="w-full" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Green double couch with wooden legs" />

    //     <div class="p-6">
    //       <h2 class="text-xl font-medium mb-2">Living room Sofa</h2>
    //       <p class="text-sm text-gray-700 mb-2">
    //         This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.
    //       </p>
    //       <p class="text-blue-700 text-2xl">$450</p>
    //       <hr className='my-2 mb-3 border-b border-black'/>
    //       <div class="space-x-2">
    //         <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" type="button">Buy now</button>
    //         <button class="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:text-white hover:bg-blue-500 focus:outline-none focus:text-white focus:bg-blue-500" type="button">Add to cart</button>
    //       </div>
    //     </div>
    //   </div>

    // </>
  );
}

export default App;
