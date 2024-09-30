import { cmsFileUrl } from "@/helpers/helpers";
import Image from "next/image";
import Link from "next/link";
export default function Header({ siteSettings }) {
  return (
    <>
      <header className="">
        <div className="contain">
          <div className="logo">
            <Link href="/">
              <Image
                alt="Error While Loading Image"
                src={cmsFileUrl(siteSettings?.site_logo)}
                width={200} // Set appropriate width
                height={50} // Set appropriate height
              />
            </Link>
          </div>
          <div className="togle_option">
            <div className="tog_opt">
              <button type="button" className="toggle">
                <span></span>
              </button>
              <div className="_img">
                <Image
                  src="/images/new/frame.svg"
                  alt=""
                  width={30} // Set appropriate width
                  height={30} // Set appropriate height
                />
              </div>
            </div>
            <div className="drop_sub">
              <ul>
                <li>
                  <Link className="site_btn" href="/signin">
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link className="site_btn" href="/signup">
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <nav className="ease">
            <div id="nav" className="">
              <ul id="lst">
                <li>
                  <Link aria-current="page" className="active" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/open-jobs/1">Jobs</Link>
                </li>
                <li>
                  <Link href="/events">Events</Link>
                </li>
                <li>
                  <Link href="/blogs">Resources</Link>
                </li>
                <li>
                  <Link href="/faq">FAQs</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="clearfix"></div>
        </div>
      </header>
    </>
  );
}
