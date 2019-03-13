import React from "react";
import loading from "../../img/loading.gif";

export default function Loading() {
  return (
    <div>
      <img
        src={loading}
        style={{ width: "120px", margin: "auto", display: "block" }}
        alt="Loading"
      />
    </div>
  );
}
