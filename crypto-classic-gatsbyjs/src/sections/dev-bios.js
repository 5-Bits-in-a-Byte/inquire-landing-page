import React from 'react';
import { Container, Box, Flex, Heading, Text, Image as Img } from 'theme-ui';
import STAL_PROFILE_IMG from 'assets/images/stal-profile-img.png';
import BGUN_PROFILE_IMG from 'assets/images/bgun-profile-img.png';
import GITHUB_LOGO from 'assets/images/mdi_github.svg';
import LINKEDIN_LOGO from 'assets/images/mdi_linkedin.svg';
import MAIL_LOGO from 'assets/images/Envelope.svg';


const BIOS_DATA = [
  {
    name: "Seth Tal",
    profileImg: STAL_PROFILE_IMG,
    roleTitle: "Fullstack Developer",
    info: "Aspiring Software Engineer | Seeking Entry-Level Programming Position",
    socials: ["https://github.com/", "https://www.linkedin.com/in/sethtal", "mailto:seth.tal255@gmail.com"],
    bgColor: "#FFFFFF",
    fontColor: "#162b55"
  },
  {
    name: "Brian Gunnarson",
    profileImg: BGUN_PROFILE_IMG,
    roleTitle: "Fullstack Developer",
    info: "Brian is a future software developer from Eugene, OR. He enjoys hiking and watching NBA games in his free time.",
    socials: ["https://github.com/bgunnar5", "https://www.linkedin.com/in/brian-gunnarson-7736701a2/", "mailto:brianfunnarson14@gmail.com"],
    bgColor: "#f8f8f8",
    fontColor: "#162b55"
  },
  {
    name: "Sam Peters",
    profileImg: STAL_PROFILE_IMG,
    roleTitle: "Backend Developer",
    info: "lorem ipsum dolar amet set itar, doles.",
    socials: ["https://github.com/sampeters747", "https://www.linkedin.com/in/sam-peters-a765b719a/", "#"],
    bgColor: "#fff",
    fontColor: "#162b55"
  },
  {
    name: "Alec Springel",
    profileImg: BGUN_PROFILE_IMG,
    roleTitle: "Team Mascot",
    info: "lorem ipsum dolar amet set itar, doles.",
    socials: ["https://github.com/alecspringel", "https://www.linkedin.com/in/alec-springel/", "#"],
    bgColor: "#f8f8f8",
    fontColor: "#162b55"
  },
  {
    name: "Aaron Van Cleave",
    profileImg: STAL_PROFILE_IMG,
    roleTitle: "Frontend Developer",
    info: "lorem ipsum dolar amet set itar, doles.",
    socials: ["https://github.com/AARONJVC", "https://www.linkedin.com/in/aaron-van-cleave-13mn15c8/", "#"],
    bgColor: "#fff",
    fontColor: "#162b55"
  }
];

const DevBios = ({props}) => {
    return (
      <>
        <Box as="section" id="contact" sx={styles.section} >
          <Container sx={styles.container}>
            <Box sx={styles.blockTitle}>
              <Heading as="h2">Meet the Devs</Heading>
            </Box>
            <Flex sx={styles.row} style={{}} >
              {BIOS_DATA.map(({ profileImg, name, roleTitle, info, socials, bgColor, fontColor}, index) => (
                <Box key={`dev-bios-key-${index}`} sx={styles.post} style={{padding: `1em 2em`, borderRadius: `1em`, display: `flex`, flexDirection: `column`, backgroundColor: `${bgColor}`}}>
                  <Box sx={styles.imageWrap}>
                    <Img src={profileImg} alt="icon image" style={{boxShadow: `10px 10px 15px rgba(0, 0, 0, 0.25)`, width: `150px`, height: `auto`, borderRadius: `50%`}} />
                  </Box>
                  <Heading as="h3" style={{color: `#162b55`}}>{name}</Heading>
                  <Heading as="h4" style={{color: `#4a86fa`, fontSize: `18px`}}>Project Role: <br /> {roleTitle}</Heading>
                  <Text as="p" style={{color: `#162b55`}}>{info}</Text>
                  <div style={{margin: `auto`, display: `flex`, alignItems: `center`}}>
                    <a as="a" style={{margin: `0.5em`}} href={socials[0]}><img src={GITHUB_LOGO} alt="GitHub Logo" /></a>
                    <a as="a" style={{margin: `0.5em`}} href={socials[1]}><img src={LINKEDIN_LOGO} alt="LinkedIn Logo" /></a>
                    <a as="a" style={{margin: `0.5em`}} href={socials[2]}><img src={MAIL_LOGO} alt="Generic Email Icon" /></a>
                  </div>
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
      // color: 'text_secondary',
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
      // color: '#02073E',
      mt: ['18px', '20px', null, null, '25px', '30px', null, '40px'],
      mb: ['10px', '15px', null, null, null, '20px'],
    },
    h4: {
      fontSize: ['16px', null, null, null, null, '18px'],
      lineHeight: 1.45,
      letterSpacing: '-0.5px',
      fontWeight: '500',
      // color: '#02073E',
      // mt: ['18px', '20px', null, null, '25px', '30px', null, '40px'],
      mb: ['10px', '15px', null, null, null, '20px'],
    },
    p: {
      maxWidth: '250px',
      mx: 'auto',
      // color: '#02073E',
      fontSize: ['14px', '15px'],
      lineHeight: 2,
      px: [null, null, null, null, '5px', 0],
    },
    a: {
      img: {
        ':hover': {
          transition: `150ms cubic-bezier(.19,1,.22,1)`,
          transform: `translateY(-3px)`,
          // width: `48px`
        },
        ':active': {
          transition: `150ms cubic-bezier(.19,1,.22,1)`,
          transform: `translateY(3px)`
        }
      }
    }
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
