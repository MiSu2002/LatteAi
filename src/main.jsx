import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { FundingInterestPage } from './funding-form.jsx';
import { ContributorFormPage } from './contributor-form.jsx';
import { ConsumerContactPage } from './consumer-contact-form.jsx';
import { ScheduleDemoPage } from './demo.jsx';

createRoot(document.getElementById('root')).render(
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/funding-interest-form" element={<FundingInterestPage/>}/>
        <Route path="/contributor-interest-form" element={<ContributorFormPage/>}/>
        <Route path="/consumer-contact-form" element={<ConsumerContactPage/>}/>
        <Route path="/schedule-demo-form" element={<ScheduleDemoPage/>}/>
      </Routes>
    </Router>
)
