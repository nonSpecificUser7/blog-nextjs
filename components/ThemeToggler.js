import Toggle from 'react-toggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ThemeToggler = ({ onChange }) =>
    <label>
        <Toggle
            className='day-night-toggle'
            //defaultChecked={this.state.soupIsReady}
            icons={{
                checked: <FontAwesomeIcon inverse icon='sun' />,
                unchecked: <FontAwesomeIcon inverse icon='moon' />,
            }}
            onChange={onChange} />
    </label>
export default ThemeToggler
