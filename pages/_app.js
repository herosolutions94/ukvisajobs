import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "@/styles/App.scss";
import "@/styles/custom.css";
import "@/styles/style.css";
import http from '@/helpers/http';
import { doObjToFormData } from '@/helpers/helpers';
import { Toaster } from 'react-hot-toast';
import NextNProgress from "nextjs-progressbar";
import Layout from '@/components/layout';

export default function App({ Component, pageProps, siteSettings }) {
  console.log(siteSettings)
  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return (
        <>
            <Toaster position="bottom-right" toastOptions={{
              className: 'toast-wrap',
            }} />
            <NextNProgress color="#e62254" />
              <Layout siteSettings={siteSettings}>{page}</Layout>

        </>
      )
    };

  return renderWithLayout(<Component {...pageProps} />);
}

App.getInitialProps = async ({ ctx }) => {
  const siteSettings = await http
    .post("site-settings", doObjToFormData({ token: "" }))
    .then((response) => response?.data?.site_settings)
    .catch((error) => error?.response?.data?.message);
  return { siteSettings };
};