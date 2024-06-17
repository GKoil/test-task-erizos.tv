import { Component } from 'react';

interface FileProps {
  name: string;
  mime: string;
}

class File extends Component<FileProps> {
  render() {
    const { name, mime } = this.props;

    return (
      <div style={{ paddingLeft: '20px' }}>
        <span>
          {name} ({mime})
        </span>
      </div>
    );
  }
}

export default File;
