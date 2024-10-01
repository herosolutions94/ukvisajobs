
import EventBlk from "@/components/EventBlk";
import Text from "@/components/text";
import { cmsFileUrl, doObjToFormData } from "@/helpers/helpers"
import { nowPlus6Days, eventDateFormat } from "../helpers/helpers";
import http from "@/helpers/http";
import Image from "next/image";
import Link from "next/link";
import MetaGenerator from "@/components/meta-generator";


export const getServerSideProps = async (context) => {
  const result = await http
    .post("events", doObjToFormData({ token: "" }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } }; // Pass jobsResult to props
};

export default function Events({ result }) {
  const { cats, meta_desc, site_settings, events, page_title } = result;
  return (
    <>
      <MetaGenerator meta_info={meta_desc} page_title={page_title} site_settings={site_settings} />
      <main id="root">
        <section id="events">
          <div className="contain">
            <div className="sort_blk size_4 mb-4">
              <select
                name="dateRange"
                id="dateRange"
                // value={dateRange}
                // onChange={(e) => handleSubmit(e)}
                className="input w-auto p-0 border-0"
              >
                <option value="">Upcoming Events</option>
                {nowPlus6Days().map((date, index) => (
                  <option value={date}>
                    {index === 0 ? "Today" : `Now - ${eventDateFormat(date)}`}
                  </option>
                ))}
              </select>
            </div>
            {events.length === 0 ? (
              <h3>No event found.</h3>
            ) : (
              events.map((event) => {
                return <EventBlk event={event} key={event.id} />;
              })
            )}
            <div
              className="btn_blk justify-content-between mt-5"
              style={{ display: "none" }}
            >
              <button type="button" className="site_btn text prev_btn">
                <i className="chevron-left"></i> Previous Event
              </button>
              <button type="button" className="site_btn text next_btn">
                Next Event <i className="chevron-right"></i>
              </button>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
