import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as helpers from "../helpers/helpers";
import Text from "@/components/text";

const EventBlk = ({ event }) => {
  return (
    <>
      <div className="event_blk">
        <div className="date">
          <small>{helpers.onlyDayThreeletters(event.event_date)}</small>
          {helpers.onlyDateTwoletters(event.event_date)}
        </div>
        <div className="txt ev_ent">
          <div className="time small">
            {helpers.eventDateFormat(event.event_date)} @
            {helpers.eventTimeFormatNew(event.time_from)}
            {", "}
            {event.time_zone}
          </div>
          <h4 className="title mb-0">
            <Link href={(`/event-detail/${event.id}`)}>
              <Text string={event.title} />
            </Link>
          </h4>
          <div className="type small">
            <img
               src="/images/icon-video2.svg"
              alt=""
            />
            {event.cat_name} Event
          </div>
          <p>
            <Text string={event.short_description} parse={false} length={300} />
          </p>
          <div className="btn_blk">
            <Link
              href={(`/event-detail/${event.id}`)}
              className="site_btn text"
            >
              Register Now
              <i className="arrow"></i>
            </Link>
          </div>
        </div>
        <div className="fig">
          <figure>
            <Link href={(`/event-detail/${event.id}`)}>
            

<Image
                    src={helpers.cmsFileUrl(event.image,'events')}
                    width={335}
                    height={201}
                    // Use a descriptive alt text
                  />
            </Link>
          </figure>
        </div>
      </div>
    </>
  );
};

export default EventBlk;