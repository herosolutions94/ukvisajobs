import Text from "@/components/text";
import http from "@/helpers/http";
import { cmsFileUrl, doObjToFormData } from "@/helpers/helpers"
// import { nowPlus6Days, eventDateFormat } from "../helpers/helpers";
import Image from "next/image";
import Link from "next/link";

export const getServerSideProps = async (context) => {
  const result = await http
    .post("blogs", doObjToFormData({ token: "" }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } }; // Pass jobsResult to props
};

export default function Blogs({ result }) {
  const { content, cats, meta_desc, site_settings, blogs } = result;
  console.log(result);
  return (
    <>
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
          <section id="job_profile_list" className="bottom_padding_lg">
            <div className="contain">
              <ul className="tag_list blog_tag">
                {cats &&
                  cats.map((cat) => (
                    <li>
                      <span
                        // onClick={() => {
                        //   searchBlogs(cat.id);
                        // }}
                      >
                        {cat.title}
                      </span>
                    </li>
                  ))}
              </ul>
              <div className="flex_row main_row row">
                {
                  blogs?.map((blog,index)=>{
                    return(
                      <div className="col col-lg-4 col-md-6">
                      <div className="job_profile_blk">
                        <div className="fig">
                          <Link href={(`/blogs/${blog.id}`)}>
                            <Image src={cmsFileUrl(blog.image,'blogs')} width={368} height={188} />
                          </Link>
                        </div>
                        <div className="txt">
                          <h4>
                            <Link href={(`/blogs/${blog.id}`)}>
                              <Text string={blog.title} length={50} />
                            </Link>
                          </h4>
                          <Text string={blog.description} parse={true} length={150} />
                          <div className="btn_blk">
                            <Link
                              className="site_btn text learn"
                              href={(`/blogs/${blog.id}`)}
                            >
                              Read More
                              <i className="arrow" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    )
                  })
                }
              </div>

              <div
                className="btn_blk text-center gap_top"
                style={{ display: "none" }}
              >
                <Link href="#" className="site_btn blank">
                  Load More
                </Link>
              </div>
            </div>
          </section>

          </main>
    </>
  );
}
