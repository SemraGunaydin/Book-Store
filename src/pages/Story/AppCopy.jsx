import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componenets/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import Footer from "./componenets/footer";
import Story from "./pages/Story";
import Novel from "./pages/Novel";
import Products from "./pages/Products";


// BrowserRouter ile routing yapma
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/product" element={<Products/>}/>
        < Route path="/category" element={<Category/>} >
        <Route path="story" element = {<Story/>}/>
        <Route path="novel" element = {<Novel/>}/>
        <Route/>
        </Route>
        <Route path="/detail/:id" element = {<Detail/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
