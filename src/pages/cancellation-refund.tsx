import { ListTextPrivacy } from "../components/shared/list-text";
import { MaxWrapper } from "../components/shared/max-wrapper";
import { Separator } from "../components/ui/separator";

export const CancellationRefundsPage = () => {
  return (
    <MaxWrapper>
      <div className="w-full flex items-center justify-center flex-col gap-5 mt-24 md:mt-20">
        <div className="w-full md:w-3/5 h-full pt-4 pb-4 md:py-6 px-4 flex flex-col items-start justify-center gap-5 md:gap-8 md:mt-5">
          {/* Title */}
          <div className="w-full flex flex-col gap-4 md:gap-6">
            <h1 className="text-3xl font-spaceGrotesk md:text-[48px] font-bold w-full text-start">
              Cancellation & Refunds Policy
            </h1>
            <Separator className="bg-dull mt-4" />
          </div>

          {/* Introduction */}
          <ListTextPrivacy
            title="We thank you for your purchase from PropTryx, operated by PROPTRYX RE OPC PVT. LTD"
            description="We request you to carefully read the policies, terms, and procedures outlined below, as they contain important information regarding your rights and responsibilities in relation to any purchase made by you (the “Customer”) through our Website, unless expressly stated otherwise in a specific product description or promotional offer."
            description1="This CANCELLATION AND REFUNDS POLICY governs the cancellation, return, and refund of orders placed on the Website."
          />

          <Separator className="bg-dull mt-2" />

          {/* Cancellation Policy */}
          <ListTextPrivacy
            title="Cancellation Policy"
            description="The Company permits Customers to cancel orders placed on the Website under the following conditions:"
            items={[
              "If cancellation is requested within one (1) hour of payment confirmation, no cancellation charges will be applied.",
              "If cancellation is requested after one (1) hour, handling charges of 25% will be deducted from the amount paid.",
            ]}
          />

          <Separator className="bg-dull mt-2" />

          {/* Refund Policy */}
          <ListTextPrivacy
            title="Refund Policy"
            description="Refunds shall be processed in accordance with the following terms"
            items={[
              "For cancellations made in compliance with the Cancellation Policy, the refund (after applicable deductions) will be processed to the Customer’s ledger within seven (7) business days from the date of cancellation.",
              "ustomers may request transfer of their refund amount or positive ledger balance to their registered bank account. Such transfers will be processed within seven (7) business days.",
            ]}
          />

          <Separator className="bg-dull mt-2" />

          {/* Contact Support */}
          <ListTextPrivacy
            title="Contact Support"
            description="For assistance or queries regarding cancellations and refunds:"
            items={[
              "Phone: +919707128780",
              "Email: support@proptryx.com",
              "Company: PROPTRYX RE OPC PVT. LTD.",
            ]}
          />
        </div>
      </div>
    </MaxWrapper>
  );
};
