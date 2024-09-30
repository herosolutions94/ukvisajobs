import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Text from "@/components/text";

import {
  makeSalaryString,
  doFirstUpperRestLower,
  websiteLink
} from "../helpers/helpers";

// import { useSelector } from "react-redux";
import JobApplyPopup from "./JobApplyPopup";

function Joblisting({
  content,
  student_jobs,
  experienced_jobs,
  saveJobFirst,
  isJobSavingFirst,
  saveJobSecond,
  isJobSavingSecond,
  handleApplyJobFirst,
  handleApplyJobSecond,
  isJobApplyingFirst,
  isJobApplyingSecond,
  isJobReporting,
  handleReportAnJob,
  handleShowSigninPopup,
  showSigninPopup,
  showReportPopup,
  handleToggleReportPopup
}) {
  const NO_OF_BLOCKS = 5;

  const [firstJobsIndex, setFirstJobsIndex] = useState(NO_OF_BLOCKS);
  const firstJobs = student_jobs.slice(0, firstJobsIndex);

  const [secondJobsIndex, setSecondJobsIndex] = useState(NO_OF_BLOCKS);
  const secondJobs = experienced_jobs.slice(0, secondJobsIndex);

  const [showApplyPopupFirst, setShowApplyPopupFirst] = useState(false);
  const [showApplyPopupSecond, setShowApplyPopupSecond] = useState(false);
  const [popupJob, setPopupJob] = useState(null);

  const handleSaveJobFirst = (id) => {
    saveJobFirst({ id });
  };

  const handleSaveJobSecond = (id) => {
    saveJobSecond({ id });
  };

  const dismissPopup = () => {
    setShowApplyPopupFirst(false);
    setShowApplyPopupSecond(false);
    setPopupJob(null);
  };

  const handleTitleClickFirst = (job) => {
    if (job.is_internal_or_external === "external") {
      if (isJobSavingFirst || isJobSavingSecond) {
        return false;
      }
      setShowApplyPopupFirst(true);
      setPopupJob(job);
      window.open(job.job_link, "_blank");
    } else {
      // Navigate to job profile directly with Next.js
      window.location.href = `/job-profile/${job.id}`;
    }
  };

  const handleTitleClickSecond = (job) => {
    if (job.is_internal_or_external === "external") {
      if (isJobSavingFirst || isJobSavingSecond) {
        return false;
      }
      setShowApplyPopupSecond(true);
      setPopupJob(job);
      window.open(job.job_link, "_blank");
    } else {
      window.location.href = `/job-profile/${job.id}`;
    }
  };

  return (
    <>
      <section id="job_lstng">
        <div className="contain">
          <div className="sec_heading text-center">
            <h5>
              <Text string={content.sec3_heading} />
            </h5>
            <h2>
              <Text string={content.sec3_tagline} />
            </h2>
          </div>
          <div className="job_outer">
            {student_jobs &&
              firstJobs.map((job) => (
                <div className="job_inner" key={job.id}>
                  <div className="flex">
                    <Link href="#" className="img_icon">
                      {job.image ? (
                  
                        <Image
                        src={cmsFileUrl(job.image,'companies')}
                        width={76}
                        height={76}
                        // Use a descriptive alt text
                      />
                      ) : (
                        <img src="/images/no-image.svg" alt="no image found" />
                      )}
                    </Link>
                    <div className="cntnt">
                      <h5 onClick={() => handleTitleClickFirst(job)} style={{ cursor: "pointer" }}>
                        {job.title}
                        {job.is_promoted === "1" && (
                          <span className="featured_job_new">Promoted</span>
                        )}
                      </h5>
                      <p>
                        <Text string={job.company_name} />
                      </p>
                      <ul className="specific_info">
                        <li>
                          <img src="/images/new/location.svg" alt="" />
                          <span>
                            <Text string={job.city} />
                          </span>
                        </li>
                        <li>
                          <img src="/images/new/teacher.svg" alt="" />
                          <span>
                            <Text string={`${
                              job.degree_requirement === "no-minimum"
                                ? "No Minimum"
                                : job.degree_requirement
                            }`} />
                          </span>
                        </li>
                        <li>
                          <img className="sm_icon_pound" src="/images/pound1.png" alt="" />
                          <span>
                            {makeSalaryString(
                              job.min_salary,
                              job.max_salary,
                              doFirstUpperRestLower(job.salary_interval)
                            )}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="book_mark">
                    {job.saved ? (
                      <div type="button" className="book_mark_active">
                        <img src="/images/icon-bookmark.svg" alt="" />
                      </div>
                    ) : (
                      <a
                        type="button"
                        onClick={() => handleSaveJobFirst(job.id)}
                        disabled={isJobSavingFirst}
                      >
                        <img src="/images/icon-bookmark.svg" alt="" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
          </div>
          <div className="btn_blk text-center">
            <Link href={("/open-jobs/1")} className="site_btn blank">
              <Text string={content.sec3_button_text} />
            </Link>
          </div>
          <div className="experience_job_lst">
            <div className="sec_heading text-center">
              <h5>
                <Text string={content.sec4_heading} />
              </h5>
              <h2>
                <Text string={content.sec4_tagline} />
              </h2>
            </div>
            <div className="job_outer">
              {experienced_jobs &&
                secondJobs.map((job) => (
                  <div className="job_inner" key={job.id}>
                    <div className="flex">
                      <Link href="#" className="img_icon">
                        {job.image ? (
                          
                          <Image
                          src={cmsFileUrl(job.image,'companies')}
                          width={76}
                          height={76}
                           // Use a descriptive alt text
                        />
                        ) : (
                          <img src="/images/no-image.svg" alt="no image found" />
                        )}
                      </Link>
                      <div className="cntnt">
                        <h5 onClick={() => handleTitleClickSecond(job)} style={{ cursor: "pointer" }}>
                          {job.title}
                          {job.is_promoted === "1" && (
                            <span className="featured_job_new">Promoted</span>
                          )}
                        </h5>
                        <p>
                          <Text string={job.company_name} />
                        </p>
                        <ul className="specific_info">
                          <li>
                            <img src="/images/new/location.svg" alt="" />
                            <span>
                              <Text string={job.city} />
                            </span>
                          </li>
                          <li>
                            <img src="/images/new/teacher.svg" alt="" />
                            <span>
                              <Text string={`${
                                job.degree_requirement === "no-minimum"
                                  ? "No Minimum"
                                  : job.degree_requirement
                              }`} />
                            </span>
                          </li>
                          <li>
                            <img className="sm_icon_pound" src="/images/pound1.png" alt="" />
                            <span>
                              {makeSalaryString(
                                job.min_salary,
                                job.max_salary,
                                doFirstUpperRestLower(job.salary_interval)
                              )}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="book_mark">
                      {job.saved ? (
                        <div type="button" className="book_mark_active">
                          <img src="/images/icon-bookmark.svg" alt="" />
                        </div>
                      ) : (
                        <a
                          type="button"
                          onClick={() => handleSaveJobSecond(job.id)}
                          disabled={isJobSavingSecond}
                        >
                          <img src="/images/icon-bookmark.svg" alt="" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
            </div>
            <div className="btn_blk text-center">
              <Link href={("/open-jobs/1")} className="site_btn blank">
                <Text string={content.sec4_button_text} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <br />
      {showApplyPopupFirst && (
        <JobApplyPopup
          job={popupJob}
          dismissPopup={dismissPopup}
          handleJobApply={handleApplyJobFirst}
          isJobApplying={isJobApplyingFirst}
          saveJob={saveJobFirst}
          isJobSaving={isJobSavingFirst}
          isJobReporting={isJobReporting}
          handleReportAnJob={handleReportAnJob}
          handleShowSigninPopup={handleShowSigninPopup}
          showSigninPopup={showSigninPopup}
          showReportPopup={showReportPopup}
          handleToggleReportPopup={handleToggleReportPopup}
        />
      )}
      {showApplyPopupSecond && (
        <JobApplyPopup
          job={popupJob}
          dismissPopup={dismissPopup}
          handleJobApply={handleApplyJobSecond}
          isJobApplying={isJobApplyingSecond}
          saveJob={saveJobSecond}
          isJobSaving={isJobSavingSecond}
          isJobReporting={isJobReporting}
          handleReportAnJob={handleReportAnJob}
          handleShowSigninPopup={handleShowSigninPopup}
          showSigninPopup={showSigninPopup}
          showReportPopup={showReportPopup}
          handleToggleReportPopup={handleToggleReportPopup}
        />
      )}
    </>
  );
}

export default Joblisting;
