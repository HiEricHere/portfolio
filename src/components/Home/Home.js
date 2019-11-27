import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <section id="container-home">
      <h1>Hi, Eric Here</h1>
      <h2>
        I’m a software developer looking to explore unique experiences and new
        perspectives abroad.
      </h2>
      <h3 className="emphasis">
        In mid 2019 I made the oddly comfortable decision to change careers.
      </h3>
      <h3>
        I gave my two week notice, bought a ticket to Seattle and signed up to
        learn web development for the next five months at{" "}
        <a href="https://www.codefellows.org">Code Fellows</a>. Abruptly
        uprooting myself from an otherwise steady life and source of income was
        a big decision and I had plenty of doubts going in and not much of a
        safety cushion to fall back on if things did not work out. However,
        these were the least of my worries as the next five months of my life
        became a balancing act of cramming knowledge into my head vs finding
        time to sleep.
      </h3>
      <h3>
        Thankfully, this was one of the better decisions I&apos;ve made in my
        life, and I would make the same decision again with no hesitation. See
        below to get an idea of the languages, frameworks and tools I learned
        during my time at Seattle.
      </h3>
    </section>
  );
};

export default Home;
