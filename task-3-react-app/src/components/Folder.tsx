import {Component} from "react";
import File from "@components/File";
import {FolderType} from "@types/FolderType";
import {FOLDER_TYPE} from "@constants";

interface FolderProps extends FolderType {
  expandedByDefault?: boolean;
}

interface FolderState {
  isCollapsed: boolean;
}

class Folder extends Component<FolderProps, FolderState> {
  constructor(props: FolderProps) {
    super(props);
    this.state = {
      isCollapsed: !props.expandedByDefault,
    };
  }

  toggleCollapse = () => {
    this.setState((prevState) => ({ isCollapsed: !prevState.isCollapsed }));
  };

  render() {
    const { name, children } = this.props;
    const { isCollapsed } = this.state;
    return (
      <div style={{ paddingLeft: '20px' }}>
        <div onClick={this.toggleCollapse} style={{ cursor: 'pointer' }}>
          {isCollapsed ? '➕' : '➖'} {name}
        </div>
        {!isCollapsed && children && (
          <div>
            {children.map((child, index) => {
              if (child.type === FOLDER_TYPE) {
                return <Folder key={index} {...child} />;
              }
              return <File key={index} {...child} />;
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Folder;
