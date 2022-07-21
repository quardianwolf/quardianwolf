import React from 'react';
import { BsTwitter, BsInstagram} from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href="https://twitter.com/quardianwolf">
            <BsTwitter/>
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/quardianwolf">
            <BsInstagram />
          </a>
        </div>
        <div>
          <a href="https://github.com/quardianwolf">
            <FaGithub />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia