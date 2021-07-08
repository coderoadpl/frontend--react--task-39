class BaseComponent {
  constructor(){
    this.container = null
    this.count = 0

    setInterval(
      () => {
        this.beforeUpdate && this.beforeUpdate()
        this.count = this.count + 1
        this.render()
        this.afterUpdate && this.afterUpdate()
      },
      1000
    )
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
