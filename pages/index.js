import { doObjToFormData } from "@/helpers/helpers";
import http from "@/helpers/http";
import Head from "next/head";
import Image from "next/image";

export const getServerSideProps = async (context) => {
  const result = await http
    .post("home", doObjToFormData({ token: "" }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Home({result}) {
  console.log(result)
  const {
    content,
    partners,
    candidates_images,
    events,
    articles,
    totalJobs,
    totalEmployees
  } = result;
  return (
    <>
      <h1>Welcome</h1>
    </>
  );
}
