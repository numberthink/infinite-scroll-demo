const state = {
    nextTargetElement: 'rectangle2',
    numElements: 2,
}

let intersectionObserver;
const setupIntersectionObserver = () => {
    const options = {
        rootMargin: "0px",
        threshold: 0,
    };

    intersectionObserver = new IntersectionObserver(intersectionCallback, options);

    const target1 = document.querySelector("#rectangle2");

    intersectionObserver.observe(target1);
}


const intersectionCallback = (entries) => {
    entries.forEach((entry)=> {
        if (entry.isIntersecting && entry.target.id==state.nextTargetElement) {
            addNewContent();
            intersectionObserver.unobserve(entry.target);
        }
    });
}

const addNewContent = () => {
    state.numElements +=1;

    const rectangleId = 'rectangle' + String(state.numRectangles);
    const rectangleColor = 'rgb(' + String(Math.round(255*Math.random())) + ',' + String(Math.round(255*Math.random())) + ',' + String(Math.round(255*Math.random())) + ')';

    const newRectangle = document.body.appendChild(document.createElement("div"));
    newRectangle.id = rectangleId;
    newRectangle.style.backgroundColor = rectangleColor;
    newRectangle.style.width = '100%'
    newRectangle.style.height = '100vh';

    intersectionObserver.observe(newRectangle);

    state.nextTargetElement = rectangleId;

}

setupIntersectionObserver();