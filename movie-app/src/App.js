import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AppNavbar from "./components/AppNavbar";
import SearchPage from "./components/SearchPage";

const App = () => {

    return(
        <>
            <AppNavbar/>
            <SearchPage/>
        </>

    );
};

export default App;
