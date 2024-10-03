import React from "react";
import FormProcessingSpinner from "./FormProcessingSpinner";
import ReportPopup from "./ReportPopup";

function JobApplyPopup({
  job,
  dismissPopup,
  handleJobApply,
  isJobApplying,
  saveJob,
  isJobSaving,
  isJobReporting,
  handleReportAnJob,
  handleShowSigninPopup,
  showSigninPopup,
  showReportPopup,
  handleToggleReportPopup,
}) {

  return (
    <>
      <section className="popup sm" style={{ display: "block" }}>
        <div className="table_dv">
          <div className="table_cell">
            <div className="contain">
              <div className="_inner apply_job_pop_up">
                <button
                  type="button"
                  className="x_btn"
                  onClick={dismissPopup}
                ></button>
                <div className="act_btn btn_blk abt_act_btn">
                  {job.saved ? (
                    <button type="button" className="site_btn blank sm active">
                      <img
                        src="/images/icon-bookmark.svg"
                        alt=""
                      />
                    </button>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => saveJob({ id: job.id })}
                        disabled={isJobSaving}
                        className="site_btn blank sm"
                      >
                        <img
                          src="/images/icon-bookmark.svg"
                          alt=""
                        />
                      </button>
                    </>
                  )}
                </div>
                <div className="head_pop_title">
                  <h5>{job.title}</h5>
                </div>
                <div className="apply_job_cntnt">
                  <div className="form_row row">
                    <div className="col-sm-12">
                      {job.applied ? (
                        <p>You have applied for this job.</p>
                      ) : (
                        <>
                          <p>Did you apply for this job?</p>
                          <div className="btn_blk half_btn_blk">
                            <button
                              type="button"
                              className="site_btn"
                              onClick={() => handleJobApply(job.id)}
                            >
                              Yes
                            </button>
                            <button
                              type="button"
                              className="site_btn"
                              onClick={dismissPopup}
                              disabled={isJobApplying}
                            >
                              <FormProcessingSpinner isFormProcessing={isJobApplying} />
                              No
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="act_btn btn_blk text-right report_act_btn">
                    <button
                      type="button"
                      onClick={handleToggleReportPopup}
                      className="site_btn blank sm"
                    >
                      <img
                        src="/images/flag-altt.svg"
                        alt=""
                      />
                      <span>Report An Issue</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showReportPopup && (
        <ReportPopup
          handleToggleReportPopup={handleToggleReportPopup}
          job={job}
          isJobReporting={isJobReporting}
          handleReportAnJob={handleReportAnJob}
        />
      )}
    </>
  );
}

export default JobApplyPopup;
