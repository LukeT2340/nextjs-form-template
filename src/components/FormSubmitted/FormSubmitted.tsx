"use client"

import Image from "next/image"

const FormSubmitted: React.FC = () => {
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
      <div className='flex items-center justify-center gap-5'>
        <iframe
          src='https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fbrandedcontent.smh.com.au%2Fscape%2F&layout=button&size=large&width=100&height=28&appId'
          width='100'
          height='28'
          allowFullScreen={true}
          allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
        ></iframe>
      </div>
    </div>
  )
}

export default FormSubmitted
