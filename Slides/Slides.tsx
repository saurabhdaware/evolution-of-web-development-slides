import React from "react";
import { Heading, Profile, SlideContainer, SubHeading } from "../components/slideComponents";
import { SandpackCodeViewer, SandpackLayout, SandpackProvider } from "@codesandbox/sandpack-react";
import dedent from 'dedent';

function Slide0() {
  return (
    <SlideContainer variant="heading" slideNum={0}>
      <ul>
        <li>How Webpack can call server build and client build</li>
        <li>SSR - Rendering and Hydration</li>
        <li>Problems with Hydration</li>
        <li>Next thing in Web Development - Solving hydration problems</li>
      </ul>
    </SlideContainer>
  )
}

function Slide1() {
  return (
    <SlideContainer variant="heading" slideNum={1}>
      <Heading>Evolution of Web Development</Heading>
      <Profile />
    </SlideContainer>
  )
}

function Slide2() {
  return (
    <SlideContainer slideNum={2}>
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

function Slide3() {
  return (
    <SlideContainer slideNum={3}>
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


function Slide4() {
  return (
    <SlideContainer slideNum={4}>
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


function Slide5() {
  return (
    <SlideContainer slideNum={5} variant="heading">
      <Heading size="medium">Unmaintainable 😭</Heading>
    </SlideContainer>
  )
}


function Slide6() {
  return (
    <SlideContainer slideNum={6} variant="heading">
      <Heading size="medium">✨ Bundlers ✨</Heading>
    </SlideContainer>
  )
}

function Slide7() {
  return (
    <SlideContainer slideNum={7}>
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

function Slide8() {
  return (
    <SlideContainer slideNum={8}>
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


function Slide9() {
  return (
    <SlideContainer slideNum={9}>
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


function Slide10() {
  return (
    <SlideContainer slideNum={10}>
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




function Slide11() {
  return (
    <SlideContainer slideNum={11}>
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
}
