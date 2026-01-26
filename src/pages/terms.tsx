import { ListTextPrivacy } from "../components/shared/list-text";
import { MaxWrapper } from "../components/shared/max-wrapper";
import { Separator } from "../components/ui/separator";

export const TermsConditionsPage = () => {
  return (
    <MaxWrapper>
      <div className="w-full flex items-center justify-center flex-col gap-5 mt-24 md:mt-20">
        <div className="w-full md:w-3/5 h-full pt-4 pb-4 md:py-6 px-4 flex flex-col items-start justify-center gap-5 md:gap-8 md:mt-5">
          <div className="w-full flex flex-col gap-4 md:gap-6">
            <h1 className="text-3xl font-spaceGrotesk md:text-[48px] font-bold w-full text-start">
              Terms & Conditions
            </h1>
            <Separator className="bg-dull mt-4" />
          </div>

          {/* 1. Introduction */}
          <ListTextPrivacy
            title="Introduction"
            description="Welcome to PropTryx platform, operated by PropTryx RE OPC Pvt. Ltd. PropTryx is a commercial real estate discovery and listing platform that enables property owners, developers, and authorized agents ('Developers') to showcase commercial properties, and allows buyers, tenants, and users ('occupiers') to search and enquire about such properties."
            items={[
              "By accessing or using PropTryx, you agree to be bound by these Terms & Conditions.",
              "If you do not agree, please do not use the Platform.",
            ]}
          />

          <Separator className="bg-dull mt-2" />

          {/* 2. Eligibility */}
          <ListTextPrivacy
            title="Eligibility"
            items={[
              "You must be 18 years or older",
              "You must be legally capable of entering into contracts",
              "If you are using PropTryx on behalf of an organization, you confirm you are authorized to do so",
            ]}
          />

          {/* 3. Nature of Platform */}
          <ListTextPrivacy
            title="Nature of Platform"
            items={[
              {
                text: "PropTryx:",
                subItems: [
                  "Acts as a technology platform only",
                  "Does not own, sell, lease, or broker properties",
                  "Does not verify ownership, legality, or authenticity of listings or documents",
                ],
              },
              "All transactions, negotiations, and agreements are conducted directly between Developers and Occupiers."
            ]}
          />

          <Separator className="bg-dull mt-2" />

          {/* 4. User Accounts */}
          <ListTextPrivacy
            title="User Accounts"
            items={[
              {
                text: "You agree to:",
                subItems: [
                  "Provide accurate and current information",
                  "Maintain confidentiality of your login credentials",
                  "Be responsible for all activities under your account",
                ],
              },
              "We reserve the right to suspend or terminate accounts that provide false or misleading information.",
            ]}
          />

          {/* 5. Property Listings & Content */}
          <ListTextPrivacy
            title="Property Listings & Content"
            items={[
              {
                text: "Developers agree that:",
                subItems: [
                  "They have legal rights or authorization to list the property",
                  "Uploaded documents, images, and information are accurate and lawful",
                  "Content does not infringe third-party rights",
                ],
              },
              {
                text: "Users acknowledge:",
                subItems: [
                  "Property details are provided by Sellers",
                  "PropTryx is not responsible for inaccuracies or omissions",
                ],
              },
            ]}
          />

          <Separator className="bg-dull mt-2" />

          {/* 6. Prohibited Activities */}
          <ListTextPrivacy
            title="Prohibited Activities"
            description="You must not:"
            items={[
              "Upload false, misleading, or illegal content",
              "Infringe intellectual property rights",
              "Attempt to scrape, reverse-engineer, or misuse the Platform",
              "Use the Platform for unlawful or fraudulent purposes",
            ]}
          />

          {/* 7. Intellectual Property */}
          <ListTextPrivacy
            title="Intellectual Property"
            description="All Platform software, branding, logos, and design elements belong exclusively to PropTryx RE OPC Pvt. Ltd."
            description1="Users retain ownership of content they upload but grant PropTryx a non-exclusive, royalty-free license to display such content on the Platform."
          />

          {/* 8. Third-Party Links & Services */}
          <ListTextPrivacy
            title="Third-Party Links & Services"
            description="PropTryx may contain links to third-party websites or services. We are not responsible for
their content, policies, or practices."
          />

          <Separator className="bg-dull mt-2" />

          {/* 9. Limitation of Liability */}
          <ListTextPrivacy
            title="Limitation of Liability"
            description="To the maximum extent permitted by law:"
            items={[
              "PropTryx is provided on an 'as-is' basis",
              "We are not liable for financial losses, disputes, or damages arising from property transactions",
              "We are not responsible for decisions made based on Platform content",
            ]}
          />

          {/* 10. Suspension & Termination */}
          <ListTextPrivacy
            title="Suspension & Termination"
            description="We reserve the right to suspend or terminate access:"
            items={[
              "For violation of these Terms",
              "For misuse of the Platform",
              "If required by law or regulatory authorities",
            ]}
          />

          {/* 11. Modifications */}
          <ListTextPrivacy
            title="Modifications"
            description="We may update these Terms from time to time. Continued use of the App indicates
acceptance of updated Terms."
          />

          <Separator className="bg-dull mt-2" />

          {/* 12. Governing Law */}
          <ListTextPrivacy
            title="Governing Law"
            description="These Terms are governed by the laws of India, with jurisdiction in Kolkata, West Bengal."
          />

          <Separator className="bg-dull mt-2" />
          {/* 13. Contact */}
          <ListTextPrivacy
            title="Contact"
            items={[
              "Email: support@proptryx.com",
              "Company: PropTryx RE OPC Pvt. Ltd.",
            ]}
          />
        </div>
      </div>
    </MaxWrapper>
  );
};
