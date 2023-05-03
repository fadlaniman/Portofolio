import * as React from "react";
import "./App.css";
import Navbar from "./navbar";
import Description from "./description";
import Icons from "./Fragments/icons";
import Picture from "./Fragments/picture";
import Section from "./section";
import Content from "./Fragments/content";

function App() {
  return (
    <>
      <div>
        <nav>
          <Navbar/>
        </nav>
        <main>
          <section>
            <Section>
              <Description />
              <Icons />
              <Picture />
            </Section>
          </section>
          <section>
            <Section>
              <Content/>
            </Section>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
