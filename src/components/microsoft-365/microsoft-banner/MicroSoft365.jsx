import React from 'react'
import Image from 'next/image'
import microsoftBanner from '@/assets/images/microsoft-banner.jpg'
import { BsCheckCircleFill } from 'react-icons/bs'

const MicroSoft365 = () => {
  return (
    <section class="home-banner position-relative">
    <div class="microsoft-banner">
      <Image src={microsoftBanner} class="img" alt="microsoft banner" width={1000} height={1000} />
    </div>
    <div class="container h-100">
      <div class="row h-100">
          <a href="cloud-microsoft-365.aspx">cloud-microsoft-365.aspx</a>
        <div class="col-lg-6 col-md-12 col-12 d-flex align-items-center">
          <div class="banner-text">
            <h1 class="title mb-0">Microsoft 365 for Modern Workplaces</h1>
            <p class="p-content">Work smarter, collaborate faster, and stay secure with Microsoft 365tools.</p>
            <ul class="workspace-list mt-40 aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
              <li> <BsCheckCircleFill size={18}  style={{marginRight: '10px'}} className='text-primary'/> Professional business email with your domain</li>
              <li> <BsCheckCircleFill size={18}  style={{marginRight: '10px'}} className='text-primary'/> Seamless communication &amp; team collaboration</li>
              <li> <BsCheckCircleFill size={18}  style={{marginRight: '10px'}} className='text-primary'/> Cloud apps for productivity anytime, anywhere</li>
              <li> <BsCheckCircleFill size={18}  style={{marginRight: '10px'}} className='text-primary'/> Enterprise-grade security &amp; compliance</li>
            </ul>
            <div class="d-flex flex-column flex-lg-row gap-5 mt-40">
              <a href="https://marketplace.microsoft.com/en-us/partners/052e1b67-9819-44bd-a613-7f6818c78543/overview/contact" target="_blank" class="tp-btn-black">
              <span class="tp-btn-black-filter d-inline-flex align-items-center">
                <span class="tp-btn-black-text">Authorized Microsoft Partner</span>
                <span class="tp-btn-black-circle">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L9 1M9 1H1M9 1V9" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </span>
              </span>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default MicroSoft365