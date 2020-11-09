import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const VIEW_LIST_ICONS = ['list', 'border-all']

const FilteringMenu = ({ onChange, filter }) => {
    return (
        <div className='filtering-menu mb-2'>
            <FontAwesomeIcon
                className='clickable hoverable'
                size='2x'
                icon={VIEW_LIST_ICONS[filter.view.list]}
                onClick={() => {
                    onChange('view', { list: +!filter.view.list });
                }} />
        </div>
    )
}

export default FilteringMenu
