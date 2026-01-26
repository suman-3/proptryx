import { ListTextPrivacy } from "../components/shared/list-text";
import { MaxWrapper } from "../components/shared/max-wrapper";
import { Separator } from "../components/ui/separator";

export const PrivacyPolicyPage = () => {
    return (
        <MaxWrapper>
            <div className="w-full flex items-center justify-center flex-col gap-5 mt-24 md:mt-20">
                <div className="w-full md:w-3/5 h-full pt-4 pb-4 md:py-6 px-4 flex flex-col items-start justify-center gap-5 md:gap-8 md:mt-5">
                    <div className="w-full flex flex-col gap-4 md:gap-6">
                        <h1 className="text-3xl font-spaceGrotesk md:text-[48px] font-bold w-full text-start">
                            Privacy Policy
                        </h1>
                        <Separator className="bg-dull mt-4" />
                    </div>

                    {/* 1. Overview */}
                    <ListTextPrivacy
                        title="Overview"
                        description="This Privacy Policy explains how PropTryx collects, uses, stores, and protects user information when you use our commercial real estate platform."
                    />

                    {/* 2. Information We Collect */}
                    <ListTextPrivacy
                        title="Information We Collect"
                        description="We collect various types of information to provide and improve our services."
                        items={[
                            {
                                text: "Personal Information",
                                subItems: [
                                    "Name",
                                    "Email address",
                                    "Phone number",
                                    "Location data (if enabled)",
                                    "Organization details (if applicable)",
                                ],
                            },
                            {
                                text: "Property & Listing Information",
                                subItems: [
                                    "Property descriptions",
                                    "Images, floor plans, brochures",
                                    "Commercial and legal documents uploaded by Developers",
                                ],
                            },
                            "Usage data and analytics",
                            "Device and browser information",
                        ]}
                    />

                    <Separator className="bg-dull mt-2" />

                    {/* 3. How We Use Information */}
                    <ListTextPrivacy
                        title="How We Use Information"
                        description="We use collected data to:"
                        items={[
                            "Display property listings",
                            "Enable search, filters, and enquiries",
                            "Facilitate communication between Occupiers and Developers",
                            "Improve Platform functionality",
                            "Ensure security and prevent misuse",
                            "Comply with legal obligations",
                        ]}
                    />

                    {/* 4. Document & Content Handling */}
                    <ListTextPrivacy
                        title="Document & Content Handling"
                        items={[
                            "Documents uploaded by Developers are visible only to intended users based on access permissions",
                            "PropTryx does not independently verify legal documents",
                            "Users are responsible for maintaining confidentiality of shared documents",
                        ]}
                    />

                    <Separator className="bg-dull mt-2" />

                    {/* 5. Data Sharing */}
                    <ListTextPrivacy
                        title="Data Sharing"
                        description="We do not sell personal data. Data may be shared with:"
                        items={[
                            "Authorized users (as part of normal platform operation)",
                            "Cloud infrastructure providers",
                            "Legal or regulatory authorities when required by law",
                            "All third parties are bound by confidentiality obligations.",
                        ]}
                    />

                    {/* 6. Data Storage & Security */}
                    <ListTextPrivacy
                        title="Data Storage & Security"
                        description="Data is stored on secure cloud infrastructure."
                        items={[
                            "Industry-standard security measures are implemented",
                            "Access controls and monitoring are in place",
                            "While we strive to protect your data, no system can be guaranteed 100% secure.",
                        ]}
                    />

                    <Separator className="bg-dull mt-2" />

                    {/* 7. Data Retention */}
                    <ListTextPrivacy
                        title="Data Retention"
                        description="Data is retained:"
                        items={[
                            "As long as your account remains active",
                            "As required to provide services",
                            "As required by applicable laws",
                            "Users may request deletion of their data subject to legal and contractual obligations.",
                        ]}
                    />

                    {/* 8. User Rights */}
                    <ListTextPrivacy
                        title="User Rights"
                        description="You may:"
                        items={[
                            "Access and update your information",
                            "Request deletion of your account",
                            "Withdraw consent where applicable",
                            "Requests can be sent to admin@proptryx.com",
                        ]}
                    />

                    {/* 9. App Permissions */}
                    <ListTextPrivacy
                        title="App Permissions"
                        description="PropTryx may request:"
                        items={[
                            "Internet access (for platform functionality)",
                            "Storage access (for document upload/download)",
                            "Permissions are used strictly for core features.",
                        ]}
                    />

                    <Separator className="bg-dull mt-2" />

                    {/* 10. Children's Privacy */}
                    <ListTextPrivacy
                        title="Children's Privacy"
                        items={[
                            "PropTryx is not intended for individuals under the age of 18.",
                            "We do not knowingly collect children's data.",
                        ]}
                    />

                    <Separator className="bg-dull mt-2" />

                    {/* 11. Policy Updates */}
                    <ListTextPrivacy
                        title="Policy Updates"
                        items={[
                            "This Privacy Policy may be updated periodically.",
                            "Changes will be communicated via the App or website.",
                        ]}
                    />
                    <Separator className="bg-dull mt-2" />

                    <ListTextPrivacy title="Contact Us"
                        items={[
                            "Email: admin@proptryx.com",
                            "Company: PropTryx RE OPC Pvt. Ltd.",
                        ]}
                    />
                </div>
            </div>
        </MaxWrapper>
    );
};
