import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import React from 'react';
import Welcome from './Welcome';
import View from './View';
import Website from './Website';
import Topwear from './Topwear';
import Bottomwear from './Bottomwear';
import Checkout from './Finalcheck/Checkout';
import Frontpage from './Frontpage';
import Contact from './Contact';
import SignUp from './SignUp';
import Signin from './Signin';

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Welcome" element={<Welcome/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/View" element={<View/>}/>
        <Route path="/Website" element={<Website/>}/>
        <Route path="/Topwear" element={<Topwear/>}/>
        <Route path="/Bottomwear" element={<Bottomwear/>}/>
        <Route path="/Checkout" element={<Checkout/>}/>
        <Route path="/Frontpage" element={<Frontpage/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Signin" element={<Signin/>}/>

        
        </Routes>
        </BrowserRouter>
    );
}
export default App;