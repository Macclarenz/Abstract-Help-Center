// category images
import usingAbstract from "./assets/using-abstract.png";
import manageAccount from "./assets/manage-your-account.png";
import manageOrganization from "./assets/manage-organization.png";
import manageBilling from "./assets/manage-billing.png";
import authenticateAbstract from "./assets/authenticate-to-abstract.png";
import abstractSupport from "./assets/abstract-support.png";

export default {
    categories: [
        {
            heading: "Using Abstract",
            description:
                "Abstract lets you manage, version, and document your designs in one place.",
            image: usingAbstract,
        },
        {
            heading: "Mange your account",
            description:
                "Configure yoour account settings, such as your email, profile details, and password.",
            image: manageAccount,
        },
        {
            heading: "Manage organizations, teams, and projects",
            description:
                "Use Abtract organizations, teams, and projects to organize your people and your work.",
            image: manageOrganization,
        },
        {
            heading: "Manage billing",
            description: "Change subscriptions and payment details.",
            image: manageBilling,
        },
        {
            heading: "Authenticate to Abstract",
            description:
                "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
            image: authenticateAbstract,
        },
        {
            heading: "Abstract support",
            description: "Get in touch with a human.",
            image: abstractSupport,
        },
    ],
    footerNavLinks: [
        { heading: "Abtract", links: ["Start Trial", "Pricing", "Download"] },
        {
            heading: "Resources",
            links: ["Blog", "Help Center", "Release", "Notes", "Status"],
        },
        {
            heading: "Community",
            links: ["Twitter", "Linkedln", "Facebook", "Dribbble", "Podcast"],
        },
        {
            heading: "Company",
            links: ["About us", "Careers", "Legal"],
            contact: { email: "info@abstract.com" },
        },
    ],
};
