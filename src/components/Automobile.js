import React from 'react';
import ImageAbout from "./ImageAbout";

export const Automobile = () => {
  return (
    <section>
      <div style={{backgroundColor: "#e2e8f0", padding:'1rem', margin:'1rem 0' , borderRadius:'5%'}}>
        <div>
          <div >
            <div>
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light" style={{textAlign:"center",margin:"2rem 0"}}>
                Automobile
              </h2>
              <h3 className="title is-size-5 has-text-weight-bold is-bold-light">
                Thinking of buying a used car? This is what is probably going
                through your mind right now:
              </h3>
              <ImageAbout />

              <br />
              <h3 className="title is-size-5 has-text-weight-bold is-bold-light">
                Maybe you're considering selling your used car and have these
                concerns:
              </h3>
              <ul>
                <li>✅ “How do I get a genuine buyer for my car?”</li>
                <li>
                  ✅ “How do I know that the car I buy will be well-maintained?”
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
