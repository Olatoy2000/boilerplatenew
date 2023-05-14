import React, { useEffect, useState } from 'react'
import { NextPageX } from "@/types/next";



const DemoPage: NextPageX = () => {

  return (
   <>
    <div>this is a demo page</div>
   </>
  );
};

DemoPage.LayoutProps = { pageLabel: [

  {
    label: "Demo Page",
    link: "/demo-page",
  }
] };
export default DemoPage;
