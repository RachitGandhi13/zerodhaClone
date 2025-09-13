import React from 'react';

function Footer() {
  return ( 
    <footer style={{ backgroundColor: "#F8F9FA", borderTop: '2px solid #e9ecef', marginTop: '48px' }}>
      <div className='container' style={{maxWidth: 1200, margin: '0 auto', padding: '40px 24px'}}>
        <div className='row' style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          justifyContent: 'space-between',
          marginBottom: 48
        }}>
          {/* Logo Column */}
          <div className='col' style={{ flex: '1 1 200px', minWidth: 210 }}>
            <img src='media/images/logo.svg' alt="Logo" style={{ width: "60%", minWidth:110, marginBottom: '18px' }}/>
            <p style={{ marginTop: 18, fontSize: 13, color: '#868e96' }}>&copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
          </div>
          {/* Company Links */}
          <div className='col text-muted' style={{ flex: '1 1 130px', minWidth: 140 }}>
            <p style={{ fontWeight: 600, marginBottom: 10, color: '#495057' }}>Company</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><a style={footerLinkStyle} href=''>About</a></li>
              <li><a style={footerLinkStyle} href=''>Products</a></li>
              <li><a style={footerLinkStyle} href=''>Pricing</a></li>
              <li><a style={footerLinkStyle} href=''>Referral programme</a></li>
              <li><a style={footerLinkStyle} href=''>Careers</a></li>
              <li><a style={footerLinkStyle} href=''>Zerodha.tech</a></li>
              <li><a style={footerLinkStyle} href=''>Open source</a></li>
              <li><a style={footerLinkStyle} href=''>Press & media</a></li>
              <li><a style={footerLinkStyle} href=''>Zerodha Cares (CSR)</a></li>
            </ul>
          </div>
          {/* Support Links */}
          <div className='col text-muted' style={{ flex: '1 1 180px', minWidth: 170 }}>
            <p style={{ fontWeight: 600, marginBottom: 10, color: '#495057' }}>Support</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><a style={footerLinkStyle} href=''>Contact us</a></li>
              <li><a style={footerLinkStyle} href=''>Support portal</a></li>
              <li><a style={footerLinkStyle} href=''>Z-Connect blog</a></li>
              <li><a style={footerLinkStyle} href=''>List of charges</a></li>
              <li><a style={footerLinkStyle} href=''>Downloads & resources</a></li>
              <li><a style={footerLinkStyle} href=''>Videos</a></li>
              <li><a style={footerLinkStyle} href=''>Market overview</a></li>
              <li><a style={footerLinkStyle} href=''>How to file a complaint?</a></li>
              <li><a style={footerLinkStyle} href=''>Status of your complaints</a></li>
              <li><a style={footerLinkStyle} href=''>Open source</a></li>
            </ul>
          </div>
          {/* Account Links */}
          <div className='col text-muted' style={{ flex: '1 1 100px', minWidth: 120 }}>
            <p style={{ fontWeight: 600, marginBottom: 10, color: '#495057' }}>Account</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><a style={footerLinkStyle} href=''>Open an account</a></li>
              <li><a style={footerLinkStyle} href=''>Fund transfer</a></li>
            </ul>
          </div>
        </div>
        <div className='text-muted' style={{
            fontSize: "14px",
            lineHeight: 1.6,
            color: "#868e96",
            background: "#f1f3f5",
            padding: '24px 18px',
            borderRadius: '10px',
            boxShadow: '0 0 10px #ececec'
          }}>
          <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="mailto:complaints@zerodha.com" style={{color:"#1565c0"}}>complaints@zerodha.com</a>, for DP related to <a href="mailto:dp@zerodha.com" style={{color:"#1565c0"}}>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
          <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
          <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
          <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
          <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
        </div>
      </div>
    </footer>
  );
}

// Place this style object above or outside the component, or in a separate file:
const footerLinkStyle = {
  textDecoration: "none",
  color: "#495057",
  display: "inline-block",
  marginBottom: "7px",
  fontSize: "15px",
  transition: "color 0.16s",
  fontWeight: 500
};
// For hover effect, in your CSS:
// .footer-link:hover { color: #1565c0 !important; text-decoration: underline !important; }

export default Footer;
