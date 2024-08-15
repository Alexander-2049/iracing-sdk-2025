import JsIrSdk from "../src/JsIrSdk";

declare namespace irsdk {
  /**
   * Initialize JsIrSdk, can be done once before using getInstance first time.
   * @param opts Options
   * @param opts.telemetryUpdateInterval Telemetry update interval, milliseconds
   * @param opts.sessionInfoUpdateInterval SessionInfo update interval, milliseconds
   * @param opts.sessionInfoParser Custom parser for session info
   * @returns Running instance of JsIrSdk
   */
  function init(opts?: {
    telemetryUpdateInterval?: number;
    sessionInfoUpdateInterval?: number;
    sessionInfoParser?: (sessionInfoStr: string) => object;
  }): JsIrSdk;

  /**
   * Get initialized instance of JsIrSdk
   * @returns Running instance of JsIrSdk
   */
  function getInstance(): JsIrSdk;
}

export = irsdk;
