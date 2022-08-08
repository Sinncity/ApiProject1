import React from "react";

export default function DateToday() {
  let today = new Date();
  // console.log(today)
  let date =
    today.getFullYear() + "/" + today.getMonth() + "/" + today.getDate();

  return (
    <>
      <p className="date1">{date}</p>
    </>
  );
}
