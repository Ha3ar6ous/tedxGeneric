import React from 'react';
import Navbar from '../component/Navbar';
import UpcomingSpeakers from './UpcomingSpeakers';
import Footer from '../component/Footer';


const App = () => {
    return (
        <div>
            <Navbar />
            <UpcomingSpeakers />
            <Footer />
        </div>
    );
};

export default App;
