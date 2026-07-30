import Image from 'next/image'
import React from 'react'
import styles from '@/components/microsoft-365/microsoft-plan/MicrosoftPlan.module.css'
import MicrosoftExchange from '@/assets/icon/Microsoft_Exchange.png'
import OneDrive from '@/assets/icon/OneDrive.png'
import MicrosoftOfficeSharePoint from '@/assets/icon/Microsoft_Office_SharePoint.png'
import MicrosoftTeams from '@/assets/icon/Microsoft_Teams.png'
import MicrosoftOfficePowerPoint from '@/assets/icon/Microsoft_Office_PowerPoint.png'
import MicrosoftOutlook from '@/assets/icon/Microsoft_Outlook.png'
import MicrosoftLoop from '@/assets/icon/Microsoft_Loop.png'
import MicrosoftOfficeOneNote from '@/assets/icon/Microsoft_Office_OneNote.png'
import MicrosoftOfficeWord from '@/assets/icon/Microsoft_Office_Word.png'
import MicrosoftOfficeOutlook from '@/assets/icon/Microsoft_Office_Outlook.png'
import MicrosoftForms from '@/assets/icon/Microsoft_Forms.png'
import WindowsDefender from '@/assets/icon/Windows_Defender.png'
import MicrosoftExcel from '@/assets/icon/Excel.svg'
import Clipchamp from '@/assets/icon/Clipchamp.svg'
import appsEditor from '@/assets/icon/apps-editor.png'
import MicrosoftEntraID from '@/assets/icon/Microsoft-Entra-ID.svg'
import Windows11 from '@/assets/icon/windows_11.png'
import IntuneIcon from '@/assets/icon/intune_icon.png'
import Purview from '@/assets/icon/purview.png'
import Copilot from '@/assets/icon/copilot.svg'
import { FaCheckCircle } from 'react-icons/fa'


const includedApps = [
  { src: MicrosoftExchange, alt: 'Microsoft Exchange' },
  { src: OneDrive, alt: 'OneDrive' },
  { src: MicrosoftOfficeSharePoint, alt: 'Microsoft Office SharePoint' },
  { src: MicrosoftTeams, alt: 'Microsoft Teams' },
  { src: MicrosoftOfficePowerPoint, alt: 'Microsoft Office PowerPoint' },
  { src: MicrosoftOutlook, alt: 'Microsoft Excel' },
  { src: MicrosoftLoop, alt: 'Microsoft Loop' },
  { src: MicrosoftOfficeOneNote, alt: 'Microsoft Office OneNote' },
  { src: MicrosoftOfficeWord, alt: 'Microsoft Office Word' },
  { src: MicrosoftOfficeOutlook, alt: 'Microsoft Office Outlook' },
  { src: MicrosoftForms, alt: 'Microsoft Forms' },
  { src: WindowsDefender, alt: 'Windows Defender' },
]

// ---------- Data: "Plans with Teams" tab ----------
const teamsPlans = [
  {
    colClass: 'col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12',
    name: 'Microsoft 365 Business Basic',
    tagline: 'Lightweight web and mobile apps to kickstart your business',
    price: '₹ 2040',
    priceUnit: 'User / Year',
    highlights: [
      { text: 'Identity and access management for up to 300 users\u200B', hidden: false },
      { text: 'Web and mobile versions3 of Word, Excel, PowerPoint, and Outlook\u200B', hidden: false },
      { text: 'Custom business email (you@yourbusiness.com)', hidden: false },
      { text: 'Chat, call, and meet with Microsoft Teams\u200B', hidden: false },
      { text: '1 TB of cloud storage per user\u200B', hidden: false },
      { text: '10+ additional apps for your business needs (including Microsoft Bookings, Planner, and Forms)\u200B', hidden: false },
      { text: 'AI chat experience with web grounding, writing assistance, data analysis, and access to agents4', hidden: true },
      { text: 'Automatic spam and malware filtering\u200B', hidden: true },
      { text: 'Anytime phone and web support\u200B\u200B', hidden: true },
    ],
    apps: [
      { src: MicrosoftOfficeWord, alt: 'Microsoft Office Word' },
      { src: MicrosoftExcel, alt: 'Microsoft Excel' },
      { src: MicrosoftOfficePowerPoint, alt: 'Microsoft Office PowerPoint' },
      { src: MicrosoftOfficeOneNote, alt: 'Microsoft Office OneNote' },
      { src: Clipchamp, alt: 'Clipchamp' },
      { src: MicrosoftOutlook, alt: 'Microsoft Outlook' },
      { src: MicrosoftExchange, alt: 'Microsoft Exchange' },
      { src: OneDrive, alt: 'OneDrive' },
      { src: MicrosoftOfficeSharePoint, alt: 'Microsoft Office SharePoint' },
    ],
  },
  {
    colClass: 'col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12',
    name: 'Microsoft 365 Business Standard',
    tagline: 'Powerful web, mobile, and desktop apps to run your business',
    price: '₹ 10320',
    priceUnit: 'User / Year',
    highlights: [
      { text: 'Identity and access management for up to 300 users', hidden: false },
      { text: 'Web, mobile, and desktop versions3 of Word, Excel, PowerPoint, and Outlook\u200B', hidden: false },
      { text: 'Custom business email (you@yourbusiness.com)\u200B', hidden: false },
      { text: 'Chat, call, meet, and host webinars with Microsoft Teams\u200B', hidden: false },
      { text: '1 TB of cloud storage per user\u200B', hidden: false },
      { text: '10+ additional apps for your business needs (including Microsoft Loop, Clipchamp, Bookings, Planner, and Forms)\u200B', hidden: false },
      { text: 'AI chat experience with web grounding, writing assistance, data analysis, and access to agents4\u200B', hidden: true },
      { text: 'Automatic spam and malware filtering\u200B', hidden: true },
      { text: 'Anytime phone and web support\u200B\u200B', hidden: true },
    ],
    apps: [
      { src: MicrosoftOfficeWord, alt: 'Microsoft Office Word' },
      { src: MicrosoftExcel, alt: 'Microsoft Excel' },
      { src: MicrosoftOfficePowerPoint, alt: 'Microsoft Office PowerPoint' },
      { src: MicrosoftOfficeOneNote, alt: 'Microsoft Office OneNote' },
      { src: MicrosoftLoop, alt: 'Microsoft Loop' },
      { src: Clipchamp, alt: 'Clipchamp' },
      { src: MicrosoftOutlook, alt: 'Microsoft Outlook' },
      { src: MicrosoftExchange, alt: 'Microsoft Exchange' },
      { src: OneDrive, alt: 'OneDrive' },
      { src: MicrosoftOfficeSharePoint, alt: 'Microsoft Office SharePoint' },
      { src: appsEditor, alt: 'Apps Editor' },
    ],
  },
  {
    colClass: 'col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12',
    name: 'Microsoft 365 Business Premium',
    tagline: 'Everything your business needs to be more productive and secure',
    price: '₹ 21960',
    priceUnit: 'User / Year',
    highlights: [
      { text: 'Advanced identity and access management for up to 300 users', hidden: false },
      { text: 'Web, mobile, and desktop versions3 of Word, Excel, PowerPoint, and Outlook\u200B', hidden: false },
      { text: 'Custom business email (you@yourbusiness.com)\u200B', hidden: false },
      { text: 'Chat, call, meet, and host webinars with Microsoft Teams\u200B', hidden: false },
      { text: '1 TB of cloud storage per user\u200B', hidden: false },
      { text: '10+ additional apps for your business needs (including Microsoft Loop, Clipchamp, Bookings, Planner, and Forms)\u200B', hidden: false },
      { text: 'AI chat experience with web grounding, writing assistance, data analysis, and access to agents4\u200B', hidden: true },
      { text: 'Enhanced cyberthreat protection against viruses and phishing attacks\u200B', hidden: true },
      { text: 'Discovery, classification, and protection of sensitive data\u200B', hidden: true },
      { text: 'Anytime phone and web support\u200B', hidden: true },
    ],
    apps: [
      { src: MicrosoftOfficeWord, alt: 'Microsoft Office Word' },
      { src: MicrosoftExcel, alt: 'Microsoft Excel' },
      { src: MicrosoftOfficePowerPoint, alt: 'Microsoft Office PowerPoint' },
      { src: MicrosoftOfficeOneNote, alt: 'Microsoft Office OneNote' },
      { src: MicrosoftLoop, alt: 'Microsoft Loop' },
      { src: Clipchamp, alt: 'Clipchamp' },
      { src: MicrosoftOutlook, alt: 'Microsoft Outlook' },
      { src: MicrosoftExchange, alt: 'Microsoft Exchange' },
      { src: OneDrive, alt: 'OneDrive' },
      { src: MicrosoftOfficeSharePoint, alt: 'Microsoft Office SharePoint' },
      { src: appsEditor, alt: 'Apps Editor' },
      { src: MicrosoftEntraID, alt: 'Microsoft Entra ID' },
      { src: Windows11, alt: 'Windows-11' },
      { src: IntuneIcon, alt: 'Intune Icon' },
      { src: WindowsDefender, alt: 'Windows Defender' },
      { src: Purview, alt: 'Purview' },
    ],
  },
]

// ---------- Data: "Plans without Teams" tab ----------
const noTeamsPlans = [
  {
    colClass: 'col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12',
    name: 'Microsoft 365 Business Basic (no Teams)',
    tagline: 'Lightweight web and mobile apps to kickstart your business',
    price: '₹ 1560',
    priceUnit: 'User / Year',
    highlights: [
      { text: 'Identity and access management for up to 300 users', hidden: false },
      { text: 'Web and mobile versions3 of Word, Excel, PowerPoint, and Outlook', hidden: false },
      { text: 'Custom business email (you@yourbusiness.com)', hidden: false },
      { text: '1 TB of cloud storage per user', hidden: false },
      { text: '10+ additional apps for your business needs (including Microsoft Bookings, Planner, and Forms)', hidden: false },
      { text: 'AI chat experience with web grounding, writing assistance, data analysis, and access to agents4', hidden: false },
      { text: 'Automatic spam and malware filtering', hidden: true },
      { text: 'Anytime phone and web support\u200B', hidden: true },
    ],
    apps: [
      { src: MicrosoftOfficeWord, alt: 'Microsoft Word' },
      { src: MicrosoftExcel, alt: 'Microsoft Excel' },
      { src: MicrosoftOfficePowerPoint, alt: 'Microsoft PowerPoint' },
      { src: MicrosoftOfficeOneNote, alt: 'Microsoft OneNote' },
      { src: MicrosoftOutlook, alt: 'Microsoft Outlook' },
      { src: MicrosoftExchange, alt: 'Microsoft Exchange' },
      { src: OneDrive, alt: 'OneDrive' },
      { src: MicrosoftOfficeSharePoint, alt: 'Microsoft SharePoint' },
    ],
  },
  {
    colClass: 'col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12',
    name: 'Microsoft 365 Business Standard (no Teams)',
    tagline: 'Powerful web, mobile, and desktop apps to run your business',
    price: '₹ 7980',
    priceUnit: 'User / Year',
    highlightsWrapped: true,
    highlights: [
      { text: 'Identity and access management for up to 300 users', hidden: false },
      { text: 'Web, mobile, and desktop versions3 of Word, Excel, PowerPoint, and Outlook', hidden: false },
      { text: 'Custom business email (you@yourbusiness.com)', hidden: false },
      { text: '1 TB of cloud storage per user', hidden: false },
      { text: '10+ additional apps for your business needs (including Microsoft Loop, Clipchamp, Bookings, Planner, and Forms)', hidden: false },
      { text: 'AI chat experience with web grounding, writing assistance, data analysis, and access to agents4', hidden: false },
      { text: 'Automatic spam and malware filtering', hidden: true },
      { text: 'Anytime phone and web support\u200B', hidden: true },
    ],
    apps: [
      { src: MicrosoftOfficeWord, alt: 'Microsoft Office Word' },
      { src: MicrosoftExcel, alt: 'Microsoft Excel' },
      { src: MicrosoftOfficePowerPoint, alt: 'Microsoft Office PowerPoint' },
      { src: MicrosoftOfficeOneNote, alt: 'Microsoft Office OneNote' },
      { src: MicrosoftLoop, alt: 'Microsoft Loop' },
      { src: Clipchamp, alt: 'Clipchamp' },
      { src: MicrosoftOutlook, alt: 'Microsoft Outlook' },
      { src: MicrosoftExchange, alt: 'Microsoft Exchange' },
      { src: OneDrive, alt: 'OneDrive' },
      { src: MicrosoftOfficeSharePoint, alt: 'Microsoft Office SharePoint' },
      { src: appsEditor, alt: 'Apps Editor' },
    ],
  },
  {
    colClass: 'col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12',
    name: 'Microsoft 365 Business Premium (no Teams)',
    tagline: 'Everything your business needs to be more productive and secure',
    price: '₹ 18780',
    priceUnit: 'User / Year',
    highlights: [
      { text: 'Advanced identity and access management for up to 300 users', hidden: false },
      { text: 'Web, mobile, and desktop versions3 of Word, Excel, PowerPoint, and Outlook', hidden: false },
      { text: 'Custom business email (you@yourbusiness.com)', hidden: false },
      { text: '1 TB of cloud storage per user', hidden: false },
      { text: '10+ additional apps for your business needs (including Microsoft Loop, Clipchamp, Bookings, Planner, and Forms)', hidden: false },
      { text: 'AI chat experience with web grounding, writing assistance, data analysis, and access to agents4', hidden: false },
      { text: 'Enhanced cyberthreat protection against viruses and phishing attacks', hidden: true },
      { text: 'Discovery, classification, and protection of sensitive data', hidden: true },
      { text: 'Anytime phone and web support\u200B', hidden: true },
    ],
    apps: [
      { src: MicrosoftOfficeWord, alt: 'Microsoft Office Word' },
      { src: MicrosoftExcel, alt: 'Microsoft Excel' },
      { src: MicrosoftOfficePowerPoint, alt: 'Microsoft Office PowerPoint' },
      { src: MicrosoftOfficeOneNote, alt: 'Microsoft Office OneNote' },
      { src: MicrosoftLoop, alt: 'Microsoft Loop' },
      { src: Clipchamp, alt: 'Clipchamp' },
      { src: MicrosoftOutlook, alt: 'Microsoft Outlook' },
      { src: MicrosoftExchange, alt: 'Microsoft Exchange' },
      { src: OneDrive, alt: 'OneDrive' },
      { src: MicrosoftOfficeSharePoint, alt: 'Microsoft Office SharePoint' },
      { src: appsEditor, alt: 'Apps Editor' },
      { src: MicrosoftEntraID, alt: 'Microsoft Entra ID' },
      { src: Windows11, alt: 'Windows 11' },
      { src: IntuneIcon, alt: 'Intune Icon' },
      { src: WindowsDefender, alt: 'Windows Defender' },
      { src: Purview, alt: 'Purview' },
    ],
  },
  {
    colClass: 'col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12',
    name: 'Microsoft 365 Apps for business',
    tagline: 'Popular desktop apps, excluding chat or calling',
    price: '₹ 9960',
    priceUnit: 'User / Year',
    hideSeeAllFeatures: true,
    highlights: [
      { text: 'Available for up to 300 users', hidden: false },
      { text: 'Desktop versions of Word, Excel, PowerPoint, and Outlook', hidden: false },
      { text: '1 TB of cloud storage per user', hidden: false },
      { text: 'Anytime phone and web support\u200B', hidden: false },
    ],
    apps: [
      { src: MicrosoftOfficeWord, alt: 'Microsoft Word' },
      { src: MicrosoftExcel, alt: 'Microsoft Excel' },
      { src: MicrosoftOfficePowerPoint, alt: 'Microsoft PowerPoint' },
      { src: MicrosoftOfficeOneNote, alt: 'Microsoft OneNote' },
      { src: MicrosoftOutlook, alt: 'Microsoft Outlook' },
      { src: OneDrive, alt: 'OneDrive' },
      { src: appsEditor, alt: 'Apps Editor' },
    ],
  },
]

// ---------- Data: "Plans with Copilot" tab ----------
const copilotWithTeamsPlans = [
  {
    colClass: 'col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12',
    name: 'Microsoft 365 Business Standard and Microsoft 365 Copilot Business',
    badge: 'Limited time discount offer*',
    tagline: 'Powerful web, mobile, and desktop apps combined with Microsoft 365 Copilot',
    priceTag: 'h6',
    price: '₹ 1,955.00',
    priceUnit: 'user/month, paid yearly',
    highlights: [
      { text: 'Microsoft 365 Copilot in apps such as Word, Excel, PowerPoint, Outlook, and Microsoft Teams5', hidden: false },
      { text: 'AI-powered chat connected to your work data and access to reasoning AI for research and data analysis', hidden: false },
      { text: 'Identity and access management for up to 300 users', hidden: false },
      { text: 'Web, mobile, and desktop versions3 of Word, Excel, PowerPoint, and Outlook', hidden: false },
      { text: 'Custom business email (you@yourbusiness.com)\u200B', hidden: false },
      { text: 'Chat, call, meet, and host webinars with Microsoft Teams', hidden: false },
      { text: '1 TB of cloud storage per user', hidden: true },
      { text: '10+ additional apps for your business needs (including Microsoft Loop, Clipchamp, Bookings, Planner, and Forms)\u200B', hidden: true },
      { text: 'Automatic spam and malware filtering', hidden: true },
      { text: 'Anytime phone and web support\u200B', hidden: true },
    ],
    apps: [
      { src: MicrosoftOfficeWord, alt: 'Microsoft Office Word' },
      { src: MicrosoftExcel, alt: 'Microsoft Excel' },
      { src: MicrosoftOfficePowerPoint, alt: 'Microsoft Office PowerPoint' },
      { src: MicrosoftOfficeOneNote, alt: 'Microsoft Office OneNote' },
      { src: MicrosoftLoop, alt: 'Microsoft Loop' },
      { src: Clipchamp, alt: 'Clipchamp' },
      { src: MicrosoftOutlook, alt: 'Microsoft Outlook' },
      { src: MicrosoftExchange, alt: 'Microsoft Exchange' },
      { src: OneDrive, alt: 'OneDrive' },
      { src: MicrosoftOfficeSharePoint, alt: 'Microsoft Office SharePoint' },
      { src: Copilot, alt: 'Copilot' },
    ],
  },
  {
    colClass: 'col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12',
    name: 'Microsoft 365 Business Premium and Microsoft 365 Copilot Business',
    badge: 'Limited time discount offer*',
    tagline: 'Everything your business needs to be more productive and secure combined with Microsoft 365 Copilot',
    priceTag: 'h4',
    price: '₹ 2,660.00',
    priceUnit: 'user/month, paid yearly',
    highlights: [
      { text: 'Microsoft 365 Copilot in apps such as Word, Excel, PowerPoint, Outlook, and Microsoft Teams5', hidden: false },
      { text: 'AI-powered chat connected to your work data and access to reasoning AI for research and data analysis', hidden: false },
      { text: 'Advanced identity and access management for up to 300 users\u200B', hidden: false },
      { text: 'Web, mobile, and desktop versions3 of Word, Excel, PowerPoint, and Outlook', hidden: false },
      { text: 'Custom business email (you@yourbusiness.com)\u200B', hidden: false },
      { text: 'Chat, call, meet, and host webinars with Microsoft Teams', hidden: false },
      { text: '1 TB of cloud storage per user', hidden: true },
      { text: '10+ additional apps for your business needs (including Microsoft Loop, Clipchamp, Bookings, Planner, and Forms)\u200B', hidden: true },
      { text: 'Enhanced cyberthreat protection against viruses and phishing attacks\u200B', hidden: true },
      { text: 'Discovery, classification, and protection of sensitive data\u200B', hidden: true },
      { text: 'Anytime phone and web support\u200B', hidden: true },
    ],
    apps: [
      { src: MicrosoftOfficeWord, alt: 'Microsoft Office Word' },
      { src: MicrosoftExcel, alt: 'Microsoft Excel' },
      { src: MicrosoftOfficePowerPoint, alt: 'Microsoft Office PowerPoint' },
      { src: MicrosoftOfficeOneNote, alt: 'Microsoft Office OneNote' },
      { src: MicrosoftLoop, alt: 'Microsoft Loop' },
      { src: Clipchamp, alt: 'Clipchamp' },
      { src: MicrosoftOutlook, alt: 'Microsoft Outlook' },
      { src: MicrosoftExchange, alt: 'Microsoft Exchange' },
      { src: OneDrive, alt: 'OneDrive' },
      { src: MicrosoftOfficeSharePoint, alt: 'Microsoft Office SharePoint' },
      { src: appsEditor, alt: 'Apps Editor' },
      { src: Copilot, alt: 'Copilot' },
      { src: MicrosoftEntraID, alt: 'Microsoft Entra ID' },
      { src: Windows11, alt: 'windows 11' },
      { src: IntuneIcon, alt: 'intune-icon' },
      { src: WindowsDefender, alt: 'Windows Defender' },
      { src: Purview, alt: 'Purview' },
    ],
  },
]

const copilotNoTeamsPlans = [
  {
    colClass: 'col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12',
    name: 'Microsoft 365 Business Standard with Copilot (no Teams)',
    badge: 'Limited time discount offer*',
    tagline: 'Powerful web, mobile, and desktop apps combined with Microsoft 365 Copilot',
    priceTag: 'h6',
    price: '₹ 1,690.00',
    priceUnit: 'user/month, paid yearly',
    highlights: [
      { text: 'Microsoft 365 Copilot in apps such as Word, Excel, PowerPoint, and Outlook5\u200B', hidden: false },
      { text: 'AI-powered chat connected to your work data and access to reasoning AI for research and data analysis', hidden: false },
      { text: 'Identity and access management for up to 300 users', hidden: false },
      { text: 'Web, mobile, and desktop versions3 of Word, Excel, PowerPoint, and Outlook', hidden: false },
      { text: 'Custom business email (you@yourbusiness.com)\u200B', hidden: false },
      { text: '1 TB of cloud storage per user\u200B', hidden: false },
      { text: '10+ additional apps for your business needs (including Microsoft Loop, Clipchamp, Bookings, Planner, and Forms)\u200B', hidden: true },
      { text: 'Automatic spam and malware filtering', hidden: true },
      { text: 'Anytime phone and web support', hidden: true },
    ],
    apps: [
      { src: MicrosoftOfficeWord, alt: 'Microsoft Office Word' },
      { src: MicrosoftExcel, alt: 'Microsoft Excel' },
      { src: MicrosoftOfficePowerPoint, alt: 'Microsoft Office PowerPoint' },
      { src: MicrosoftOfficeOneNote, alt: 'Microsoft Office OneNote' },
      { src: MicrosoftLoop, alt: 'Microsoft Loop' },
      { src: Clipchamp, alt: 'Clipchamp' },
      { src: MicrosoftOutlook, alt: 'Microsoft Outlook' },
      { src: MicrosoftExchange, alt: 'Microsoft Exchange' },
      { src: OneDrive, alt: 'OneDrive' },
      { src: MicrosoftOfficeSharePoint, alt: 'Microsoft Office SharePoint' },
      { src: appsEditor, alt: 'Apps Editor' },
      { src: Copilot, alt: 'Copilot' },
    ],
  },
  {
    colClass: 'col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12',
    name: 'Microsoft 365 Business Premium with Copilot (no Teams)',
    badge: 'Limited time discount offer*',
    tagline: 'Everything your business needs to be more productive and secure combined with Microsoft 365 Copilot',
    priceTag: 'h6',
    price: '₹ 2,395.00',
    priceUnit: 'user/month, paid yearly',
    highlights: [
      { text: 'Microsoft 365 Copilot in apps such as Word, Excel, PowerPoint, and Outlook5\u200B', hidden: false },
      { text: 'AI-powered chat connected to your work data and access to reasoning AI for research and data analysis', hidden: false },
      { text: 'Advanced identity and access management for up to 300 users\u200B', hidden: false },
      { text: 'Web, mobile, and desktop versions3 of Word, Excel, PowerPoint, and Outlook', hidden: false },
      { text: 'Custom business email (you@yourbusiness.com)\u200B', hidden: false },
      { text: '1 TB of cloud storage per user\u200B', hidden: false },
      { text: '10+ additional apps for your business needs (including Microsoft Loop, Clipchamp, Bookings, Planner, and Forms)\u200B', hidden: true },
      { text: 'Enhanced cyberthreat protection against viruses and phishing attacks', hidden: true },
      { text: 'Discovery, classification, and protection of sensitive data', hidden: true },
      { text: 'Anytime phone and web support\u200B', hidden: true },
    ],
    apps: [
      { src: MicrosoftOfficeWord, alt: 'Microsoft Office Word' },
      { src: MicrosoftExcel, alt: 'Microsoft Excel' },
      { src: MicrosoftOfficePowerPoint, alt: 'Microsoft Office PowerPoint' },
      { src: MicrosoftOfficeOneNote, alt: 'Microsoft Office OneNote' },
      { src: MicrosoftLoop, alt: 'Microsoft Loop' },
      { src: Clipchamp, alt: 'Clipchamp' },
      { src: MicrosoftOutlook, alt: 'Microsoft Outlook' },
      { src: MicrosoftExchange, alt: 'Microsoft Exchange' },
      { src: OneDrive, alt: 'OneDrive' },
      { src: MicrosoftOfficeSharePoint, alt: 'Microsoft Office SharePoint' },
      { src: appsEditor, alt: 'Apps Editor' },
      { src: Copilot, alt: 'Copilot' },
      { src: MicrosoftEntraID, alt: 'Microsoft Entra ID' },
      { src: Windows11, alt: 'windows 11' },
      { src: IntuneIcon, alt: 'intune-icon' },
      { src: WindowsDefender, alt: 'Windows Defender' },
      { src: Purview, alt: 'Purview' },
    ],
  },
]

const renderHighlights = (plan) => {
  const list = (
    <ul className="plans-details-list">
      {plan.highlights.map((h, i) => (
        <li key={i} className={h.hidden ? 'hidden' : undefined}>
          <FaCheckCircle className={`${styles.checkCircle}`} />
          {h.text}
        </li>
      ))}
    </ul>
  )
  if (plan.highlightsWrapped) {
    return (
      <ul className="plans-details-list">
        {plan.highlights.map((h, i) => (
          <li key={i} className={h.hidden ? 'hidden' : undefined}>
            <span><FaCheckCircle className={`${styles.checkCircle}`} /></span>
            {h.text}
          </li>
        ))}
      </ul>
    )
  }
  return list
}

const PlanCard = ({ plan }) => {
  const PriceTag = plan.priceTag || 'h3'
  return (
    <div className={plan.colClass + ' aos-init aos-animate'} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
      <div className="plan-box workspace-plan-box d-flex flex-column justify-content-between">
        <div>
          <div className="best-value">
            <h3 className="div-text mb-0 weight-Regular">{plan.name}</h3>
          </div>
          <div className="plans-details">
            {plan.badge && (
              <h4 className="small-text mb-0 weight-SemiBold most-popular most-popular-offer">{plan.badge}</h4>
            )}
            <div className="plans-details-text">
              <div className="gst-bg" style={{ padding: 0, background: 'transparent' }}>
                <p className="small-text renews">{plan.tagline}</p>
              </div>
              <PriceTag className="div-title mb-0 weight-SemiBold">{plan.price}</PriceTag>
              <span className="extra-small-text d-block mb-0">{plan.priceUnit}</span>
            </div>
            <div className="gst-bg">
              <p className="small-text renews">
                (Annual subscription–auto renews) <br /> GST extra as applicable
              </p>
            </div>

            <div className="">
              <div className="qty-wrapper-bg features">
                <h4 className="p-content mb-0 weight-SemiBold">Plan highlights:</h4>
              </div>
              <div className="more-details-box">
                {renderHighlights(plan)}
                <div className="features-bottom">
                  <a
                    href="javascript:void(0)"
                    className="more-details p-content"
                    style={plan.hideSeeAllFeatures ? { display: 'none' } : undefined}
                  >
                    See All Features
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <ul className="plans-apps-list">
            <li className="p-content mb-0 weight-SemiBold w-100">Popular apps and services included:</li>
            {plan.apps.map((app, i) => (
              <li key={i}>
                <Image src={app.src} alt={app.alt} width={1000} height={1000} />
              </li>
            ))}
          </ul>
          <div className="plans-details-text plans-details-text-bottom">
            <button type="button" className="buy-now" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Inquiry Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const MicrosoftPlan = () => {
  const [activeTab, setActiveTab] = React.useState('nav-monthly')
  const [copilotTeamsTab, setCopilotTeamsTab] = React.useState('with-teams')
  return (
    <section className="workspace-plan-section pt-100 pb-100" id="pricing">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 col-md-12 col-12">
            <div className="workspace-plan-title text-center">
              <h2
                className="div-sub-title aos-init aos-animate"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                Find the Perfect Microsoft 365 Plan for Your Business
              </h2>
              <p
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1200"
                className="aos-init aos-animate"
              >
                Flexible productivity, collaboration, and security tools designed for modern teams.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-20 mb-50">
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <div
              className="workspace-include aos-init aos-animate"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1600"
            >
              {includedApps.map((app, i) => (
                <div className="workspace-include-list" key={i}>
                  <Image src={app.src} alt={app.alt} width={1000} height={1000} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-lg-12 col-md-12 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="600"
          >
            <nav className="monthly-yearly-plan d-flex flex-column align-items-center">
              <div className="nav nav-tabs mb-20" id="nav-tab" role="tablist">
                <button
                  type="button"
                  className={`nav-link${activeTab === 'nav-monthly' ? ' active' : ''}`}
                  id="nav-monthly-tab"
                  role="tab"
                  aria-controls="nav-monthly"
                  aria-selected={activeTab === 'nav-monthly'}
                  onClick={() => setActiveTab('nav-monthly')}
                >
                  Plans with Teams
                </button>
                <button
                  type="button"
                  className={`nav-link${activeTab === 'nav-yearly' ? ' active' : ''}`}
                  id="nav-yearly-tab"
                  role="tab"
                  aria-controls="nav-yearly"
                  aria-selected={activeTab === 'nav-yearly'}
                  onClick={() => setActiveTab('nav-yearly')}
                >
                  Plans without Teams
                </button>
                <button
                  type="button"
                  className={`nav-link${activeTab === 'nav-Copilot' ? ' active' : ''}`}
                  id="nav-Copilot-tab"
                  role="tab"
                  aria-controls="nav-Copilot"
                  aria-selected={activeTab === 'nav-Copilot'}
                  onClick={() => setActiveTab('nav-Copilot')}
                >
                  Plans with Copilot
                </button>
              </div>
            </nav>
            <div className="tab-content monthly-yearly-tab" id="nav-tabContent">
              <div
                className={`tab-pane fade${activeTab === 'nav-monthly' ? ' show active' : ''}`}
                id="nav-monthly"
                role="tabpanel"
                aria-labelledby="#nav-monthly-tab"
              >
                <div className="row gx-4">
                  {teamsPlans.map((plan, i) => (
                    <PlanCard plan={plan} key={i} />
                  ))}
                </div>
              </div>
              <div
                className={`tab-pane fade${activeTab === 'nav-yearly' ? ' show active' : ''}`}
                id="nav-yearly"
                role="tabpanel"
                aria-labelledby="#nav-yearly-tab"
              >
                <div className="row gx-4">
                  {noTeamsPlans.map((plan, i) => (
                    <PlanCard plan={plan} key={i} />
                  ))}
                </div>
              </div>

              <div
                className={`tab-pane fade${activeTab === 'nav-Copilot' ? ' show active' : ''}`}
                id="nav-Copilot"
                role="tabpanel"
                aria-labelledby="#nav-Copilot-tab"
              >
                <div className="row gx-4">
                  <nav className="with-without-teams d-flex flex-column align-items-lg-end align-items-center">
                    <div className="nav nav-tabs mb-20" id="nav-tab2" role="tablist">
                      <button
                        type="button"
                        className={`nav-link${copilotTeamsTab === 'with-teams' ? ' active' : ''}`}
                        id="nav-monthly-tab2"
                        role="tab"
                        aria-controls="nav-monthly2"
                        aria-selected={copilotTeamsTab === 'with-teams'}
                        onClick={() => setCopilotTeamsTab('with-teams')}
                      >
                        With Teams
                      </button>
                      <button
                        type="button"
                        className={`nav-link${copilotTeamsTab === 'without-teams' ? ' active' : ''}`}
                        id="nav-yearly-tab2"
                        role="tab"
                        aria-controls="nav-yearly2"
                        aria-selected={copilotTeamsTab === 'without-teams'}
                        onClick={() => setCopilotTeamsTab('without-teams')}
                      >
                        Without Teams
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content monthly-yearly-tab" id="nav-tabContent2">
                    <div
                      className={`tab-pane fade${copilotTeamsTab === 'with-teams' ? ' show active' : ''}`}
                      id="nav-monthly2"
                      role="tabpanel"
                      aria-labelledby="#nav-monthly-tab2"
                    >
                      <div className="row gx-4">
                        {copilotWithTeamsPlans.map((plan, i) => (
                          <PlanCard plan={plan} key={i} />
                        ))}
                      </div>
                    </div>
                    <div
                      className={`tab-pane fade${copilotTeamsTab === 'without-teams' ? ' show active' : ''}`}
                      id="nav-yearly2"
                      role="tabpanel"
                      aria-labelledby="#nav-yearly-tab2"
                    >
                      <div className="row gx-4">
                        {copilotNoTeamsPlans.map((plan, i) => (
                          <PlanCard plan={plan} key={i} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MicrosoftPlan