const paragraphList = document.getElementsByTagName('p');
Array.from(paragraphList).forEach((element) => {
    element.style.color = `rgb(${Math.random() * 256},${Math.random() * 256},${
        Math.random() * 256
    })`;
});
