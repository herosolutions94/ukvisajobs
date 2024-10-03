import React, { useState } from "react";
import JobApplyPopup from "./JobApplyPopup";
import { useRouter } from "next/router";
import SingleJobBlk from "./job-single";

function Joblisting({
  jobs,
}) {
  const router = useRouter()

  const [isJobSavingFirst, setIsJobSavingFirst] = useState(false);
  const [isJobApplyingFirst, setIsJobApplyingFirst] = useState(false);
  const [showApplyPopupFirst, setShowApplyPopupFirst] = useState(false);
  const [popupJob, setPopupJob] = useState(null);
  const [showSigninPopup, setShowSigninPopup] = useState(false);
  const handleSaveJobFirst = (id) => {
    if (ifNotLoggedIn()) {
      setIsJobSavingFirst(true);
      http
        .post("save-job", doObjToFormData({ token: authToken(), id: id }))
        .then((response) => {
          setIsJobSavingFirst(false);

          // Check the status code
          if (response.status === 200) {
            const data = { ...response.data, id: jobId };
            if (data.status) {
              toast.success("Job Saved Successfully.");
            } else {
              toast.error("Technical issue!");
            }
          } else if (response.status === 400) {
            toast.error("Error 400:" + response.data.message || "Bad Request");
          }
        })
        .catch((error) => {
          setIsJobSavingFirst(false);
          if (error.response) {
            if (error.response.status === 400) {
              toast.error("Error 400:" + error.response.data.message || "Bad Request")
              setTimeout(() => {
                if (error?.response?.data?.errorType == 'invalid_token') {
                  router.push(process.env.NEXT_PUBLIC_LOGIN_URL)
                }
              }, 200);
            } else {
              toast.error("API Error:" + error.response.data.message || "Something went wrong!")
            }
          } else {
            toast.error(error.message);
          }

        });
    }
  };
  const handleApplyJobFirst = (id) => {
    if (ifNotLoggedIn()) {
      setIsJobApplyingFirst(true);
      http
        .post("user/job-applied", doObjToFormData({ token: authToken(), id: id }))
        .then((response) => {
          setIsJobApplyingFirst(false);

          // Check the status code
          if (response.status === 200) {
            const data = { ...response.data, id: jobId };
            if (data.status) {
              toast.success("Job Applied Successfully.");
            } else {
              toast.error("Technical issue!");
            }
          } else if (response.status === 400) {
            toast.error("Error 400:" + response.data.message || "Bad Request");
          }
        })
        .catch((error) => {
          setIsJobApplyingFirst(false);
          if (error.response) {
            if (error.response.status === 400) {
              toast.error("Error 400:" + error.response.data.message || "Bad Request")
              setTimeout(() => {
                if (error?.response?.data?.errorType == 'invalid_token') {
                  router.push(process.env.NEXT_PUBLIC_LOGIN_URL)
                }
              }, 200);
            } else {
              toast.error("API Error:" + error.response.data.message || "Something went wrong!")
            }
          } else {
            toast.error(error.message);
          }

        });
    }
  };
  const handleTitleClickFirst = (job) => {
    if (job.is_internal_or_external === "external") {
      if (isJobSavingFirst) {
        return false;
      }
      setShowApplyPopupFirst(true);
      setPopupJob(job);
      window.open(job.job_link, "_blank");
    } else {
      router.push(`${process.env.NEXT_PUBLIC_LIVE_URL}/job-profile/${job.id}`);
    }
  };
  const dismissPopup = () => {
    setShowApplyPopupFirst(false);
    setPopupJob(null);
  };
  const handleShowSigninPopup = () => {
    setShowSigninPopup(!showSigninPopup);
  };

  return (
    <>
      {
        jobs?.length > 0 ?
          jobs?.map((job, index) => {
            return (
              <>
                <SingleJobBlk job={job} key={index} handleSaveJobFirst={handleSaveJobFirst} isJobSavingFirst={isJobSavingFirst} handleTitleClickFirst={handleTitleClickFirst} />
              </>
            )
          })
          :
          ""
      }
      {showApplyPopupFirst && (
        <JobApplyPopup
          job={popupJob}
          dismissPopup={dismissPopup}
          handleJobApply={handleApplyJobFirst}
          isJobApplying={isJobApplyingFirst}
          saveJob={handleSaveJobFirst}
          isJobSaving={isJobSavingFirst}
          //   isJobReporting={isJobReporting}
          //   handleReportAnJob={handleReportAnJob}
          handleShowSigninPopup={handleShowSigninPopup}
          showSigninPopup={showSigninPopup}
        //   showReportPopup={showReportPopup}
        //   handleToggleReportPopup={handleToggleReportPopup}
        />
      )}
    </>
  );
}

export default Joblisting;
