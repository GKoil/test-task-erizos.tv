import { PureComponent } from 'react';
import File from '@components/File';
import { FolderType } from '@myTypes/FolderType';
import { FOLDER_TYPE } from '@constants';

interface FolderProps extends FolderType {
  expandedFolders: string[];
  parentPath: string;
}

interface FolderState {
  collapsed: boolean;
}

class Folder extends PureComponent<FolderProps, FolderState> {
  constructor(props: FolderProps) {
    super(props);
    const fullPath = `${props.parentPath}/${props.name}`;
    const isExpanded = props.expandedFolders.some((folder) =>
      folder.startsWith(fullPath)
    );
    this.state = {
      collapsed: !isExpanded,
    };
  }

  toggleCollapse = () => {
    this.setState((prevState) => ({ collapsed: !prevState.collapsed }));
  };

  render() {
    const { name, children, expandedFolders, parentPath } = this.props;
    const { collapsed } = this.state;
    const fullPath = `${parentPath}/${name}`;

    return (
      <div style={{ paddingLeft: '20px' }}>
        <button
          onClick={this.toggleCollapse}
          style={{ border: 'none', background: 'none' }}
        >
          {collapsed ? '➕' : '➖'} {name}
        </button>
        {!collapsed && children && (
          <div>
            {children.map((child) => {
              if (child.type === FOLDER_TYPE) {
                return (
                  <Folder
                    key={child.name}
                    {...child}
                    parentPath={fullPath}
                    expandedFolders={expandedFolders}
                  />
                );
              }

              return (
                <File key={child.name} name={child.name} mime={child.mime} />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Folder;
