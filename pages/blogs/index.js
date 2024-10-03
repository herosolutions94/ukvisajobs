import Text from "@/components/text";
import http from "@/helpers/http";
import { cmsFileUrl, doObjToFormData } from "@/helpers/helpers"
// import { nowPlus6Days, eventDateFormat } from "../helpers/helpers";
import Image from "next/image";
import Link from "next/link";
import MetaGenerator from "@/components/meta-generator";
import { useEffect, useState } from "react";

export const getServerSideProps = async (context) => {
  const result = await http
    .post("blogs", doObjToFormData({ token: "" }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } }; // Pass jobsResult to props
};

export default function Blogs({ result }) {
  const { content, cats, meta_desc, site_settings, blogs, page_title } = result;
  const [blogArr, setBlogArr] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setBlogArr(blogs)
  }, [blogs]);
  const searchBlogs = (cat_id) => {
    setCategory(cat_id)
    let formData = { cat_id };
    setLoading(true)
    http
      .post("fetch-blogs-data", doObjToFormData(formData))
      .then(({ data }) => {
        setLoading(false)
        if (data?.status) {
          setBlogArr(data?.blogs)
        }
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
      });
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
        <section id="job_profile_list" className="bottom_padding_lg">
          <div className="contain">
            <ul className="tag_list blog_tag">
              {cats &&
                cats.map((cat) => (
                  <li>
                    <span
                      className={category === cat?.id ? 'active' : ''}
                      onClick={() => {
                        searchBlogs(cat.id);
                      }}
                    >
                      {cat.title}
                    </span>
                  </li>
                ))}
            </ul>
            <div className="flex_row main_row row">
              {
                loading
                  ? <h3>fetching...</h3>
                  :
                  blogArr?.length === 0 ?
                    <h3>No blog found.</h3>
                    :
                    blogArr?.map((blog, index) => {
                      return (
                        <div className="col col-lg-4 col-md-6" key={index}>
                          <div className="job_profile_blk">
                            <div className="fig">
                              <Link href={(`/blogs/${blog.slug}`)}>
                                <Image src={cmsFileUrl(blog.image, 'blogs')} width={368} height={188} />
                              </Link>
                            </div>
                            <div className="txt">
                              <h4>
                                <Link href={(`/blogs/${blog.slug}`)}>
                                  <Text string={blog.title} length={50} />
                                </Link>
                              </h4>
                              <Text string={blog.description} parse={true} length={150} />
                              <div className="btn_blk">
                                <Link
                                  className="site_btn text learn"
                                  href={(`/blogs/${blog.slug}`)}
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
