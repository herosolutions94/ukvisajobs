import MetaGenerator from "@/components/meta-generator";
import Text from "@/components/text";
import { authToken } from "@/helpers/authToken";
import { doObjToFormData } from "@/helpers/helpers";
import http from "@/helpers/http";
import Link from "next/link";
import React from "react";
import { serialize } from 'cookie'; // Ensure you have this for cookie serialization

export const getServerSideProps = async (context) => {
    const { req, params, res } = context;
    const id = params.id || [];
    const result = await http
        .post("/event-detail", doObjToFormData({ id: id, token: authToken() }))
        .then((response) => response.data)
        .catch((error) => error.response.data);
    if (result?.error && result?.errorType === 'invalid_token') {
        res.setHeader(
            'Set-Cookie',
            serialize('authToken', '', { maxAge: -1, path: '/' })
        );

        return {
            redirect: {
                destination: '/events', // Redirect to the login page
                permanent: false,
            },
        };
    }
    return { props: { result } };
};
export default function EventDetails({ result }) {
    console.log(result)
    const { event, meta_desc, site_settings } = result;
    return <>
        <MetaGenerator meta_info={meta_desc} page_title={event?.title + " - " + site_settings?.site_name} />
        <section id="events" className="detail">
            <div className="contain">
                <div className="btn_blk mb-5">
                    <Link href="/events" className="site_btn text prev_btn">
                        <i className="chevron-left"></i> All Events
                    </Link>
                </div>
                <div className="event_detail">
                    <h2>
                        <Text string={event?.title} />
                    </h2>
                </div>
            </div>
        </section>
    </>;
}
