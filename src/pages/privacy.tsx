import { ListTextPrivacy } from "../components/shared/list-text";
import { MaxWrapper } from "../components/shared/max-wrapper";
import { Separator } from "../components/ui/separator";

export const PrivacyPolicyPage = () => {
    return (
        <MaxWrapper>
            <div className="w-full flex items-center justify-center flex-col gap-5 mt-24 md:mt-20">
                <div className="w-full md:w-3/5 h-full pt-4 pb-4 md:py-6 px-4 flex flex-col items-start justify-center gap-5 md:gap-8 md:mt-5">

                    {/* Title */}
                    <div className="w-full flex flex-col gap-4 md:gap-6">
                        <h1 className="text-3xl font-spaceGrotesk md:text-[48px] font-bold w-full text-start">
                            Privacy Policy
                        </h1>
                        <Separator className="bg-dull mt-4" />
                    </div>

                    {/* 1. Introduction */}
                    <ListTextPrivacy
                        title="Introduction"
                        description="This Privacy Policy explains how PropTryx RE OPC Pvt. Ltd. collects, uses, stores, and protects user information across its platforms — PropTryx Occupier and PropTryx Developer."
                        items={[
                            "PropTryx Occupier is designed for individuals and businesses searching for residential or commercial properties.",
                            "PropTryx Developer is built for developers, builders, brokers, and property owners to list and manage properties.",
                            "By using PropTryx, you agree to the collection and use of information in accordance with this policy.",
                            "This policy is governed by the laws of India, with jurisdiction in Kolkata, West Bengal."
                        ]}
                    />

                    <Separator className="bg-dull mt-2" />

                    {/* 2. Information We Collect */}
                    <ListTextPrivacy
                        title="Information We Collect"
                        description="We collect the following types of information:"
                        items={[
                            {
                                text: "Account Information",
                                subItems: [
                                    "Name",
                                    "Phone number",
                                    "Email address",
                                    "Location",
                                ],
                            },
                            {
                                text: "Occupier Information",
                                subItems: [
                                    "Location preferences",
                                    "Budget range",
                                    "Property type (Residential/Commercial)",
                                    "Search filters and saved preferences",
                                    "Saved/Favorite properties",
                                    "Properties viewed and enquiry history",
                                ],
                            },
                            {
                                text: "Developer Information",
                                subItems: [
                                    "Property details (location, size, pricing, availability)",
                                    "Property images and media files",
                                    "Occupier enquiry details",
                                    "Communication history",
                                    "Property analytics and listing performance data",
                                ],
                            },
                            "Usage data and device information",
                        ]}
                    />

                    <Separator className="bg-dull mt-2" />

                    {/* 3. How We Use Information */}
                    <ListTextPrivacy
                        title="How We Use Information"
                        description="We use collected data to:"
                        items={[
                            "Create and manage user accounts",
                            "Provide personalized property recommendations",
                            "Enable communication between Occupiers and Developers",
                            "Display and manage property listings",
                            "Provide analytics and performance tracking",
                            "Send notifications about enquiries and updates",
                            "Improve search algorithms and user experience",
                            "Ensure platform security and prevent misuse",
                            "Comply with legal obligations",
                        ]}
                    />

                    <Separator className="bg-dull mt-2" />

                    {/* 4. Data Sharing */}
                    <ListTextPrivacy
                        title="Data Sharing"
                        description="We respect your privacy and do not sell personal data."
                        items={[
                            "Contact details are shared only when a user makes an enquiry.",
                            "Property details are visible to verified users within the platform.",
                            "No third-party sharing for marketing or advertising purposes.",
                            "Data may be shared if required by law or to protect legal rights.",
                            "Trusted service providers may access data under strict confidentiality agreements.",
                        ]}
                    />

                    <Separator className="bg-dull mt-2" />

                    {/* 5. Data Security */}
                    <ListTextPrivacy
                        title="Data Security"
                        items={[
                            "End-to-end encrypted data transmission",
                            "Secure cloud infrastructure",
                            "Encrypted account credentials",
                            "Regular security audits and updates",
                            "While we strive for maximum security, no system can be guaranteed 100% secure.",
                        ]}
                    />

                    <Separator className="bg-dull mt-2" />

                    {/* 6. Data Retention */}
                    <ListTextPrivacy
                        title="Data Retention"
                        items={[
                            "Data is retained as long as your account remains active.",
                            "Search preferences and listing data may be retained for service improvement.",
                            "You may request account deletion at any time.",
                            "Upon deletion, personal data will be permanently removed within 30 days unless required by law.",
                        ]}
                    />

                    <Separator className="bg-dull mt-2" />

                    {/* 7. User Rights */}
                    <ListTextPrivacy
                        title="User Rights"
                        description="You have the right to:"
                        items={[
                            "Access your personal data",
                            "Update or correct inaccurate information",
                            "Delete your account and associated data",
                            "Clear search history and preferences",
                            "Opt-out of notifications and promotional communications",
                            "Request data portability where applicable",
                            "Submit requests via support@proptryx.com",
                        ]}
                    />

                    <Separator className="bg-dull mt-2" />

                    {/* 8. Account & Data Deletion */}
                    <ListTextPrivacy
                        title="Account & Data Deletion"
                        items={[
                            "Go to Profile/Settings → Delete Account in the app.",
                            "Alternatively, email support@proptryx.com with your request.",
                            "All personal data, listings, enquiries, favorites, and history will be permanently deleted within 30 days.",
                        ]}
                    />

                    <Separator className="bg-dull mt-2" />

                    {/* 9. Location Data Usage */}
                    <ListTextPrivacy
                        title="Location Data Usage"
                        items={[
                            "To show relevant properties near preferred locations",
                            "To improve recommendation accuracy",
                            "Location data is not sold or shared with third parties",
                            "Users can clear location preferences anytime from settings",
                        ]}
                    />

                    <Separator className="bg-dull mt-2" />

                    {/* 10. Children's Privacy */}
                    <ListTextPrivacy
                        title="Children's Privacy"
                        items={[
                            "PropTryx platforms are intended for users aged 18 years and above.",
                            "We do not knowingly collect data from children under 18.",
                        ]}
                    />

                    <Separator className="bg-dull mt-2" />

                    {/* 11. Third-Party Services */}
                    <ListTextPrivacy
                        title="Third-Party Services"
                        items={[
                            "Cloud storage providers",
                            "Analytics and performance monitoring services",
                            "Push notification services",
                            "All third-party services operate under confidentiality obligations.",
                        ]}
                    />

                    <Separator className="bg-dull mt-2" />

                    {/* 12. Policy Updates */}
                    <ListTextPrivacy
                        title="Policy Updates"
                        items={[
                            "This Privacy Policy may be updated periodically.",
                            "Changes will be communicated via in-app notification or email.",
                            "Continued use of the platform constitutes acceptance of updates.",
                        ]}
                    />

                    <Separator className="bg-dull mt-2" />

                    {/* 13. Contact */}
                    <ListTextPrivacy
                        title="Contact Us"
                        items={[
                            "Email: support@proptryx.com",
                            "Company: PropTryx RE OPC Pvt. Ltd.",
                            "Response Time: Within 7 business days",
                        ]}
                    />

                </div>
            </div>
        </MaxWrapper>
    );
};