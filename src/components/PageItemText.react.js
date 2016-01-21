'use strict';

var _ = require('lodash');
var React = require('react');


var PageItemText = React.createClass({
  getDefaultProps: function () {
    return {
      content: ""
    };
  },

  createParagraphs: function() {
    var lines = this.props.content.split('\n');
    lines = _.without(lines, ''); // empty lines
    var paragraphs = lines.map(
      function(line, index) {
        return (<p key={_.uniqueId()}>{line}</p>);
      }, 
      this // bind
    );
    return paragraphs;
  },

  render: function () {
    return (
      <div className="col-sm-6 middle-col col-sm-offset-3">
        {this.createParagraphs()}
      </div>
    );
  } 
});

module.exports = PageItemText;