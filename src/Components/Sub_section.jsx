import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
function SubSection() {
    return (
        <>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
        </>
    );
}

export default SubSection;
