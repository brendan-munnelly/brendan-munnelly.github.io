const fs = require('fs');
const path = require('path');

// New content for manifest.json
const newManifestJsonContent = `{
    "short_name": "React App",
    "name": "Create React App Sample",
    "start_url": ".",
    "display": "standalone",
    "theme_color": "#000000",
    "background_color": "#ffffff"
}`;


// New content for index.html
const newIndexHtmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Minimal React App</title>
    <meta name="description" content="Minimal website created using create-react-app" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
</head>

<body>

    <div id="root"></div>

</body>
</html>`;

// New content for index.js
const newIndexJsContent = `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);`;

// New content for App.js with extra line break before the final line
const newAppJsContent = `function App() {
    return (
        <div style={{ 
            paddingTop: '20px',
            backgroundColor: 'lightgreen',
            textAlign: 'center', 
            height: '100vh',
        }}>
            <h1 style={{ letterSpacing: '-1px', fontFamily: 'sans-serif', fontWeight: '100', fontSize: '56px', marginBottom: '14px'}} ><i>F&aacute;ilte from Ireland</i></h1>
            <img src="https://munnelly.com/irish-software-developer.jpg" style={{ 
                maxWidth: '640px',
                textAlign: 'center',
                marginBottom: '12px', 
            }}/>
            <h2 style={{ fontFamily: 'monospace', letterSpacing: '4px', fontFamily: 'sans-serif'}}>C:\\ The software capital of the world _</h2>
        </div>
    );
}   

export default App;`;


// New content for App.css with extra line break before the final line
const newAppCSSContent = `/*  ============= WEB BROWSER RESETS ============ */
* { margin: 0; padding: 0; border: none }
*, *::before, *::after { box-sizing: border-box }
html { height: 100%; font-size: 100%; font: inherit; vertical-align: baseline;
scroll-behavior: smooth; scroll-padding-top: 20px }
body { line-height: 1.5; min-height: 100vh }
img { width: 100%; height: auto }
@media (max-width: 767px ) { body { text-rendering: optimizeSpeed } }
@media (min-width: 768px ) { body { text-rendering: optimizeLegibility } }

/* ============ CUSTOM PROPERTIES ============  */

:root {
    /* Alternatives to default sans-serif font */
    --font-sans: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell, Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Emoji, Segoe UI Symbol, Lucida Grande, Helvetica, Arial, sans-serif;

     /* Alternatives to default serif font */
    --font-serif: Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif;

     /* Alternatives to default monospace font */
    --font-monospace: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

    --global-font: var(--font-sans);

    /* Color variables */
    --black-000: #000000;
    --white-000: #ffffff;
    --trans-000: transparent;

    --slate-050: #ECEFF1;
    --slate-100: #CFD8DC;
    --slate-200: #B0BEC5;
    --slate-300: #90A4AE;
    --slate-400: #78909C;
    --slate-500: #607D8B;
    --slate-600: #546E7A;
    --slate-700: #455A64;
    --slate-800: #37474F;
    --slate-900: #263238;

    --gray-050: #F9FAFB;
    --gray-100: #f7fafc;
    --gray-200: #edf2f7;
    --gray-300: #e2e8f0;
    --gray-400: #cbd5e0;
    --gray-500: #a0aec0;
    --gray-600: #718096;
    --gray-700: #4a5568;
    --gray-800: #2d3748;
    --gray-900: #1a202c;

    --red-050: #FEF2F2;
    --red-100: #fff5f5;
    --red-200: #fed7d7;
    --red-300: #feb2b2;
    --red-400: #fc8181;
    --red-500: #f56565;
    --red-600: #e53e3e;
    --red-700: #c53030;
    --red-800: #9b2c2c;
    --red-900: #742a2a;

    --orange-050: #FFF7ED;
    --orange-100: #fffaf0;
    --orange-200: #feebc8;
    --orange-300: #fbd38d;
    --orange-400: #f6ad55;
    --orange-500: #ed8936;
    --orange-600: #dd6b20;
    --orange-700: #c05621;
    --orange-800: #9c4221;
    --orange-900: #7b341e;

    --amber-050: #FFFBEB;
    --amber-100: #FEF3C7;
    --amber-200: #FDE68A;
    --amber-300: #FCD34D;
    --amber-400: #FBBF24;
    --amber-500: #F59E0B;
    --amber-600: #D97706;
    --amber-700: #B45309;
    --amber-800: #92400E;
    --amber-900: #78350F;

    --yellow-050: #FEFCE8;
    --yellow-100: #fffff0;
    --yellow-200: #fefcbf;
    --yellow-300: #faf089;
    --yellow-400: #f6e05e;
    --yellow-500: #ecc94b;
    --yellow-600: #d69e2e;
    --yellow-700: #b7791f;
    --yellow-800: #975a16;
    --yellow-900: #744210;

    --lime-050: #F7FEE7;
    --lime-100: #ECFCCB;
    --lime-200: #D9F99D;
    --lime-300: #BEF264;
    --lime-400: #A3E635;
    --lime-500: #84CC16;
    --lime-600: #65A30D;
    --lime-700: #4D7C0F;
    --lime-800: #3F6212;
    --lime-900: #365314;

    --green-050: #F0FDF4;
    --green-100: #f0fff4;
    --green-200: #c6f6d5;
    --green-300: #9ae6b4;
    --green-400: #14f195;
    --green-500: #48bb78;
    --green-600: #38a169;
    --green-700: #2f855a;
    --green-800: #276749;
    --green-900: #22543d;

    --teal-050: #F0FDFA;
    --teal-100: #CCFBF1;
    --teal-200: #99F6E4;
    --teal-300: #5EEAD4;
    --teal-400: #2DD4BF;
    --teal-500: #14B8A6;
    --teal-600: #0D9488;
    --teal-700: #0F766E;
    --teal-800: #115E59;
    --teal-900: #134E4A;

    --cyan-050: #ECFEFF;
    --cyan-100: #CFFAFE;
    --cyan-200: #A5F3FC;
    --cyan-300: #67E8F9;
    --cyan-400: #22D3EE;
    --cyan-500: #06B6D4;
    --cyan-600: #0891B2;
    --cyan-700: #0E7490;
    --cyan-800: #155E75;
    --cyan-900: #164E63;

    --sky-050: #F0F9FF;
    --sky-100: #E0F2FE;
    --sky-200: #BAE6FD;
    --sky-300: #7DD3FC;
    --sky-400: #38BDF8;
    --sky-500: #0EA5E9;
    --sky-600: #0284C7;
    --sky-700: #0369A1;
    --sky-800: #075985;
    --sky-900: #0C4A6E;

    --blue-050: #EFF6FF;
    --blue-100: #DBEAFE;
    --blue-200: #BFDBFE;
    --blue-300: #93C5FD;
    --blue-400: #60A5FA;
    --blue-500: #3B82F6;
    --blue-600: #2563EB;
    --blue-700: #1D4ED8;
    --blue-800: #1E40AF;
    --blue-900: #1E3A8A;

    --indigo-050: #EEF2FF;
    --indigo-100: #E0E7FF;
    --indigo-200: #C7D2FE;
    --indigo-300: #A5B4FC;
    --indigo-400: #818CF8;
    --indigo-500: #6366F1;
    --indigo-600: #4F46E5;
    --indigo-700: #4338CA;
    --indigo-800: #3730A3;
    --indigo-900: #312E81;

    --purple-050: #FAF5FF;
    --purple-100: #F3E8FF;
    --purple-200: #E9D5FF;
    --purple-300: #D8B4FE;
    --purple-400: #C084FC;
    --purple-500: #A855F7;
    --purple-600: #9333EA;
    --purple-700: #7E22CE;
    --purple-800: #6B21A8;
    --purple-900: #581C87;

    --fuchsia-050: #FDF4FF;
    --fuchsia-100: #FAE8FF;
    --fuchsia-200: #F5D0FE;
    --fuchsia-300: #F0ABFC;
    --fuchsia-400: #E879F9;
    --fuchsia-500: #D946EF;
    --fuchsia-600: #C026D3;
    --fuchsia-700: #A21CAF;
    --fuchsia-800: #86198F;
    --fuchsia-900: #701A75;

    --pink-050: #FDF2F8;
    --pink-100: #FCE7F3;
    --pink-200: #FBCFE8;
    --pink-300: #F9A8D4;
    --pink-400: #F472B6;
    --pink-500: #EC4899;
    --pink-600: #DB2777;
    --pink-700: #BE185D;
    --pink-800: #9D174D;
    --pink-900: #831843;

    --rose-050: #FFF1F2;
    --rose-100: #FFE4E6;
    --rose-200: #FECDD3;
    --rose-300: #FDA4AF;
    --rose-400: #FB7185;
    --rose-500: #F43F5E;
    --rose-600: #E11D48;
    --rose-700: #BE123C;
    --rose-800: #9F1239;
    --rose-900: #881337;

    --brown-050: #EFEBE9;
    --brown-100: #D7CCC8;
    --brown-200: #BCAAA4;
    --brown-300: #A1887F;
    --brown-400: #8D6E63;
    --brown-500: #795548;
    --brown-600: #6D4C41;
    --brown-700: #5D4037;
    --brown-800: #4E342E;
    --brown-900: #3E2723;

    --trend-050: #fff4d9;
    --trend-100: #fdd0bb;
    --trend-200: #fea8b3;
    --trend-300: #d4eee6;
    --trend-400: #bde5fe;
    --trend-500: #0000fe;
    --trend-600: #400c3e;
    --trend-700: #2c4763;
    --trend-800: #1f364d;
    --trend-900: #0e2439;

    --overlay-opacity: 0.3;
    --overlay-color: rgba(255, 0, 0, var(--overlay-opacity));
    --overlay-trans: transparent;

    /* Fluid font scale */
	--font-size-sm: clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem);
	--font-size-base: clamp(1rem, 0.34vw + 0.91rem, 1.29rem);
	--font-size-md: clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem);
	--font-size-lg: clamp(1.56rem, 1vw + 1.31rem, 2.11rem);
	--font-size-xl: clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem);
	--font-size-xxl: clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem);
	--font-size-xxxl: clamp(3.05rem, 3.54vw + 2.17rem, 5rem);
}

/* Global font */
body { font-family: var(--global-font) }

/* Content containers */
nav, header, section, figure, footer { position: relative; display: block }
header, section, footer { margin-left: auto; margin-right: auto; overflow: hidden }
/* Under last content item, zero the bottom margin */
section > *:last-child { margin-bottom: 0 !important }


/*  ====================== SECTIONS ======================== */

/* Padding around content: desktops / laptops */
@media (min-width: 1201px) { section { padding: 80px 4% } }
@media (min-width: 1025px) and (max-width: 1200px) { section { padding: 60px 4% } }
/* Padding around content: tablets */
@media (min-width: 768px) and (max-width: 1024px) { section { padding: 50px 6% } }
/* Padding around content: mobiles */
@media (max-width: 767px) { section { padding: 42px 9% 42px 9% } }

/* Maximum width of any section */
section { max-width: 1920px }
/* Maximum width for contents of any section */
section > * { max-width: 1600px }

/* When content width < viewport width, equalise spacing at left and right */
section > * { max-width: 1600px; margin-left: auto; margin-right: auto }`;


// Function to write content to a file
const writeToFile = (filePath, content) => {
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            console.error(`Error writing to ${filePath}:`, err);
            return;
        }
        console.log(`${filePath} has been updated successfully.`);
    });
};


function deleteFiles() {
    // Files to delete in /public
    const publicFilesToDelete = [
        'favicon.ico',
        'logo192.png',
        'logo512.png'
    ];

    // Files to delete in /src
    const srcFilesToDelete = [
        'logo.svg',
        'reportWebVitals.js',
        'setupTests.js',
        'App.test.js'
    ];

    // Delete files in /public
    publicFilesToDelete.forEach(file => {
        const filePath = path.join(__dirname, 'public', file);
        deleteFile(filePath);
    });

    // Delete files in /src
    srcFilesToDelete.forEach(file => {
        const filePath = path.join(__dirname, 'src', file);
        deleteFile(filePath);
    });
}

function deleteFile(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(`Error deleting ${filePath}:`, err);
            return;
        }
        console.log(`${filePath} has been deleted successfully.`);
    });
}

// Deleting files
deleteFiles();







// File paths
const indexPath = path.join(__dirname, 'public', 'index.html');
const indexJsPath = path.join(__dirname, 'src', 'index.js');
const appJsPath = path.join(__dirname, 'src', 'App.js');
const appCSSPath = path.join(__dirname, 'src', 'App.css');
const appManifestPath = path.join(__dirname, 'public', 'manifest.json');

// Writing new content to files
writeToFile(indexPath, newIndexHtmlContent);
writeToFile(indexJsPath, newIndexJsContent);
writeToFile(appJsPath, newAppJsContent);
writeToFile(appCSSPath, newAppCSSContent);
writeToFile(appManifestPath, newManifestJsonContent);
