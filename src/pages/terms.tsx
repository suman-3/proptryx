import { ListTextPrivacy } from "../components/shared/list-text";
import { MaxWrapper } from "../components/shared/max-wrapper";
import { Separator } from "../components/ui/separator";

export const TermsOfServicePage = () => {
  return (
    <MaxWrapper>
      <div className="w-full flex items-center justify-center flex-col gap-5 mt-24 md:mt-20">
        <div className="w-full md:w-3/5 h-full pt-4 pb-4 md:py-6 px-4 flex flex-col items-start justify-center gap-5 md:gap-8 md:mt-5">

          {/* Title */}
          <div className="w-full flex flex-col gap-4 md:gap-6">
            <h1 className="text-3xl font-spaceGrotesk md:text-[48px] font-bold w-full text-start">
              Terms of Service
            </h1>
            <Separator className="bg-dull mt-4" />
          </div>

          {/* Acceptance */}
          <ListTextPrivacy
            title="Acceptance of Terms"
            description="Before using PropTryx, the user must accept the Terms of Service outlined below."
            items={[
              "By accessing the site on any device, you accept these terms.",
              "PROPTRYX RE OPC PVT. LTD. may modify these terms at any time without prior notice.",
              "Users must check this page periodically for updates.",
            ]}
          />

          <Separator className="bg-dull mt-2" />

          {/* Description of Service */}
          <ListTextPrivacy
            title="Description of Service"
            description="PROPTRYX RE is a proptech platform dealing with commercial properties."
          />

          <Separator className="bg-dull mt-2" />

          {/* Usage Restrictions */}
          <ListTextPrivacy
            title="Usage Restrictions"
            items={[
              "All visuals, text, audio, and video content are protected by copyright and intellectual property laws.",
              "Users must not copy, reproduce, or misuse site content.",
            ]}
          />

          {/* Notice */}
          <ListTextPrivacy
            title="Notice"
            description="PROPTRYX RE OPC may contact customers via postal mail, email, or site notifications using the information provided by the user."
          />

          <Separator className="bg-dull mt-2" />

          {/* Pricing Policy */}
          <ListTextPrivacy
            title="Pricing Policy"
            description="PROPTRYX RE sells its services exclusively online and aims to provide quality services at reasonable prices."
          />

          {/* Site Use */}
          <ListTextPrivacy
            title="Site Use"
            items={[
              "Users must not use the website for illegal or unauthorized purposes.",
              "Comments or submissions must not violate third-party rights (copyright, trademark, privacy, etc.).",
              "Users are solely responsible for content they submit.",
            ]}
          />

          <Separator className="bg-dull mt-2" />

          {/* Indemnity */}
          <ListTextPrivacy
            title="Indemnity"
            description="Users agree to indemnify and hold PROPTRYX RE harmless from claims, losses, or damages resulting from violations of these terms."
          />

          {/* Third Party Links */}
          <ListTextPrivacy
            title="Third Party Links"
            description="We may use third-party services to improve the site. However, we do not control or take responsibility for third-party services."
          />

          <Separator className="bg-dull mt-2" />

          {/* Privacy & Data Protection */}
          <ListTextPrivacy
            title="Privacy & Data Protection"
            items={[
              "We do not share or sell your personal information to third parties.",
              "We do not store credit card information on our servers.",
              "Payments are processed through a secure payment gateway.",
              "We collect name, email, phone number, and billing address to process requests and provide support.",
              "Non-personal data like IP address and browser type is used for analytics.",
            ]}
          />

          {/* Email Address */}
          <ListTextPrivacy
            title="Email Address Usage"
            description="Your email address is used solely for order processing and communication. We do not sell it and are committed to preventing spam."
          />

          {/* Personal Information */}
          <ListTextPrivacy
            title="Personal Information"
            items={[
              "Collected during account creation or order placement.",
              "Used for processing orders and providing updates.",
              "Credit card details are never stored on our servers.",
              "We do not share personal information with third parties.",
            ]}
          />

          {/* Cookies */}
          <ListTextPrivacy
            title="Cookies"
            description="Cookies are used to enhance user experience and maintain cart functionality. They do not store personal information."
          />

          <Separator className="bg-dull mt-2" />

          {/* Security */}
          <ListTextPrivacy
            title="Security"
            description="We use 256-bit SSL encryption to secure transactions and protect confidential information."
          />

          {/* Payment */}
          <ListTextPrivacy
            title="Payment"
            items={[
              "PROPTRYX RE retains your card information on their servers. During payment processing, the data is encrypted with the Payment Card Industry Data Security Standard (PCI-DSS). Your purchase transaction information is solely used to fulfil the purchase and is not stored after completion of the transaction.",
              "Our payment gateway is Razorpay. You can read about their privacy policy here: https://razorpay.com/privacy-policy",
            ]}
          />

          {/* Disclosure */}
          <ListTextPrivacy
            title="Disclosure"
            description="We may disclose personal information if required by law or in case of breach of these Terms."
          />

          <Separator className="bg-dull mt-2" />

          {/* Policy Changes */}
          <ListTextPrivacy
            title="Changes to Policy"
            description="PROPTRYX RE reserves the right to modify this policy at any time. Updates are effective immediately upon posting."
          />

          {/* Website */}
          <ListTextPrivacy
            title="Official Website"
            items={[
              "https://proptryx.com",
            ]}
          />

          <Separator className="bg-dull mt-2" />

        </div>
      </div>
    </MaxWrapper>
  );
};