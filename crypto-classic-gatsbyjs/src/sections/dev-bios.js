import React from 'react';
import { Container, Box, Flex, Heading, Text, Image as Img } from 'theme-ui';
import STAL_PROFILE_IMG from 'assets/images/stal-profile-img.png';


const BIOS_DATA = [
  {
    name: "Seth Tal",
    profileImg: STAL_PROFILE_IMG,
    info: "lorem ipsum dolar amet set itar, doles."
  },
  {
    name: "Brian Gunnarson",
    profileImg: STAL_PROFILE_IMG,
    info: "lorem ipsum dolar amet set itar, doles."
  },
  {
    name: "Sam Peters",
    profileImg: STAL_PROFILE_IMG,
    info: "lorem ipsum dolar amet set itar, doles."
  },
  {
    name: "Alec Springel",
    profileImg: STAL_PROFILE_IMG,
    info: "lorem ipsum dolar amet set itar, doles."
  },
  {
    name: "Aaron Van Cleave",
    profileImg: STAL_PROFILE_IMG,
    info: "lorem ipsum dolar amet set itar, doles."
  }
];

const DevBios = ({props}) => {
    return (
      <>
        <Box as="section" id="services" sx={styles.section} >
          <Container sx={styles.container}>
            <Flex sx={styles.row}>
              {BIOS_DATA.map(({ profileImg, name, info }, index) => (
                <Box key={`dev-bios-key-${index}`} sx={styles.post}>
                  <Box sx={styles.imageWrap}>
                    <Img src={profileImg} alt="icon image" style={{width: `150px`, height: `auto`, borderRadius: `50%`}} />
                  </Box>
                  <Heading as="h3">{name}</Heading>
                  <Text as="p">{info}</Text>
                </Box>
              ))}
            </Flex>
          </Container>
        </Box>
      </>
    );
};

export default DevBios;

const styles = {
  section: {
    minHeight: `400px`,
    display: `flex`,
    alignItems: `center`
  },
  container: {
    position: 'relative',
  },
  blockTitle: {
    textAlign: 'center',
    mb: ['35px', null, null, '55px', null, '60px', '85px', '95px', '110px'],
    h2: {
      fontSize: ['24px', null, '28px', '30px'],
      lineHeight: [1.35],
      color: 'heading',
      mb: [2, null, '13px'],
      fontWeight: 'body',
    },
    p: {
      fontSize: ['15px', null, '16px'],
      lineHeight: 1.85,
      color: 'text_secondary',
    },
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 0,
  },
  post: {
    mb: ['32px', null, null, null, 0],
    flex: ['0 0 100%', null, '0 0 50%', null, '0 0 20%'],
    textAlign: 'center',
    h3: {
      fontSize: ['18px', null, null, null, null, '20px'],
      lineHeight: 1.45,
      letterSpacing: '-0.5px',
      fontWeight: '500',
      color: '#02073E',
      mt: ['18px', '20px', null, null, '25px', '30px', null, '40px'],
      mb: ['10px', '15px', null, null, null, '20px'],
    },
    p: {
      maxWidth: '250px',
      mx: 'auto',
      color: '#02073E',
      fontSize: ['14px', '15px'],
      lineHeight: 2,
      px: [null, null, null, null, '5px', 0],
    },
  },
  imageWrap: {
    display: 'flex',
    minHeight: ['auto', '83px'],
    alignItems: 'center',
    justifyContent: 'center',
    img: {
      width: ['75px', null, null, null, 'auto'],
    },
  },
};
