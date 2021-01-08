import React, { Suspense } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import SectionDark from "views/index-sections/SectionDark.js";

import firebaseConfig from "../firebase-config";
import {FirebaseAppProvider  } from "reactfire";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>

      <Suspense fallback={'Conectando a la app ...'} >
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <SectionCarousel />
        <SectionNucleoIcons />
        <SectionDark />
        <DemoFooter />
      </div>
      </Suspense>
      </FirebaseAppProvider>
    </>
  );
}

export default Index;
