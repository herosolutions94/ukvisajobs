import { cmsFileUrl } from "@/helpers/helpers";
import Link from "next/link";
export default function Header({ siteSettings }) {

    return (
        <header className="">
          <div className="contain">
            <img src={cmsFileUrl(siteSettings?.site_logo, 'images')} alt={siteSettings?.site_name} />
          </div>
        </header>
    )
}