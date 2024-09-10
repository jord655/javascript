 // document.title ="DOM";
    // document.body.innerHTML="hello this is javascript";
    // document.write('hello');


//    const btnElement = document.getElementById("js-btn");
//     console.log(btnElement);

//    const downloadBtn = document.querySelector('.js-download-btn')
//    console.log(downloadBtn) 

//    downloadBtn.style.backgroundColor = 'red';
//    downloadBtn.style.paddding ="15px";
//    downloadBtn.style.borderRadius="10px"
  
//    const paragraph= document.querySelector('.js-paragraph')
//    console.log(paragraph)

//    paragraph.style.backgroundColor="blue"
//    paragraph.style.padding="20px"
//    paragraph.style.alignContent = 'center'
//    paragraph.style.textalign= "center"
//    paragraph.style.border=" 8px solid green"
let outputDiv = document.getElementById('output');
let pElement= document.createElement('p')
let textContent= "while we sleep , ceaser's army laid waist";

 pElement.append(textContent);
outputDiv.append(pElement);
console.log(outputDiv);
    