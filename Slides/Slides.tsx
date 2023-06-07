import React from "react";
import { Heading, Profile, SlideContainer, SubHeading } from "../components/slideComponents";
import { SandpackCodeViewer, SandpackLayout, SandpackProvider } from "@codesandbox/sandpack-react";
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
        style={{ border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '2px' }} 
        width="100%" 
        height="100%" 
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
      <div style={{ width: '1000px' }}>
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
      </div>
    </SlideContainer>
  )
}



function Slide6() {
  return (
    <SlideContainer>
      <div style={{ width: '1000px' }}>
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
      </div>
    </SlideContainer>
  )
}


function Slide7() {
  return (
    <SlideContainer>
      <div style={{ width: '1000px' }}>
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
      </div>
    </SlideContainer>
  )
}


function Slide8() {
  return (
    <SlideContainer variant="heading">
      <Heading size="medium">✨ Bundlers ✨</Heading>
    </SlideContainer>
  )
}

function Slide9() {
  return (
    <SlideContainer>
      <div style={{ width: '1000px' }}>
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
      </div>
    </SlideContainer>
  )
}


function Slide10() {
  return (
    <SlideContainer>
      <div style={{ width: '1000px', textAlign: 'center' }}>
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
      </div>
    </SlideContainer>
  )
}


function Slide11() {
  return (
    <SlideContainer>
      <div style={{ width: '1000px', textAlign: 'center' }}>
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
      </div>
    </SlideContainer>
  )
}


function Slide12() {
  return (
    <SlideContainer>
      <div style={{ width: '1000px', textAlign: 'center' }}>
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
      </div>
    </SlideContainer>
  )
}




function Slide13() {
  return (
    <SlideContainer>
      <div style={{ width: '1000px', textAlign: 'center' }}>
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
      </div>
    </SlideContainer>
  )
}

// Slide 14: https://res.cloudinary.com/saurabhdaware/image/upload/v1686169527/Untitled-2022-06-16-2029_kuart5.png

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
}
