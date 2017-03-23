import React, { Component } from 'react';

import SectionsWrapper from '../containers/sections-wrapper-container.js';
import SectionItem from '../containers/section-item-container.js'

export default class App extends Component {
  render() {
    return (
      <div id="main-container">
        <SectionsWrapper>
          <SectionItem content_text="1st" background_color="#80CBC4" />
          <SectionItem content_text="2nd" background_color="#FFEB3B" />
          <SectionItem content_text="3rd" background_color="#78909C" />
          <SectionItem content_text="4th" background_color="#D32F2F" />
          <SectionItem content_text="5th" background_color="#7E57C2" />
        </SectionsWrapper>
      </div>
    );
  }
}
