import React from "react";

export default function JobsSortBy({ handleSortByChange, ToggleFilter, totalJobs = 0, pageNo, jobs, sortBy, filter }) {
    return <>
        <div className="top_head main_filter flex">
            <h5>
                {totalJobs == 0
                    ? "0 record."
                    : "Showing " +
                    ((pageNo - 1) * 15 + 1) +
                    " to " +
                    ((pageNo - 1) * 15 + jobs.length) +
                    " of " +
                    totalJobs +
                    (totalJobs === 1 ? " role" : " roles")}
            </h5>
            <div className="inner_filter_main">
                <span>Sort by :</span>
                <div className="drop">
                    <div className="drop_btn" onClick={ToggleFilter}>
                        <h6>
                            {sortBy == "desc" ? "Most Recent" : "Least Recent"}
                        </h6>
                        <div className="drop_arrow">
                            <img src="/images/new/arrow-down-filter.svg" alt="" />
                        </div>
                    </div>
                    <div className={filter ? "drop_cnt active" : "drop_cnt"}>
                        <ul className="drop_lst">
                            <li
                                onClick={() => handleSortByChange("desc")}
                                style={{ cursor: "pointer" }}
                            >
                                Most Recent
                            </li>
                            <li
                                onClick={() => handleSortByChange("asc")}
                                style={{ cursor: "pointer" }}
                            >
                                Least Recent
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
