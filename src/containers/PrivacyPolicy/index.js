import React from 'react';
import './style.css';

const PrivacyPolicy = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 text-justify">
          <h1 className="display-3">
            Privacy Policy
          </h1>
          <p className="p-text">At &lt;website_name&gt;, accessible from &lt;website_url&gt;,
          one of our main priorities is the privacy of our visitors.
          This Privacy Policy document contains types of information
          that is collected and recorded by &lt;website_name&gt;
               and how we use it.</p>

          <p className="p-text">If you have additional questions or require more information
               about our Privacy Policy, do not hesitate to contact us.</p>

          <p className="p-text">
            This Privacy Policy applies only to our online activities and
            is valid for visitors to our website with regards to the
            information that they shared and/or collect in &lt;website_name&gt;.
            This policy is not applicable to any information collected offline
            or via channels other than this website.
              </p>

          <h3>
            Consent
          </h3>
          <p className="p-text">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

          <h3>Information we collect</h3>
          <p className="p-text">The personal information that you are asked to provide, and
          the reasons why you are asked to provide it, will be made
          clear to you at the point we ask you to provide your personal
          information.</p>

          <p className="p-text">If you contact us directly, we may receive additional information
          about you such as your name, email address, phone number, the
          contents of the message and/or attachments you may send us, and
             any other information you may choose to provide.</p>

          <h3>CCPA Privacy Rights (Do Not Sell My Personal Information)</h3>
          <h6>Under the CCPA, among other rights, California consumers have the right to:</h6>

          <p className="p-text">
            Request that a business that collects a consumer's
            personal data disclose the categories and specific
            pieces of personal data that a business has collected
             about consumers.</p>

          <p className="p-text">Request that a business delete any personal data
            about the consumer that a business has collected.</p>

          <p className="p-text">Request that a business that sells a consumer's
            personal data, not sell the consumer's personal data.</p>

          <p className="p-text">If you make a request, we have one month to respond
          to you. If you would like to exercise any of these
             rights, please contact us.</p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy