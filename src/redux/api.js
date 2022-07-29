import PostPage from "../components/Page/postComponent";
import { useDispatch } from "react";
import { upID } from "./userSlice";
export async function postProject(data = {}) {
  // Default options are marked with *
  const response = await fetch(
    "https://csr-hub-be.herokuapp.com/api/Projects",
    {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }
  );
  return response.json(); // parses JSON response into native JavaScript objects
}

export function PostOrg(data) {
    const dispatch = useDispatch();
  fetch("https://csr-hub-be.herokuapp.com/api/Org", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
        dispatch(upID(data.id))
        console.log(data.id)
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
