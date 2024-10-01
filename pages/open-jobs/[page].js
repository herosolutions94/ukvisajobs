import { doObjToFormData } from "@/helpers/helpers";
import http from "@/helpers/http";
import { parse, serialize } from "cookie";
import MetaGenerator from "@/components/meta-generator";
import JobHeader from "./header";
import JobsSidebarFilters from "./sidebar-filters";
import { useState } from "react";
import { useRouter } from "next/router";
import JobsSortBy from './jobs-sortby';

export const getServerSideProps = async (context) => {
  const { req, params, res } = context;
  const pageNo = params.page || [];
  const cookieHeader = req.headers.cookie || '';
  const cookieValue = parse(cookieHeader);
  const authToken = cookieValue['authToken'] !== undefined && cookieValue['authToken'] !== null && cookieValue['authToken'] !== '' ? cookieValue['authToken'] : null;
  const result = await http
    .post("jobs", doObjToFormData({ token: authToken }))
    .then((response) => response.data)
    .catch((error) => error.response.data);
  const jobsResult = await http
    .post("fetch-jobs-data", doObjToFormData({ token: authToken, pageNo: pageNo }))
    .then((response) => response.data)
    .catch((error) => error.response.data);
  if (result?.error && result?.errorType === "invalid_token") {
    res.setHeader('Set-Cookie', serialize('authToken', '', { maxAge: -1, path: '/' }));

    return {
      redirect: {
        destination: '/signin', // Redirect to the login page
        permanent: false,
      },
    };
  }
  return { props: { result, jobsResult } }; // Pass jobsResult to props
};
export default function OpenJobs({ result, jobsResult }) {
  console.log(jobsResult)
  const { cats, cities, content, degree_req, industries, meta_desc, page_title, site_settings } = result
  const { jobs, totalJobs } = jobsResult
  const router = useRouter()
  const { query } = router
  // console.log(query)
  const [pageNo, setPageNo] = useState(query?.page || 1);
  const [active, setActive] = useState(false);

  const [sortBy, setSortBy] = useState("desc");
  const [filter, setFilter] = useState(false);
  const handleSortByChange = (val) => {
    ToggleFilter();
    setSortBy(val);
  };
  const ToggleFilter = () => {
    setFilter(!filter);
  };

  return <>
    <MetaGenerator meta_info={meta_desc} page_title={page_title} site_settings={site_settings} />
    <main id="root">
      <section id="open_jobs">
        <JobHeader />
        <div className="jobs_page" id="job__block">
          <div className="contain">
            <div className="flex">
              <div className="filter_wrapper_col colL">
                <JobsSidebarFilters cities={cities} cats={cats} degree_req={degree_req} industries={industries} />

              </div>
              <div className="colR">
                <JobsSortBy handleSortByChange={handleSortByChange} jobs={jobs} totalJobs={totalJobs} ToggleFilter={ToggleFilter} pageNo={pageNo} sortBy={sortBy} filter={filter} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>;
}
