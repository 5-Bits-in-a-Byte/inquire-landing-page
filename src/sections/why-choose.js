import React from 'react';
import { Container, Box, Flex, Heading, Text, Image as Img } from 'theme-ui';
import OAuthImage from 'assets/oauth.svg';
import EditImage from 'assets/edit.svg';
import ConfigRolesImage from 'assets/config-roles.svg';
import InteractionImage from 'assets/interaction.svg';
const WHY_CHOOSE_DATA = {
  blockTitle: {
    title: 'Inquire\'s Current Feature Set',
    text: 'With Inquire, classroom discussion is more focused and productive.',
  },
  posts: [
    {
      icon: OAuthImage,
      title: 'OAuth Authentication',
      text:
        'We integrated third party authentication to keep your account safe and secure so you don\'t have to worry.',
    },
    {
      icon: EditImage,
      title: 'Post Markdown Editor',
      text:
        'To allow our users more flexibility when creating posts, we provide a built-in markdown editor to make styling posts as easy as ever.',
    },
    {
      icon: ConfigRolesImage,
      title: 'Configurable User Roles',
      text:
        'Instructors of courses can easily modify user permissions and assign them specifically to each student/TA in their course.',
    },
    {
      icon: InteractionImage,
      title: 'Classroom Interaction',
      text:
        'Interacting with peers is as simple as posting questions and replies to one another.',
    },
  ],
};

const WhyChoose = () => {
  const { blockTitle, posts } = WHY_CHOOSE_DATA;
  return (
    <Box as="section" id="features" sx={styles.section}>
      <Container sx={styles.container}>
        <Box sx={styles.blockTitle}>
          <Heading as="h2">{blockTitle.title}</Heading>
          <Text as="p">{blockTitle.text}</Text>
        </Box>
        <Flex sx={styles.row}>
          {posts.map(({ icon, text, title }, index) => (
            <Box key={`why-choose-post-key-${index}`} sx={styles.post}>
              <Box sx={styles.imageWrap}>
                <Img src={icon} alt="icon image" />
              </Box>

              <Heading as="h3">{title}</Heading>
              <Text as="p">{text}</Text>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default WhyChoose;

const styles = {
  section: {
    pb: ['20px', '30px', null, '50px', '85px', null, '105px', '125px', '140px'],
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
    flex: ['0 0 100%', null, '0 0 50%', null, '0 0 25%'],
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
      maxWidth: '266px',
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
