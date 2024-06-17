import { FILE_TYPE } from '@constants';

export interface FileType {
  name: string;
  mime: string;
  type: typeof FILE_TYPE;
}
