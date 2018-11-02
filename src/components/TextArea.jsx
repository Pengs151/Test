import React, {Component} from 'react';
import './Jumbotron.css';

export default class TextArea extends Component {
    render() {
        return (
            <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">{this.props.TextLabel}</span>
            </div>
            <textarea class="form-control" aria-label="With textarea"></textarea>
          </div>
        );
    }
}