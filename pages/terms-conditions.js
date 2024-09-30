
import Text from "@/components/text";
import { cmsFileUrl, doObjToFormData } from "@/helpers/helpers"
import http from "@/helpers/http";
import Image from "next/image";
import Link from "next/link";


export const getServerSideProps = async (context) => {
  const result = await http
    .post("terms-and-conditions", doObjToFormData({ token: "" }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } }; // Pass jobsResult to props
};

export default function Terms ({result }) {
  console.log(result);
  const  { content } = result;



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

      <section id="terms">
        <div className="contain sm">
          <div className="ck_editor">
            <Text string={content.detail} parse={true} />
          </div>
        </div>
      </section>
      </main>
 
 </>
  );
}
