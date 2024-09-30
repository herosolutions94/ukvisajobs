import React, { useState } from "react";
// import FormProcessingSpinner from "../common/FormProcessingSpinner"; 
import { useForm } from "react-hook-form";
import FormProcessingSpinner from "./FormProcessingSpinner";

function ReportPopup({
  handleToggleReportPopup,
  isJobReporting,
  handleReportAnJob,
  job
}) {
  const CANCEL_PLAN_REASONS = [
    "This job is no longer available",
    "This role does not sponsor a work visa",
    "This is a wrong link",
    "Other"
  ];

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const firstSubmit = (data) => {
    const reportData = { ...data, jobId: job.id };
    handleReportAnJob(reportData);
  };

  return (
    <div className="popup text_popup active">
      <div className="table_dv">
        <div className="table_cell">
          <div className="contain">
            <div className="_inner">
              <button
                type="button"
                className="x_btn"
                onClick={handleToggleReportPopup}
              ></button>
              <div className="heading_text">
                <h4>Please choose the reason for the report.</h4>
              </div>
              <form onSubmit={handleSubmit(firstSubmit)}>
                <div className="form_row row">
                  {CANCEL_PLAN_REASONS.map((value, index) => (
                    <div className="col-sm-12" key={index}>
                      <div className="lbl_btn">
                        <input
                          type="radio"
                          {...register("reason", {
                            required: "Please select a reason."
                          })}
                          value={value}
                          id={`reason-${index}`} // Unique ID for each radio button
                        />
                        <label htmlFor={`reason-${index}`}>{value}</label>
                      </div>
                    </div>
                  ))}
                </div>
                <span className="validation-error">
                  {errors.reason?.message}
                </span>
                {(watch("reason") === "Other" || watch("reason") === "other") && (
                  <>
                    <span>Please state</span>
                    <input
                      type="text"
                      className="input"
                      {...register("reason_other", {
                        required: watch("reason") ? "Please state the reason" : false
                      })}
                    />
                    <span className="validation-error">
                      {errors.reason_other?.message}
                    </span>
                  </>
                )}
                <div className="br"></div>
                <div className="btn_blk text-center">
                  <button
                    className="site_btn"
                    type="submit"
                    disabled={isJobReporting}
                  >
                    Submit
                    <FormProcessingSpinner
                      isFormProcessing={isJobReporting}
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportPopup;
