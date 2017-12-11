import React from 'react';
import classNames from 'classnames';
import './TreeNode.css'

class TreeNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  toggle = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    var children;
    var classObj;

    if (this.props.node.children != null) {
      children = this.props.node.children.map(function (node, index) {
        return <li key={index}><TreeNode node={node} /></li>
      });

      classObj = {
        togglable: true,
        "togglable-down": this.state.visible,
        "togglable-up": !this.state.visible
      };
    }

    var style;
    if (!this.state.visible) {
      style = { display: "none" };
    }

    return (
      <div>
        <h5 onClick={this.toggle} className={classNames(classObj)}>
          {this.props.node.name}
        </h5>
        <ul style={style}>
          {children}
        </ul>
      </div>
    );
  }
}

export default TreeNode;
