import React from "react";
import Data from "@/components/dummy"
export default function JobHeader() {
    const { icon, icon_alt, btn, flag, flag_alt } = Data.srch_bar;

    return <>
        <div className="top_blk">
            <div className="contain">
                <form
                    action="/open-jobs/1"
                    //   onSubmit={handleSearchFormSubmit}
                    method="POST"
                    id="srch_bar"
                >
                    <div className="inside input">
                        {/* <div className="flag_blk d-inline-flex align-items-center">
                  UK <img src={flag} alt={flag_alt} />
                </div> */}
                        <div className="form_blk">
                            <img src="/images/new/search-normal.svg" alt={icon_alt} />
                            <input
                                type="text"
                                name="search"
                                id="search"
                                // value={search}
                                // onChange={handleSearchChange}
                                className="input"
                                placeholder="Job, Company, Location"
                                autoComplete="off"
                            // ref={searchField}
                            />
                        </div>
                        <button
                            type="submit"
                            className="site_btn"
                        // onClick={() => setSearchByField(!searchByField)}
                        //   onClick={handleSearchFromField}
                        //   disabled={isSearching}
                        >
                            {btn}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>;
}
