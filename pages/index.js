import BrandsSection from "@/components/brandsection";
import Text from "@/components/text";
import { cmsFileUrl, doObjToFormData } from "@/helpers/helpers";
import http from "@/helpers/http";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import * as helpers from "../helpers/helpers";
import MetaGenerator from "@/components/meta-generator";
import JobsBlk from "@/components/jobsBlk";


export const getServerSideProps = async (context) => {
  const result = await http
    .post("home", doObjToFormData({ token: "" }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } }; // Pass jobsResult to props
};

export default function Home({ result, jobsResult }) {
  console.log(result);
  const {
    content,
    partners,
    candidates_images,
    events,
    articles,
    totalJobs,
    totalEmployees,
    meta_desc,
    page_title,
    student_jobs,
    experienced_jobs,
    site_settings
  } = result;
  console.log(meta_desc)

  return (
    <>
      <MetaGenerator meta_info={meta_desc} page_title={page_title} site_settings={site_settings} />
      <main id="root">
        <section id="banner">
          <div className="contain">
            <div className="flex_blk">
              <div className="flex">
                <div className="colL">
                  <div className="content">
                    <h1 className="heading">
                      <Text string={content.banner_heading} />
                    </h1>
                    <p>
                      <Text string={content.banner_tagline} />
                    </p>
                    <div className="flex flex_count">
                      <div className="col_num">
                        <div className="_inner">
                          {/* <h3>{content.state_heading1}</h3> */}
                          <h3>
                            <CountUp
                              end={parseInt(content.state_heading1)}
                              duration={3}
                            />{" "}
                            +
                          </h3>
                          <p>{content.state_title1}</p>
                        </div>
                      </div>
                      <div className="col_num">
                        <div className="_inner">
                          {/* <h3>{totalJobs}+</h3> */}
                          <h3>
                            <CountUp end={totalJobs} duration={3} /> +
                          </h3>
                          <p>{content.state_title2}</p>
                        </div>
                      </div>
                      <div className="col_num">
                        <div className="_inner">
                          {/* <h3>{totalEmployees}+</h3> */}
                          <h3>
                            <CountUp end={totalEmployees} duration={3} /> +
                          </h3>
                          <p>{content.state_title3}</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn_blk">
                      <Link
                        href={content.banner_button_link1}
                        className="site_btn color_btn"
                      >
                        {content.banner_button_text1}
                      </Link>
                      <Link
                        href={content.banner_button_link2}
                        className="site_btn blank"
                      >
                        {content.banner_button_text2}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="colR">
                  <Image
                    src={cmsFileUrl(content.banner_image)}
                    width={585}
                    height={555}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <BrandsSection partners={partners} />

        {/* job listings */}

        <JobsBlk content={content} student_jobs={student_jobs} experienced_jobs={experienced_jobs} />



        <section id="Featured_events">
          <div className="contain">
            <div className="sec_heading text-center">
              <h5>
                <Text string={content.sec5_heading} />
              </h5>
              <h2>
                <Text string={content.sec5_tagline} />
              </h2>
            </div>
            <div className="flex">
              {events &&
                events.map((event) => (
                  <div className="col">
                    <div className="inner">
                      <div className="event_header">
                        <div className="date_event">
                          <span>
                            {helpers.onlyDayThreeletters(event.event_date)}
                          </span>
                          <strong>
                            {helpers.onlyDateTwoletters(event.event_date)}
                          </strong>
                        </div>
                        <div className="cntnt">
                          {/* <p>{event.cat_name} Events</p> */}
                          <h3>
                            <Link href={`/event-detail/${event.id}`}>
                              <Text string={event.title} />
                            </Link>
                          </h3>
                        </div>
                      </div>
                      <div className="event_bdy">
                        <ul className="specific_info">
                          <li>
                            <img src="images/new/video.svg" alt="" />{" "}
                            <span>{event.cat_name}</span>
                          </li>
                          <li>
                            <img src="images/new/calendar.svg" alt="" />{" "}
                            <span>
                              {helpers.eventDateFormat(event.event_date)} @
                              {helpers.eventTimeFormatNew(event.time_from)}
                              {", "}
                              {event.time_zone}
                            </span>
                          </li>
                        </ul>
                        <p>
                          <Text
                            string={event.short_description}
                            parse={false}
                            length={300}
                          />
                        </p>
                        <Link
                          className="site_btn md"
                          href={`/event-detail/${event.id}`}
                        >
                          Register Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="btn_blk text-center">
              <Link href={`/events`} className="site_btn blank">
                <Text string={content.sec5_button_text} />
              </Link>
            </div>
          </div>
        </section>

        <section id="home_news">
          <div className="contain">
            <div className="sec_heading text-center">
              <h5>
                <Text string={content.sec6_heading} />
              </h5>
              <h2>
                <Text string={content.sec6_tagline} />
              </h2>
            </div>
            <div className="flex">
              {articles &&
                articles.map((row) => (
                  <div className="col">
                    <div className="job_profile_blk">
                      <div class="fig">
                        <Link href={`/blog-detail/${row.id}`}>
                          <Image
                            src={cmsFileUrl(row.image, "blogs")}
                            width={375}
                            height={191}
                          // Use a descriptive alt text
                          />
                        </Link>
                      </div>
                      <div class="txt">
                        <h4>
                          <Link href={`/blog-detail/${row.id}`}>
                            <div>
                              <Text string={row.title} />
                            </div>
                          </Link>
                        </h4>
                        <div>
                          <Text string={row.description} length={200} />
                        </div>
                        <div class="btn_blk">
                          <Link
                            href={`/blog-detail/${row.id}`}
                            class="site_btn text learn"
                          >
                            Read More<i class="arrow"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="btn_blk text-center">
              <Link href={`/blogs`} className="site_btn blank">
                <Text string={content.sec6_button_text} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
