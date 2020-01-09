import React from 'react';
import ButtonAppBar from '../src/header';
import Container from "@material-ui/core/Container";
import FirstBoard from '../src/FirstBoard';
import SecondBoard from '../src/SecondBoard';
import ThirdBoard from '../src/ThirdBoard';
import ContactSection from '../src/ContactSection';
import FourthBoard from '../src/fourthBoard';
import AboutSection from '../src/AboutusSection';
import FiveBoard from '../src/FiveBoard';
import ContactFormSection from '../src/ContactFormSection';
import FooterSection from '../src/FooterSection';



export default function Index() {
  return (
    <React.Fragment>
      <ButtonAppBar />
      <FirstBoard />
      <SecondBoard />
      <ThirdBoard />
      <ContactSection />
      <FourthBoard />
      <FiveBoard />
      <ContactFormSection />
      <AboutSection />
      <FooterSection />
    </React.Fragment>
  );
}
