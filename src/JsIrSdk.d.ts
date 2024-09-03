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

export declare interface Telemetry {
  timestamp: string;
  values: TelemetryValues;
}

export declare interface TelemetryValues {
  SessionTime: number;
  SessionTick: number;
  SessionNum: number;
  SessionState: string;
  SessionUniqueID: number;
  SessionFlags: string[];
  SessionTimeRemain: number;
  SessionLapsRemain: number;
  SessionLapsRemainEx: number;
  SessionTimeTotal: number;
  SessionLapsTotal: number;
  SessionJokerLapsRemain: number;
  SessionOnJokerLap: boolean;
  SessionTimeOfDay: number;
  RadioTransmitCarIdx: number;
  RadioTransmitRadioIdx: number;
  RadioTransmitFrequencyIdx: number;
  DisplayUnits: number;
  DriverMarker: boolean;
  PushToTalk: boolean;
  PushToPass: boolean;
  ManualBoost: boolean;
  ManualNoBoost: boolean;
  IsOnTrack: boolean;
  IsReplayPlaying: boolean;
  ReplayFrameNum: number;
  ReplayFrameNumEnd: number;
  IsDiskLoggingEnabled: boolean;
  IsDiskLoggingActive: boolean;
  FrameRate: number;
  CpuUsageFG: number;
  GpuUsage: number;
  ChanAvgLatency: number;
  ChanLatency: number;
  ChanQuality: number;
  ChanPartnerQuality: number;
  CpuUsageBG: number;
  ChanClockSkew: number;
  MemPageFaultSec: number;
  MemSoftPageFaultSec: number;
  PlayerCarPosition: number;
  PlayerCarClassPosition: number;
  PlayerCarClass: number;
  PlayerTrackSurface: string;
  PlayerTrackSurfaceMaterial: string;
  PlayerCarIdx: number;
  PlayerCarTeamIncidentCount: number;
  PlayerCarMyIncidentCount: number;
  PlayerCarDriverIncidentCount: number;
  PlayerCarWeightPenalty: number;
  PlayerCarPowerAdjust: number;
  PlayerCarDryTireSetLimit: number;
  PlayerCarTowTime: number;
  PlayerCarInPitStall: boolean;
  PlayerCarPitSvStatus: string;
  PlayerTireCompound: number;
  PlayerFastRepairsUsed: number;
  CarIdxLap: number[];
  CarIdxLapCompleted: number[];
  CarIdxLapDistPct: number[];
  CarIdxTrackSurface: string[];
  CarIdxTrackSurfaceMaterial: string[];
  CarIdxOnPitRoad: boolean[];
  CarIdxPosition: number[];
  CarIdxClassPosition: number[];
  CarIdxClass: number[];
  CarIdxF2Time: number[];
  CarIdxEstTime: number[];
  CarIdxLastLapTime: number[];
  CarIdxBestLapTime: number[];
  CarIdxBestLapNum: number[];
  CarIdxTireCompound: number[];
  CarIdxQualTireCompound: number[];
  CarIdxQualTireCompoundLocked: boolean[];
  CarIdxFastRepairsUsed: number[];
  CarIdxSessionFlags: string[][];
  PaceMode: number;
  CarIdxPaceLine: number[];
  CarIdxPaceRow: number[];
  CarIdxPaceFlags: any[][];
  OnPitRoad: boolean;
  CarIdxSteer: number[];
  CarIdxRPM: number[];
  CarIdxGear: number[];
  SteeringWheelAngle: number;
  Throttle: number;
  Brake: number;
  Clutch: number;
  Gear: number;
  RPM: number;
  PlayerCarSLFirstRPM: number;
  PlayerCarSLShiftRPM: number;
  PlayerCarSLLastRPM: number;
  PlayerCarSLBlinkRPM: number;
  Lap: number;
  LapCompleted: number;
  LapDist: number;
  LapDistPct: number;
  RaceLaps: number;
  LapBestLap: number;
  LapBestLapTime: number;
  LapLastLapTime: number;
  LapCurrentLapTime: number;
  LapLasNLapSeq: number;
  LapLastNLapTime: number;
  LapBestNLapLap: number;
  LapBestNLapTime: number;
  LapDeltaToBestLap: number;
  LapDeltaToBestLap_DD: number;
  LapDeltaToBestLap_OK: boolean;
  LapDeltaToOptimalLap: number;
  LapDeltaToOptimalLap_DD: number;
  LapDeltaToOptimalLap_OK: boolean;
  LapDeltaToSessionBestLap: number;
  LapDeltaToSessionBestLap_DD: number;
  LapDeltaToSessionBestLap_OK: boolean;
  LapDeltaToSessionOptimalLap: number;
  LapDeltaToSessionOptimalLap_DD: number;
  LapDeltaToSessionOptimalLap_OK: boolean;
  LapDeltaToSessionLastlLap: number;
  LapDeltaToSessionLastlLap_DD: number;
  LapDeltaToSessionLastlLap_OK: boolean;
  Speed: number;
  Yaw: number;
  YawNorth: number;
  Pitch: number;
  Roll: number;
  EnterExitReset: number;
  TrackTemp: number;
  TrackTempCrew: number;
  AirTemp: number;
  TrackWetness: number;
  Skies: number;
  AirDensity: number;
  AirPressure: number;
  WindVel: number;
  WindDir: number;
  RelativeHumidity: number;
  FogLevel: number;
  Precipitation: number;
  SolarAltitude: number;
  SolarAzimuth: number;
  WeatherDeclaredWet: boolean;
  DCLapStatus: number;
  DCDriversSoFar: number;
  OkToReloadTextures: boolean;
  LoadNumTextures: boolean;
  CarLeftRight: number;
  PitsOpen: boolean;
  VidCapEnabled: boolean;
  VidCapActive: boolean;
  PitRepairLeft: number;
  PitOptRepairLeft: number;
  PitstopActive: boolean;
  FastRepairUsed: number;
  FastRepairAvailable: number;
  LFTiresUsed: number;
  RFTiresUsed: number;
  LRTiresUsed: number;
  RRTiresUsed: number;
  LeftTireSetsUsed: number;
  RightTireSetsUsed: number;
  FrontTireSetsUsed: number;
  RearTireSetsUsed: number;
  TireSetsUsed: number;
  LFTiresAvailable: number;
  RFTiresAvailable: number;
  LRTiresAvailable: number;
  RRTiresAvailable: number;
  LeftTireSetsAvailable: number;
  RightTireSetsAvailable: number;
  FrontTireSetsAvailable: number;
  RearTireSetsAvailable: number;
  TireSetsAvailable: number;
  CamCarIdx: number;
  CamCameraNumber: number;
  CamGroupNumber: number;
  CamCameraState: string[];
  IsOnTrackCar: boolean;
  IsInGarage: boolean;
  SteeringWheelAngleMax: number;
  ShiftPowerPct: number;
  ShiftGrindRPM: number;
  ThrottleRaw: number;
  BrakeRaw: number;
  ClutchRaw: number;
  HandbrakeRaw: number;
  BrakeABSactive: boolean;
  EngineWarnings: string[];
  FuelLevelPct: number;
  PitSvFlags: any[];
  PitSvLFP: number;
  PitSvRFP: number;
  PitSvLRP: number;
  PitSvRRP: number;
  PitSvFuel: number;
  PitSvTireCompound: number;
  CarIdxP2P_Status: boolean[];
  CarIdxP2P_Count: number[];
  SteeringWheelPctTorque: number;
  SteeringWheelPctTorqueSign: number;
  SteeringWheelPctTorqueSignStops: number;
  SteeringWheelPctIntensity: number;
  SteeringWheelPctSmoothing: number;
  SteeringWheelPctDamper: number;
  SteeringWheelLimiter: number;
  SteeringWheelMaxForceNm: number;
  SteeringWheelPeakForceNm: number;
  SteeringWheelUseLinear: boolean;
  ShiftIndicatorPct: number;
  ReplayPlaySpeed: number;
  ReplayPlaySlowMotion: boolean;
  ReplaySessionTime: number;
  ReplaySessionNum: number;
  TireLF_RumblePitch: number;
  TireRF_RumblePitch: number;
  TireLR_RumblePitch: number;
  TireRR_RumblePitch: number;
  IsGarageVisible: boolean;
  SteeringWheelTorque_ST: number[];
  SteeringWheelTorque: number;
  VelocityZ_ST: number[];
  VelocityY_ST: number[];
  VelocityX_ST: number[];
  VelocityZ: number;
  VelocityY: number;
  VelocityX: number;
  YawRate_ST: number[];
  PitchRate_ST: number[];
  RollRate_ST: number[];
  YawRate: number;
  PitchRate: number;
  RollRate: number;
  VertAccel_ST: number[];
  LatAccel_ST: number[];
  LongAccel_ST: number[];
  VertAccel: number;
  LatAccel: number;
  LongAccel: number;
  dcStarter: boolean;
  dcPitSpeedLimiterToggle: boolean;
  dcTractionControlToggle: boolean;
  dcHeadlightFlash: boolean;
  dcLowFuelAccept: boolean;
  dpRFTireChange: number;
  dpLFTireChange: number;
  dpRRTireChange: number;
  dpLRTireChange: number;
  dpFuelFill: number;
  dpFuelAutoFillEnabled: number;
  dpFuelAutoFillActive: number;
  dpWindshieldTearoff: number;
  dpFuelAddKg: number;
  dpFastRepair: number;
  dcDashPage: number;
  dcDashPage2: number;
  dcBrakeBias: number;
  dpLFTireColdPress: number;
  dpRFTireColdPress: number;
  dpLRTireColdPress: number;
  dpRRTireColdPress: number;
  dcTractionControl: number;
  dcABS: number;
  dcThrottleShape: number;
  dcToggleWindshieldWipers: boolean;
  dcTriggerWindshieldWipers: boolean;
  RFbrakeLinePress: number;
  RFcoldPressure: number;
  RFtempCL: number;
  RFtempCM: number;
  RFtempCR: number;
  RFwearL: number;
  RFwearM: number;
  RFwearR: number;
  LFbrakeLinePress: number;
  LFcoldPressure: number;
  LFtempCL: number;
  LFtempCM: number;
  LFtempCR: number;
  LFwearL: number;
  LFwearM: number;
  LFwearR: number;
  FuelUsePerHour: number;
  Voltage: number;
  WaterTemp: number;
  WaterLevel: number;
  FuelPress: number;
  OilTemp: number;
  OilPress: number;
  OilLevel: number;
  ManifoldPress: number;
  FuelLevel: number;
  Engine0_RPM: number;
  RRbrakeLinePress: number;
  RRcoldPressure: number;
  RRtempCL: number;
  RRtempCM: number;
  RRtempCR: number;
  RRwearL: number;
  RRwearM: number;
  RRwearR: number;
  LRbrakeLinePress: number;
  LRcoldPressure: number;
  LRtempCL: number;
  LRtempCM: number;
  LRtempCR: number;
  LRwearL: number;
  LRwearM: number;
  LRwearR: number;
  LRshockDefl: number;
  LRshockDefl_ST: number[];
  LRshockVel: number;
  LRshockVel_ST: number[];
  RRshockDefl: number;
  RRshockDefl_ST: number[];
  RRshockVel: number;
  RRshockVel_ST: number[];
  LFshockDefl: number;
  LFshockDefl_ST: number[];
  LFshockVel: number;
  LFshockVel_ST: number[];
  RFshockDefl: number;
  RFshockDefl_ST: number[];
  RFshockVel: number;
  RFshockVel_ST: number[];
}

declare interface TelemetryDescription {
  SessionTime: SessionTime;
  SessionTick: SessionTick;
  SessionNum: SessionNum;
  SessionState: SessionState;
  SessionUniqueID: SessionUniqueId;
  SessionFlags: SessionFlags;
  SessionTimeRemain: SessionTimeRemain;
  SessionLapsRemain: SessionLapsRemain;
  SessionLapsRemainEx: SessionLapsRemainEx;
  SessionTimeTotal: SessionTimeTotal;
  SessionLapsTotal: SessionLapsTotal;
  SessionJokerLapsRemain: SessionJokerLapsRemain;
  SessionOnJokerLap: SessionOnJokerLap;
  SessionTimeOfDay: SessionTimeOfDay;
  RadioTransmitCarIdx: RadioTransmitCarIdx;
  RadioTransmitRadioIdx: RadioTransmitRadioIdx;
  RadioTransmitFrequencyIdx: RadioTransmitFrequencyIdx;
  DisplayUnits: DisplayUnits;
  DriverMarker: DriverMarker;
  PushToTalk: PushToTalk;
  PushToPass: PushToPass;
  ManualBoost: ManualBoost;
  ManualNoBoost: ManualNoBoost;
  IsOnTrack: IsOnTrack;
  IsReplayPlaying: IsReplayPlaying;
  ReplayFrameNum: ReplayFrameNum;
  ReplayFrameNumEnd: ReplayFrameNumEnd;
  IsDiskLoggingEnabled: IsDiskLoggingEnabled;
  IsDiskLoggingActive: IsDiskLoggingActive;
  FrameRate: FrameRate;
  CpuUsageFG: CpuUsageFg;
  GpuUsage: GpuUsage;
  ChanAvgLatency: ChanAvgLatency;
  ChanLatency: ChanLatency;
  ChanQuality: ChanQuality;
  ChanPartnerQuality: ChanPartnerQuality;
  CpuUsageBG: CpuUsageBg;
  ChanClockSkew: ChanClockSkew;
  MemPageFaultSec: MemPageFaultSec;
  MemSoftPageFaultSec: MemSoftPageFaultSec;
  PlayerCarPosition: PlayerCarPosition;
  PlayerCarClassPosition: PlayerCarClassPosition;
  PlayerCarClass: PlayerCarClass;
  PlayerTrackSurface: PlayerTrackSurface;
  PlayerTrackSurfaceMaterial: PlayerTrackSurfaceMaterial;
  PlayerCarIdx: PlayerCarIdx;
  PlayerCarTeamIncidentCount: PlayerCarTeamIncidentCount;
  PlayerCarMyIncidentCount: PlayerCarMyIncidentCount;
  PlayerCarDriverIncidentCount: PlayerCarDriverIncidentCount;
  PlayerCarWeightPenalty: PlayerCarWeightPenalty;
  PlayerCarPowerAdjust: PlayerCarPowerAdjust;
  PlayerCarDryTireSetLimit: PlayerCarDryTireSetLimit;
  PlayerCarTowTime: PlayerCarTowTime;
  PlayerCarInPitStall: PlayerCarInPitStall;
  PlayerCarPitSvStatus: PlayerCarPitSvStatus;
  PlayerTireCompound: PlayerTireCompound;
  PlayerFastRepairsUsed: PlayerFastRepairsUsed;
  CarIdxLap: CarIdxLap;
  CarIdxLapCompleted: CarIdxLapCompleted;
  CarIdxLapDistPct: CarIdxLapDistPct;
  CarIdxTrackSurface: CarIdxTrackSurface;
  CarIdxTrackSurfaceMaterial: CarIdxTrackSurfaceMaterial;
  CarIdxOnPitRoad: CarIdxOnPitRoad;
  CarIdxPosition: CarIdxPosition;
  CarIdxClassPosition: CarIdxClassPosition;
  CarIdxClass: CarIdxClass;
  CarIdxF2Time: CarIdxF2Time;
  CarIdxEstTime: CarIdxEstTime;
  CarIdxLastLapTime: CarIdxLastLapTime;
  CarIdxBestLapTime: CarIdxBestLapTime;
  CarIdxBestLapNum: CarIdxBestLapNum;
  CarIdxTireCompound: CarIdxTireCompound;
  CarIdxQualTireCompound: CarIdxQualTireCompound;
  CarIdxQualTireCompoundLocked: CarIdxQualTireCompoundLocked;
  CarIdxFastRepairsUsed: CarIdxFastRepairsUsed;
  CarIdxSessionFlags: CarIdxSessionFlags;
  PaceMode: PaceMode;
  CarIdxPaceLine: CarIdxPaceLine;
  CarIdxPaceRow: CarIdxPaceRow;
  CarIdxPaceFlags: CarIdxPaceFlags;
  OnPitRoad: OnPitRoad;
  CarIdxSteer: CarIdxSteer;
  CarIdxRPM: CarIdxRpm;
  CarIdxGear: CarIdxGear;
  SteeringWheelAngle: SteeringWheelAngle;
  Throttle: Throttle;
  Brake: Brake;
  Clutch: Clutch;
  Gear: Gear;
  RPM: Rpm;
  PlayerCarSLFirstRPM: PlayerCarSlfirstRpm;
  PlayerCarSLShiftRPM: PlayerCarSlshiftRpm;
  PlayerCarSLLastRPM: PlayerCarSllastRpm;
  PlayerCarSLBlinkRPM: PlayerCarSlblinkRpm;
  Lap: Lap;
  LapCompleted: LapCompleted;
  LapDist: LapDist;
  LapDistPct: LapDistPct;
  RaceLaps: RaceLaps;
  LapBestLap: LapBestLap;
  LapBestLapTime: LapBestLapTime;
  LapLastLapTime: LapLastLapTime;
  LapCurrentLapTime: LapCurrentLapTime;
  LapLasNLapSeq: LapLasNlapSeq;
  LapLastNLapTime: LapLastNlapTime;
  LapBestNLapLap: LapBestNlapLap;
  LapBestNLapTime: LapBestNlapTime;
  LapDeltaToBestLap: LapDeltaToBestLap;
  LapDeltaToBestLap_DD: LapDeltaToBestLapDd;
  LapDeltaToBestLap_OK: LapDeltaToBestLapOk;
  LapDeltaToOptimalLap: LapDeltaToOptimalLap;
  LapDeltaToOptimalLap_DD: LapDeltaToOptimalLapDd;
  LapDeltaToOptimalLap_OK: LapDeltaToOptimalLapOk;
  LapDeltaToSessionBestLap: LapDeltaToSessionBestLap;
  LapDeltaToSessionBestLap_DD: LapDeltaToSessionBestLapDd;
  LapDeltaToSessionBestLap_OK: LapDeltaToSessionBestLapOk;
  LapDeltaToSessionOptimalLap: LapDeltaToSessionOptimalLap;
  LapDeltaToSessionOptimalLap_DD: LapDeltaToSessionOptimalLapDd;
  LapDeltaToSessionOptimalLap_OK: LapDeltaToSessionOptimalLapOk;
  LapDeltaToSessionLastlLap: LapDeltaToSessionLastlLap;
  LapDeltaToSessionLastlLap_DD: LapDeltaToSessionLastlLapDd;
  LapDeltaToSessionLastlLap_OK: LapDeltaToSessionLastlLapOk;
  Speed: Speed;
  Yaw: Yaw;
  YawNorth: YawNorth;
  Pitch: Pitch;
  Roll: Roll;
  EnterExitReset: EnterExitReset;
  TrackTemp: TrackTemp;
  TrackTempCrew: TrackTempCrew;
  AirTemp: AirTemp;
  TrackWetness: TrackWetness;
  Skies: Skies;
  AirDensity: AirDensity;
  AirPressure: AirPressure;
  WindVel: WindVel;
  WindDir: WindDir;
  RelativeHumidity: RelativeHumidity;
  FogLevel: FogLevel;
  Precipitation: Precipitation;
  SolarAltitude: SolarAltitude;
  SolarAzimuth: SolarAzimuth;
  WeatherDeclaredWet: WeatherDeclaredWet;
  DCLapStatus: DclapStatus;
  DCDriversSoFar: DcdriversSoFar;
  OkToReloadTextures: OkToReloadTextures;
  LoadNumTextures: LoadNumTextures;
  CarLeftRight: CarLeftRight;
  PitsOpen: PitsOpen;
  VidCapEnabled: VidCapEnabled;
  VidCapActive: VidCapActive;
  PitRepairLeft: PitRepairLeft;
  PitOptRepairLeft: PitOptRepairLeft;
  PitstopActive: PitstopActive;
  FastRepairUsed: FastRepairUsed;
  FastRepairAvailable: FastRepairAvailable;
  LFTiresUsed: LftiresUsed;
  RFTiresUsed: RftiresUsed;
  LRTiresUsed: LrtiresUsed;
  RRTiresUsed: RrtiresUsed;
  LeftTireSetsUsed: LeftTireSetsUsed;
  RightTireSetsUsed: RightTireSetsUsed;
  FrontTireSetsUsed: FrontTireSetsUsed;
  RearTireSetsUsed: RearTireSetsUsed;
  TireSetsUsed: TireSetsUsed;
  LFTiresAvailable: LftiresAvailable;
  RFTiresAvailable: RftiresAvailable;
  LRTiresAvailable: LrtiresAvailable;
  RRTiresAvailable: RrtiresAvailable;
  LeftTireSetsAvailable: LeftTireSetsAvailable;
  RightTireSetsAvailable: RightTireSetsAvailable;
  FrontTireSetsAvailable: FrontTireSetsAvailable;
  RearTireSetsAvailable: RearTireSetsAvailable;
  TireSetsAvailable: TireSetsAvailable;
  CamCarIdx: CamCarIdx;
  CamCameraNumber: CamCameraNumber;
  CamGroupNumber: CamGroupNumber;
  CamCameraState: CamCameraState;
  IsOnTrackCar: IsOnTrackCar;
  IsInGarage: IsInGarage;
  SteeringWheelAngleMax: SteeringWheelAngleMax;
  ShiftPowerPct: ShiftPowerPct;
  ShiftGrindRPM: ShiftGrindRpm;
  ThrottleRaw: ThrottleRaw;
  BrakeRaw: BrakeRaw;
  ClutchRaw: ClutchRaw;
  HandbrakeRaw: HandbrakeRaw;
  BrakeABSactive: BrakeAbsactive;
  EngineWarnings: EngineWarnings;
  FuelLevelPct: FuelLevelPct;
  PitSvFlags: PitSvFlags;
  PitSvLFP: PitSvLfp;
  PitSvRFP: PitSvRfp;
  PitSvLRP: PitSvLrp;
  PitSvRRP: PitSvRrp;
  PitSvFuel: PitSvFuel;
  PitSvTireCompound: PitSvTireCompound;
  CarIdxP2P_Status: CarIdxP2PStatus;
  CarIdxP2P_Count: CarIdxP2PCount;
  SteeringWheelPctTorque: SteeringWheelPctTorque;
  SteeringWheelPctTorqueSign: SteeringWheelPctTorqueSign;
  SteeringWheelPctTorqueSignStops: SteeringWheelPctTorqueSignStops;
  SteeringWheelPctIntensity: SteeringWheelPctIntensity;
  SteeringWheelPctSmoothing: SteeringWheelPctSmoothing;
  SteeringWheelPctDamper: SteeringWheelPctDamper;
  SteeringWheelLimiter: SteeringWheelLimiter;
  SteeringWheelMaxForceNm: SteeringWheelMaxForceNm;
  SteeringWheelPeakForceNm: SteeringWheelPeakForceNm;
  SteeringWheelUseLinear: SteeringWheelUseLinear;
  ShiftIndicatorPct: ShiftIndicatorPct;
  ReplayPlaySpeed: ReplayPlaySpeed;
  ReplayPlaySlowMotion: ReplayPlaySlowMotion;
  ReplaySessionTime: ReplaySessionTime;
  ReplaySessionNum: ReplaySessionNum;
  TireLF_RumblePitch: TireLfRumblePitch;
  TireRF_RumblePitch: TireRfRumblePitch;
  TireLR_RumblePitch: TireLrRumblePitch;
  TireRR_RumblePitch: TireRrRumblePitch;
  IsGarageVisible: IsGarageVisible;
  SteeringWheelTorque_ST: SteeringWheelTorqueSt;
  SteeringWheelTorque: SteeringWheelTorque;
  VelocityZ_ST: VelocityZSt;
  VelocityY_ST: VelocityYSt;
  VelocityX_ST: VelocityXSt;
  VelocityZ: VelocityZ;
  VelocityY: VelocityY;
  VelocityX: VelocityX;
  YawRate_ST: YawRateSt;
  PitchRate_ST: PitchRateSt;
  RollRate_ST: RollRateSt;
  YawRate: YawRate;
  PitchRate: PitchRate;
  RollRate: RollRate;
  VertAccel_ST: VertAccelSt;
  LatAccel_ST: LatAccelSt;
  LongAccel_ST: LongAccelSt;
  VertAccel: VertAccel;
  LatAccel: LatAccel;
  LongAccel: LongAccel;
  dcStarter: DcStarter;
  dcPitSpeedLimiterToggle: DcPitSpeedLimiterToggle;
  dcTractionControlToggle: DcTractionControlToggle;
  dcHeadlightFlash: DcHeadlightFlash;
  dcLowFuelAccept: DcLowFuelAccept;
  dpRFTireChange: DpRftireChange;
  dpLFTireChange: DpLftireChange;
  dpRRTireChange: DpRrtireChange;
  dpLRTireChange: DpLrtireChange;
  dpFuelFill: DpFuelFill;
  dpFuelAutoFillEnabled: DpFuelAutoFillEnabled;
  dpFuelAutoFillActive: DpFuelAutoFillActive;
  dpWindshieldTearoff: DpWindshieldTearoff;
  dpFuelAddKg: DpFuelAddKg;
  dpFastRepair: DpFastRepair;
  dcDashPage: DcDashPage;
  dcDashPage2: DcDashPage2;
  dcBrakeBias: DcBrakeBias;
  dpLFTireColdPress: DpLftireColdPress;
  dpRFTireColdPress: DpRftireColdPress;
  dpLRTireColdPress: DpLrtireColdPress;
  dpRRTireColdPress: DpRrtireColdPress;
  dcTractionControl: DcTractionControl;
  dcABS: DcAbs;
  dcThrottleShape: DcThrottleShape;
  dcToggleWindshieldWipers: DcToggleWindshieldWipers;
  dcTriggerWindshieldWipers: DcTriggerWindshieldWipers;
  RFbrakeLinePress: RfbrakeLinePress;
  RFcoldPressure: RfcoldPressure;
  RFtempCL: RftempCl;
  RFtempCM: RftempCm;
  RFtempCR: RftempCr;
  RFwearL: RfwearL;
  RFwearM: RfwearM;
  RFwearR: RfwearR;
  LFbrakeLinePress: LfbrakeLinePress;
  LFcoldPressure: LfcoldPressure;
  LFtempCL: LftempCl;
  LFtempCM: LftempCm;
  LFtempCR: LftempCr;
  LFwearL: LfwearL;
  LFwearM: LfwearM;
  LFwearR: LfwearR;
  FuelUsePerHour: FuelUsePerHour;
  Voltage: Voltage;
  WaterTemp: WaterTemp;
  WaterLevel: WaterLevel;
  FuelPress: FuelPress;
  OilTemp: OilTemp;
  OilPress: OilPress;
  OilLevel: OilLevel;
  ManifoldPress: ManifoldPress;
  FuelLevel: FuelLevel;
  Engine0_RPM: Engine0Rpm;
  RRbrakeLinePress: RrbrakeLinePress;
  RRcoldPressure: RrcoldPressure;
  RRtempCL: RrtempCl;
  RRtempCM: RrtempCm;
  RRtempCR: RrtempCr;
  RRwearL: RrwearL;
  RRwearM: RrwearM;
  RRwearR: RrwearR;
  LRbrakeLinePress: LrbrakeLinePress;
  LRcoldPressure: LrcoldPressure;
  LRtempCL: LrtempCl;
  LRtempCM: LrtempCm;
  LRtempCR: LrtempCr;
  LRwearL: LrwearL;
  LRwearM: LrwearM;
  LRwearR: LrwearR;
  LRshockDefl: LrshockDefl;
  LRshockDefl_ST: LrshockDeflSt;
  LRshockVel: LrshockVel;
  LRshockVel_ST: LrshockVelSt;
  RRshockDefl: RrshockDefl;
  RRshockDefl_ST: RrshockDeflSt;
  RRshockVel: RrshockVel;
  RRshockVel_ST: RrshockVelSt;
  LFshockDefl: LfshockDefl;
  LFshockDefl_ST: LfshockDeflSt;
  LFshockVel: LfshockVel;
  LFshockVel_ST: LfshockVelSt;
  RFshockDefl: RfshockDefl;
  RFshockDefl_ST: RfshockDeflSt;
  RFshockVel: RfshockVel;
  RFshockVel_ST: RfshockVelSt;
}

declare interface SessionTime {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SessionTick {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SessionNum {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SessionState {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SessionUniqueId {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SessionFlags {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SessionTimeRemain {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SessionLapsRemain {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SessionLapsRemainEx {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SessionTimeTotal {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SessionLapsTotal {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SessionJokerLapsRemain {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SessionOnJokerLap {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SessionTimeOfDay {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RadioTransmitCarIdx {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RadioTransmitRadioIdx {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RadioTransmitFrequencyIdx {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DisplayUnits {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DriverMarker {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PushToTalk {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PushToPass {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface ManualBoost {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface ManualNoBoost {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface IsOnTrack {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface IsReplayPlaying {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface ReplayFrameNum {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface ReplayFrameNumEnd {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface IsDiskLoggingEnabled {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface IsDiskLoggingActive {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface FrameRate {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CpuUsageFg {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface GpuUsage {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface ChanAvgLatency {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface ChanLatency {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface ChanQuality {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface ChanPartnerQuality {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CpuUsageBg {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface ChanClockSkew {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface MemPageFaultSec {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface MemSoftPageFaultSec {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PlayerCarPosition {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PlayerCarClassPosition {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PlayerCarClass {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PlayerTrackSurface {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PlayerTrackSurfaceMaterial {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PlayerCarIdx {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PlayerCarTeamIncidentCount {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PlayerCarMyIncidentCount {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PlayerCarDriverIncidentCount {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PlayerCarWeightPenalty {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PlayerCarPowerAdjust {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PlayerCarDryTireSetLimit {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PlayerCarTowTime {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PlayerCarInPitStall {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PlayerCarPitSvStatus {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PlayerTireCompound {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PlayerFastRepairsUsed {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxLap {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxLapCompleted {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxLapDistPct {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxTrackSurface {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxTrackSurfaceMaterial {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxOnPitRoad {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxPosition {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxClassPosition {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxClass {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxF2Time {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxEstTime {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxLastLapTime {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxBestLapTime {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxBestLapNum {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxTireCompound {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxQualTireCompound {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxQualTireCompoundLocked {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxFastRepairsUsed {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxSessionFlags {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PaceMode {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxPaceLine {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxPaceRow {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxPaceFlags {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface OnPitRoad {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxSteer {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxRpm {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxGear {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SteeringWheelAngle {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface Throttle {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface Brake {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface Clutch {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface Gear {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface Rpm {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PlayerCarSlfirstRpm {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PlayerCarSlshiftRpm {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PlayerCarSllastRpm {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PlayerCarSlblinkRpm {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface Lap {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapCompleted {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapDist {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapDistPct {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RaceLaps {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapBestLap {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapBestLapTime {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapLastLapTime {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapCurrentLapTime {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapLasNlapSeq {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapLastNlapTime {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapBestNlapLap {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapBestNlapTime {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapDeltaToBestLap {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapDeltaToBestLapDd {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapDeltaToBestLapOk {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapDeltaToOptimalLap {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapDeltaToOptimalLapDd {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapDeltaToOptimalLapOk {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapDeltaToSessionBestLap {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapDeltaToSessionBestLapDd {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapDeltaToSessionBestLapOk {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapDeltaToSessionOptimalLap {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapDeltaToSessionOptimalLapDd {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapDeltaToSessionOptimalLapOk {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapDeltaToSessionLastlLap {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapDeltaToSessionLastlLapDd {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LapDeltaToSessionLastlLapOk {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface Speed {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface Yaw {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface YawNorth {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface Pitch {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface Roll {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface EnterExitReset {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface TrackTemp {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface TrackTempCrew {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface AirTemp {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface TrackWetness {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface Skies {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface AirDensity {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface AirPressure {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface WindVel {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface WindDir {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RelativeHumidity {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface FogLevel {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface Precipitation {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SolarAltitude {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SolarAzimuth {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface WeatherDeclaredWet {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DclapStatus {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DcdriversSoFar {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface OkToReloadTextures {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LoadNumTextures {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarLeftRight {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PitsOpen {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface VidCapEnabled {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface VidCapActive {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PitRepairLeft {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PitOptRepairLeft {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PitstopActive {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface FastRepairUsed {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface FastRepairAvailable {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LftiresUsed {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RftiresUsed {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LrtiresUsed {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RrtiresUsed {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LeftTireSetsUsed {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RightTireSetsUsed {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface FrontTireSetsUsed {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RearTireSetsUsed {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface TireSetsUsed {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LftiresAvailable {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RftiresAvailable {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LrtiresAvailable {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RrtiresAvailable {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LeftTireSetsAvailable {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RightTireSetsAvailable {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface FrontTireSetsAvailable {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RearTireSetsAvailable {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface TireSetsAvailable {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CamCarIdx {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CamCameraNumber {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CamGroupNumber {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CamCameraState {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface IsOnTrackCar {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface IsInGarage {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SteeringWheelAngleMax {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface ShiftPowerPct {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface ShiftGrindRpm {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface ThrottleRaw {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface BrakeRaw {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface ClutchRaw {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface HandbrakeRaw {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface BrakeAbsactive {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface EngineWarnings {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface FuelLevelPct {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PitSvFlags {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PitSvLfp {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PitSvRfp {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PitSvLrp {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PitSvRrp {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PitSvFuel {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PitSvTireCompound {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxP2PStatus {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface CarIdxP2PCount {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SteeringWheelPctTorque {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SteeringWheelPctTorqueSign {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SteeringWheelPctTorqueSignStops {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SteeringWheelPctIntensity {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SteeringWheelPctSmoothing {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SteeringWheelPctDamper {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SteeringWheelLimiter {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SteeringWheelMaxForceNm {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SteeringWheelPeakForceNm {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SteeringWheelUseLinear {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface ShiftIndicatorPct {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface ReplayPlaySpeed {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface ReplayPlaySlowMotion {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface ReplaySessionTime {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface ReplaySessionNum {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface TireLfRumblePitch {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface TireRfRumblePitch {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface TireLrRumblePitch {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface TireRrRumblePitch {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface IsGarageVisible {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SteeringWheelTorqueSt {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface SteeringWheelTorque {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface VelocityZSt {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface VelocityYSt {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface VelocityXSt {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface VelocityZ {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface VelocityY {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface VelocityX {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface YawRateSt {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PitchRateSt {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RollRateSt {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface YawRate {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface PitchRate {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RollRate {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface VertAccelSt {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LatAccelSt {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LongAccelSt {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface VertAccel {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LatAccel {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LongAccel {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DcStarter {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DcPitSpeedLimiterToggle {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DcTractionControlToggle {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DcHeadlightFlash {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DcLowFuelAccept {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DpRftireChange {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DpLftireChange {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DpRrtireChange {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DpLrtireChange {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DpFuelFill {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DpFuelAutoFillEnabled {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DpFuelAutoFillActive {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DpWindshieldTearoff {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DpFuelAddKg {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DpFastRepair {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DcDashPage {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DcDashPage2 {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DcBrakeBias {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DpLftireColdPress {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DpRftireColdPress {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DpLrtireColdPress {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DpRrtireColdPress {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DcTractionControl {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DcAbs {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DcThrottleShape {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DcToggleWindshieldWipers {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface DcTriggerWindshieldWipers {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RfbrakeLinePress {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RfcoldPressure {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RftempCl {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RftempCm {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RftempCr {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RfwearL {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RfwearM {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RfwearR {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LfbrakeLinePress {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LfcoldPressure {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LftempCl {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LftempCm {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LftempCr {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LfwearL {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LfwearM {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LfwearR {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface FuelUsePerHour {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface Voltage {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface WaterTemp {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface WaterLevel {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface FuelPress {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface OilTemp {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface OilPress {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface OilLevel {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface ManifoldPress {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface FuelLevel {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface Engine0Rpm {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RrbrakeLinePress {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RrcoldPressure {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RrtempCl {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RrtempCm {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RrtempCr {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RrwearL {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RrwearM {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RrwearR {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LrbrakeLinePress {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LrcoldPressure {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LrtempCl {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LrtempCm {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LrtempCr {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LrwearL {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LrwearM {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LrwearR {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LrshockDefl {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LrshockDeflSt {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LrshockVel {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LrshockVelSt {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RrshockDefl {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RrshockDeflSt {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RrshockVel {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RrshockVelSt {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LfshockDefl {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LfshockDeflSt {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LfshockVel {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface LfshockVelSt {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RfshockDefl {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RfshockDeflSt {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RfshockVel {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

declare interface RfshockVelSt {
  name: string;
  desc: string;
  unit: string;
  count: number;
  type: string;
}

export declare interface SessionInfo {
  timestamp: string;
  data: SessionInfoData;
}

export declare interface SessionInfoData {
  WeekendInfo: WeekendInfo;
  SessionInfo: SessionInfo;
  CameraInfo: CameraInfo;
  RadioInfo: RadioInfo;
  DriverInfo: DriverInfo;
  SplitTimeInfo: SplitTimeInfo;
  CarSetup: CarSetup;
}

declare interface WeekendInfo {
  TrackName: string;
  TrackID: number;
  TrackLength: string;
  TrackLengthOfficial: string;
  TrackDisplayName: string;
  TrackDisplayShortName: string;
  TrackConfigName: any;
  TrackCity: string;
  TrackCountry: string;
  TrackAltitude: string;
  TrackLatitude: string;
  TrackLongitude: string;
  TrackNorthOffset: string;
  TrackNumTurns: number;
  TrackPitSpeedLimit: string;
  TrackType: string;
  TrackDirection: string;
  TrackWeatherType: string;
  TrackSkies: string;
  TrackSurfaceTemp: string;
  TrackAirTemp: string;
  TrackAirPressure: string;
  TrackWindVel: string;
  TrackWindDir: string;
  TrackRelativeHumidity: string;
  TrackFogLevel: string;
  TrackPrecipitation: string;
  TrackCleanup: number;
  TrackDynamicTrack: number;
  TrackVersion: string;
  SeriesID: number;
  SeasonID: number;
  SessionID: number;
  SubSessionID: number;
  LeagueID: number;
  Official: number;
  RaceWeek: number;
  EventType: string;
  Category: string;
  SimMode: string;
  TeamRacing: number;
  MinDrivers: number;
  MaxDrivers: number;
  DCRuleSet: string;
  QualifierMustStartRace: number;
  NumCarClasses: number;
  NumCarTypes: number;
  HeatRacing: number;
  BuildType: string;
  BuildTarget: string;
  BuildVersion: string;
  RaceFarm: string;
  WeekendOptions: WeekendOptions;
  TelemetryOptions: TelemetryOptions;
}

declare interface WeekendOptions {
  NumStarters: number;
  StartingGrid: string;
  QualifyScoring: string;
  CourseCautions: string;
  StandingStart: number;
  ShortParadeLap: number;
  Restarts: string;
  WeatherType: string;
  Skies: string;
  WindDirection: string;
  WindSpeed: string;
  WeatherTemp: string;
  RelativeHumidity: string;
  FogLevel: string;
  TimeOfDay: string;
  Date: string;
  EarthRotationSpeedupFactor: number;
  Unofficial: number;
  CommercialMode: string;
  NightMode: string;
  IsFixedSetup: number;
  StrictLapsChecking: string;
  HasOpenRegistration: number;
  HardcoreLevel: number;
  NumJokerLaps: number;
  IncidentLimit: string;
  FastRepairsLimit: number;
  GreenWhiteCheckeredLimit: number;
}

declare interface TelemetryOptions {
  TelemetryDiskFile: string;
}

declare interface Session {
  SessionNum: number;
  SessionLaps: string;
  SessionTime: string;
  SessionNumLapsToAvg: number;
  SessionType: string;
  SessionTrackRubberState: string;
  SessionName: string;
  SessionSubType: any;
  SessionSkipped: number;
  SessionRunGroupsUsed: number;
  SessionEnforceTireCompoundChange: number;
  ResultsPositions: ResultsPosition[];
  ResultsFastestLap: ResultsFastestLap[];
  ResultsAverageLapTime: number;
  ResultsNumCautionFlags: number;
  ResultsNumCautionLaps: number;
  ResultsNumLeadChanges: number;
  ResultsLapsComplete: number;
  ResultsOfficial: number;
}

declare interface ResultsPosition {
  Position: number;
  ClassPosition: number;
  CarIdx: number;
  Lap: number;
  Time: number;
  FastestLap: number;
  FastestTime: number;
  LastTime: number;
  LapsLed: number;
  LapsComplete: number;
  JokerLapsComplete: number;
  LapsDriven: number;
  Incidents: number;
  ReasonOutId: number;
  ReasonOutStr: string;
}

declare interface ResultsFastestLap {
  CarIdx: number;
  FastestLap: number;
  FastestTime: number;
}

declare interface CameraInfo {
  Groups: Group[];
}

declare interface Group {
  GroupNum: number;
  GroupName: string;
  Cameras: Camera[];
  IsScenic?: boolean;
}

declare interface Camera {
  CameraNum: number;
  CameraName: string;
}

declare interface RadioInfo {
  SelectedRadioNum: number;
  Radios: Radio[];
}

declare interface Radio {
  RadioNum: number;
  HopCount: number;
  NumFrequencies: number;
  TunedToFrequencyNum: number;
  ScanningIsOn: number;
  Frequencies: Frequency[];
}

declare interface Frequency {
  FrequencyNum: number;
  FrequencyName: string;
  Priority: number;
  CarIdx: number;
  EntryIdx: number;
  ClubID: number;
  CanScan: number;
  CanSquawk: number;
  Muted: number;
  IsMutable: number;
  IsDeletable: number;
}

declare interface DriverInfo {
  DriverCarIdx: number;
  DriverUserID: number;
  PaceCarIdx: number;
  DriverHeadPosX: number;
  DriverHeadPosY: number;
  DriverHeadPosZ: number;
  DriverCarIsElectric: number;
  DriverCarIdleRPM: number;
  DriverCarRedLine: number;
  DriverCarEngCylinderCount: number;
  DriverCarFuelKgPerLtr: number;
  DriverCarFuelMaxLtr: number;
  DriverCarMaxFuelPct: number;
  DriverCarGearNumForward: number;
  DriverCarGearNeutral: number;
  DriverCarGearReverse: number;
  DriverCarSLFirstRPM: number;
  DriverCarSLShiftRPM: number;
  DriverCarSLLastRPM: number;
  DriverCarSLBlinkRPM: number;
  DriverCarVersion: string;
  DriverPitTrkPct: number;
  DriverCarEstLapTime: number;
  DriverSetupName: string;
  DriverSetupIsModified: number;
  DriverSetupLoadTypeName: string;
  DriverSetupPassedTech: number;
  DriverIncidentCount: number;
  Drivers: Driver[];
}

declare interface Driver {
  CarIdx: number;
  UserName: string;
  AbbrevName?: string;
  Initials?: string;
  UserID: number;
  TeamID: number;
  TeamName: string;
  CarNumber: string;
  CarNumberRaw: number;
  CarPath: string;
  CarClassID: number;
  CarID: number;
  CarIsPaceCar: number;
  CarIsAI: number;
  CarIsElectric: number;
  CarScreenName: string;
  CarScreenNameShort: string;
  CarClassShortName: string;
  CarClassRelSpeed: number;
  CarClassLicenseLevel: number;
  CarClassMaxFuelPct: string;
  CarClassWeightPenalty: string;
  CarClassPowerAdjust: string;
  CarClassDryTireSetLimit: string;
  CarClassColor: number;
  CarClassEstLapTime: number;
  IRating: number;
  LicLevel: number;
  LicSubLevel: number;
  LicString: string;
  LicColor: number;
  IsSpectator: number;
  CarDesignStr: string;
  HelmetDesignStr: string;
  SuitDesignStr: string;
  BodyType: number;
  FaceType: number;
  HelmetType: number;
  CarNumberDesignStr: string;
  CarSponsor_1: number;
  CarSponsor_2: number;
  ClubName: string;
  ClubID: number;
  DivisionName: string;
  DivisionID: number;
  CurDriverIncidentCount: number;
  TeamIncidentCount: number;
}

declare interface SplitTimeInfo {
  Sectors: Sector[];
}

declare interface Sector {
  SectorNum: number;
  SectorStartPct: number;
}

declare interface CarSetup {
  UpdateCount: number;
  TiresAero: TiresAero;
  Chassis: Chassis;
  Dampers: Dampers;
}

declare interface TiresAero {
  TireType: TireType;
  LeftFront: LeftFront;
  LeftRear: LeftRear;
  RightFront: RightFront;
  RightRear: RightRear;
  AeroBalanceCalc: AeroBalanceCalc;
}

declare interface TireType {
  TireType: string;
}

declare interface LeftFront {
  StartingPressure: string;
  LastHotPressure: string;
  LastTempsOMI: string;
  TreadRemaining: string;
}

declare interface LeftRear {
  StartingPressure: string;
  LastHotPressure: string;
  LastTempsOMI: string;
  TreadRemaining: string;
}

declare interface RightFront {
  StartingPressure: string;
  LastHotPressure: string;
  LastTempsIMO: string;
  TreadRemaining: string;
}

declare interface RightRear {
  StartingPressure: string;
  LastHotPressure: string;
  LastTempsIMO: string;
  TreadRemaining: string;
}

declare interface AeroBalanceCalc {
  FrontRhAtSpeed: string;
  RearRhAtSpeed: string;
  RearWingAngle: string;
  FrontDownforce: string;
}

declare interface Chassis {
  Front: Front;
  LeftFront: LeftFront2;
  LeftRear: LeftRear2;
  Rear: Rear;
  InCarDials: InCarDials;
  RightFront: RightFront2;
  RightRear: RightRear2;
  GearsDifferential: GearsDifferential;
}

declare interface Front {
  ArbBlades: string;
  TotalToeIn: string;
  FrontMasterCyl: string;
  RearMasterCyl: string;
  BrakePads: string;
  EnduranceLights: string;
  NightLedStrip: string;
}

declare interface LeftFront2 {
  CornerWeight: string;
  RideHeight: string;
  SpringPerchOffset: string;
  SpringRate: string;
  Camber: string;
}

declare interface LeftRear2 {
  CornerWeight: string;
  RideHeight: string;
  SpringPerchOffset: string;
  SpringRate: string;
  Camber: string;
  ToeIn: string;
}

declare interface Rear {
  FuelLevel: string;
  ArbBlades: string;
  RearWingAngle: string;
}

declare interface InCarDials {
  BrakePressureBias: string;
  AbsSetting: string;
  TractionControlSetting: string;
  ThrottleShapeSetting: string;
  DisplayPage: string;
  CrossWeight: string;
}

declare interface RightFront2 {
  CornerWeight: string;
  RideHeight: string;
  SpringPerchOffset: string;
  SpringRate: string;
  Camber: string;
}

declare interface RightRear2 {
  CornerWeight: string;
  RideHeight: string;
  SpringPerchOffset: string;
  SpringRate: string;
  Camber: string;
  ToeIn: string;
}

declare interface GearsDifferential {
  GearStack: string;
  FrictionFaces: number;
  DiffPreload: string;
}

declare interface Dampers {
  FrontDampers: FrontDampers;
  RearDampers: RearDampers;
}

declare interface FrontDampers {
  LowSpeedCompressionDamping: string;
  HighSpeedCompressionDamping: string;
  LowSpeedReboundDamping: string;
  HighSpeedReboundDamping: string;
}

declare interface RearDampers {
  LowSpeedCompressionDamping: string;
  HighSpeedCompressionDamping: string;
  LowSpeedReboundDamping: string;
  HighSpeedReboundDamping: string;
}

interface TelemetryEvent {
  type: "Telemetry";
  data: TelemetryValues;
  timestamp: Date;
}

interface TelemetryDescriptionEvent {
  type: "TelemetryDescription";
  data: TelemetryDescription;
  timestamp: Date;
}

interface SessionInfoEvent {
  type: "SessionInfo";
  data: SessionInfoData;
  timestamp: Date;
}

interface ConnectedEvent {
  type: "Connected";
  timestamp: Date;
}

interface DisconnectedEvent {
  type: "Disconnected";
  timestamp: Date;
}

interface IRacingEventMap {
  TelemetryDescription: TelemetryDescriptionEvent;
  Telemetry: TelemetryEvent;
  SessionInfo: SessionInfoEvent;
  Connected: ConnectedEvent;
  Disconnected: DisconnectedEvent;
}

export declare class JsIrSdk extends EventEmitter {
  constructor(
    IrSdkWrapper: any,
    opts?: {
      telemetryUpdateInterval?: number;
      sessionInfoUpdateInterval?: number;
      sessionInfoParser?: (sessionInfoStr: string) => object;
    }
  );

  on<K extends keyof IRacingEventMap>(
    event: K,
    listener: (event: IRacingEventMap[K]) => void
  ): this;

  execCmd(msgId: number, arg1?: number, arg2?: number, arg3?: number): void;

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
    setState(state: CameraState): void;
    switchToCar(
      carNum: number | string,
      camGroupNum?: number,
      camNum?: number
    ): void;
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

  telemetry: Telemetry | null;
  telemetryDescription: TelemetryDescription | null;
  sessionInfo: SessionInfo | null;

  _stop(): void;
}
