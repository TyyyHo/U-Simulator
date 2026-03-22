import React from "react";
import { useState } from "react";
import "./port.css";
import "./port_mobile.css";

const Port = ({ dotState, reset , FnImport }) => {
  const [barState, setBarState] = useState("none");
  const [exportStr, setExportStr] = useState("");
  const [url, setUrl] = useState("");

  function FnExport() {
    // 物件轉陣列
    let exportObj = Object.entries(dotState);
    let exportArr = [];

    // 若dotState中，dot的值為true，則將該點push到exportArr內
    exportObj.forEach((element) => {
      Object.values(element[1]).forEach((e, i) => {
        if (e === true) {
          exportArr.push(`${element[0]}-${i + 1}`);
        }
      });
    });

    // 以目前網站來源組出可分享連結，避免部署環境綁死在單一網域
    const basePath = process.env.PUBLIC_URL || "";
    const baseUrl = `${window.location.origin}${basePath}/`;
    let url = `${baseUrl}${encodeURIComponent(exportArr.join(","))}`;

    setExportStr(url);
    setBarState("export");
  }

  return (
    <>
      <div className="portContainer">
        <button className="reset" onClick={() => reset(setBarState)}>
          重置
        </button>
        {/* <br /> */}
        <button className="export" onClick={FnExport}>
          匯出
        </button>
        <button className="import" onClick={() => setBarState("import")}>
          匯入
        </button>
      </div>

      {
        {
          import: (
            <div className="infoBar">
              <input type="text" onChange={(e) => setUrl(e.target.value)} />
              <br />
              <button onClick={()=>FnImport(url, setBarState)}>確認</button>
              <button onClick={() => setBarState("none")}>關閉</button>
            </div>
          ),
          export: (
            <div className="infoBar">
              <button onClick={() => navigator.clipboard.writeText(exportStr)}>
                複製網址
              </button>
              <button onClick={() => setBarState("none")}>關閉</button>
            </div>
          ),
          none: <div className="disappear"></div>,
        }[barState]
      }
    </>
  );
};

export default Port;
