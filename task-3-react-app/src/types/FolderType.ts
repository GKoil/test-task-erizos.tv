import { FileType } from './FileType';
import { FOLDER_TYPE } from '@constants';

export interface FolderType {
  name: string;
  children: Array<FileType | FolderType>;
  type: typeof FOLDER_TYPE;
}
