import React from "react";
import Footer from "@/components/mainWebsite/Footer";
import Nav from "@/components/mainWebsite/Nav";

const Policy = () => {
  return (
    <div>
      <Nav />
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-primary text-2xl mb-4 font-extrabold">
          Assistivteq Privacy Policy
        </h1>

        <div className="text-gray-700 mb-6">
          <h2 className="text-primary text-lg mb-2">
            1. Information Collection:
          </h2>
          <p>
            We collect personal information, such as name, email address, and
            contact details, when users voluntarily provide it to us for
            purposes such as account registration, subscription to our services,
            or inquiries.
          </p>
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-primary text-lg mb-2">2. Use of Information:</h2>
          <p>
            The information we collect is used to provide and improve our
            services, personalize user experience, communicate with users,
            analyze usage patterns, and ensure the security of our platform.
          </p>
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-primary text-lg mb-2">3. Data Sharing:</h2>
          <p>
            We may share user information with trusted third-party service
            providers who assist us in operating our website, conducting our
            business, or servicing our users, as long as those parties agree to
            keep this information confidential.
          </p>
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-primary text-lg mb-2">4. User Controls:</h2>
          <p>
            Users have the right to access, correct, or delete their personal
            information and to opt-out of receiving marketing communications
            from us. Users can exercise these rights by contacting us through
            the information provided below.
          </p>
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-primary text-lg mb-2">5. Data Security:</h2>
          <p>
            We implement appropriate security measures to protect against
            unauthorized access, disclosure, alteration, or destruction of user
            information.
          </p>
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-primary text-lg mb-2">6. Retention Period:</h2>
          <p>
            We retain user information for as long as necessary to fulfill the
            purposes outlined in this privacy policy unless a longer retention
            period is required or permitted by law.
          </p>
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-primary text-lg mb-2">
            7. Updates to the Policy:
          </h2>
          <p>
            We may update this privacy policy from time to time to reflect
            changes in our practices or legal requirements. Users will be
            notified of any material changes to the policy through email or by
            prominently posting a notice on our website.
          </p>
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-primary text-lg mb-2">8. Contact Information:</h2>
          <p>
            If you have any questions, concerns or requests regarding this
            privacy policy or our practices concerning user information, please
            contact us at{" "}
            <a href="mailto:support@assistivteq.com" target="_blank">
              support@assistivteq.com
            </a>
            .
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Policy;
