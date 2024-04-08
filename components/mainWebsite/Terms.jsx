import React from "react";

export default function Terms() {
  return (
    <div>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-primary text-2xl mb-4 font-extrabold">
          Assistivteq Terms of Service
        </h1>

        <p className="mb-4">
          Welcome to AssistivTeq! These Terms of Service ("Terms") govern your
          access to and use of our assistive technology software solutions
          (referred to as the "Services"). By accessing or using our Services,
          you agree to be bound by these Terms.
        </p>

        <div className="text-gray-700 mb-6">
          <h2 className="text-primary text-lg mb-2">Acceptance of Terms</h2>
          <p>
            By accessing or using our Services, you agree to these Terms and to
            comply with all applicable laws and regulations. If you do not agree
            with these Terms, please do not use our Services.
          </p>
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-primary text-lg mb-2">Use of Services</h2>
          <p>
            a. You must be at least 18 years old or have parental consent to use
            our Services.
            <br />
            b. Our Services are designed to enhance the lives of individuals
            with disabilities, promoting independence, accessibility, and
            inclusivity.
            <br />
            c. You agree to use our Services only for their intended purposes
            and in compliance with all applicable laws and regulations.
          </p>
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-primary text-lg mb-2">User Accounts</h2>
          <p>
            a. In order to access certain features of our Services, you may be
            required to create a user account. You are responsible for
            maintaining the confidentiality of your account information and for
            all activities that occur under your account. <br />
            b. You agree to provide accurate and complete information when
            creating your account and to update your information as necessary to
            keep it current.
          </p>
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-primary text-lg mb-2">Intellectual Property</h2>
          <p>
            a. All software, content, and materials included in our Services are
            the property of AssistivTeq or its licensors and are protected by
            copyright, trademark, and other intellectual property laws.
            <br /> b. You may not modify, reproduce, distribute, display, or
            otherwise use any content from our Services without the prior
            written consent of AssistivTeq.
          </p>
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-primary text-lg mb-2">Privacy</h2>
          <p>
            a. Our Privacy Policy governs the collection, use, and disclosure of
            your personal information. By using our Services, you consent to the
            collection and use of your information in accordance with our
            Privacy Policy.
          </p>
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-primary text-lg mb-2">Limitation of Liability</h2>
          <p>
            a. To the fullest extent permitted by law, AssistivTeq shall not be
            liable for any direct, indirect, incidental, special, or
            consequential damages arising out of or in any way connected with
            your use of our Services.
          </p>
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-primary text-lg mb-2">Termination</h2>
          <p>
            a. AssistivTeq reserves the right to terminate or suspend your
            access to our Services at any time and for any reason, without prior
            notice.
          </p>
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-primary text-lg mb-2">Changes to Terms</h2>
          <p>
            a. We reserve the right to update or modify these Terms at any time
            without prior notice. Your continued use of our Services after any
            such changes constitutes your acceptance of the revised Terms.
          </p>
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-primary text-lg mb-2">Governing Law</h2>
          <p>
            a. These Terms shall be governed by and construed in accordance with
            the laws of concerned Jurisdiction, without regard to its conflict
            of law principles.
          </p>
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-primary text-lg mb-2">Contact Us</h2>
          <p>
            If you have any questions or concerns about these Terms, please
            contact us at{" "}
            <Link href="mailto:support@assistivteq.com" target="_blank">
              support@assistivteq.com
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
