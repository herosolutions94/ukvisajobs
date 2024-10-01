import React, { useState } from "react";
import FaqBlk from "@/components/FaqBlk";
import Text from "@/components/text";
import { cmsFileUrl, doObjToFormData } from "@/helpers/helpers";
import http from "@/helpers/http";
import Image from "next/image";
import Link from "next/link";
import MetaGenerator from "@/components/meta-generator";

export const getServerSideProps = async (context) => {
  const result = await http
    .post("faq", doObjToFormData({ token: "" }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } }; // Pass jobsResult to props
};

export default function Faq({ result }) {
  const { content, faqs, faq2s, meta_desc, page_title, site_settings } = result;

  const [section, setSection] = useState(1);
  const [list, setList] = useState(faqs);
  const [selected, setSelected] = useState(list?.[0]?.id);

  const handleSetSection = (s) => {
    setSection(s);
    if (s === 1) setList(faqs);
    else setList(faq2s);
  };

  const handleSetAccordian = (id) => {
    if (selected == id) setSelected(0);
    else setSelected(id);
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
        <section id="faq">
          <div className="contain">
            <div className="faq_opt text-center">
              <span
                className={section === 1 && "active"}
                onClick={() => handleSetSection(1)}
              >
                <Text string={content.sec2_heading} />
              </span>
              <span
                className={section === 2 && "active"}
                onClick={() => handleSetSection(2)}
              >
                <Text string={content.sec2_2_heading} />
              </span>
            </div>
            <div className="faq_lst">
              {list.map((f) => {
                return (
                  <FaqBlk
                    f={f}
                    key={f.id}
                    selected={selected}
                    handleSetAccordian={handleSetAccordian}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
