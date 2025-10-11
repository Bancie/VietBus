import React from 'react';

class HelloWorld extends React.Component {
  render() {
    let items = [];
    for (let i = 0; i < 10; i++) {
      let row = [];
      for (let j = 0; j < 1; j++) {
        row.push(<td key={j}>Bus Smart 1.0</td>);
      }
      items.push(<tr key={i}>{row}</tr>);
    }

    return (
      <div>
        <table border="1">
          <tbody>{items}</tbody>
        </table>
      </div>
    );
  }
}

export default HelloWorld;