import { CImage, CNavItem, CSidebarBrand, CSidebarNav } from "@coreui/react";
import { Link } from "react-router-dom";

import logoSrc from '../../src/assets/logo.svg';

import CIcon from '@coreui/icons-react';
import { cilAccountLogout, cilApplications, cilImage, cilNotes, cilPeople, cilSettings } from '@coreui/icons';

import './AsideMenu.scss';

export const AsideMenu = () => {
    const menuItems = [
        { text: 'Dashboard', link: '/dashboard', image: cilApplications, },
        { text: 'Artists', link: '/artists', image: cilPeople },
        { text: 'Projects', link: '/projects', image: cilImage, },
        { text: 'Sales', link: '/sales', image: cilNotes },
        { text: 'Sales', link: '/sales', image: cilNotes },
    ];

    const menuItemsToRender = menuItems.map((item, index) => (
        <CNavItem key={ `${ item.text }+${ index }` }>
            <Link to={ item.link } className={ 'nav-link' }>
                <CIcon icon={ item.image } className={ 'aside-menu-icon' }/>
                { item.text }
            </Link>
        </CNavItem>)
    );

    return (
        <div className={ 'custom-aside-menu' }>
            <div className="d-flex flex-column justify-content-between h-100">
                <CSidebarBrand className={ 'custom-aside-menu-brand' }>
                    <CImage src={ logoSrc }/>
                </CSidebarBrand>
                <CSidebarNav className={ 'p-2' }>
                    { menuItemsToRender }
                </CSidebarNav>
                <CSidebarNav className={ 'sidebar-nav--bottom p-2' }>
                    <CNavItem className={ 'mt-auto' }>
                        <Link to={ '/settings' } className={ 'nav-link' }>
                            <CIcon icon={ cilSettings } className={ 'aside-menu-icon' }/>
                            Setting
                        </Link>
                    </CNavItem>
                    <div onClick={ () => console.log('logout') }>
                        <CNavItem
                            className={ 'nav-item--logout text-danger' }>
                            <CIcon icon={ cilAccountLogout } className={ 'aside-menu-icon' }/>
                            Logout
                        </CNavItem>
                    </div>
                </CSidebarNav>
            </div>
        </div>
    );
};