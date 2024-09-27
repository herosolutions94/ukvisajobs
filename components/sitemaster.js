import React from "react"
import Head from "next/head"
import { cmsFileUrl } from "@/helpers/helpers"

export default function SiteMaster({ siteSettings }) {

    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
            <meta name="title" content="Hire & Explore" />
            <meta name="description" content="Hire & Explore" />
            {/* <link rel="icon" href="/favicon.ico" /> */}
            <title>{siteSettings?.site_name}</title>
            {siteSettings?.site_icon && (
            <link
              rel="icon"
              href={cmsFileUrl(siteSettings?.site_icon, 'images')}
            />
          )}
        </Head>
    )
}