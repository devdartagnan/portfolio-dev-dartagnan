import React, { createContext, useState, useEffect } from 'react'
// import Data from 'types'
import axios from 'axios';
import useSWR from 'swr';
import GET from 'pages/api/handler';
import Data from 'types';
import { GetStaticProps  } from 'next'
export const ApiData = createContext<any>(null)

// const fetcher = (url: string) => axios.get(url,{timeout: 3000,}).then(res => res.data)
export async function getStaticProps<GetStaticProps>() {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "portfolio-dev-dartagnan-l3mukstj4-devdartagnan.vercel.app";
  const allObjData = axios.get(`${url}/api/handler`, { timeout: 3000 }).then((res) => res.data)
  const getApi = GET()
  console.log(allObjData, getApi)
  return {
    props: {
      allObjData,
    },
  };
}
type Props = {
  children: string | JSX.Element | JSX.Element[],
  allObjData: any
}
export default function FetchApi({ children, allObjData }: Props) {
  // const { data, error } = useSWR('/api/handler', fetcher)
  const [obj, setobj] = useState(allObjData)
  const [isLoading, setLoading] = useState(false)
  // axios.get('/api/handler')
  //   .then((response: any) => {
  //     setData(response)
  //     data === null ? void (0) : setLoading(true)
  //   })
  //   .catch(function (error: any) {
  //     console.error(`Error: ${error.name}, Message: ${error.message}`);
  //   })

  console.log(obj, allObjData)
  return (
    <ApiData.Provider value={{ obj, isLoading }}>
      {children}
    </ApiData.Provider>
  )
}
