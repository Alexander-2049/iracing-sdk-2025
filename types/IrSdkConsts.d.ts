export enum BroadcastMsg {
  CamSetState = 1,
  CamSwitchNum = 2,
  CamSwitchPos = 3,
  ReplaySetPlaySpeed = 4,
  ReplaySearch = 5,
  ReplaySearchSessionTime = 6,
  ReplaySetPlayPosition = 7,
  ReloadTextures = 8,
  ChatComand = 9,
  PitCommand = 10,
  TelemCommand = 11,
}

export enum CameraState {
  CamToolActive = 1,
  UIHidden = 2,
  UseMouseAimMode = 4,
}

export enum RpySrchMode {
  NextIncident = 1,
  PreviousIncident = 2,
}

export enum RpyPosMode {
  Begin = 1,
  End = 2,
  Current = 3,
}

export enum ChatCommand {
  Cancel = 1,
  Macro = 2,
}

export enum PitCommand {
  Clear = 1,
  Fuel = 2,
  Lf = 3,
  Lr = 4,
}

export enum TelemCommand {
  Start = 1,
  Stop = 2,
  Restart = 3,
}

export enum ReloadTexturesMode {
  All = 1,
  CarIdx = 2,
}
