import React, { useEffect, useState } from "react";
import { Page } from "@shopify/polaris";
import { createWorkerFactory, useWorker } from "@shopify/react-web-worker";

const createWorker = createWorkerFactory(() => import("./worker"));

const WebWorker = () => {
//   let i = 0;
//   while (i < Math.pow(10, 10)) {
//     i++;
//   }
  const worker = useWorker(createWorker);
  const [message, setMessage] = useState(null);
  console.log( 'message ' + message)

  useEffect(() => {
    (async () => {
      // Note: in your actual app code, make sure to check if Home
      // is still mounted before setting state asynchronously!
      const webWorkerMessage = await worker.hello("Tobi");
      setMessage(webWorkerMessage);
    })();
  }, [worker]);

  return <Page title="WebWorker"> {message} </Page>;
};

export default WebWorker;
