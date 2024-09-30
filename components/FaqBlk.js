import React from "react";
import Text from "@/components/text";


function FaqBlk({ f, selected, handleSetAccordian }) {
  return (
    <>
      <div className={selected === f.id ? "faq_blk active" : "faq_blk"}>
        <h5 className="fancy" onClick={() => handleSetAccordian(f.id)}>
          <Text string={f.title} />
        </h5>
        {selected === f.id && (
          <div className="txt">
            <p>
              <Text string={f.detail} parse={true} />
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default FaqBlk;