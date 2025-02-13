import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Components/HomePage";
import ContactUs from "./Components/ContactUs";



const App=()=>{
  const display=(
    <>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
       </Routes>
       {/* <Tawk/> */}
       </BrowserRouter>
    </>
  )
  return display;
}
export default App