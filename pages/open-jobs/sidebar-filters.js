import React, { useState } from "react";

export default function JobsSidebarFilters({ cities, cats, degree_req, industries }) {
    const [active, setActive] = useState(false);
    const toggleFilter = () => {
        setActive(!active);
    };
    const NO_OF_BLOCKS = 4;
    const [secondJobsIndex, setSecondJobsIndex] = useState(NO_OF_BLOCKS);
    const [firstJobsIndex, setFirstJobsIndex] = useState(NO_OF_BLOCKS);
    const filteredLocations = cities.slice(0, secondJobsIndex);
    const filteredIndustries = industries.slice(0, firstJobsIndex);
    return <>
        <div id="filter" className={active ? "active" : ""}>
            <button
                type="button"
                className="x_btn"
            // onClick={toggleFilter}
            ></button>
            <div className="top_head mb-0">
                <h4 className="mb-0">Filter Jobs</h4>
                <button
                    //   onClick={handleClearAllFilter}
                    className="clear_filter"
                //   disabled={isSearching}
                >
                    Clear All
                </button>
            </div>
            <div className="in_blk">
                <h6>Job Type</h6>
                <ul className="ctg_lst">
                    {cats.map((cat, key) => (
                        <li key={key}>
                            <label>
                                <input
                                    type="checkbox"
                                    value={cat.id}
                                    id={cat.id}
                                    name="job_type"
                                //   onChange={(e) =>
                                //     handleTypesChange(e, cat.sub_cats)
                                //   }
                                //   checked={tpyesFilter[cat.id]}
                                />
                                {cat.title} <span>({cat.count})</span>
                            </label>
                            <ul>
                                {cat.sub_cats &&
                                    cat.sub_cats.map((sub) => (
                                        <li>
                                            <div className="lbl_btn">
                                                <input
                                                    data-cat={cat.id}
                                                    type="checkbox"
                                                    value={sub.id}
                                                    id={sub.id}
                                                    name="job_sub"
                                                //   onChange={(e) =>
                                                //     handleSubtypesChangeChange(
                                                //       e,
                                                //       cat.sub_cats
                                                //     )
                                                //   }
                                                //   checked={subTypesFilter[sub.id]}
                                                />
                                                <label htmlFor="interships">
                                                    {sub.title}
                                                </label>
                                            </div>
                                        </li>
                                    ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="in_blk">
                <h6>Degree Requirement</h6>
                <ul className="ctg_lst">
                    {degree_req.map((dr, key) => (
                        <li key={key}>
                            <label>
                                <input
                                    type="checkbox"
                                    value={dr.id}
                                    id={dr.id}
                                    name="degree_req"
                                //   onChange={handleDegreeRequirementChange}
                                //   checked={jobRequirements[dr.id]}
                                />
                                {dr.title}
                                <span>({dr.count})</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="in_blk">
                <h6>Job Industry</h6>
                <ul className="ctg_lst">
                    {filteredIndustries.map((industry, key) => (
                        <li key={key}>
                            <label>
                                <input
                                    type="checkbox"
                                    value={industry.id}
                                    id={industry.id}
                                    name="job_cat"
                                //   onChange={handleJobCatsChange}
                                //   checked={jobCats[industry.id]}
                                />
                                {industry.title} <span>({industry.count})</span>
                            </label>
                        </li>
                    ))}
                </ul>
                {industries.length > NO_OF_BLOCKS && (
                    <button
                        // onClick={
                        //   firstJobsIndex === industries.length
                        //     ? resetFirst
                        //     : LoadMoreFirst
                        // }
                        className="view_more_new"
                    >
                        View All
                    </button>
                )}
            </div>
            <div className="in_blk">
                <h6>Location</h6>
                <ul className="ctg_lst">
                    {filteredLocations.map((city, key) => (
                        <li key={key}>
                            <label>
                                <input
                                    type="checkbox"
                                    value={city.id}
                                    id={city.id}
                                    name="city"
                                //   onChange={handleCityChange}
                                //   checked={citiesFilter[city.id]}
                                />
                                {city.title} <span>({city.count})</span>
                            </label>
                        </li>
                    ))}
                </ul>
                {cities.length > NO_OF_BLOCKS && (
                    <button
                        // onClick={
                        //   secondJobsIndex === cities.length
                        //     ? resetSecond
                        //     : LoadMoreSecond
                        // }
                        className="view_more_new"
                    >
                        View All
                    </button>
                )}
            </div>

            <div className="in_blk">
                <h6>Suitable For</h6>
                <ul className="ctg_lst">
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                name="visa_acceptance"
                            // onClick={handleSetVisaAcceptance}
                            // checked={visaAcceptance}
                            />
                            Graduate Visa holders
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                name="applicants_outside_uk"
                            // onClick={handleSetApplicantsOutUk}
                            // checked={applicantsOutUk}
                            />
                            Applicants based outside the UK
                        </label>
                    </li>
                </ul>
            </div>
            <div className="in_blk">
                <div className="btn_blk text-left">
                    <button
                        className="site_btn"
                    // onClick={handleApplyFilters}
                    // disabled={isSearching}
                    >
                        {/* <FormProcessingSpinner isFormProcessing={isSearching} /> */}
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>
    </>;
}
