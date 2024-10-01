import React, { useState } from "react";
import SingleJobBlk from "./job-single";
import Text from "./text";
import Link from "next/link";
import { authToken } from "@/helpers/authToken";
import { useRouter } from "next/router";
import http from "@/helpers/http";
import { doObjToFormData, ifNotLoggedIn } from "@/helpers/helpers";
import toast from "react-hot-toast";
import JobApplyPopup from "./job-apply-popup";
import Joblisting from "./jobListing";

export default function JobsBlk({ content, student_jobs, experienced_jobs }) {


    return <>
        <section id="job_lstng">
            <div className="contain">
                <div className="sec_heading text-center">
                    <h5>
                        <Text string={content.sec3_heading} />
                    </h5>
                    <h2>
                        <Text string={content.sec3_tagline} />
                    </h2>
                </div>
                <div className="job_outer">
                    <Joblisting jobs={student_jobs} />
                </div>
                <div className="btn_blk text-center">
                    <Link href={("/open-jobs/1")} className="site_btn blank">
                        <Text string={content.sec3_button_text} />
                    </Link>
                </div>
                <div className="experience_job_lst">
                    <div className="sec_heading text-center">
                        <h5>
                            <Text string={content.sec4_heading} />
                        </h5>
                        <h2>
                            <Text string={content.sec4_tagline} />
                        </h2>
                    </div>
                    <div className="job_outer">
                        <Joblisting jobs={experienced_jobs} />
                    </div>
                </div>
            </div>
        </section>

    </>;
}
