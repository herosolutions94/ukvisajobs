
import Text from "@/components/text";
import { cmsFileUrl, doObjToFormData } from "@/helpers/helpers"
import http from "@/helpers/http";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Button from "@/components/Button";
import MetaGenerator from "@/components/meta-generator";


export const getServerSideProps = async (context) => {
  const result = await http
    .post("about-us", doObjToFormData({ token: "" }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } }; // Pass jobsResult to props
};

export default function About({ result }) {
  const { content, meta_desc, page_title } = result;
  const handleContactSubmit = (formData) => {
    dispatch(saveContact(formData));
  };


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

        <section className="wel_come">
          <div className="contain">
            <div className="content text-center w_sm">
              <div className="line_heading text-center">
                <h2><Text string={content.welcome_heading} parse={true} /></h2>
                <span className="bot_line"></span>
              </div>
              <Text string={content.welcome_text} parse={true} />
            </div>
          </div>
        </section>

        <section id="vision">
          <div className="contain">
            <div className="content text-center">
              <div className="line_heading text-center">
                <h2><Text string={content.ov_heading} parse={true} /></h2>
                <span className="bot_line"></span>
              </div>
            </div>
            <div className="flex_row main_row row center">
              <div className="col col-lg-4 col-md-6" key={1}>
                <div className="vision_blk">
                  <div className="ico">
                    <Image
                      src={cmsFileUrl(content.image2, "images")}
                      width={52}
                      height={52}
                    />
                  </div>
                  <div className="txt">
                    <h4>
                      <Text string={content.ov_card_heading1} />
                    </h4>
                    <p>
                      <Text string={content.ov_card_detail1} />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4 col-md-6" key={2}>
                <div className="vision_blk">
                  <div className="ico">
                    <Image
                      src={cmsFileUrl(content.image3, "images")}
                      width={52}
                      height={52}
                    />
                  </div>
                  <div className="txt">
                    <h4>
                      <Text string={content.ov_card_heading2} />
                    </h4>
                    <p>
                      <Text string={content.ov_card_detail2} />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4 col-md-6" key={3}>
                <div className="vision_blk">
                  <div className="ico">

                    <Image
                      src={cmsFileUrl(content.image4, "images")}
                      width={52}
                      height={52}
                    />
                  </div>
                  <div className="txt">
                    <h4>
                      <Text string={content.ov_card_heading3} />
                    </h4>
                    <p>
                      <Text string={content.ov_card_detail3} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="contain">
            <div className="text-center contact_line_heading">
              <div className="line_heading text-center">
                <h2>
                  <Text string={content.cu_heading} parse={true} />
                </h2>
                <span className="bot_line"></span>
              </div>
              <p>
                <Text string={content.cu_desc} />
              </p>
            </div>
            <div className="in_col abt_form">
              <ContactForm
                content={content}
                handleContactSubmit={handleContactSubmit}
              // isFormProcessing={isFormProcessing}
              />
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
