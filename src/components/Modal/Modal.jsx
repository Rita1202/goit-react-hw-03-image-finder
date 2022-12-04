import '../../styles.css';
import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEsc);
  }

  closeByEsc = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div
        onClick={e => {
          if (e.target === e.currentTarget) {
            this.props.closeModal();
          }
        }}
        className="Overlay"
      >
        <div className="Modal">
          <img width="600" src={this.props.currentImage} alt="" />
        </div>
      </div>
    );
  }
}

// ({ currentImage, closeModal })
