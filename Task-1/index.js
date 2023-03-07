
// title
let titleRef = React.createElement('h2', null, "Topics covered");
let titleParaRef = React.createElement('p',
    null,
    "The following is a list of all the topics we cover in the MDN learning area."
);
let titleDivRef = React.createElement('div', null, [ titleRef, titleParaRef ]);


// upper container
let upperContainerAnchor = React.createElement('a',
    { href: "#" },
    "Getting started with the web"
);
let upperContainerPara = React.createElement('p', 
    { style: { marginLeft: "14px" } },
    "Provides a practical introduction to web development for complete beginners."
);
let upperContainerRef = React.createElement('div', null, [ upperContainerAnchor, upperContainerPara ]);


// middle container
let middleContainerAnchor = React.createElement('a',
    { href: "#" },
    "HTML -- Structuring the web"
);
let middleContainerPara = React.createElement('p',
    { style: { marginLeft: "14px" } },
    "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail."
);
let middleContainerRef = React.createElement('div', null, [ middleContainerAnchor, middleContainerPara ]);


// bottom container
let bottomContainerAnchor = React.createElement('a',
    { href: "#" },
    "HTML -- Structuring the web"
);
let bottomContainerPara = React.createElement('p',
    { style: { marginLeft: "14px" } },
    "CSS is the language that we use to control our web content's style and layout, as <br/> well as adding behavior like animation. This topic provides comprehensive coverage of CSS."
);
let bottomContainerRef = React.createElement('div', null, [ bottomContainerAnchor, bottomContainerPara ]);


// parent container
let divRef= React.createElement('div',
    null,
    [ titleDivRef, upperContainerRef, middleContainerRef, bottomContainerRef ]
);


// render inside root element

// ReactDOM.render(divRef,document.getElementById('root')); 
// above syntax throw warning (ReactDOM.render is no longer supported in React 18.)

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(divRef);