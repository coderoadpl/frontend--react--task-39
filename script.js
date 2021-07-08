class Component {
  constructor(){
    this.container = null
    this.count = 0
  }

  render(){
    if(!this.container) {
      this.container = document.createElement('div')
    }
    this.container.innerHTML = ''

    const h1 = document.createElement('h1')
    h1.innerText = this.count

    this.container.appendChild(h1)

    return this.container
  }

}

const component1 = new Component()

document.body.appendChild(component1.render())