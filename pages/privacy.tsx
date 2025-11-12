import Head from 'next/head'

export default function Privacy() {
  return (
    <div className="container">
      <Head>
        <title>Privacy Policy — https-greenhorn</title>
      </Head>

      <h1>Privacy Policy</h1>

      <p>Last updated: 2025-11-12</p>

      <p>
        This site (https-greenhorn) helps users find and review anime. We respect your privacy. This
        page explains what data we collect and how we use it. If you have questions, contact the site
        administrator.
      </p>

      <h2>Data we collect</h2>
      <ul>
        <li>Public content you post (reviews, comments) — visible to other users.</li>
        <li>Affiliate click metadata — when you click an affiliate link we may store a small record (animeId, affiliate provider, URL, timestamp, user agent, and a/anonymized IP) to measure clicks.</li>
        <li>Analytics data — if analytics or ads are enabled we may use third-party analytics providers that collect pageview and device data.</li>
      </ul>

      <h2>Affiliate links</h2>
      <p>
        Some links on this site are affiliate links. If you click an affiliate link and make a purchase
        the site may earn a commission at no extra cost to you. We use a lightweight server-side
        tracker to record clicks for performance monitoring and reporting.
      </p>

      <h2>Ads</h2>
      <p>
        We may show ads via third-party ad networks (for example Google AdSense). These networks may
        collect information about your visit and use cookies. You should review the privacy policies
        of those ad providers. We do not store payment or card information.
      </p>

      <h2>Cookies and tracking</h2>
      <p>
        We use cookies and similar technologies to improve the site. If required by law (for example
        in the EU) we will show a cookie consent banner and only enable non-essential tracking after
        consent.
      </p>

      <h2>Data retention</h2>
      <p>
        Affiliate click metadata and logs are retained for reporting purposes. You can request data
        removal by contacting the admin — see contact details in the site footer or repository.
      </p>

      <h2>Security</h2>
      <p>
        We take reasonable measures to protect data. If you believe your data has been compromised,
        please contact the site administrator immediately.
      </p>

      <h2>Contact</h2>
      <p>For privacy requests or questions, open an issue in the repository or reach out to the site owner.</p>
    </div>
  )
}