import React from 'react';
import { Button } from 'reactstrap';

import Style from './Header.style.scss';
import { FILTER_SEARCH_BUTTON } from '../../utils/constants';

const Header = ({ children, onSearchCallback }) => (
    <div className={Style.header}>
        { children }
        <Button
            color="primary"
            onClick={ onSearchCallback }
        >
            { FILTER_SEARCH_BUTTON }
        </Button>
    </div>
);

export default Header;