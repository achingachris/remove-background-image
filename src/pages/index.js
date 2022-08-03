import React from 'react'
import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'

import cloudinary from 'cloudinary'

const index = () => {
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'chris101',
    },
  })

  // cld.image returns a CloudinaryImage with the configuration set.
  const myImage = cld.image('cld-sample', {
    background_removal: 'cloudinary_ai',
    // notification_url: 'https://mysite.example.com/hooks',
  })

  const imagee = cloudinary.v2.api.update(
    'woman',
    {
      background_removal: 'cloudinary_ai',
      notification_url: 'https://mysite.example.com/hooks',
    },
    function (error, result) {
      console.log(result)
    }
  )

  return (
    <div>
      <h1>gatsby remove bg images</h1>
      <AdvancedImage cldImg={myImage} />
    </div>
  )
}

export default index
