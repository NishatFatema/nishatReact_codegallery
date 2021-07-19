import React from "react";
import "../component/Section.css"
export const Section=()=>  {
    return (
      <div className="App">
        <h1><b><u>Learning React with Core Languages :</u></b></h1>
        <section>
            <article>
            <h2><b>HTML</b></h2>
                 <ul>
                  <li>easy to learn</li>
                  <li> use tags</li>
                  <li>use to design web pages</li>
                  </ul>
            </article>
        
        
            <article>
            <h2><b>CSS</b></h2>
                 <ol itemType="number">
                  <li>easy to learn</li>
                  <li> use for styling</li>
                  <li>use to style web pages</li>
                  </ol>
            </article>
        
    
        
            <article>
              <h2><b>Java Script</b></h2>
                 <ul>
                  <li Type="square">use to perform dynamic action</li>
                  <li Type="square"> better user experience </li>
                  <li Type="square">use to design responsive web pages</li>
                  </ul>
            </article>
        </section>
    </div>
    );
  }