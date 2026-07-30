import React from 'react'
import Image from 'next/image'
import mascot from "@/assets/images/Mascot-03.png";
// import googleWorkspaceText from "@/assets/images/workspace/Google-Workspace-text.png";   
import cloudIcon from "@/assets/images/cloud.png";
import workAnywhereIcon from "@/assets/images/work-anywhere.png";
import supportIcon from "@/assets/images/support.png";
import collaborationIcon from "@/assets/images/collaboration.png";
import securityIcon from "@/assets/images/security.png";
const WorkspaceIncludes = () => {
  return (
    <section class="workspace-features-section position-relative pt-100 pb-100">
  <div class="mascot mascot01 mobile-md-none">
    <Image src={mascot} alt="Mascot" width={1000} height={1000} />
  </div>
  {/* <div class="workspace-text-bg">
    <Image src={googleWorkspaceText} alt="Google Workspace Text" />
  </div> */}
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="achieve-title text-center mb-40">
          <h2 class="div-sub-title aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">What's included with Google Workspace</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="timeline">

          <span class="timeline-line aos-init aos-animate" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600"></span>

          <div class="row">
            <div class="col-lg-4 col-md-4 col-6">
              <div class="timeline-item top aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                <div class="icon-circle">
                  <Image src={cloudIcon} alt="Cloud" width={40} height={40} />
                </div>
                <div class="timeline-text">
                  <h2 class="div-text">Ample Cloud Storage</h2>
                  <p class="mb-0">Store, manage, and access all your important files and data with generous cloud storage—no space worries.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-6">
              <div class="timeline-item top aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                <div class="icon-circle">
                  <Image src={workAnywhereIcon} alt="Work Anywhere" width={40} height={40} />
                </div>
                <div class="timeline-text">
                  <h4 class="div-text">Work From Anywhere</h4>
                  <p class="mb-0">Stay productive wherever you are with Google Workspace apps available on iOS, Android, and Windows devices.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-6">
              <div class="timeline-item top aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                <div class="icon-circle">
                  <Image src={supportIcon} alt="Support" width={40} height={40} />
                </div>
                <div class="timeline-text">
                  <h4 class="div-text">Quick Expert Support</h4>
                  <p class="mb-0">Get round-the-clock assistance whenever you need it,  backed by a dedicated support team.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-6 timeline-desktop-none">
              <div class="timeline-item bottom aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1200">
                <div class="icon-circle">
                  <Image src={collaborationIcon} alt="Collaboration" width={40} height={40} />
                </div>
                <div class="timeline-text">
                  <h4 class="div-text">Real-Time Team Collaboration</h4>
                  <p class="mb-0">Collaborate effortlessly using Docs, Sheets, and Slides with real-time editing and instant updates.</p>
                </div>
              </div>
            </div>
             <div class="col-lg-4 col-md-4 col-6 timeline-desktop-none">
              <div class="timeline-item bottom aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1400">
                <div class="icon-circle">
                  <Image src={securityIcon} alt="Security" width={40} height={40} />
                </div>
                <div class="timeline-text">
                  <h4 class="div-text">Enterprise-Grade Security</h4>
                  <p class="mb-0">Protect your data with advanced security features including encryption and multi-factor authentication.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row timeline-mobile-none">
             <div class="col-lg-4 col-md-4 col-6">
              <div class="timeline-item bottom aos-init" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1200">
                <div class="icon-circle">
                  <Image src={collaborationIcon} alt="Collaboration" width={40} height={40} />
                </div>
                <div class="timeline-text">
                  <h4 class="div-text">Real-Time Team Collaboration</h4>
                  <p class="mb-0">Collaborate effortlessly using Docs, Sheets, and Slides with real-time editing and instant updates.</p>
                </div>
              </div>
            </div>
             <div class="col-lg-4 col-md-4 col-6">
              <div class="timeline-item bottom aos-init" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1400">
                <div class="icon-circle">
                  <Image src={securityIcon} alt="Security" width={40} height={40} />
                </div>
                <div class="timeline-text">
                  <h4 class="div-text">Enterprise-Grade Security</h4>
                  <p class="mb-0">Protect your data with advanced security features including encryption and multi-factor authentication.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default WorkspaceIncludes