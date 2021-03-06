import React from 'react';
// import { useHistory, useLocation } from "react-router-dom";
import { StickyProvider } from 'contexts/app/app.provider';
import Seo from 'components/seo';
import Banner from 'sections/banner';
import WhyChoose from 'sections/why-choose';
import DevBios from 'sections/dev-bios';
import SalesInvestment from 'sections/sales-investment';
import LeftInfo from 'sections/left-info';
import RightInfo from 'sections/right-info';
import RoadMap from 'sections/roadmap';
import CountDownBlock from 'sections/countdown';
import WorldwideUsers from 'sections/worldwide-user';
import OurWallet from 'sections/our-wallet';
import CallToAction from 'sections/call-to-action';
import Layout from 'components/layout';
import { useStaticQuery, graphql } from 'gatsby';

import 'rc-drawer/assets/index.css';
import 'react-modal-video/css/modal-video.min.css';


const InfoData01 = {
  title: 'OAuth Authentication',
  // text:
    // 'Inquire uses third party authentication through GitHub and Google to ensure our users can feel safe and secure with their accounts. This gives us no access to our user\'s usernames or passwords, meaning no malicious users can access them through Inquire either.',
  text: 'Inquire uses third party authentication through GitHub and Google for user sign in. We acquire specific user data such as: email, user data (First/Last name), and with Google specifically we also acquire the user\'s OpenID which we use to identify users and tokenize their login session.',
    button: {
    link: 'https://github.com/5-Bits-in-a-Byte/message-board/wiki/OAuth-Authentication',
    label: 'Learn More',
  },
};

const InfoData02 = {
  title: 'Post Markdown Editor',
  text:
    'When creating and editing posts on Inquire users are able to customize how they want to format and style their posts. This includes adding code blocks, different headers, block quotes, and much more.',
  button: {
    link: 'https://github.com/5-Bits-in-a-Byte/message-board/wiki/Markdown-Editor',
    label: 'Learn More',
  },
};

const InfoData03 = {
  title: 'Configurable User Roles',
  text:
    'Instructors of courses on Inquire have the ability to create and assign roles to people in their class. These roles include options to change who can create, delete, edit, and react to posts, and much more.',
  button: {
    link: 'https://github.com/5-Bits-in-a-Byte/message-board/wiki/User-Roles',
    label: 'Learn More',
  },
};

const InfoData04 = {
  title: 'Classroom Interaction',
  text:
    'We incentevise classroom interaction through the implementation of unqiue Post types as well as allowing Users to configure how content is shared with others. Users can interact by posting and replying to questions either normally or anonymously, as well as reacting to other students posts.',
  button: {
    link: 'https://github.com/5-Bits-in-a-Byte/message-board/wiki/Classroom-Interaction',
    label: 'Learn More',
  },
};

export default function IndexPage({location}) {

  const query01 = useStaticQuery(graphql`
    query {
      socialCardImage: file(relativePath: {eq: "inquire-social-card.png"}) {
        childImageSharp {
          resize(width: 1200) {
            src
            height
            width
          }
          fluid(maxWidth: 617) {
            ...GatsbyImageSharpFluid
            src
          }
        }
      },
      placeholderImage1: file(relativePath: { eq: "inquire-signin.png" }) {
        childImageSharp {
          fluid(maxWidth: 617) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      placeholderImage2: file(relativePath: { eq: "markdown-demo.png" }) {
        childImageSharp {
          fluid(maxWidth: 617) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      placeholderImage3: file(relativePath: { eq: "config.png" }) {
        childImageSharp {
          fluid(maxWidth: 617) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      placeholderImage4: file(relativePath: { eq: "inquire-post-feed.png" }) {
        childImageSharp {
          fluid(maxWidth: 617) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  // const location = window.location;

  return (
    <StickyProvider>
      <Layout>
        <Seo
          title="Landing Page"
          image={query01.socialCardImage ? query01.socialCardImage.childImageSharp.resize : null}
          pathname={location}
        />
        <Banner />
        <WhyChoose />
        <LeftInfo infoObject={InfoData01} queryData={query01.placeholderImage1.childImageSharp.fluid} imageStyling={{boxShadow: `-50px 100px 35px #12121222`, transform: `rotate3d(1, 1, 1, -25deg)`, borderRadius: `1em`}} />
        <RightInfo infoObject={InfoData02} queryData={query01.placeholderImage2.childImageSharp.fluid} imageStyling={{boxShadow: `50px 100px 35px #12121222`, transform: ` translateY(-50px) rotate3d(-1, 1, 1, 25deg)`, borderRadius: `1em`}} />
        <LeftInfo infoObject={InfoData03} queryData={query01.placeholderImage3.childImageSharp.fluid} imageStyling={{boxShadow: `-50px 100px 35px #12121222`, transform: `rotate3d(1, 1, 1, -25deg)`, borderRadius: `1em`}} />
        <RightInfo infoObject={InfoData04} queryData={query01.placeholderImage4.childImageSharp.fluid} imageStyling={{boxShadow: `50px 100px 35px #12121222`, transform: `rotate3d(-1, 1, 1, 25deg)`, borderRadius: `1em`}} />
        <RoadMap />
        <DevBios />
      </Layout>
    </StickyProvider>
  );
}
