import { PureComponent } from 'react';
import File from '@components/File';
import Folder from '@components/Folder';
import { FileSystemEntry } from '@myTypes/FileSystemEntry';
import { FOLDER_TYPE } from '@constants';

interface FileListProps {
  data: Array<FileSystemEntry>;
  expandedFolders: string[];
}

class FileList extends PureComponent<FileListProps> {
  render() {
    const { data, expandedFolders } = this.props;

    return (
      <div>
        {data.map((item) => {
          if (item.type === FOLDER_TYPE) {
            return (
              <Folder
                key={item.name}
                {...item}
                parentPath=""
                expandedFolders={expandedFolders}
              />
            );
          }
          return <File key={item.name} name={item.name} mime={item.mime} />;
        })}
      </div>
    );
  }
}

export default FileList;
