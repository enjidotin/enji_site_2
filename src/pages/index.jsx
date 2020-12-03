import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';

import SidebarWrapper from '../components/PageLayout/Sidebar';
import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import Skills from '../components/PageFragments/HomePage/SkillProgress';
import ProjectCard from '../components/PageFragments/HomePage/ProjectCard';


export default () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <>
          <AboutMe />
          <Skills />
          <ProjectCard/>
          <video src="https://moodio-videos.s3.us-east-2.amazonaws.com/0001.mp4">oops</video>
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
);
