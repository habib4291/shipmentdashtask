import React from "react";
import Navbar from "./Navbar";
import Timeline from "./Time";
import TableContainer from "./Table";
import Counters from "./Counters";


function  App() {
    return(
    <div>
        <Navbar />
        <Counters/>
        <Timeline />
        <TableContainer />
    </div>
    );
}

export default App
