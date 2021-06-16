/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box, Flex, Heading, Link } from 'theme-ui';

const Footer = () => {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container>
        <Flex sx={styles.row}>
          Copyright© 5 Bits in a Byte
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;

const styles = {
  footer: {
    // height: '1000px',
    pt: ['65px', null, '75px', null, '150px'],
    pb: ['25px', null, '35px', '25px', '150px'],
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    px: [0, null, null, '40px', 0, '60px'],
  },
  widget: {
    flex: ['0 0 50%', null, '0 0 33.33%', null, '0 0 20%'],
    mb: ['33px', null, null, '45px', 0],
    h2: {
      m: 0,
      lineHeight: 1.35,
      fontSize: ['17px', null, '18px'],
      letterSpacing: '-0.5px',
      color: 'heading',
      fontWeight: 500,
    },
    ul: {
      m: 0,
      p: 0,
      listStyle: 'none',
      mt: ['20px', null, null, '25px', '30px'],
      li: {
        mt: ['10px', null, '12px'],
      },
      a: {
        display: 'block',
        color: '#02073E',
        opacity: 0.8,
        fontSize: '14px',
        lineHeight: 1.7,
        transition: 'all 500ms ease',
        '&:hover': {
          opacity: 1,
        },
      },
    },
  },
};
