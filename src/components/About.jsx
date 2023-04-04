import React from "react";
// import { useState } from "react";

export default function About(props) {
  // const [myStyle, setmyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white"
  // });

  // const [btntext, setbtntext] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === "white") {
  //     setmyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setbtntext("Enable Dark Mode");
  //   } else {
  //     setmyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border : "1px solid white"
  //     });
      
  //     setbtntext("Enable Light Mode");
  //   }
  // };

  // {
  //     color : 'red',
  //     backgroundColor : 'blue'
  // }


  let myStyle = {
    color: props.mode ==='dark'?'white':'#042743',
    backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
}
  return (
    // <div className="container" style={myStyle}>
    //   <h1 className="my-3">About Us</h1>
    //   <div className="accordion" id="accordionExample" style={myStyle}>
    //     <div className="card">
    //       <div className="card-header" id="headingOne">
    //         <h2 className="mb-0">
    //           <button
    //             style={myStyle}
    //             className="btn btn-link"
    //             type="button"
    //             data-toggle="collapse"
    //             data-target="#collapseOne"
    //             aria-expanded="true"
    //             aria-controls="collapseOne"
    //           >
    //             Collapsible Group Item #1
    //           </button>
    //         </h2>
    //       </div>

    //       <div
    //         id="collapseOne"
    //         className="collapse show"
    //         aria-labelledby="headingOne"
    //         data-parent="#accordionExample"
    //       >
    //         <div className="card-body" style={myStyle}>
    //           Anim pariatur cliche reprehenderit, enim eiusmod high life
    //           accusamus terry richardson ad squid. 3 wolf moon officia aute, non
    //           cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
    //           laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
    //           on it squid single-origin coffee nulla assumenda shoreditch et.
    //           Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
    //           nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
    //           lomo. Leggings occaecat craft beer farm-to-table, raw denim
    //           aesthetic synth nesciunt you probably haven't heard of them
    //           accusamus labore sustainable VHS.
    //         </div>
    //       </div>
    //     </div>
    //     <div className="card">
    //       <div className="card-header" id="headingTwo">
    //         <h2 className="mb-0">
    //           <button
    //             style={myStyle}
    //             className="btn btn-link collapsed"
    //             type="button"
    //             data-toggle="collapse"
    //             data-target="#collapseTwo"
    //             aria-expanded="false"
    //             aria-controls="collapseTwo"
    //           >
    //             Collapsible Group Item #2
    //           </button>
    //         </h2>
    //       </div>
    //       <div
    //         id="collapseTwo"
    //         className="collapse"
    //         aria-labelledby="headingTwo"
    //         data-parent="#accordionExample"
    //       >
    //         <div className="card-body" style={myStyle}>
    //           Anim pariatur cliche reprehenderit, enim eiusmod high life
    //           accusamus terry richardson ad squid. 3 wolf moon officia aute, non
    //           cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
    //           laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
    //           on it squid single-origin coffee nulla assumenda shoreditch et.
    //           Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
    //           nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
    //           lomo. Leggings occaecat craft beer farm-to-table, raw denim
    //           aesthetic synth nesciunt you probably haven't heard of them
    //           accusamus labore sustainable VHS.
    //         </div>
    //       </div>
    //     </div>
    //     <div className="card">
    //       <div className="card-header" id="headingThree">
    //         <h2 className="mb-0">
    //           <button
    //             style={myStyle}
    //             className="btn btn-link collapsed"
    //             type="button"
    //             data-toggle="collapse"
    //             data-target="#collapseThree"
    //             aria-expanded="false"
    //             aria-controls="collapseThree"
    //           >
    //             Collapsible Group Item #3
    //           </button>
    //         </h2>
    //       </div>
    //       <div
    //         id="collapseThree"
    //         className="collapse"
    //         aria-labelledby="headingThree"
    //         data-parent="#accordionExample"
    //       >
    //         <div className="card-body" style={myStyle}>
    //           Anim pariatur cliche reprehenderit, enim eiusmod high life
    //           accusamus terry richardson ad squid. 3 wolf moon officia aute, non
    //           cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
    //           laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
    //           on it squid single-origin coffee nulla assumenda shoreditch et.
    //           Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
    //           nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
    //           lomo. Leggings occaecat craft beer farm-to-table, raw denim
    //           aesthetic synth nesciunt you probably haven't heard of them
    //           accusamus labore sustainable VHS.
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="container my-3">
    //     {/* <button className="btn btn-danger my-3" onClick={toggleStyle}>
    //       {btntext}
    //     </button> */}
    //   </div>
    // </div>
    <div className="container">
            <h1 className="my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your text </strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 

                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use </strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible </strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.

                    </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3"> */}
      {/* <button className="btn btn-danger my-3" onClick={toggleStyle}>
    //       {btntext}
    //     </button> */}
    {/* //   </div> */}
        </div>
  );
}
