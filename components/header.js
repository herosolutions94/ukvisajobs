import { authToken } from "@/helpers/authToken";
import { cmsFileUrl } from "@/helpers/helpers";
import { deleteCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
export default function Header({ siteSettings }) {
  const router = useRouter();
  const path = router.pathname;
  const [active, setActive] = useState(false);
  const token = authToken()
  const logout = (e) => {
    e.preventDefault();
    deleteCookie('authToken');
    router.push("/");
  }
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
          <div className="togle_option" onClick={() => setActive(!active)}>
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
            <div className={active ? "drop_sub active" : "drop_sub"}>
              {
                token ?
                  <ul>
                    <li>
                      <Link className="site_btn" href={process.env.NEXT_PUBLIC_DASHBOARD_URL}>
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link href="#!" className="site_btn" onClick={logout}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                  :
                  <ul>
                    <li>
                      <Link className="site_btn" href={process.env.NEXT_PUBLIC_LOGIN_URL}>
                        Sign in
                      </Link>
                    </li>
                    <li>
                      <Link className="site_btn" href={process.env.NEXT_PUBLIC_SIGUP_URL}>
                        Sign up
                      </Link>
                    </li>
                  </ul>
              }
            </div>
          </div>
          <nav className="ease">
            <div id="nav" className="">
              <ul id="lst">
                <li>
                  <Link aria-current="page" className={path === '/' ? "active" : ""} href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={process.env.NEXT_PUBLIC_JOBS_URL}>Jobs</Link>
                </li>
                <li>
                  <Link className={path === '/events' ? "active" : ""} href="/events">Events</Link>
                </li>
                <li>
                  <Link className={path === '/blogs' ? "active" : ""} href="/blogs">Resources</Link>
                </li>
                <li>
                  <Link className={path === '/faq' ? "active" : ""} href="/faq">FAQs</Link>
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
