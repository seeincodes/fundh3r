// import { UploadIcon } from '@heroicons/react/outline';
import React from 'react';
import config from '../config/index.json';
import Divider from './Divider';
import Video from './VideoJS';

// b8175ebc-9e6d-43c6-bad4-ca565dfa09c1

const Mission = () => {
  const { mission } = config;
  const [firstItem] = mission.items;
  //   "playbackUrl": "https://livepeercdn.com/recordings/0de0e291-2631-411e-bb43-1c4c79064947/index.m3u8",

  // "0de0e291-2631-411e-bb43-1c4c79064947"
  const getUploadURL = async () => {
    const response = await fetch(
      "https://livepeer.studio/api/asset/request-upload",
      {
        headers: {
          Authorization: `Bearer b8175ebc-9e6d-43c6-bad4-ca565dfa09c1`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Example name",
        }),
        method: "post"
      }
    );
    const body = await response.json();
    console.log(body)
    return body.url
  };

  const uploadFile = async(url: string, file: any)=>{
    console.log("upload file")
      const response = await fetch(url, {
          headers: {
            Authorization: `Bearer b8175ebc-9e6d-43c6-bad4-ca565dfa09c1`,
            "Content-Type": "video/mp4"
          },
          body: file,
          method: "put"
        });
      if(response.status == 200){
        console.log(response)
      }
      else{
        console.log("error")
      }
  }

  const hi = async(file: any) => {
    console.log("click")
    const url = await getUploadURL();
    await uploadFile(url, file)
  }

  return (

    <section className={`bg-background py-8`} id="mission">

      <div className={`container max-w-5xl mx-auto`}>
        <h1 className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}>
          {mission.title.split(' ').map((word, index) => (
            <span key={index} className={index % 2 ? 'text-primary' : 'text-border'}>{word}{' '}</span>))}
        </h1>
        <Divider />
        <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
        <div className='sm:w-1/2'>
            <h3 className={`text-gray-800 font-bold`}> {firstItem?.title}</h3>
            <p className={`text-gray-600`}>{firstItem?.description}</p>
            <div>
        <input type="file" onChange={(e: any)=> hi(e.target.files[0])}></input>
      </div>
      <Video options={{
         autoplay: true,
         controls: true,
         responsive: true,
         fluid: true,
            sources: [{
              src: 'https://livepeercdn.com/asset/ee4c2xjvtf8v7saw/video',
              type: 'video/mp4'
            }]}}>
      </Video>
            </div>
            <div className='sm:w-1/2'>
              <img
                className="h-23 w-23"
                src={firstItem?.img}
                alt={firstItem?.title}/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
