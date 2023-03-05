/* app/page.tsx */
'use client'
import { useEffect, useState } from 'react'
import { client, exploreProfiles } from '../api'
import Link from 'next/link'
import Auth from './login/authenticate'
import {Survey} from './survey/form'
import logo from './images/logo.png';
import Image from 'next/image';

export default function Home() {

  const [isSubmitted,setSubmitted] = useState(false)
  /* create initial state to hold array of profiles */
  /* react component for setting user data */
  const [profiles, setProfiles] = useState<any>([])
  useEffect(() => {
    fetchProfiles()
  }, [])
  async function fetchProfiles() {
    try {
      /* fetch profiles from Lens API */
      let response = await client.query({ query: exploreProfiles })
      /* loop over profiles, create properly formatted ipfs image links */
      let profileData = await Promise.all(response.data.exploreProfiles.items.map(async profileInfo => {
        let profile = { ...profileInfo }
        let picture = profile.picture
        if (picture && picture.original && picture.original.url) {
          if (picture.original.url.startsWith('ipfs://')) {
            let result = picture.original.url.substring(7, picture.original.url.length)
            profile.avatarUrl = `http://lens.infura-ipfs.io/ipfs/${result}`
          } else {
            profile.avatarUrl = picture.original.url
          }
        }
        return profile
      }))

      /* update the local state with the profiles array */
      setProfiles(profileData)
    } catch (err) {
      console.log({ err })
    }
  }
  return (
    <div className='pt-20'>
      <div className="home-page-bar">
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Image src={logo} alt="Logo" width={400} height={100} />
        </div>
      </div>
      <Auth />
      <div className='flex flex-col justify-center items-center'>

        {/* <h1 className='text-5xl mb-6 font-bold'>Welcome</h1> */}
        <p className='text-m text-center mt-6 w-1/2'>Your personal team matchmaker 
        for hackathons. AlignMint creates custom social networks for participants 
        based on their interests, values, purpose, and skillsets, so you can connect with 
        like-minded individuals and build the perfect team for your buidlathon project.
        <br></br><br></br>
        With AlignMint, you`ll be matched with people who share your passions and complement 
        your skillset, making it easy to collaborate and create something amazing. 
        No more time-consuming wandering around the hackathon, trying to find the right people to work 
        with - AlignMint has you covered. So let`s hack our way to success with AlignMint!
        </p>
        <br></br>
        <h3>Take the quiz below to find your curated network!</h3>
        <br></br>
        <Survey setSubmitted={setSubmitted}/>
        {
          isSubmitted ?
          profiles.map(profile => (
            <div key={profile.id} className='w-2/3 shadow-md p-6 rounded-lg mb-8 flex flex-col items-center'>
              <img className='w-48' src={profile.avatarUrl || 'https://picsum.photos/200'} />
              <p className='text-xl text-center mt-6'>{profile.name}</p>
              <p className='text-base text-gray-400  text-center mt-2'>{profile.bio}</p>
              <Link href={`/profile/${profile.handle}`}>
                <p className='cursor-pointer text-violet-600 text-lg font-medium text-center mt-2 mb-2'>{profile.handle}</p>
              </Link>
            </div>
          )):null
          //<p className='text-gray-500 text-center mt-4'>Loading profiles...</p>
        }
      </div>
    </div>
  )
}