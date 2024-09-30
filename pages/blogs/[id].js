import Text from "@/components/text";
import http from "@/helpers/http";
import { cmsFileUrl, doObjToFormData } from "@/helpers/helpers"
import Image from "next/image";
import Link from "next/link";

export const getServerSideProps = async (context) => {
  const { req, params } = context;
  const id = params.id || [];
  const result = await http
    .post("/blog-detail", doObjToFormData({ id: id }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);
  return { props: { result } };
};

export default function Detail({ result }) {
  const { blog, blog_cat, meta_desc, site_settings } = result;
  console.log(result);
  return (
    <>
    <main id="root">
  <section className="blog_detail">
            <div className="contain">
              <div className="back_btn">
                <Link href={("/blogs")}>
                  <img src="../images/new/arrow-down.svg" alt="" />{" "}
                  <span>Return to Resources</span>
                </Link>
              </div>
              <div className="content">
                <div className="cat_current_blog">{blog_cat}</div>
                <h1 className="heading">
                  <Text string={blog.title} />
                </h1>
              </div>
              <div className="fig">
                   <Image src={cmsFileUrl(blog.image,'blogs')} width={1170} height={778} />
              </div>
              <div className="txt">
                <Text string={blog.description} parse={true} />
              </div>
            </div>
          </section>

          </main>
    </>
  );
}
