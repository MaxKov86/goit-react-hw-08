import css from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filter/filtersSlice';
import { selectNameFilter } from '../../redux/filter/selectors';

const SearchBar = () => {
	const dispatch = useDispatch();
	const filterValue = useSelector(selectNameFilter);

	return (
		<>
			<p>Find contacts by name</p>
			<input
				onChange={e => dispatch(changeFilter(e.target.value))}
				className={css.searchBar}
				type="text"
				value={filterValue}
				placeholder="Search by name"
			/>
		</>
	);
};
export default SearchBar;
