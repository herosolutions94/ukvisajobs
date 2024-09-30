import Link from "next/link";
import Image from "next/image";

export default function Header({ siteSettings }) {
    const d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <footer>
        <div className="contain">
          <div className="flex_row main_row row">
            <div className="col-xl-4">
              <div className="in_col">
                <div className="logo">
                  <Link href="/">
                    <Image
                      alt="UK Visa Jobs Logo"
                      src="https://ukvisajobs.com/api/uploads/images/ukvisajobs-footer-logo.svg"
                      width={150} // Adjust width as needed
                      height={50} // Adjust height as needed
                    />
                  </Link>
                </div>
                <ul className="list info_list">
                  <li>
                    <Image
                      src="/images/icon-location.svg"
                      alt="Location Icon"
                      width={20} // Adjust width as needed
                      height={20} // Adjust height as needed
                    />
                    <span>
                      <div>
                       {siteSettings?.site_address}
                      </div>
                    </span>
                  </li>
                  <li>
                    <Image
                      src="/images/icon-sms-tracking.svg"
                      alt="Email Icon"
                      width={20} // Adjust width as needed
                      height={20} // Adjust height as needed
                    />
                    <a href={"mailto:"+siteSettings?.site_email}>
                      <div>{siteSettings?.site_email}</div>
                    </a>
                  </li>
                </ul>
                <div className="social_logon">
                    {
                        siteSettings?.site_facebook ?
                  <a
                    href={siteSettings?.site_facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/images/new/facebook.svg"
                      alt="Facebook"
                      width={20} // Adjust width as needed
                      height={20} // Adjust height as needed
                    />
                  </a>
                  :
                  ""
                    }
                    {
                        siteSettings?.site_twitter ?
                  <a
                    href={siteSettings?.site_twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/images/new/twitter.svg"
                      alt="Twitter"
                      width={20} // Adjust width as needed
                      height={20} // Adjust height as needed
                    />
                  </a>
                  :
                  ""
                    }
                     {
                        siteSettings?.site_linkedin ?
                  <a
                    href={siteSettings?.site_linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/images/new/linkedin.svg"
                      alt="LinkedIn"
                      width={20} // Adjust width as needed
                      height={20} // Adjust height as needed
                    />
                  </a>
                  :
                  ""
                     }
                </div>
              </div>
            </div>

            <div className="col-lg mid_col">
              <div className="in_col">
                <h4>Quick Links</h4>
                <ul className="list">
                  <li>
                    <Link href="/open-jobs/1">Jobs</Link>
                  </li>
                  <li>
                    <Link href="/events">Events</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg">
              <div className="in_col">
                <h4>Legal</h4>
                <ul className="list">
                  <li>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="small mt-4 pt-5 mb-0"></p>
          <hr />
          <div className="copyright">
            <p className="text-center">{siteSettings?.site_copyright}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
