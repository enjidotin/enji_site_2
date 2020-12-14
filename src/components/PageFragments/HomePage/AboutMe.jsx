import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hey!, I'm Naman I like making things that people like to use. Hit me up if you want to talk about any ideas or have any feedback on any of my work.`,
  paraTwo: `I like competitve programming and I'm currently building moodio and working on the <a href ="http://www.competitivecoding.club">competitive coding club</a> website. I prefer working on the mern stack.`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Naman', 'Garg', 'DevOps Engineer', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'AWS']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      
    </>
  );
};
export default AboutMe;
