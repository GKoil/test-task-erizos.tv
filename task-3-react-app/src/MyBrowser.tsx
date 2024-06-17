import { Component } from 'react';
import FILE_STRUCTURE from '@mock/FILE_STRUCTURE.json';
import { FileSystemEntry } from '@myTypes/FileSystemEntry';
import SearchBar from '@components/SearchBar';
import FileList from '@components/FileList';
import { FOLDER_TYPE } from '@constants';

interface MyBrowserProps {
  expandedFolders: string[];
}

interface MyBrowserState {
  data: Array<FileSystemEntry>;
  searchTerm: string;
  isLoaded: boolean;
  error: Error | null;
}

class MyBrowser extends Component<MyBrowserProps, MyBrowserState> {
  constructor(props: MyBrowserProps) {
    super(props);
    this.state = {
      data: [],
      searchTerm: '',
      isLoaded: false,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      // Simulate loading FILE_STRUCTURE
      const LOAD_TIMEOUT = 1000;
      await new Promise((resolve) => setTimeout(resolve, LOAD_TIMEOUT));
      this.setState({
        data: FILE_STRUCTURE as Array<FileSystemEntry>,
        isLoaded: true,
      });
    } catch (error) {
      this.setState({
        error: error instanceof Error ? error : new Error('Unknown error'),
        isLoaded: false,
      });
    }
  }

  handleSearchChange = (searchTerm: string) => {
    this.setState({ searchTerm });
  };

  filterData = (
    data: Array<FileSystemEntry>,
    searchTerm: string
  ): Array<FileSystemEntry> => {
    if (!searchTerm) return data;

    return data.reduce<Array<FileSystemEntry>>((filtered, item) => {
      if (item.type === FOLDER_TYPE) {
        const children = this.filterData(item.children, searchTerm);
        children.length > 0 && filtered.push({ ...item, children });
      } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        filtered.push(item);
      }
      return filtered;
    }, []);
  };

  render() {
    const { data, searchTerm, isLoaded, error } = this.state;
    const filteredData = this.filterData(data, searchTerm);

    return (
      <div>
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={this.handleSearchChange}
        />
        {!isLoaded && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {isLoaded && (
          <FileList
            data={filteredData}
            expandedFolders={this.props.expandedFolders}
          />
        )}
      </div>
    );
  }
}

export default MyBrowser;
