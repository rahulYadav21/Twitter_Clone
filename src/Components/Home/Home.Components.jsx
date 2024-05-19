import React from 'react';
import Sidebar from '../Sidebar/Sidebar.Components';
import Feed from '../Feed/Feed.Components';
import Widgets from '../Widgets/Widgets.Components';

export default function Home() {
  
  return (
    <>
      <div className='appTwitter'>
        <Sidebar/>

        <Feed/>

        <Widgets/>
      </div>
    </>
  );
}