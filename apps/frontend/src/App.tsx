import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


import AccountSettingsPage from "./pages/account/settings/index.tsx";
import AccountIdPage from "./pages/account/[accountId]/index.tsx";
import ChatIdPage from "./pages/chat/[chatid]/index.tsx";
import AccountPage from "./pages/account/index.tsx";
import NotFoundPage from "./pages/not-found.tsx";
import AboutPage from "./pages/about/index.tsx";
import HomePage from "./pages/home/index.tsx";
import ChatPage from "./pages/chat/index.tsx";
import MainPage from "./index.tsx";

import Navbar from "./components/navbar.tsx";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <AnimatePresence>
          <Routes>
            <Route path='*' element={<NotFoundPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="chat" element={<ChatPage />}>
              <Route path=":chatId" element={<ChatIdPage />} />
            </Route>
            <Route path="dashboard" element={<ChatPage />} />
            <Route path="account" element={<AccountPage />}>
              <Route path="settings" element={<AccountSettingsPage />} />
              <Route path=":accountId" element={<AccountIdPage />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  )
}

export default App
