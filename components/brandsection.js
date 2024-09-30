// components/BrandsSection.js

import Image from 'next/image';
import { cmsFileUrl } from '@/helpers/helpers';

const BrandsSection = ({ partners }) => {
  return (
    <section id="brands">
      <div className="contain text-center">
        <ul className="brand_lst">
          {partners.map((p) => {
            return (
              <li key={p.id}>
                <div className="ico">
                  <Image
                    src={cmsFileUrl(p.image,'partners')}
                    width={100}
                    height={25}
                    alt={`Logo of ${p.name}`} // Use a descriptive alt text
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default BrandsSection;
