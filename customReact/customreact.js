function customRender(reactElement, mainContainer){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    mainContainer.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)