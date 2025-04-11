"use client"

import Image from "next/image"
import { FaXTwitter } from "react-icons/fa6"
import config from "@/app/app.config"

const FormSubmitted: React.FC = () => {
  const tweetText = encodeURIComponent(
    "I just entered the competition! Join me at"
  )
  const encodedUrl = encodeURIComponent(config.canonical)
  const tweetIntent = `https://twitter.com/intent/tweet?text=${tweetText}&url=${encodedUrl}`
  const facebookShareUrl = `https://www.facebook.com/plugins/share_button.php?href=${encodedUrl}&layout=button&size=large&width=100&height=28&appId`

  return (
    <div>
      <Image
        src='/assets/images/thank-you.png'
        alt='Thank you'
        width={"565"}
        height={482}
        className='mb-20'
      />
      <div className='mb-5'>
        <h2>Share your submission</h2>
      </div>
      <div className='flex justify-center gap-5'>
        <iframe
          src={facebookShareUrl}
          width='100'
          height='28'
          allowFullScreen={true}
          allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
          className='share-button text-lg'
        ></iframe>
        <a
          className='text-white bg-[#1da1f2] font-bold leading-tight hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50  rounded-lg text-lg px-5 py-2.5 text-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2 share-button flex gap-5 items-center'
          href={tweetIntent}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaXTwitter className='text-2xl' />
          <span>Tweet</span>
        </a>
      </div>
    </div>
  )
}

export default FormSubmitted
