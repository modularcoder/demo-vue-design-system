export interface LookupInfo {
  lookupId: string
  ugcId: string
  duration: number
  assetMatches: AssetMatch[]
  platform: Platform
  ugc: UGC
}

export interface AssetMatch {
  asset: Asset
  isBlocked: boolean
  leastPermissivePolicy: {
    policy: string
    country: string
  }
  policies: Policy[]
  rightsholders: Rightsholder[]
  segments: MatchSegment[]
  duration: number
}

export interface MatchSegment {
  queryStart: number
  queryEnd: number
  assetStart: number
  assetEnd: number
}

export type Asset = AssetRecording | AssetComposition

export interface AssetRecording {
  id: string
  assetType: 'AUDIO_RECORDING'
  isrc: string
  title: string
  artists: string[]
  upc: number
}

export interface AssetComposition {
  id: string
  assetType: 'AUDIO_COMPOSITION'
  title: string
  writers: string[]
}

export enum AssetType {
  VIDEO = 'VIDEO',
  AUDIO_RECORDING = 'AUDIO_RECORDING',
  AUDIO_COMPOSITION = 'AUDIO_COMPOSITION',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

export interface Policy {
  policy: PolicyType
  country: string
}

export type PolicyType =
  | 'TRACK'
  | 'ROYALTY_FREE'
  | 'CUSTOM'
  | 'MONETIZE'
  | 'BLOCK'
  | 'PUBLIC_DOMAIN'
  | 'TOXIC_CONTENT'
  | 'TERRORIST_CONTENT'
  | 'CSAM'

export interface Platform {
  id: number
  name: string
}

export interface Rightsholder {
  id: number
  name: string
}

// ===== DISPUTE =====

export interface Dispute {
  id: string
  dspUser?: DSPUser
  userId: string
  extUserId: string
  items: Item[]
  status: DisputeStatus
  aboutYouFormId: string
  aboutYourContentFormId: string
  escalationFormId?: string
  platformID: string
  steps?: DisputeSetupStep[]
  lookupInfo?: LookupInfo
  aboutContent?: AboutContentQuestion[]
  copyrightQuizFormId: string
}

export type DisputeFormItem = {
  id: string
  kind: string
  title: string
  options?: {
    id: string
    title: string
  }[]
  optional?: boolean
  answer: DisputeFormItemAnswer
}

export type DisputeFormItemAnswer = {
  content?: string
  optionId?: string[]
}

export interface DisputeCreateData {
  ugcId: string
  extUserId: string
}

export type DisputeTypeUpdateData = {
  assetId: string
  disputeType: DisputeItemType
}[]

export type UserIdentityVerificationData = {
  id?: string
  url?: string
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'APPROVED' | 'FAILED' | 'EXPIRED'
}

export interface DSPUser {
  id: string
  extUserId: string
  extUsername?: string
  extChannelId?: string
  extChannelName?: string
  platform: Platform
  country?: string
}

export interface DisputeSetupStep {
  key: DisputeSetupStepKey
  completed: boolean
  locked?: boolean
}

// PLEASE, DO NOT CHANGE THESE - the files in the FE has the same names.
// ... or consult/warn before renaming, requires changes on fe :)
export type DisputeSetupStepKey =
  | 'DISPUTE_TYPE'
  | 'CONTENT_INFO'
  | 'USER_INFO'
  | 'COPYRIGHT_QUIZ'
  | 'IDENTITY_VERIFICATION'
  | 'RESOLUTION'

export type DisputeItemType =
  | 'ACCEPT_POLICY'
  | 'COPYRIGHT_EXCEPTION'
  | 'EXISTING_LICENSE'
  | 'WRONG_IDENTIFICATION'
  | 'COPYRIGHT_EXCEPTION'

// only ideas, change as you need on backend (but please, descriptive for user)
// using enums may be more beneficial for scalability , we will not have strings passed around if a status changed instead sigle source of truth

export enum DisputeStatus {
  INITIALIZED = 'INITIALIZED',
  RESOLVED_SYSTEM_ELIGIBLE = 'RESOLVED_SYSTEM_ELIGIBLE',
  RESOLVED_SYSTEM_NOT_ELIGIBLE = 'RESOLVED_SYSTEM_NOT_ELIGIBLE',
  ESCALATED_WAITING_FOR_EXPERT = 'ESCALATED_WAITING_FOR_EXPERT',
  CLOSED_NO_DISPUTE = 'CLOSED_NO_DISPUTE',
  CLOSED_SYSTEM_ELIGIBLE = 'CLOSED_SYSTEM_ELIGIBLE',
  CLOSED_SYSTEM_NOT_ELIGIBLE = 'CLOSED_SYSTEM_NOT_ELIGIBLE',
}

export type ItemStatus = 'INITIALIZED' | 'OPEN' | 'CLOSED' | 'NON_INFRINGING'

// -- params (inputs)

export interface DisputeInitInput {
  lookupId: string
  extUserId: string
}

export interface DisputeUserUpdateInput {
  extUsername?: string
  extChannelId?: string
  extChannelName?: string
  country?: string // not in the specs currently
}

export interface Item {
  assetId: string
  uploadedLicenseId?: string
  status?: ItemStatus
  disputeType: DisputeItemType
  disputeId?: string
}

export interface ItemTypeInput {
  assetId: string
  disputeType: DisputeItemType
}

export interface ItemLicenseKeyInput {
  assetId: string
  uploadedLicenseId: string
}

export interface AboutContentQuestion {
  name: string
  gid: string
  kind: 'RADIO' | 'TEXTAREA'
  possibleValues: string[]
  submitedValues?: string[]
}

export interface AboutContentInput {
  gid: string
  values: string[]
}

export enum UgcPublishStatus {
  PUBLISHED = 'PUBLISHED',
  UNPUBLISHED = 'UNPUBLISHED',
  UNKNOWN = 'UNKNOWN',
}

// ===== USER GENERATED CONTENT =====
export interface UGC {
  id: string
  externalId: string
  title: string
  username: string
  userUrl: string
  mediaUrl: string
  duration: string
  publishedStatus: UgcPublishStatus
}

// ===== USER =====

export interface AdrUser {
  id: number
  fullName: string
  // KYCVerified: boolean
}

// ===== EXTERNAL REDIRECTS =====

export interface ExternalLinks {
  successUrl: string
  failUrl: string
}

// ===== UTILITY =====

export interface APIReturnValue<T> {
  data?: T
  error?: Error
}

export interface ExtendedAssetMatch {
  asset: Asset
  policies: Policy[]
  segments: MatchSegment[]
  item: Item
}

export enum AsyncStatus {
  IDLE = 'idle',
  PENDING = 'pending',
  ERROR = 'error',
}

export interface AsyncState {
  errorMessage: string
  status: AsyncStatus
}

// ===== HELPERS ======

export type Optional<T = any> = {
  [key: string]: any
} & T
