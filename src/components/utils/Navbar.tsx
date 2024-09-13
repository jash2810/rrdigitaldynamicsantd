import { Button, ConfigProvider, Drawer, Layout, Menu } from 'antd';
import './Navbar.css';
import { MenuOutlined } from '@ant-design/icons'

import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

const { Header } = Layout

interface Props {
    screens: any
}

const Navbar = ({screens}: Props) => {

    const theme = React.useContext(ConfigProvider.ConfigContext);

    const [open, setOpen] = React.useState(false);

    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }

    const styles = {
        header: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 20px',
          backgroundColor: theme.theme?.token?.colorPrimary,
        },
        logo: {
          color: '#fff',
          fontSize: '20px',
          fontWeight: 'bold',
        },
        menu: {
            display: 'flex',
            flex: 1,
            justifyContent: 'flex-begin',
            color: 'white',
            backgroundColor: theme.theme?.token?.colorPrimary,
        },
        hamburger: {
          display: 'block',
          marginLeft: 'auto',
          boxShadow: 'none',
        },
    };

    const MenuContent = {
        NavbarMenu: [
            {
                pageName: 'Home',
                pageHref: '/'
            },
            {
                pageName: 'Services',
                pageHref: '/services'
            },
            {
                pageName: 'About Us',
                pageHref: '/aboutus'
            },
            {
                pageName: 'Contact Us',
                pageHref: '/contactus'
            },
            {
                pageName: 'Blog',
                pageHref: '/blog'
            },
            {
                pageName: 'Get A Quote',
                pageHref: '/getaquote'
            },
        ],
        otherMenu: []
    }
    
    
    

    const MobileMenu = () => {
        return (
            <React.Fragment>
                <div style={styles.logo} >RR Digital Dynamics</div>

                {/* Hamburger Button */}
                <Button
                className="menuButton"
                type="primary"
                icon={<MenuOutlined />}
                onClick={showDrawer}
                style={styles.hamburger}
                />

                {/* Drawer for Mobile Navigation */}
                <Drawer
                    title="Menu"
                    placement="right"
                    onClose={onClose}
                    open={open}
                >
                <Menu mode="vertical">
                    {MenuContent.NavbarMenu?.map((menu, index) => (
                        <Menu.Item key={index}><Link to={menu.pageHref}>{menu.pageName}</Link></Menu.Item>
                    ))}
                </Menu>
                </Drawer>
            </React.Fragment>
        )
    }

    const BigScreenMenu = () => {
        return(
            <React.Fragment>
                <Menu mode="horizontal" style={styles.menu}>
                    {MenuContent.NavbarMenu?.map((menu, index) => (
                        <Menu.Item className='horizontal-menu-title' key={index}><Link to={menu.pageHref}>{menu.pageName}</Link></Menu.Item>
                    ))}
                </Menu>
            </React.Fragment>
        )
    }

    return(
        <React.Fragment>
            <Layout>
                <Header style={styles.header}>
                    {screens.xs ? <MobileMenu/> : <BigScreenMenu/>}
                </Header>
            </Layout>
        </React.Fragment>
    )
}

export default Navbar;