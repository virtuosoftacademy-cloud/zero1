// export const digitalServices = [
//     {
//       title: "Custom Software Development",
//       description:
//         "Purpose-built software solutions designed around your business workflows, delivering scalability, reliability, and long-term competitive advantage.",
//     },{
//       title: "App Development (Mobile & Web)",
//       description:
//         "High-performance web and mobile applications engineered for usability, security, and seamless user experiences across platforms.",
//     },
//     {
//       title: "App Modernization",
//       description:
//         "Upgrading legacy applications through refactoring, re-architecture, and technology upgrades to improve performance, security, and maintainability.",
//     },
//     {
//       title: "Database Migration",
//       description:
//     "Secure and structured migration of data across platforms, ensuring data integrity, minimal downtime, and improved performance at scale."
//     },
//     {
//       title: "Third-Party Integrations",
//       description:
//     "Seamless integration of external systems, APIs, and platforms to unify data, automate processes, and extend application capabilities."
//     }
//   ];
// export const cloudAi = [
//   {
//     title:"Cloud Engineering",
//     description:"End-to-end Cloud Consulting, Migration, and Managed Services. We utilize DevSecOps to embed security into the deployment workflow."
//   },
//   {
//     title:"Artificial Intelligence",
//     description:"Drive intelligent automation through Custom Agents and Generative AI, while leveraging Computer Vision and OCR to seamlessly convert physical operations into digital insights for real-time control."
//   },
//   {
//     title:"Data Services",
//     description:`From Data Warehousing to Databricks as a Service (DBaaS), we transform raw data into actionable Business Intelligence (BI).`
//   },
// ] 

// export const EnterpriseSolutions=[
//   {
//     title:"ERP Consulting & Implementation:",
//     description:"As Qatar’s premier SAP partner, we manage end-to-end implementation, licensing, and customization for large enterprises. We extend this expertise to Odoo and Microsoft Dynamics 365, delivering full-cycle consulting that spans functional mapping, technical development, and seamless version upgrades to optimize your operational core."
//   },
//   {
//     title:"IT Governance & Cybersecurity",
//     description:"We provide specialized OT security for Industrial Control Systems (ICS) and SCADA networks, tailored specifically for the Oil & Gas sector. Our comprehensive risk management approach includes VAPT and rigorous governance frameworks designed to ensure full compliance with ISO 20000 and 27001 standards."
//   },

// ]

// export const distribution=[
//   {
//     title:"Master Distribution",
//     description:"A Distributor of Choice for global tech brands, utilizing a vast reseller network to penetrate Retail and SMB markets."
//   },
//   {
//     title:"Promoter Management",
//     description:"Deployed teams at key retail outlets to drive merchandising and direct sales."
//   },
//   {
//     title:"VAN Network",
//     description:"A dedicated fleet ensuring immediate stock availability for independent retail chains across Qatar."
//   },
//   {
//     title:"Infrastructure Support",
//     description:"Ensure system longevity with multi-tier hardware maintenance packages ranging from basic to top-level support. We complement this with comprehensive outsourcing services, providing expert IT operation management and flexible staff augmentation to optimize your workforce efficiency."
//   }
// ]
// export const growthAndEnablement = [
//   {
//     title:"Digital Marketing",
//     description:"A 360-degree approach covering Content Creation, Ads Management, and Social Media strategies to accelerate brand growth."
//   },
//   {
//     title:"Business Enablement",
//     description:"Streamlining Accounts, Finance, and HR processes."
//   },
//   {
//     title:"Resource Augmentation",
//     description:"Providing on-site, off-shore, or hybrid talent to fill skill gaps without increasing overhead."
//   },
// ]

// Services Page Sections
export const aiCategory = {
    title: 'Artificial Intelligence & Data Analytics',
    subtitle: 'AI Solutions That Power Intelligent Automation And Innovation',
    // subtitlebottom: "Artificial Intelligence and Data are transforming how businesses operate and grow. With the right tools and strategy, data becomes a powerful engine for automation, prediction and smarter decision-making.",
    // bgColor: 'bg-linear-to-br from-primary to-[#003799]',
    textColor: 'text-white',
    bgImage: `/images/bg_ai.png`,
    // imagePosition:"-top-6 -right-4",
    services: [
        { label: 'Custom Agent Development', description: "Intelligent AI agents automating workflows, enhancing customer experiences and enabling real-time decisions for operational efficiency." },
        { label: 'Generative AI', description: 'Advanced generative AI services enabling intelligent automation, personalized experiences and rapid prototyping for business transformation.', },
        { label: 'Data Science & MLOps', description: "Comprehensive machine learning operations delivering faster deployments, improved accuracy and long-term operational excellence." },
        { label: 'Conversational Intelligence', description: "We design and deploy conversational systems that understand context, intent, and user behavior. Our solutions automate support workflows, enhance customer engagement, and provide real time insights through intelligent dialog models tailored to your business processes." },
        { label: 'Computer Vision', description: "We build computer vision solutions that analyze images and video to detect objects, identities, behaviors, and anomalies. These systems enable real-time monitoring, compliance enforcement, automation, and data-driven decision-making across physical and digital environments." },
        { label: 'Opotical Character Recognition', description: "We implement OCR engines that accurately extract, classify, and structure data from scanned documents, images, and unstructured inputs. This enables automated workflows, reduces manual data entry, and improves data accuracy across enterprise operations." },
    ],
}

export const csCategory = {
    title: 'Cybersecurity & OT Security',
    subtitle: 'Zero One  offers comprehensive OT security services to safeguard industrial environments, including ICS, SCADA, PLCs, and operational networks. Our services focus on securing IT–OT convergence, reducing cyber risk, and ensuring continuous and safe operations. We align OT security implementations with industry standards and regulatory requirements while minimizing disruption to critical systems.',
    // subtitlebottom: "Artificial Intelligence and Data are transforming how businesses operate and grow. With the right tools and strategy, data becomes a powerful engine for automation, prediction and smarter decision-making.",
    // bgColor: 'bg-linear-to-br from-primary to-[#003799]',
    textColor: 'text-white',
    bgImage: `/images/bg_cs.png`,
    // imagePosition:"-top-6 -right-4",
    services: [
        { label: 'Security Solution Deployment', description: "Implement and manage security solutions to protect systems, networks and data from evolving cyber threats." },
        { label: 'Governance & Compliance', description: 'Establish policies and controls ensuring IT security practices meets regulatory standards and organizational requirements.', },
        { label: 'Vulnerability Assessment & Penetration Testing ', description: "Conduct Vulnerability Assessment and Penetration Testing (VAPT) comprehensive evaluations of systems, networks and processes to identify vulnerabilities and strengthen defenses." },
        { label: 'Managed Cybersecurity Service', description: "Provide continuous monitoring, threat detection and incident response to safeguard digital assets and maintain resilience." },
        { label: 'Risk Management & Governance', description: "Identify, assess, and mitigate technical, operational, security, and compliance risks across digital initiatives. This includes data security, system dependencies, scalability risks, vendor lock-in, process failures, and regulatory exposure. Our approach ensures startups build on safe foundations while enterprises maintain resilience, governance, and long-term operational trust." },
    ],
}
const icon = "/icons/"
export const dsCategory = {
    title: 'Distribution',
    subtitle: 'Zero One  offers comprehensive OT security services to safeguard industrial environments, including ICS, SCADA, PLCs, and operational networks. Our services focus on securing IT–OT convergence, reducing cyber risk, and ensuring continuous and safe operations. We align OT security implementations with industry standards and regulatory requirements while minimizing disruption to critical systems.',
    textColor: 'text-white',
    bgImage: `/images/bg_dist.png`,
    services: [
        {
            icon:`/${icon}/services_dist_sales.png`,label: 'Sales Team', description: 'A <span class="font-bold">"Distributor of Choice"</span> for global tech brands, ' +
                'utilizing a vast reseller network to penetrate Retail and SMB markets.'
        },
    ],
}
