console.log("I am running.....")
const mainContainer = document.getElementById("root")
//console.log(mainContainrer)
function render(mainContainer, rootElement) {
    /** 
    const ele = document.createElement(rootElement.type)
    ele.innerHTML = rootElement.children
    ele.setAttribute("href", rootElement.props.href)
    ele.setAttribute("target", rootElement.props.target)
    mainContainer.appendChild(ele)
    */
    const ele = document.createElement(rootElement.type)
    ele.innerHTML = rootElement.children
    for (const prop in rootElement.props) {
        ele.setAttribute(prop, rootElement.props[prop])
    }
    mainContainer.appendChild(ele)
}
const rootElement = {
    type: 'a',
    props : {
        href : "https://www.google.com",
        target: '_blank',
    },
    children : "Click me to go to google",
}
render(mainContainer, rootElement)