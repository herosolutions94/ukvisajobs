import Link from "next/link";
import React from "react";
import Text from "./text";
import { doFirstUpperRestLower, makeSalaryString, cmsFileUrl } from "@/helpers/helpers";
import Image from "next/image";

export default function SingleJobBlk({ job, isJobSavingFirst, handleSaveJobFirst, handleTitleClickFirst }) {
    return <>
        <div className="job_inner">
            <div className="flex">
                <Link href="" className="img_icon">
                    {job.image == "" || job.image == null ? (
                        <img src="/images/no-image.svg" alt="no image found" />
                    ) : (
                        <Image
                            src={cmsFileUrl(job?.image, "companies")}
                            width={76}
                            height={76}
                            alt={job?.title}
                        />
                    )}
                </Link>
                <div className="cntnt">
                    <h5
                        onClick={() => handleTitleClickFirst(job)}
                        style={{ cursor: "pointer" }}
                    >
                        {job.title}
                        {job.is_promoted == "1" && (
                            <span className="featured_job_new">Promoted</span>
                        )}
                    </h5>
                    <p>
                        <Text string={job.company_name} />
                    </p>
                    <ul className="specific_info">
                        <li>
                            <img src="images/new/location.svg" alt="" />{" "}
                            <span>
                                <Text string={job.city} />
                            </span>
                        </li>
                        <li>
                            <img src="images/new/teacher.svg" alt="" />{" "}
                            <span>
                                <Text
                                    string={`${job.degree_requirement == "no-minimum"
                                        ? "No Mminimum"
                                        : job.degree_requirement
                                        }`}
                                />
                            </span>
                        </li>
                        <li>
                            <img
                                className="sm_icon_pound"
                                src="/images/pound1.png"
                                alt=""
                            />{" "}
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
                        <img
                            src={"/images/icon-bookmark.svg"}
                            alt=""
                        />
                    </div>
                ) : (
                    <a
                        type="button"
                        onClick={() => handleSaveJobFirst(job.id)}
                        disabled={isJobSavingFirst}
                    >
                        <img
                            src={"/images/icon-bookmark.svg"}
                            alt=""
                        />
                    </a>
                )}
            </div>
        </div>
    </>;
}
