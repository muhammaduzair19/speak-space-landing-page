import React, { useEffect } from 'react'
import './privacy.css'
import { Link, animateScroll as scroll } from 'react-scroll'


const Privacy = () => {

  const options = {
    duration: 300,
    smooth: true,
  };
  useEffect(() => {
    scroll.scrollToTop(options);
  }, [])







  return (
    <div id="privacy">
      <h1>Privacy Policy</h1>
      <span className="badge">
        Last updated January 03, 2024
      </span>
      <div className="text">
        <p>This privacy notice for SeakSpaces, Inc ("<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>"), describes how and why we might collect, store, use, and/or share ("<strong>process</strong>") your information when you use our services ("<strong>
          Services</strong>"), such as when you:</p>

        <ul>
          <li>
            Download and use our mobile application (SeakSpaces, Inc),or any other application of ours that links to this privacy noticez
          </li>

          <li>
            Engage with us in other related ways, including any sales, marketing, or events
          </li>
        </ul>

        <p>
          <strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns,
          <span className='lightText'> please contact us at info@seakspaces.com.</span>
        </p>
      </div>
      <div className="summary text">
        <h2>SUMMARY OF KEY POINTS</h2>
        <p>
          <strong>
            <i>
              This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our <Link
                activeClass='active'
                to='tableOfContent'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className='link'>
                table of contents
              </Link> below to find the section you are looking for.
            </i>
          </strong>
        </p>
        <p>
          <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.
          Learn more about  <Link
            activeClass='active'
            to='personalInfo'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className='link'>
            personal information you disclose to us
          </Link>
        </p>
        <p>
          <strong>
            Do we process any sensitive personal information?
          </strong> We do not process sensitive personal information.
        </p>
        <p>
          <strong>
            Do we receive any information from third parties?
          </strong> We do not receive any information from third parties.
        </p>
        <p>
          <strong>
            How do we process your information?
          </strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about <Link
            activeClass='active'
            to='quesTwo'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className='link'>
            how we process your information
          </Link>.
        </p>
        <p>
          <strong>
            In what situations and with which parties do we share personal information?
          </strong> We may share information in specific situations and with specific third parties. Learn more about <Link
            activeClass='active'
            to='quesFour'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className='link'>
            when and with whom we share your personal information.
          </Link>
        </p>
        <p>
          <strong>
            How do we keep your information safe?
          </strong> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about <Link
            activeClass='active'
            to='quesEight'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className='link'>
            how we keep your information safe.
          </Link>
        </p>
        <p>
          <strong>
            What are your rights?
          </strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about <Link
            activeClass='active'
            to='quesTen'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className='link'>
            your privacy rights.
          </Link>
        </p>
        <p>
          <strong>
            How do you exercise your rights?
          </strong> The easiest way to exercise your rights is by submitting a <a href="https://app.termly.io/notify/dac1d3eb-439f-4941-9ede-a4e15cea7e27" target='_blank' className="link">data subject access request</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
        </p>
        <p>
          Want to learn more about what we do with any information we collect? <Link
            activeClass='active'
            to='quesTen'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className='link'>
            Review the privacy notice in full.
          </Link>
        </p>

      </div>

      <div className="information">


        <div className="questions">
          <h3 id='tableOfContent'>Table of contents</h3>
          <ol>
            <li>
              <Link
                activeClass='active'
                to='quesOne'
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className='ques'
              >
                WHAT INFORMATION DO WE COLLECT?
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='quesTwo'
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className='ques'
              >
                HOW DO WE PROCESS YOUR INFORMATION?
              </Link>

            </li>
            <li>
              <Link
                activeClass='active'
                to='quesThree'
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className='ques'
              >
                WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?
              </Link>
            </li>

            <li>
              <Link
                activeClass='active'
                to='quesFour'
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className='ques'
              >
                WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='quesFive'
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className='ques'
              >
                DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </Link>

            </li>
            <li>
              <Link
                activeClass='active'
                to='quesSix'
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className='ques'
              >
                HOW DO WE HANDLE YOUR SOCIAL LOGINS?
              </Link>

            </li>
            <li>
              <Link
                activeClass='active'
                to='quesSeven'
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className='ques'
              >
                HOW LONG DO WE KEEP YOUR INFORMATION?
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='quesEight'
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className='ques'
              >
                HOW DO WE KEEP YOUR INFORMATION SAFE?
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='quesNine'
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className='ques'
              >
                DO WE COLLECT INFORMATION FROM MINORS?
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='quesTen'
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className='ques'
              >
                WHAT ARE YOUR PRIVACY RIGHTS?
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='quesEleven'
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className='ques'
              >
                CONTROLS FOR DO-NOT-TRACK FEATURES
              </Link>

            </li>
            <li>
              <Link
                activeClass='active'
                to='quesTwelve'
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className='ques'
              >
                DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              </Link>

            </li>
            <li>
              <Link
                activeClass='active'
                to='quesThirteen'
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className='ques'
              >
                DO WE MAKE UPDATES TO THIS NOTICE?
              </Link>

            </li>
            <li>
              <Link
                activeClass='active'
                to='quesFourteen'
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className='ques'
              >
                HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </Link>

            </li>
            <li>
              <Link
                activeClass='active'
                to='quesFifteen'
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                className='ques'
              >
                HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
              </Link>

            </li>





          </ol>


        </div>












        <div className="answers">


          <div className="answer" id='quesOne'>
            <h2>1. what information do we collect?</h2>
            <h3 id='personalInfo'>Personal information you disclose to us</h3>
            <div className="main-answer text">
              <p className='italic'><strong>In Short:</strong> We collect personal information that you provide to us.</p>
              <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
              <div>
                <p>
                  <strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
                </p>
                <ul>
                  <li>
                    email address
                  </li>
                  <li>
                    names
                  </li>
                  <li>
                    usernames
                  </li>
                  <li>
                    passwords
                  </li>
                  <li>
                    debit/credit card numbers
                  </li>
                  <li>
                    contact preferences
                  </li>
                  <li>
                    phone numbers
                  </li>
                </ul>
              </div>
              <p>
                <strong>Sensitive Information</strong> We do not process sensitive information.
              </p>
              <p>
                <strong>Payment Data.</strong> We may collect data necessary to process your payment if you make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is stored by Stripe and PayPal. You may find their privacy notice link(s) here: <a href="https://stripe.com/privacy" target='_blank' className="link">https://stripe.com/privacy</a> and
                <a href="https://www.paypal.com/us/legalhub/privacy-full." target='_blank' className="link"> https://www.paypal.com/us/legalhub/privacy-full.</a>
              </p>
              <p>
                <strong>Social Media Login Data. </strong>
                We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter, or other social media account. If you choose to register in this way, we will collect the information described in the section called <Link
                  activeClass='active'
                  to='quesSix'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className='link'>
                  "HOW DO WE HANDLE YOUR SOCIAL LOGINS?"
                </Link> below.
              </p>
              <div>
                <p>
                  <strong>Application Data. </strong>If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:
                </p>
                <ul>
                  <li>
                    <span className='italic'>Geolocation Information. </span>
                    We may request access or permission to track location-based information from your mobile device, either continuously or while you are using our mobile application(s), to provide certain location-based services. If you wish to change our access or permissions, you may do so in your device's settings.</li>
                  <li>
                    <span className='italic'>Mobile Device Data. </span>We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device's operating system or platform, the type of mobile device you use, your mobile device's unique device ID, and information about the features of our application(s) you accessed.
                  </li>
                  <li>
                    <span className='italic'>Push Notifications.</span> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.
                  </li>
                </ul>
                <p>
                  This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.
                </p>
              </div>
              <p>
                All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
              </p>
              <h3>
                Information automatically collected
              </h3>
              <p className='italic'>
                <strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
              </p>
              <p>
                We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
              </p>
              <p>
                Like many businesses, we also collect information through cookies and similar technologies.
              </p>
              <div>
                <p>
                  The information we collect includes:
                </p>
                <ul>
                  <li>
                    <span className="italic">Log and Usage Data.</span> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).
                  </li>
                  <li>
                    <span className='italic'>Device Data.</span> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
                  </li>
                  <li>
                    <span className='italic'>Location Data.</span> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.
                  </li>
                  <li>
                    <span className='italic'>Booking cost data.</span> Booking cost data is information about the amount of money a user pays to book a venue
                  </li>
                </ul>
              </div>

            </div>
          </div>

          <div className="answer" id='quesTwo'>
            <h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
            <div className="main-answer text">
              <p className='italic'>
                <strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
              </p>
              <div>
                <p>
                  <strong>
                    We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
                  </strong>
                </p>
                <ul>
                  <li>
                    <strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.
                  </li>
                  <li>
                    <strong>To request feedback.</strong> We may process your information when necessary to request feedback and to contact you about your use of our Services.
                  </li>
                  <li>
                    <strong>To send you marketing and promotional communications.</strong> We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see <Link
                      activeClass='active'
                      to='quesTen'
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className='link'>
                      "WHAT ARE YOUR PRIVACY RIGHTS?"
                    </Link> below.
                  </li>
                  <li>
                    <strong>To deliver targeted advertising to you.</strong> We may process your information to develop and display personalized content and advertising tailored to your interests, location, and more.
                  </li>
                  <li>
                    <strong>To protect our Services.</strong> We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.

                  </li>
                  <li>
                    <strong>To identify usage trends.</strong> We may process information about how you use our Services to better understand how they are being used so we can improve them.
                  </li>
                  <li>
                    <strong>To determine the effectiveness of our marketing and promotional campaigns.</strong> We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.
                  </li>
                  <li>
                    <strong>To save or protect an individual's vital interest.</strong> We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.

                  </li>


                </ul>
              </div>
            </div>
          </div>


          <div className="answer" id='quesThree'>
            <h2>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2>
            <div className="main-answer text">
              <p className='italic'>
                <strong>In Short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.
              </p>
              <p className='italic'>
                <strong>
                  If you are located in the EU or UK, this section applies to you.
                </strong>
              </p>
              <div>
                <p>
                  The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
                </p>
                <ul>
                  <li>
                    <strong>Consent.</strong> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about <Link
                      activeClass='active'
                      to='withdrawConsent'
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className='link'>
                      withdrawing your consent.
                    </Link>
                  </li>
                  <li>

                    <strong>Legitimate Interests.</strong> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:
                    <div>
                      <ul>
                        <li>
                          Send users information about special offers and discounts on our products and services
                        </li>
                        <li>
                          Develop and display personalized and relevant advertising content for our users
                        </li>
                        <li>
                          Analyse how our Services are used so we can improve them to engage and retain users
                        </li>
                        <li>
                          Support our marketing activities
                        </li>
                        <li>
                          Diagnose problems and/or prevent fraudulent activities
                        </li>
                        <li>
                          Understand how our users use our products and services so we can improve user experience
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.
                  </li>
                  <li>
                    <strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.
                  </li>
                </ul>
              </div>
              <strong className='italic'>If you are located in Canada, this section applies to you.</strong>
              <p>
                We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can <Link
                  activeClass='active'
                  to='withdrawConsent'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className='link'>
                  withdrawing your consent
                </Link> at any time.
              </p>

              <div>
                <p>
                  In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:
                </p>
                <ul>
                  <li>
                    If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way
                  </li>
                  <li>
                    For investigations and fraud detection and prevention
                  </li>
                  <li>
                    For business transactions provided certain conditions are met
                  </li>
                  <li>
                    If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim
                  </li>
                  <li>
                    For identifying injured, ill, or deceased persons and communicating with next of kin
                  </li>
                  <li>
                    If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse
                  </li>
                  <li>
                    If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province
                  </li>
                  <li>
                    If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records
                  </li>
                  <li>
                    If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced
                  </li>
                  <li>
                    If the collection is solely for journalistic, artistic, or literary purposes
                  </li>
                  <li>
                    If the information is publicly available and is specified by the regulations
                  </li>
                </ul>
              </div>





            </div>
          </div>


          <div className="answer" id='quesFour'>
            <h2>
              4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </h2>
            <div className="main-answer text">
              <p className='italic'>
                <strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.
              </p>

              <div>
                <p>
                  We may need to share your personal information in the following situations:
                </p>
                <ul>
                  <li>
                    <strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                  </li>
                  <li>
                    <strong>When we use Google Maps Platform APIs.</strong> We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Places API). We obtain and store on your device ("cache") your location. You may revoke your consent anytime by contacting us at the contact details provided at the end of this document.
                  </li>
                  <li>
                    <strong>Affiliates. </strong>We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.
                  </li>
                  <li>
                    <strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services, or promotions.
                  </li>
                  <li>
                    <strong>Offer Wall.</strong> Our application(s) may display a third-party hosted "offer wall." Such an offer wall allows third-party advertisers to offer virtual currency, gifts, or other items to users in return for the acceptance and completion of an advertisement offer. Such an offer wall may appear in our application(s) and be displayed to you based on certain data, such as your geographic area or demographic information. When you click on an offer wall, you will be brought to an external website belonging to other persons and will leave our application(s). A unique identifier, such as your user ID, will be shared with the offer wall provider in order to prevent fraud and properly credit your account with the relevant reward.
                  </li>
                </ul>
              </div>




            </div>
          </div>

          <div className="answer" id='quesFive'>
            <h2>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
            <div className="main-answer text">
              <p className='italic'><strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.</p>
              <p>
                We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
              </p>
            </div>
          </div>

          <div className="answer" id='quesSix'>
            <h2>
              6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
            </h2>
            <div className="main-answer text">
              <p className='italic'>
                <strong>In Short:</strong> If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.
              </p>
              <p>
                Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.
              </p>
              <p>
                We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.
              </p>
            </div>
          </div>

          <div className="answer" id='quesSeven'>
            <h2>
              7. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
            <div className="main-answer text">
              <p className='italic'>
                <strong>In Short: </strong>We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
              </p>
              <p>
                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.

              </p>
              <p>
                When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
              </p>
            </div>
          </div>

          <div className="answer" id='quesEight'>
            <h2>
              8. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </h2>
            <div className="main-answer text">
              <p className='italic'>
                <strong>In Short: </strong>We aim to protect your personal information through a system of organizational and technical security measures.
              </p>
              <p>
                We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
              </p>
            </div>
          </div>

          <div className="answer" id='quesNine'>
            <h2>
              9. DO WE COLLECT INFORMATION FROM MINORS?
            </h2>
            <div className="main-answer text">
              <p className='italic'>
                <strong>In Short: </strong>We do not knowingly collect data from or market to children under 18 years of age.
              </p>
              <p>
                We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at info@seakspaces.com.
              </p>
            </div>
          </div>

          <div className="answer" id='quesTen'>
            <h2>
              10. WHAT ARE YOUR PRIVACY RIGHTS?
            </h2>
            <div className="main-answer text">
              <p className='italic'>
                <strong>In Short: </strong>In some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
              </p>
              <p>
                In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "<Link
                  activeClass='active'
                  to='quesFourteen'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className='link'>
                  HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </Link>" below.
              </p>
              <p>
                We will consider and act upon any request in accordance with applicable data protection laws.
                <br />
                If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your
                <a href="https://ec.europa.eu/newsroom/article29/items/612080" target='_blank' className="link">Member State data protection authority</a> or <a href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/" target='_blank' className="link">UK data protection authority</a>.
              </p>

              <p>
                If you are located in Switzerland, you may contact the <a href="https://www.edoeb.admin.ch/edoeb/en/home.html" target='_blank' className="link">Federal Data Protection and Information Commissioner</a>.
              </p>


              <p>
                <strong className='underline' id='withdrawConsent'>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "<Link
                  activeClass='active'
                  to='quesFourteen'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className='link'>
                  HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </Link>" below or updating your preferences.
              </p>
              <p>
                However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
              </p>
              <p>
                <strong className="underline">Opting out of marketing and promotional communications:</strong> You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section "<Link
                  activeClass='active'
                  to='quesFourteen'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className='link'>
                  HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </Link>" below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.
              </p>
              <h3>
                Account Information
              </h3>
              <div>
                <p>
                  If you would at any time like to review or change the information in your account or terminate your account, you can:
                </p>
                <ul>
                  <li>
                    Log in to your account settings and update your user account.
                  </li>
                  <li>
                    Contact us using the contact information provided.
                  </li>
                </ul>
                <p>
                  Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
                </p>
              </div>

              <p>
                <strong className="underline">Cookies and similar technologies:</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.
              </p>
              <p>
                If you have questions or comments about your privacy rights, you may email us at info@seakspaces.com.
              </p>
            </div>
          </div>

          <div className="answer" id='quesEleven'>
            <h2>
              11. CONTROLS FOR DO-NOT-TRACK FEATURES
            </h2>
            <div className="main-answer text">
              <p>
                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>
            </div>
          </div>


          <div className="answer" id='quesTwelve'>
            <h2>
              12. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </h2>
            <div className="main-answer text">
              <p className='italic'>
                <strong>In Short: </strong>If you are a resident of California, Connecticut, Utah, Colorado or Virginia, you are granted specific rights regarding access to your personal information.
              </p>
              <p>
                <strong>
                  What categories of personal information do we collect?
                </strong>
              </p>
              <div>
                <p>
                  We have collected the following categories of personal information in the past twelve (12) months:
                </p>

                <table className='table'>
                  <tr>
                    <th>
                      Categories
                    </th>
                    <th>
                      Examples
                    </th>
                    <th>
                      Collected
                    </th>
                  </tr>
                  <tr>
                    <td>
                      A. Identifiers
                    </td>
                    <td>
                      Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name.
                    </td>
                    <td>
                      YES
                    </td>
                  </tr>
                  <tr>
                    <td>
                      B. Personal information as defined in the California Customer Records statute
                    </td>
                    <td>
                      Name, contact information, education, employment, employment history, and financial information
                    </td>
                    <td>
                      NO
                    </td>
                  </tr>
                  <tr>
                    <td>
                      C. Protected classification characteristics under state or federal law
                    </td>
                    <td>
                      Gender and date of birth
                    </td>
                    <td>
                      YES
                    </td>
                  </tr>
                  <tr>
                    <td>
                      D. Commercial information
                    </td>
                    <td>
                      Transaction information, purchase history, financial details, and payment information
                    </td>
                    <td>
                      YES
                    </td>
                  </tr>
                  <tr>
                    <td>
                      E. Biometric information
                    </td>
                    <td>
                      Fingerprints and voiceprints
                    </td>
                    <td>
                      NO
                    </td>
                  </tr>
                  <tr>
                    <td>
                      F. Internet or other similar network activity
                    </td>
                    <td>
                      Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements
                    </td>
                    <td>
                      NO
                    </td>
                  </tr>
                  <tr>
                    <td>
                      G. Geolocation data
                    </td>
                    <td>Device location</td>
                    <td>
                      NO
                    </td>
                  </tr>

                  <tr>
                    <td>
                      H. Audio, electronic, visual, thermal, olfactory, or similar information
                    </td>
                    <td>Images and audio, video or call recordings created in connection with our business activities</td>
                    <td>
                      NO
                    </td>
                  </tr>
                  <tr>
                    <td>
                      I. Professional or employment-related information
                    </td>
                    <td>Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
                    <td>
                      NO
                    </td>
                  </tr>
                  <tr>
                    <td>
                      J. Education Information
                    </td>
                    <td>Student records and directory information</td>
                    <td>
                      NO
                    </td>
                  </tr>
                  <tr>
                    <td>
                      K. Inferences drawn from collected personal information
                    </td>
                    <td>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</td>
                    <td>
                      YES
                    </td>
                  </tr>
                  <tr>
                    <td>
                      L. Sensitive personal Information
                    </td>
                    <td></td>
                    <td>
                      NO
                    </td>
                  </tr>
                </table>
              </div>

              <div>
                <p>
                  We will use and retain the collected personal information as needed to provide the Services or for:
                </p>
                <ul>
                  <li>
                    Category A - As long as the user has an account with us
                  </li>
                  <li>
                    Category B - As long as the user has an account with us
                  </li>
                  <li>
                    Category C - As long as the user has an account with us
                  </li>
                  <li>
                    Category D - As long as the user has an account with us
                  </li>
                  <li>
                    Category K - As long as the user has an account with us
                  </li>
                </ul>
                <p>
                  We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:
                </p>
                <ul>
                  <li>
                    Receiving help through our customer support channels;
                  </li>
                  <li>
                    Participation in customer surveys or contests; and
                  </li>
                  <li>
                    Facilitation in the delivery of our Services and to respond to your inquiries.
                  </li>
                </ul>
              </div>
              <p>
                <strong>How do we use and share your personal information?</strong>
              </p>
              <p>
                Learn about how we use your personal information in the section, "<Link
                  activeClass='active'
                  to='quesTwo'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className='link'>
                  HOW DO WE PROCESS YOUR INFORMATION?
                </Link>"
              </p>
              <p>
                <strong>
                  Will your information be shared with anyone else?
                </strong>
              </p>

              <p>
                We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, "<Link
                  activeClass='active'
                  to='quesFour'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className='link'>
                  WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </Link>"
              </p>

              <p>
                We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.
              </p>

              <p>
                We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We will not sell or share personal information in the future belonging to website visitors, users, and other consumers.
              </p>

              <h3>
                California Residents
              </h3>
              <p>
                California Civil Code Section 1798.83, also known as the "Shine The Light" law permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
              </p>
              <p>
                If you are under 18 years of age, reside in California, and have a registered account with the Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).
              </p>

              <p>
                <strong className='underline'>CCPA Privacy Notice</strong>
              </p>
              <p>
                This section applies only to California residents. Under the California Consumer Privacy Act (CCPA), you have the rights listed below.
              </p>
              <p>
                The California Code of Regulations defines a "residents" as:
              </p>

              <div>
                <p>
                  (1) every individual who is in the State of California for other than a temporary or transitory purpose and
                </p>
                <p>
                  (2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose
                </p>
              </div>

              <p>
                All other individuals are defined as "non-residents."
              </p>

              <p>
                If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.
              </p>


              <p>
                <strong>
                  Your rights with respect to your personal data
                </strong>
              </p>

              <p className='underline'>
                <strong>
                  Right to request deletion of the data — Request to delete
                </strong>
              </p>


              <p>
                You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.
              </p>



              <p className='underline'>
                <strong>
                  Right to be informed — Request to know
                </strong>
              </p>
              <div>
                <p>
                  Depending on the circumstances, you have a right to know:
                </p>
                <ul>
                  <li>
                    whether we collect and use your personal information;
                  </li>
                  <li>
                    the categories of personal information that we collect;
                  </li>
                  <li>
                    the purposes for which the collected personal information is used;
                  </li>
                  <li>
                    whether we sell or share personal information to third parties;
                  </li>
                  <li>
                    the categories of personal information that we sold, shared, or disclosed for a business purpose;
                  </li>
                  <li>
                    the categories of third parties to whom the personal information was sold, shared, or disclosed for a business purpose;
                  </li>
                  <li>
                    the business or commercial purpose for collecting, selling, or sharing personal information; and
                  </li>
                  <li>
                    the specific pieces of personal information we collected about you.
                  </li>
                </ul>
                <p>
                  In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.
                </p>

              </div>


              <p className='underline'>
                <strong>
                  Right to Non-Discrimination for the Exercise of a Consumer's Privacy Rights
                </strong>
              </p>
              <p>
                We will not discriminate against you if you exercise your privacy rights.
              </p>

              <p className='underline'>
                <strong>
                  Right to Limit Use and Disclosure of Sensitive Personal Information
                </strong>
              </p>
              <p>
                We do not process consumer's sensitive personal information.
              </p>



              <p className='underline'>
                <strong>
                  Verification process
                </strong>
              </p>
              <p>
                Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.
              </p>
              <p>
                We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.
              </p>
              <div>
                <p className='underline'>
                  Other privacy rights
                </p>
                <ul>
                  <li>
                    You may object to the processing of your personal information.
                  </li>
                  <li>
                    You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.
                  </li>
                  <li>
                    You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.
                  </li>
                  <li>
                    You may request to opt out from future selling or sharing of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.
                  </li>

                </ul>
                <p>
                  To exercise these rights, you can contact us by submitting a <a href="https://app.termly.io/notify/dac1d3eb-439f-4941-9ede-a4e15cea7e27" target='_blank' className='link'>data subject access request</a>, by visiting (Settings section in the app, or contact us), or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.
                </p>
              </div>
              <h3>
                Colorado Residents
              </h3>

              <div>
                <p>
                  This section applies only to Colorado residents. Under the Colorado Privacy Act (CPA), you have the rights listed below. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law.
                </p>
                <ul>
                  <li>
                    Right to be informed whether or not we are processing your personal data
                  </li>
                  <li>
                    Right to access your personal data
                  </li>
                  <li>
                    Right to correct inaccuracies in your personal data
                  </li>
                  <li>
                    Right to request deletion of your personal data
                  </li>
                  <li>
                    Right to obtain a copy of the personal data you previously shared with us
                  </li>
                  <li>
                    Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")
                  </li>
                </ul>
                <p>
                  To submit a request to exercise these rights described above, please email info@seakspaces.com or submit a <a href="https://app.termly.io/notify/dac1d3eb-439f-4941-9ede-a4e15cea7e27" target='_blank' className='link'>data subject access request</a>.
                </p>
              </div>

              <p>
                If we decline to take action regarding your request and you wish to appeal our decision, please email us at info@seakspaces.com. Within forty-five (45) days of receipt of an appeal, we will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions.
              </p>

              <h3>
                Connecticut Residents
              </h3>
              <div>
                <p>
                  This section applies only to Connecticut residents. Under the Connecticut Data Privacy Act (CTDPA), you have the rights listed below. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law.
                </p>
                <ul>
                  <li>
                    Right to be informed whether or not we are processing your personal data
                  </li>
                  <li>
                    Right to access your personal data
                  </li>
                  <li>
                    Right to correct inaccuracies in your personal data
                  </li>
                  <li>
                    Right to request deletion of your personal data
                  </li>
                  <li>
                    Right to obtain a copy of the personal data you previously shared with us
                  </li>
                  <li>
                    Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")
                  </li>
                </ul>
                <p>
                  To submit a request to exercise these rights described above, please email info@seakspaces.com or submit a <a href="https://app.termly.io/notify/dac1d3eb-439f-4941-9ede-a4e15cea7e27" target='_blank' className='link'>data subject access request</a>.
                </p>
              </div>

              <p>
                If we decline to take action regarding your request and you wish to appeal our decision, please email us at info@seakspaces.com. Within sixty (60) days of receipt of an appeal, we will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions.
              </p>

              <h3>
                Utah Residents
              </h3>

              <div>
                <p>
                  This section applies only to Utah residents. Under the Utah Consumer Privacy Act (UCPA), you have the rights listed below. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law.
                </p>
                <ul>
                  <li>
                    Right to be informed whether or not we are processing your personal data
                  </li>
                  <li>
                    Right to access your personal data
                  </li>
                  <li>
                    Right to request deletion of your personal data
                  </li>
                  <li>
                    Right to obtain a copy of the personal data you previously shared with us
                  </li>
                  <li>
                    Right to opt out of the processing of your personal data if it is used for targeted advertising or the sale of personal data
                  </li>
                </ul>
                <p>
                  To submit a request to exercise these rights described above, please email info@seakspaces.com or submit a <a href="https://app.termly.io/notify/dac1d3eb-439f-4941-9ede-a4e15cea7e27" target='_blank' className='link'>data subject access request</a>.
                </p>
              </div>

              <h3>
                Virginia Residents
              </h3>

              <p>
                Under the Virginia Consumer Data Protection Act (VCDPA):
              </p>

              <p>
                "Consumer" means a natural person who is a resident of the Commonwealth acting only in an individual or household context. It does not include a natural person acting in a commercial or employment context.
              </p>

              <p>
                "Personal data" means any information that is linked or reasonably linkable to an identified or identifiable natural person. "Personal data" does not include de-identified data or publicly available information.
              </p>
              <p>
                "Sale of personal data" means the exchange of personal data for monetary consideration.
              </p>

              <p>
                If this definition of "consumer" applies to you, we must adhere to certain rights and obligations regarding your personal data.
              </p>


              <div>
                <p className="underline">
                  Your rights with respect to your personal data
                </p>
                <ul>
                  <li>
                    Right to be informed whether or not we are processing your personal data
                  </li>
                  <li>
                    Right to access your personal data
                  </li>
                  <li>
                    Right to correct inaccuracies in your personal data
                  </li>
                  <li>
                    Right to request deletion of your personal data
                  </li>
                  <li>
                    Right to obtain a copy of the personal data you previously shared with us
                  </li>
                  <li>
                    Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")
                  </li>
                </ul>
              </div>

              <p className="underline">Exercise your rights provided under the Virginia VCDPA</p>

              <p>
                You may contact us by email at info@seakspaces.com or submit a <a href="https://app.termly.io/notify/dac1d3eb-439f-4941-9ede-a4e15cea7e27" target='_blank' className='link'>data subject access request</a>.

              </p>
              <p>
                If you are using an authorized agent to exercise your rights, we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.
              </p>

              <p className="underline">
                Verification process
              </p>

              <p>
                We may request that you provide additional information reasonably necessary to verify you and your consumer's request. If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request.
              </p>

              <p>
                Upon receiving your request, we will respond without undue delay, but in all cases, within forty-five (45) days of receipt. The response period may be extended once by forty-five (45) additional days when reasonably necessary. We will inform you of any such extension within the initial 45-day response period, together with the reason for the extension.
              </p>


              <p className="underline">
                Right to appeal
              </p>

              <p>
                If we decline to take action regarding your request, we will inform you of our decision and reasoning behind it. If you wish to appeal our decision, please email us at info@seakspaces.com. Within sixty (60) days of receipt of an appeal, we will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may contact the <a href="https://www.oag.state.va.us/consumer-protection/index.php/file-a-complaint" target='_blank' className="link">Attorney General to submit a complaint</a>.
              </p>


            </div>
          </div>

          <div className="answer" id='quesThirteen'>
            <h2>
              13. DO WE MAKE UPDATES TO THIS NOTICE?
            </h2>
            <div className="main-answer text">
              <p className='italic'>
                <strong>In Short: </strong>Yes, we will update this notice as necessary to stay compliant with relevant laws.
              </p>
              <p>
                We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
              </p>
            </div>
          </div>


          <div className="answer" id='quesFourteen'>
            <h2>
              14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </h2>
            <div className="main-answer text">
              <p >
                If you have questions or comments about this notice, you may email us at info@seakspaces.com or contact us by post at:
              </p>
              <p>
              </p>
              <p>
                SeakSpaces, Inc
                <br />
                __________
                <br />
                __________
                <br />
                United States
              </p>
            </div>
          </div>


          <div className="answer" id='quesFifteen'>
            <h2>
              15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
            </h2>
            <div className="main-answer text">
              <p>
                Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please fill out and submit a <a href="https://app.termly.io/notify/dac1d3eb-439f-4941-9ede-a4e15cea7e27" target='_blanl' className="link">data subject access request</a>.
                <br />
                This privacy policy was created using Termly's <a href="https://termly.io/products/privacy-policy-generator/" target='_blank' className="link">Privacy Policy Generator</a>.
              </p>
            </div>
          </div>
























        </div>



      </div>

    </div>
  )
}

export default Privacy