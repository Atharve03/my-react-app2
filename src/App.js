import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RedirectPage from "./RedirectPage";
// import Server from "./Testing";
import QRCode from 'qrcode.react';

function App(){
  // const redirectLink = 'http://192.168.1.160:3000/redirectPage?shop=sdfsdf';
  const redirectLink = 'https://myreactapp2-d8cbd.web.app/redirectPage?shop=sdfsdf';
  return(
    <div>
    <QRCode value={redirectLink} />
     
      <h1>Qr</h1>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/server" element={<Server/>}></Route> */}
        <Route path="/redirectPage" element={<RedirectPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;


