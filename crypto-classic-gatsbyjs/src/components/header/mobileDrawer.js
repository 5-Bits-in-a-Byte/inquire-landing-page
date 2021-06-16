import React, { useContext } from 'react';
import { Button, Box } from 'theme-ui';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'components/drawer';
import { DrawerContext } from 'contexts/drawer/drawer.context';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link as ScrollLink } from 'react-scroll';
import MENU_DATA from './header.data';
import Logo from 'components/logo';
import InquireLogoImg from 'assets/logo-with-name.svg';

const MobileDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="22px" />
        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={<IoMdClose size="24px" color="#02073E" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Logo image={InquireLogoImg} />
          <Box sx={styles.menu}>
            {MENU_DATA.map(({ path, label }, i) => (
              <ScrollLink
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                key={i}
              >
                {label}
              </ScrollLink>
            ))}
          </Box>

          <Box sx={styles.menuFooter}>
            <a href="https://inquire-server-6p24p.ondigitalocean.app/">
            <Button variant="primary" sx={styles.button}>
              TAKE ME TO INQUIRE
            </Button>
            </a>
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
};

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    cursor: 'pointer',
    '@media screen and (min-width: 1024px)': {
      display: 'none',
    },
  },

  drawer: {
    width: '100%',
    height: '100%',
    background: '#fff',
  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    cursor: 'pointer',
    top: '36px',
    right: '30px',
    zIndex: '1',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '30px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',

    a: {
      fontSize: '16px',
      fontWeight: '400',
      color: 'black',
      py: 2,
      cursor: 'pointer',
      transition: 'all 0.3s',
      '&:hover, &:focus': {
        color: 'primary',
      },
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },

  button: {
    backgroundColor: 'heading_secondary',
    borderRadius: '3px',
    lineHeight: 1,
    cursor: 'pointer',
    fontSize: ['13px', '14px', '15px'],
    padding: ['14px 20px 13px', '14px 25px 13px', '17px 30px 15px'],
    fontWeight: 700,
    display: 'inline-flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    color: '#ffffff',
    transition: 'all 300ms ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
};

export default MobileDrawer;
