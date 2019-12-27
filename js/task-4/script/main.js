const generatePage = (elem, parent = document.querySelector('html')) => {
  let elementToCreate;
  elem.hasOwnProperty('type') ? elementToCreate = document.createElement(elem.type) : 0;
  elem.hasOwnProperty('link') ? elementToCreate.href = elem.link : 0;
  elem.hasOwnProperty('text') ? elementToCreate = document.createTextNode(elem.text) : 0;
  
  parent.appendChild(elementToCreate)
  
	if (elem.content.length > 0) {
    for (innerElement of elem.content) { //goes thru all the inner elements
      generatePage(innerElement, elementToCreate);
    }
  }
}

document.querySelector('html').removeChild(document.body);

generatePage(pageData);