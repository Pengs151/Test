import React, {Component} from 'react';

export default class ClassComp extends Component{
constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    //if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    //}
  }

  classSelector(key){
      console.log('helllo');
      localStorage.setItem(key, key);
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>
          Class
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button onClick={this.classSelector('barbarian')}> Barbarian  </button>
                <button onClick={this.classSelector('rogue')}> Rougue  </button>
                <button onClick={this.classSelector('wizard')}> Wizard </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}
