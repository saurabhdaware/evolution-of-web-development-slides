import React from "react";
import { Heading, Profile, SlideContainer, SubHeading, ThankYou, TitleSlotContainer } from "../components/slideComponents";
import { Sandpack, SandpackCodeViewer, SandpackLayout, SandpackProvider } from "@codesandbox/sandpack-react";
import dedent from 'dedent';

function Slide0() {
  return (
    <SlideContainer>
      <Heading>Test</Heading>
    </SlideContainer>
  )
}

function Slide1() {
  return (
    <SlideContainer variant="heading">
      <Heading>Evolution of Web Development</Heading>
      <Profile />
    </SlideContainer>
  )
}

function Slide2() {
  return (
    <SlideContainer variant="heading">
      <Heading>Year 2012</Heading>
    </SlideContainer>
  )
}


function Slide3() {
  return (
    <SlideContainer isFullWidth>
      <iframe 
        src="https://codesandbox.io/p/sandbox/billowing-snowflake-80hjnf?file=%2Findex.php%3A20%2C9&embed=1&view=editor" 
        allowFullScreen
      />
      <a target="_blank" href="https://codesandbox.io/p/sandbox/billowing-snowflake-80hjnf?file=%2Findex.php">Open in Editor</a>
    </SlideContainer>
  )
}


function Slide4() {
  return (
    <SlideContainer>
      <img 
        width="100%"
        src="https://res.cloudinary.com/saurabhdaware/image/upload/v1685987156/Screenshot_2023-06-05_at_11.15.48_PM_lkolvx.png" 
      />
    </SlideContainer>
  )
}


function Slide5() {
  return (
    <SlideContainer>
      <TitleSlotContainer>
        <SandpackProvider >
          <SandpackLayout style={{ backgroundColor: 'white' }}>
            <SandpackCodeViewer 
              code={dedent`
              // index.html
              <html>
                <body>
                  <h1>Hello, World!</h1>
                  <script src="./index.js"></script>
                </body>
              </html>
              `}
            />
          </SandpackLayout>
        </SandpackProvider>
      </TitleSlotContainer>
    </SlideContainer>
  )
}



function Slide6() {
  return (
    <SlideContainer>
      <TitleSlotContainer>
        <SandpackProvider>
          <SandpackLayout style={{ backgroundColor: 'white' }}>
            <SandpackCodeViewer 
            decorators={[
              { className: "highlight", line: 5 },
              { className: "highlight", line: 6 },
            ]}
              code={dedent`
              // index.html
              <html>
                <body>
                  <h1>Hello, World!</h1>
                  <script src="./jquery.js"></script>
                  <script src="./helpers.js"></script>
                  <script src="./index.js"></script>
                </body>
              </html>
              `}
            />
            <SandpackCodeViewer 
              code=""
            />
          </SandpackLayout>
        </SandpackProvider>
      </TitleSlotContainer>
    </SlideContainer>
  )
}


function Slide7() {
  return (
    <SlideContainer>
      <TitleSlotContainer>
        <SandpackProvider>
          <SandpackLayout style={{ backgroundColor: 'white' }}>
            <SandpackCodeViewer 
              decorators={[
                { className: "highlight", line: 5 },
                { className: "highlight", line: 6 },
              ]}
              code={dedent`
              // index.html
              <html>
                <body>
                  <h1>Hello, World!</h1>
                  <script src="./jquery.js"></script>
                  <script src="./helpers.js"></script>
                  <script src="./index.js"></script>
                </body>
              </html>
              `}
            />
            <SandpackCodeViewer 
              code={dedent`
              // index.js
              const headingId = getText($('h1'));
              `}
            />
          </SandpackLayout>
        </SandpackProvider>
      </TitleSlotContainer>
    </SlideContainer>
  )
}


function Slide8() {
  return (
    <SlideContainer>
      <Heading>Year 2012 - 2015</Heading>
      <SubHeading>
        <table>
            <tr><td>2013</td><td>Webpack Release</td></tr>
            <tr><td>2014</td><td>Babel Release</td></tr>
            <tr><td>2015</td><td>ES6 / ES2015 Release</td></tr>
            <tr><td>2015</td><td>Webpack + Babel + React + ES6 Got Popular</td></tr>
        </table>
      </SubHeading>
    </SlideContainer>
  )
}


function Slide9() {
  return (
    <SlideContainer variant="heading">
      <Heading size="medium">✨ Bundlers ✨</Heading>
    </SlideContainer>
  )
}

function Slide10() {
  return (
    <SlideContainer>
      <TitleSlotContainer>
        <SandpackProvider>
          <SandpackLayout style={{ backgroundColor: 'white' }}>
            <SandpackCodeViewer 
              code={dedent`
              // index.html
              <html>
                <body>
                  <h1>Hello, World!</h1>
                  <script src="./index.js"></script>
                </body>
              </html>
              `}
            />
            <SandpackCodeViewer 
               decorators={[
                { className: "highlight", line: 2 },
                { className: "highlight", line: 3 },
              ]}
              code={dedent`
              // index.js
              import { getText } from './helpers.js';
              import $ from 'jquery';

              const headingId = getText($('h1'));
              `}
            />
          </SandpackLayout>
        </SandpackProvider>
      </TitleSlotContainer>
    </SlideContainer>
  )
}


function Slide11() {
  return (
    <SlideContainer>
      <TitleSlotContainer>
        <SubHeading>Webpack + TypeScript</SubHeading><br/>
        <SandpackProvider>
          <SandpackLayout style={{ backgroundColor: 'white' }}>
            <SandpackCodeViewer 
              decorators={[
                { className: "highlight", line: 7 },
                { className: "highlight", line: 8 },
              ]}
              code={dedent`
              // webpack.config.js
              module.exports = {
                entry: './src/index.ts',
                module: {
                  rules: [
                    {
                      test: /\.ts$/,
                      use: 'ts-loader',
                      exclude: /node_modules/,
                    },
                  ],
                },
              }
              `}
            />
            <SandpackCodeViewer 
              code={dedent`
              // index.ts
              import { getText } from './helpers.ts';

              const headingId = getText(document.querySelector('h1'));
              `}
            />
          </SandpackLayout>
        </SandpackProvider>
      </TitleSlotContainer>
    </SlideContainer>
  )
}


function Slide12() {
  return (
    <SlideContainer>
      <TitleSlotContainer>
        <SubHeading>Webpack + Babel</SubHeading><br/>
        <SandpackProvider>
          <SandpackLayout style={{ backgroundColor: 'white' }}>
            <SandpackCodeViewer 
              decorators={[
                { className: "highlight", line: 6 },
                { className: "highlight", line: 7 },
              ]}
              code={dedent`
              // webpack.config.js
              module.exports = {
                module: {
                  rules: [
                    {
                      test: /\.jsx?$/,
                      use: 'babel-loader',
                      exclude: /node_modules/,
                    },
                  ],
                },
              }
              `}
            />
            <SandpackCodeViewer 
              code={dedent`
              // index.jsx
              import Navbar from './Navbar.jsx';

              function App() {
                return <Navbar />;
              }

              export { App };
              `}
            />
          </SandpackLayout>
        </SandpackProvider>
      </TitleSlotContainer>
    </SlideContainer>
  )
}


function Slide13() {
  return (
    <SlideContainer>
      <TitleSlotContainer>
        <SubHeading>Webpack + Vue</SubHeading><br/>
        <SandpackProvider>
          <SandpackLayout style={{ backgroundColor: 'white' }}>
            <SandpackCodeViewer 
              decorators={[
                { className: "highlight", line: 6 },
                { className: "highlight", line: 7 },
              ]}
              code={dedent`
              // webpack.config.js
              module.exports = {
                module: {
                  rules: [
                    {
                      test: /\.vue$/,
                      use: 'vue-loader',
                      exclude: /node_modules/,
                    },
                  ],
                },
              }
              `}
            />
            <SandpackCodeViewer 
              code={dedent`
              import Navbar from './Navbar.vue';

              // vue stuff
              `}
            />
          </SandpackLayout>
        </SandpackProvider>
      </TitleSlotContainer>
    </SlideContainer>
  )
}




function Slide14() {
  return (
    <SlideContainer>
      <TitleSlotContainer>
        <SubHeading>Webpack + New Syntax</SubHeading><br/>
        <SandpackProvider>
          <SandpackLayout style={{ backgroundColor: 'white' }}>
            <SandpackCodeViewer 
              decorators={[
                { className: "highlight", line: 6 },
                { className: "highlight", line: 7 },
              ]}
              code={dedent`
              // webpack.config.js
              module.exports = {
                module: {
                  rules: [
                    {
                      test: /\.saurabh$/,
                      use: 'saurabh-loader',
                      exclude: /node_modules/,
                    },
                  ],
                },
              }
              `}
            />
            <SandpackCodeViewer 
              code={dedent`
              import App from './App.saurabh';

              // New syntax!!

              `}
            />
          </SandpackLayout>
        </SandpackProvider>
      </TitleSlotContainer>
    </SlideContainer>
  )
}

function Slide15() {
  return (
    <SlideContainer>
      <div style={{ padding: '150px' }}>
        <img width="100%" src="https://res.cloudinary.com/saurabhdaware/image/upload/v1686169527/Untitled-2022-06-16-2029_kuart5.png" alt="diagram with webpack at center and other tools connecting to it" />
      </div>
    </SlideContainer>
  )
}

function Slide16() {
  return (
    <SlideContainer>
      <TitleSlotContainer>
        <Sandpack 
          template="react-ts" 
          files={{
          'App.tsx': dedent`
            import React from 'react';

            const fruits = ['Apple', 'Banana', 'Orange', 'Watermelon'];

            const findFruit = (searchTerm: string) => {
              const results = fruits.find((fruit) => 
                fruit.toLowerCase()
                .startsWith(searchTerm.toLowerCase())
              )

              return results ?? 'No Results';
            }
            
            function App() {
              const [currentSearchTerm, setCurrentSearchTerm] = React.useState('');

              const handleInput = (e) => {
                setCurrentSearchTerm(e.target.value);
              }
              
              return (
                <div>
                  <h2>Fruit Search in JavaScript</h2>
                  <input onInput={handleInput} type="search" autoComplete="off" />
                  <button type="submit">Search</button>

                  <div style={{ padding: '20px 0px' }}>
                    <b>Search Term</b>: {currentSearchTerm}<br/>
                    <b>Search Results</b>: {currentSearchTerm ? findFruit(currentSearchTerm) : ''}
                  </div>
                </div>
              )
            }

            export default App;
            
            `
          }} 
          options={{
            showConsoleButton: true,
          }}
        />
      </TitleSlotContainer>
    </SlideContainer>
  )
}

function Slide17() {
  return (
    <SlideContainer>
      <TitleSlotContainer>
        <SubHeading>Problems with CSR</SubHeading><br/>
        <div><img width="100%" src="https://res.cloudinary.com/saurabhdaware/image/upload/v1686249424/Screenshot_2023-06-09_at_12.06.15_AM_l6w31i.png" /></div>
      </TitleSlotContainer>
    </SlideContainer>
  )
}

function Slide18() {
  return (
    <SlideContainer>
      <TitleSlotContainer>
        <SubHeading>SSR</SubHeading><br/>
        <div><img width="100%" src="https://res.cloudinary.com/saurabhdaware/image/upload/v1686249477/Screenshot_2023-06-09_at_12.07.43_AM_ot4fx7.png" /></div>
      </TitleSlotContainer>
    </SlideContainer>
  )
}


function Slide19() {
  return (
    <SlideContainer isFullWidth>
      <iframe src="https://stackblitz.com/edit/github-vke2fz?embed=1&file=src%2Fentry-server.jsx&theme=light" />
    </SlideContainer>
  )
}

function Slide20() {
  return (
    <SlideContainer>
      <SubHeading><a target="_blank" href="https://razorpay.com">razorpay.com</a></SubHeading>
    </SlideContainer>
  )
}

function Slide21() {
  return (
    <SlideContainer>
      <TitleSlotContainer>
        <img width="100%" src="https://res.cloudinary.com/saurabhdaware/image/upload/v1686250752/Screenshot_2023-06-09_at_12.28.59_AM_fpciiu.png" />
      </TitleSlotContainer>
    </SlideContainer>
  )
}


function Slide22() {
  return (
    <SlideContainer>
      <SubHeading><a target="_blank" href="https://stackblitz.com/edit/nextjs-13-app-dir-razorpay-com?file=app%2Fpage.tsx">React Server Components Example</a></SubHeading>
    </SlideContainer>
  )
}

function Slide23() {
  return (
    <SlideContainer variant="heading">
      <ThankYou />
    </SlideContainer>
  )
}

// Slide 14: 

// Slide 15: Server / Client Builds in Webpack

// Slide 16: Problems with Client-Side Code

// Slide 17: Move to SSR

// Slide 18: Problems with Hydration

// Slide 19: Solutions to Hydration

// Slide 20: RSC, Partial Hydration

// How it comes back to bundlers

// Thank You!!


// Open Question: Should I even cover bundlers?? (Likely Not)
// Check Excalidraw



export {
  Slide0,
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15,
  Slide16,
  Slide17,
  Slide18,
  Slide19,
  Slide20,
  Slide21,
  Slide22,
  Slide23,
}
