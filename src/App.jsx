import { BrowserRouter, Route, Routes, Navigate } from "react-router"
import LoginSignup from "./pages/LoginSignup"
import Body from "./pages/Body"
import SetupOrganization from "./pages/SetupOrganization"
import ChatBot from "./pages/ChatBot"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./assets/firebase"
import ScrapedData from "./pages/ScrapedData"
import Content from "./pages/Content"
import IntegrationTesting from "./pages/IntegrationTesting"
import IntegrateOnWebsite from "./pages/IntegrateOnWebsite"
import TestChatbot from "./pages/TestChatbot"
import TestIntegration from "./pages/TestIntegration"


function App() {
 
  const [user,setUser] = useState();
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setUser(user);
    })
  });
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {user ? <Navigate to="/body/company" /> : <LoginSignup />}/>
      <Route path = "/body" element = {<Body />}>
          <Route path = "/body/company" element = {<SetupOrganization />} />
          <Route path = "/body/content" element = {<Content />} />
          <Route path = "/body/scraping" element = {<ScrapedData />} />
          <Route path = "/body/integrated" element = {<IntegrationTesting/>} />
          <Route path = "/body/integrateonwebsite" element = {<IntegrateOnWebsite/>} />
          <Route path = "/body/testchatbot" element = {<TestChatbot/>} />
          <Route path = "/body/testintgration" element = {<TestIntegration/>} />
        </Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
