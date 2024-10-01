
import MetaGenerator from "@/components/meta-generator";
import Text from "@/components/text";
import { cmsFileUrl, doObjToFormData } from "@/helpers/helpers"
import http from "@/helpers/http";
import Image from "next/image";
import Link from "next/link";


export const getServerSideProps = async (context) => {
  const result = await http
    .post("privacy-policy", doObjToFormData({ token: "" }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } }; // Pass jobsResult to props
};

export default function Privacy({ result }) {
  const { content, meta_desc, page_title, site_settings } = result;
  return (
    <>
      <MetaGenerator meta_info={meta_desc} page_title={page_title} site_settings={site_settings} />
      <main id="root">
        <section id="job_intro" className="all_banner">
          <div className="contain">
            <div className="content">
              <h1 className="heading">
                <Text string={content.banner_heading} parse={true} />
              </h1>
            </div>
          </div>
        </section>

        <section id="terms">
          <div className="contain sm">
            <div className="ck_editor">
              <Text string={content.detail} parse={true} />
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
