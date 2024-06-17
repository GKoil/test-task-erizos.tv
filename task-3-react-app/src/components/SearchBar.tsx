import { PureComponent, ChangeEvent } from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (searchTerm: string) => void;
}

class SearchBar extends PureComponent<SearchBarProps> {
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.onSearchChange(event.target.value);
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Search files"
        value={this.props.searchTerm}
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
