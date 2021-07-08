class Component extends BaseComponent {

  beforeUpdate(){
    console.log('Before update', this.count)
  }
  
  afterUpdate(){
    console.log('After update', this.count)
  }

}