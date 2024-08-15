import { EventEmitter } from "events";
import {
  BroadcastMsg,
  CameraState,
  RpySrchMode,
  RpyPosMode,
  ChatCommand,
  PitCommand,
  TelemCommand,
  ReloadTexturesMode,
} from "./IrSdkConsts";

declare class JsIrSdk extends EventEmitter {
  constructor(
    IrSdkWrapper: any,
    opts?: {
      telemetryUpdateInterval?: number;
      sessionInfoUpdateInterval?: number;
      sessionInfoParser?: (sessionInfoStr: string) => object;
    }
  );

  /**
   * Execute any of available commands, excl. FFB command
   * @param msgId Message id
   * @param arg1 1st argument
   * @param arg2 2nd argument
   * @param arg3 3rd argument
   */
  execCmd(msgId: number, arg1?: number, arg2?: number, arg3?: number): void;

  /**
   * iRacing SDK related constants
   */
  Consts: {
    BroadcastMsg: typeof BroadcastMsg;
    CameraState: typeof CameraState;
    RpySrchMode: typeof RpySrchMode;
    RpyPosMode: typeof RpyPosMode;
    ChatCommand: typeof ChatCommand;
    PitCommand: typeof PitCommand;
    TelemCommand: typeof TelemCommand;
    ReloadTexturesMode: typeof ReloadTexturesMode;
  };

  camControls: {
    /**
     * Change camera tool state
     * @param state new state
     */
    setState(state: CameraState): void;

    /**
     * Switch camera, focus on car
     * @param carNum Car to focus on
     * @param camGroupNum Select camera group
     * @param camNum Select camera
     */
    switchToCar(
      carNum: number | string,
      camGroupNum?: number,
      camNum?: number
    ): void;

    /**
     * Switch camera, focus on position
     * @param position Position to focus on
     * @param camGroupNum Select camera group
     * @param camNum Select camera
     */
    switchToPos(
      position: number | string,
      camGroupNum?: number,
      camNum?: number
    ): void;
  };

  playbackControls: {
    play(): void;
    pause(): void;
    fastForward(speed?: number): void;
    rewind(speed?: number): void;
    slowForward(divider?: number): void;
    slowBackward(divider?: number): void;
    search(searchMode: RpySrchMode | string): void;
    searchTs(sessionNum: number, sessionTimeMS: number): void;
    searchFrame(frameNum: number, rpyPosMode: RpyPosMode | string): void;
  };

  reloadTextures(): void;
  reloadTexture(carIdx: number): void;
  execChatCmd(cmd: ChatCommand | string, arg?: number): void;
  execChatMacro(num: number): void;
  execPitCmd(cmd: PitCommand | string, arg?: number): void;
  execTelemetryCmd(cmd: TelemCommand | string): void;

  telemetry: object | null;
  telemetryDescription: object | null;
  sessionInfo: { timestamp: Date; data: object } | null;

  /**
   * Stops JsIrSdk, no new events are fired after calling this
   */
  _stop(): void;
}

export = JsIrSdk;
