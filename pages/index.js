import BrandsSection from "@/components/brandsection";
import Text from "@/components/text";
import { cmsFileUrl, doObjToFormData } from "@/helpers/helpers";
import http from "@/helpers/http";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import * as helpers from "../helpers/helpers";
import Joblisting from "@/components/jobListing";


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
  } = result;


  return (
    <>

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

      <section id="job_lstng">
      <div className="contain">
        <div className="sec_heading text-center">
          <h5>FEATURED JOBS</h5>
          <h2>Top student & graduate jobs</h2>
        </div>
        <div className="job_outer">
          {/* Job Item 1 */}
          <div className="job_inner">
            <div className="flex">
              <Link className="img_icon" href="/">
                <Image
                  alt="Goldman Sachs"
                  src="https://ukvisajobs.com/api/uploads/companies/thumb_288cc0ff022877bd3df94bc9360b9c5d_1670702092_8830.png"
                  width={100}
                  height={100}
                />
              </Link>
              <div className="cntnt">
                <h5 style={{ cursor: 'pointer' }}>2025 EMEA Birmingham Corporate Planning Management New Analyst</h5>
                <p>Goldman Sachs</p>
                <ul className="specific_info">
                  <li>
                    <Image src="/images/new/location.svg" alt="" width={16} height={16} />
                    <span>Birmingham</span>
                  </li>
                  <li>
                    <Image src="/images/new/teacher.svg" alt="" width={16} height={16} />
                    <span>No Minimum</span>
                  </li>
                  <li>
                    <Image className="sm_icon_pound" src="/images/pound1.png" alt="" width={16} height={16} />
                    <span>Competitive</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="book_mark">
              <button type="button">
                <Image src="/images/icon-bookmark.svg" alt="" width={16} height={16} />
              </button>
            </div>
          </div>
          
          {/* Job Item 2 */}
          <div className="job_inner">
            <div className="flex">
              <Link className="img_icon" href="/">
                <Image
                  alt="Grant Thornton"
                  src="https://ukvisajobs.com/api/uploads/companies/thumb_b0b183c207f46f0cca7dc63b2604f5cc_1675279182_3825.png"
                  width={100}
                  height={100}
                />
              </Link>
              <div className="cntnt">
                <h5 style={{ cursor: 'pointer' }}>Audit Graduate Programme (Autumn 2025) - Sheffield</h5>
                <p>Grant Thornton</p>
                <ul className="specific_info">
                  <li>
                    <Image src="/images/new/location.svg" alt="" width={16} height={16} />
                    <span>Other</span>
                  </li>
                  <li>
                    <Image src="/images/new/teacher.svg" alt="" width={16} height={16} />
                    <span>No Minimum</span>
                  </li>
                  <li>
                    <Image className="sm_icon_pound" src="/images/pound1.png" alt="" width={16} height={16} />
                    <span>31,000 - 34,000 / Yearly</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="book_mark">
              <button type="button">
                <Image src="/images/icon-bookmark.svg" alt="" width={16} height={16} />
              </button>
            </div>
          </div>

          {/* Job Item 3 */}
          <div className="job_inner">
            <div className="flex">
              <Link className="img_icon" href="/">
                <Image
                  alt="Bain & Company"
                  src="https://ukvisajobs.com/api/uploads/companies/thumb_6faa8040da20ef399b63a72d0e4ab575_1689588389_7510.png"
                  width={100}
                  height={100}
                />
              </Link>
              <div className="cntnt">
                <h5 style={{ cursor: 'pointer' }}>Associate Consultant</h5>
                <p>Bain & Company</p>
                <ul className="specific_info">
                  <li>
                    <Image src="/images/new/location.svg" alt="" width={16} height={16} />
                    <span>London</span>
                  </li>
                  <li>
                    <Image src="/images/new/teacher.svg" alt="" width={16} height={16} />
                    <span>No Minimum</span>
                  </li>
                  <li>
                    <Image className="sm_icon_pound" src="/images/pound1.png" alt="" width={16} height={16} />
                    <span>42,000 - 55,000 / Yearly</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="book_mark">
              <button type="button">
                <Image src="/images/icon-bookmark.svg" alt="" width={16} height={16} />
              </button>
            </div>
          </div>

          {/* Job Item 4 */}
          <div className="job_inner">
            <div className="flex">
              <Link className="img_icon" href="/">
                <Image
                  alt="OC&C"
                  src="https://ukvisajobs.com/api/uploads/companies/thumb_8065d07da4a77621450aa84fee5656d9_1671114193_2483.png"
                  width={100}
                  height={100}
                />
              </Link>
              <div className="cntnt">
                <h5 style={{ cursor: 'pointer' }}>Associate Consultant 2025/26 - Analytics</h5>
                <p>OC&C</p>
                <ul className="specific_info">
                  <li>
                    <Image src="/images/new/location.svg" alt="" width={16} height={16} />
                    <span>London</span>
                  </li>
                  <li>
                    <Image src="/images/new/teacher.svg" alt="" width={16} height={16} />
                    <span>2:1</span>
                  </li>
                  <li>
                    <Image className="sm_icon_pound" src="/images/pound1.png" alt="" width={16} height={16} />
                    <span>58,000 / Yearly</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="book_mark">
              <button type="button">
                <Image src="/images/icon-bookmark.svg" alt="" width={16} height={16} />
              </button>
            </div>
          </div>

          {/* Job Item 5 */}
          <div className="job_inner">
            <div className="flex">
              <Link className="img_icon" href="/">
                <Image
                  alt="UBS"
                  src="https://ukvisajobs.com/api/uploads/companies/thumb_3d2d8ccb37df977cb6d9da15b76c3f3a_1672998704_2868.jpg"
                  width={100}
                  height={100}
                />
              </Link>
              <div className="cntnt">
                <h5 style={{ cursor: 'pointer' }}>2025 12 month Industrial Placement - Global Banking - London</h5>
                <p>UBS</p>
                <ul className="specific_info">
                  <li>
                    <Image src="/images/new/location.svg" alt="" width={16} height={16} />
                    <span>London</span>
                  </li>
                  <li>
                    <Image src="/images/new/teacher.svg" alt="" width={16} height={16} />
                    <span>2:1</span>
                  </li>
                  <li>
                    <Image className="sm_icon_pound" src="/images/pound1.png" alt="" width={16} height={16} />
                    <span>24,000 - 30,000 / Yearly</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="book_mark">
              <button type="button">
                <Image src="/images/icon-bookmark.svg" alt="" width={16} height={16} />
              </button>
            </div>
          </div>
        </div>
        <div className="btn_blk text-center">
          <Link className="site_btn blank" href="/open-jobs/1">
            Load More
          </Link>
        </div>

        <div className="experience_job_lst">
          <div className="sec_heading text-center">
            <h5>FEATURED JOBS</h5>
            <h2>Top experienced hire jobs</h2>
          </div>
          <div className="job_outer">
            {/* Experienced Job Item 1 */}
            <div className="job_inner">
              <div className="flex">
                <Link className="img_icon" href="/">
                  <Image
                    alt="Bits"
                    src="https://ukvisajobs.com/api/uploads/companies/thumb_dc912a253d1e9ba40e2c597ed2376640_1727672079_5344.png"
                    width={100}
                    height={100}
                  />
                </Link>
                <div className="cntnt">
                  <h5 style={{ cursor: 'pointer' }}>Financial Controller</h5>
                  <p>Bits</p>
                  <ul className="specific_info">
                    <li>
                      <Image src="/images/new/location.svg" alt="" width={16} height={16} />
                      <span>Other</span>
                    </li>
                    <li>
                      <Image src="/images/new/teacher.svg" alt="" width={16} height={16} />
                      <span>Not Specified</span>
                    </li>
                    <li>
                      <Image className="sm_icon_pound" src="/images/pound1.png" alt="" width={16} height={16} />
                      <span>Competitive</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="book_mark">
                <button type="button">
                  <Image src="/images/icon-bookmark.svg" alt="" width={16} height={16} />
                </button>
              </div>
            </div>

            {/* Experienced Job Item 2 */}
            <div className="job_inner">
              <div className="flex">
                <Link className="img_icon" href="/">
                  <Image
                    alt="Unlocking Language"
                    src="https://ukvisajobs.com/api/uploads/companies/thumb_df6d2338b2b8fce1ec2f6dda0a630eb0_1692578758_9116.png"
                    width={100}
                    height={100}
                  />
                </Link>
                <div className="cntnt">
                  <h5 style={{ cursor: 'pointer' }}>Band 5 Paediatric Speech Language Therapist For September 2024</h5>
                  <p>Unlocking Language</p>
                  <ul className="specific_info">
                    <li>
                      <Image src="/images/new/location.svg" alt="" width={16} height={16} />
                      <span>Other</span>
                    </li>
                    <li>
                      <Image src="/images/new/teacher.svg" alt="" width={16} height={16} />
                      <span>Not Specified</span>
                    </li>
                    <li>
                      <Image className="sm_icon_pound" src="/images/pound1.png" alt="" width={16} height={16} />
                      <span>34,000 / Yearly</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="book_mark">
                <button type="button">
                  <Image src="/images/icon-bookmark.svg" alt="" width={16} height={16} />
                </button>
              </div>
            </div>

            {/* Experienced Job Item 3 */}
            <div className="job_inner">
              <div className="flex">
                <Link className="img_icon" href="/">
                  <Image
                    alt="KPMG"
                    src="https://ukvisajobs.com/api/uploads/companies/thumb_cbcb58ac2e496207586df2854b17995f_1670702001_9149.png"
                    width={100}
                    height={100}
                  />
                </Link>
                <div className="cntnt">
                  <h5 style={{ cursor: 'pointer' }}>Tax Manager</h5>
                  <p>KPMG</p>
                  <ul className="specific_info">
                    <li>
                      <Image src="/images/new/location.svg" alt="" width={16} height={16} />
                      <span>Multiple Locations</span>
                    </li>
                    <li>
                      <Image src="/images/new/teacher.svg" alt="" width={16} height={16} />
                      <span>Not Specified</span>
                    </li>
                    <li>
                      <Image className="sm_icon_pound" src="/images/pound1.png" alt="" width={16} height={16} />
                      <span>Competitive</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="book_mark">
                <button type="button">
                  <Image src="/images/icon-bookmark.svg" alt="" width={16} height={16} />
                </button>
              </div>
            </div>

            {/* Experienced Job Item 4 */}
            <div className="job_inner">
              <div className="flex">
                <Link className="img_icon" href="/">
                  <Image
                    alt="Shoosmiths"
                    src="https://ukvisajobs.com/api/uploads/companies/thumb_c06d06da9666a219db15cf575aff2824_1678100595_6625.jpeg"
                    width={100}
                    height={100}
                  />
                </Link>
                <div className="cntnt">
                  <h5 style={{ cursor: 'pointer' }}>Senior Associate</h5>
                  <p>Shoosmiths</p>
                  <ul className="specific_info">
                    <li>
                      <Image src="/images/new/location.svg" alt="" width={16} height={16} />
                      <span>Birmingham</span>
                    </li>
                    <li>
                      <Image src="/images/new/teacher.svg" alt="" width={16} height={16} />
                      <span>Not Specified</span>
                    </li>
                    <li>
                      <Image className="sm_icon_pound" src="/images/pound1.png" alt="" width={16} height={16} />
                      <span>Competitive</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="book_mark">
                <button type="button">
                  <Image src="/images/icon-bookmark.svg" alt="" width={16} height={16} />
                </button>
              </div>
            </div>

            {/* Experienced Job Item 5 */}
            <div className="job_inner">
              <div className="flex">
                <Link className="img_icon" href="/">
                  <Image
                    alt="NHS"
                    src="https://ukvisajobs.com/api/uploads/companies/thumb_903ce9225fca3e988c2af215d4e544d3_1671462246_6259.png"
                    width={100}
                    height={100}
                  />
                </Link>
                <div className="cntnt">
                  <h5 style={{ cursor: 'pointer' }}>Consultant Cardiac Surgeon</h5>
                  <p>NHS</p>
                  <ul className="specific_info">
                    <li>
                      <Image src="/images/new/location.svg" alt="" width={16} height={16} />
                      <span>Other</span>
                    </li>
                    <li>
                      <Image src="/images/new/teacher.svg" alt="" width={16} height={16} />
                      <span>Not Specified</span>
                    </li>
                    <li>
                      <Image className="sm_icon_pound" src="/images/pound1.png" alt="" width={16} height={16} />
                      <span>105,504 - 139,882 / Yearly</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="book_mark">
                <button type="button">
                  <Image src="/images/icon-bookmark.svg" alt="" width={16} height={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="btn_blk text-center">
            <Link className="site_btn blank" href="/open-jobs/1">
              Load More
            </Link>
          </div>
        </div>
      </div>
    </section>

      

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
