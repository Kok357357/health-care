import { AnyAction } from 'redux'

export const INITIALIZE = 'user/INITIALIZE'
export const ACCUMULATORS_FETCH = 'user/ACCUMULATORS_FETCH'
export const ACCUMULATORS_FETCH_SUCCESS = 'user/ACCUMULATORS_FETCH_SUCCESS'
export const ACCUMULATORS_FETCH_FAILURE = 'user/ACCUMULATORS_FETCH_FAILURE'
export const ACCOUNT_INFO_FETCH = 'user/ACCOUNT_INFO_FETCH'
export const ACCOUNT_INFO_FETCH_SUCCESS = 'user/ACCOUNT_INFO_FETCH_SUCCESS'
export const ACCOUNT_INFO_FETCH_FAILURE = 'user/ACCOUNT_INFO_FETCH_FAILURE'
export const ANONYMOUS_TEST_FETCH = 'user/ANONYMOUS_TEST_FETCH'
export const ANONYMOUS_TEST_FETCH_SUCCESS = 'user/ANONYMOUS_TEST_FETCH_SUCCESS'
export const ANONYMOUS_TEST_FETCH_FAILURE = 'user/ANONYMOUS_TEST_FETCH_FAILURE'
export const ASSIGN_CARE_PLAN = 'user/ASSIGN_CARE_PLAN'
export const ASSIGN_CARE_PLAN_SUCCESS = 'user/ASSIGN_CARE_PLAN_SUCCESS'
export const ASSIGN_CARE_PLAN_FAILURE = 'user/ASSIGN_CARE_PLAN_FAILURE'
export const AUTHORIZATION_REQUIRED_TEST_FETCH =
  'user/AUTHORIZATION_REQUIRED_TEST_FETCH'
export const AUTHORIZATION_REQUIRED_TEST_FETCH_SUCCESS =
  'user/AUTHORIZATION_REQUIRED_TEST_FETCH_SUCCESS'
export const AUTHORIZATION_REQUIRED_TEST_FETCH_FAILURE =
  'user/AUTHORIZATION_REQUIRED_TEST_FETCH_FAILURE'
export const AVAILABLE_SPECIALTIES_FETCH = 'user/AVAILABLE_SPECIALTIES_FETCH'
export const AVAILABLE_SPECIALTIES_FETCH_SUCCESS =
  'user/AVAILABLE_SPECIALTIES_FETCH_SUCCESS'
export const AVAILABLE_SPECIALTIES_FETCH_FAILURE =
  'user/AVAILABLE_SPECIALTIES_FETCH_FAILURE'
export const AVAILABLE_LANGUAGES_FETCH = 'user/AVAILABLE_LANGUAGES_FETCH'
export const AVAILABLE_LANGUAGES_FETCH_SUCCESS =
  'user/AVAILABLE_LANGUAGES_FETCH_SUCCESS'
export const AVAILABLE_LANGUAGES_FETCH_FAILURE =
  'user/AVAILABLE_LANGUAGES_FETCH_FAILURE'
export const INITIALIZE_BASIC_INFO_FETCH = 'user/INITIALIZE_BASIC_INFO_FETCH'
export const BASIC_INFO_FETCH = 'user/BASIC_INFO_FETCH'
export const BASIC_INFO_FETCH_SUCCESS = 'user/BASIC_INFO_FETCH_SUCCESS'
export const BASIC_INFO_FETCH_FAILURE = 'user/BASIC_INFO_FETCH_FAILURE'
export const BENEFIT_COVERAGES_FETCH = 'user/BENEFIT_COVERAGES_FETCH'
export const BENEFIT_COVERAGES_FETCH_SUCCESS =
  'user/BENEFIT_COVERAGES_FETCH_SUCCESS'
export const BENEFIT_COVERAGES_FETCH_FAILURE =
  'user/BENEFIT_COVERAGES_FETCH_FAILURE'
export const CARE_GUIDE_FETCH = 'user/CLARE_GUIDE_FETCH'
export const CARE_GUIDE_FETCH_SUCCESS = 'user/CLARE_GUIDE_FETCH_SUCCESS'
export const CARE_GUIDE_FETCH_FAILURE = 'user/CLARE_GUIDE_FETCH_FAILURE'
export const CARE_PLAN_FETCH = 'user/CLARE_PLAN_FETCH'
export const CARE_PLAN_FETCH_SUCCESS = 'user/CLARE_PLAN_FETCH_SUCCESS'
export const CARE_PLAN_FETCH_FAILURE = 'user/CLARE_PLAN_FETCH_FAILURE'
export const CHECK_EMAIL_ADDRESS = 'user/CHECK_EMAIL_ADDRESS_FETCH'
export const CHECK_EMAIL_ADDRESS_SUCCESS = 'user/CHECK_EMAIL_ADDRESS_SUCCESS'
export const CHECK_EMAIL_ADDRESS_FAILURE = 'user/CHECK_EMAIL_ADDRESS_FAILURE'
export const CLAIM_DETAIL_FETCH = 'user/CLAIM_DETAIL_FETCH'
export const CLAIM_DETAIL_FETCH_SUCCESS = 'user/CLAIM_DETAIL_FETCH_SUCCESS'
export const CLAIM_DETAIL_FETCH_FAILURE = 'user/CLAIM_DETAIL_FETCH_FAILURE'
export const CLAIMS_LIST_FETCH = 'user/CLAIMS_LIST_FETCH'
export const CLAIMS_LIST_FETCH_SUCCESS = 'user/CLAIMS_LIST_FETCH_SUCCESS'
export const CLAIMS_LIST_FETCH_FAILURE = 'user/CLAIMS_LIST_FETCH_FAILURE'
export const CLAIMS_SUMMARY_FETCH = 'user/CLAIMS_SUMMARY_FETCH'
export const CLAIMS_SUMMARY_FETCH_SUCCESS = 'user/CLAIMS_SUMMARY_FETCH_SUCCESS'
export const CLAIMS_SUMMARY_FETCH_FAILURE = 'user/CLAIMS_SUMMARY_FETCH_FAILURE'
export const CLEAR_AUTH = 'user/CLEAR_AUTH'
export const CLEAR_AUTH_ERROR = 'user/CLEAR_AUTH_ERROR'
export const CLEAR_2FA = 'user/CLEAR_2FA'
export const CASES_FETCH = 'user/CASES_FETCH'
export const CASES_FETCH_SUCCESS = 'user/CASES_FETCH_SUCCESS'
export const CASES_FETCH_FAILURE = 'user/CASES_FETCH_FAILURE'
export const CREATE_CASE = 'user/CREATE_CASE'
export const CREATE_CASE_SUCCESS = 'user/CREATE_CASE_SUCCESS'
export const CREATE_CASE_FAILURE = 'user/CREATE_CASE_FAILURE'
export const EDUCATIONAL_RESOURCES_FETCH = 'user/EDUCATIONAL_RESOURCES_FETCH'
export const EDUCATIONAL_RESOURCES_FETCH_SUCCESS =
  'user/EDUCATIONAL_RESOURCES_FETCH_SUCCESS'
export const EDUCATIONAL_RESOURCES_FETCH_FAILURE =
  'user/EDUCATIONAL_RESOURCES_FETCH_FAILURE'
export const ELEGIBILITY_ID_SSN_VERIFY = 'user/ELEGIBILITY_ID_SSN_VERIFY'
export const ELEGIBILITY_ID_SSN_VERIFY_SUCCESS =
  'user/ELEGIBILITY_ID_SSN_VERIFY_SUCCESS'
export const ELEGIBILITY_ID_SSN_VERIFY_FAILURE =
  'user/ELEGIBILITY_ID_SSN_VERIFY_FAILURE'
export const EMAIL_VERIFY = 'user/EMAIL_VERIFY'
export const EMAIL_VERIFY_CHALLENGE = 'user/EMAIL_VERIFY_CHALLENGE'
export const EMAIL_VERIFY_CHALLENGE_SUCCESS =
  'user/EMAIL_VERIFY_CHALLENGE_SUCCESS'
export const EMAIL_VERIFY_CHALLENGE_FAILURE =
  'user/EMAIL_VERIFY_CHALLENGE_FAILURE'
export const EMAIL_VERIFY_SUCCESS = 'user/EMAIL_VERIFY_SUCCESS'
export const EMAIL_VERIFY_FAILURE = 'user/EMAIL_VERIFY_FAILURE'
export const EVRY_CONTACT_FETCH = 'user/EVRY_CONTACT_FETCH'
export const EVRY_CONTACT_FETCH_SUCCESS = 'user/EVRY_CONTACT_FETCH_SUCCESS'
export const EVRY_CONTACT_FETCH_FAILURE = 'user/EVRY_CONTACT_FETCH_FAILURE'
export const FAMILY_MEMBER_COB_FETCH = 'user/FAMILY_MEMBER_COB_FETCH'
export const FAMILY_MEMBER_COB_FETCH_SUCCESS =
  'user/FAMILY_MEMBER_COB_FETCH_SUCCESS'
export const FAMILY_MEMBER_COB_FETCH_FAILURE =
  'user/FAMILY_MEMBER_COB_FETCH_FAILURE'
export const FAMILY_MEMBER_COB_SUMMARY_FETCH =
  'user/FAMILY_MEMBER_COB_SUMMARY_FETCH'
export const FAMILY_MEMBER_COB_SUMMARY_FETCH_SUCCESS =
  'user/FAMILY_MEMBER_COB_SUMMARY_FETCH_SUCCESS'
export const FAMILY_MEMBER_COB_SUMMARY_FETCH_FAILURE =
  'user/FAMILY_MEMBER_COB_SUMMARY_FETCH_FAILURE'
export const FAQS_FETCH = 'user/FAQS_FETCH'
export const FAQS_FETCH_SUCCESS = 'user/FAQS_FETCH_SUCCESS'
export const FAQS_FETCH_FAILURE = 'user/FAQS_FETCH_FAILURE'
export const FILE_CONTENT_FETCH = 'user/FILE_CONTENT_FETCH'
export const FILE_CONTENT_FETCH_SUCCESS = 'user/FILE_CONTENT_FETCH_SUCCESS'
export const FILE_CONTENT_FETCH_FAILURE = 'user/FILE_CONTENT_FETCH_FAILURE'
export const FILES_FETCH = 'user/FILES_FETCH'
export const FILES_FETCH_SUCCESS = 'user/FILES_FETCH_SUCCESS'
export const FILES_FETCH_FAILURE = 'user/FILES_FETCH_FAILURE'
export const FIND_CASES = 'user/FIND_CASES'
export const FIND_CASES_SUCCESS = 'user/FIND_CASES_SUCCESS'
export const FIND_CASES_FAILURE = 'user/FIND_CASES_FAILURE'
export const GET_LAST_QUESTIONNAIRE_OR_CREATE =
  'user/GET_LAST_QUESTIONNAIRE_OR_CREATE'
export const GET_LAST_QUESTIONNAIRE_OR_CREATE_SUCCESS =
  'user/GET_LAST_QUESTIONNAIRE_OR_CREATE_SUCCESS'
export const GET_LAST_QUESTIONNAIRE_OR_CREATE_FAILURE =
  'user/GET_LAST_QUESTIONNAIRE_OR_CREATE_FAILURE'
export const INITIATE_PASSWORD_RESET = 'user/INITIATE_PASSWORD_RESET'
export const INITIATE_PASSWORD_RESET_SUCCESS =
  'user/INITIATE_PASSWORD_RESET_SUCCESS'
export const INITIATE_PASSWORD_RESET_FAILURE =
  'user/INITIATE_PASSWORD_RESET_FAILURE'
export const MEMBERSHIP_SUMMARY_FETCH = 'user/MEMBERSHIP_SUMMARY_FETCH'
export const MEMBERSHIP_SUMMARY_FETCH_SUCCESS =
  'user/MEMBERSHIP_SUMMARY_FETCH_SUCCESS'
export const MEMBERSHIP_SUMMARY_FETCH_FAILURE =
  'user/MEMBERSHIP_SUMMARY_FETCH_FAILURE'
export const NOTIFICATIONS_READ_FETCH = 'user/NOTIFICATIONS_READ_FETCH'
export const NOTIFICATIONS_READ_FETCH_SUCCESS =
  'user/NOTIFICATIONS_READ_FETCH_SUCCESS'
export const NOTIFICATIONS_READ_FETCH_FAILURE =
  'user/NOTIFICATIONS_READ_FETCH_FAILURE'
export const NOTIFICATIONS_FETCH = 'user/NOTIFICATIONS_FETCH'
export const NOTIFICATIONS_FETCH_SUCCESS = 'user/NOTIFICATIONS_FETCH_SUCCESS'
export const NOTIFICATIONS_FETCH_FAILURE = 'user/NOTIFICATIONS_FETCH_FAILURE'
export const NOTIFICATIONS_CLEAR = 'user/NOTIFICATIONS_CLEAR'
export const REGISTER = 'user/REGISTER'
export const REGISTER_SUCCESS = 'user/REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'user/REGISTER_FAILURE'
export const REWARD_BENEFITS_FETCH = 'user/REWARD_BENEFITS_FETCH'
export const REWARD_BENEFITS_FETCH_SUCCESS =
  'user/REWARD_BENEFITS_FETCH_SUCCESS'
export const REWARD_BENEFITS_FETCH_FAILURE =
  'user/REWARD_BENEFITS_FETCH_FAILURE'
export const REWARD_CATEGORIES_FETCH = 'user/REWARD_CATEGORIES_FETCH'
export const REWARD_CATEGORIES_FETCH_SUCCESS =
  'user/REWARD_CATEGORIES_FETCH_SUCCESS'
export const REWARD_CATEGORIES_FETCH_FAILURE =
  'user/REWARD_CATEGORIES_FETCH_FAILURE'
export const SAVE_PASSWORD_RESET = 'user/SAVE_PASSWORD_RESET'
export const SAVE_PASSWORD_RESET_SUCCESS = 'user/SAVE_PASSWORD_RESET_SUCCESS'
export const SAVE_PASSWORD_RESET_FAILURE = 'user/SAVE_PASSWORD_RESET_FAILURE'
export const SAVE_QUESTIONNAIRE = 'user/SAVE_QUESTIONNAIRE'
export const SAVE_QUESTIONNAIRE_SUCCESS = 'user/SAVE_QUESTIONNAIRE_SUCCESS'
export const SAVE_QUESTIONNAIRE_FAILURE = 'user/SAVE_QUESTIONNAIRE_FAILURE'
export const SIGN_IN = 'user/SIGN_IN'
export const SIGN_IN_SUCCESS = 'user/SIGN_IN_SUCCESS'
export const SIGN_IN_FAILURE = 'user/SIGN_IN_FAILURE'
export const SIGN_IN_TWO_FACTOR_REQUEST = 'user/SIGN_IN_TWO_FACTOR_REQUEST'
export const SIGN_OUT = 'user/SIGN_OUT'
export const SIGN_OUT_SUCCESS = 'user/SIGN_OUT_SUCCESS'
export const SIGN_OUT_FAILURE = 'user/SIGN_OUT_FAILURE'
export const SUPPORT_ARTICLES_FETCH = 'user/SUPPORT_ARTICLES_FETCH'
export const SUPPORT_ARTICLES_FETCH_SUCCESS =
  'user/SUPPORT_ARTICLES_FETCH_SUCCESS'
export const SUPPORT_ARTICLES_FETCH_FAILURE =
  'user/SUPPORT_ARTICLES_FETCH_FAILURE'
export const TWO_FACTOR_CODE_FETCH = 'user/TWO_FACTOR_CODE_FETCH'
export const TWO_FACTOR_CODE_FETCH_SUCCESS =
  'user/TWO_FACTOR_CODE_FETCH_SUCCESS'
export const TWO_FACTOR_CODE_FETCH_FAILURE =
  'user/TWO_FACTOR_CODE_FETCH_FAILURE'
export const TWO_FACTOR_CODE_VERIFY = 'user/TWO_FACTOR_CODE_VERIFY'
export const TWO_FACTOR_CODE_VERIFY_SUCCESS =
  'user/TWO_FACTOR_CODE_VERIFY_SUCCESS'
export const TWO_FACTOR_CODE_VERIFY_FAILURE =
  'user/TWO_FACTOR_CODE_VERIFY_FAILURE'

export const UPLOAD_FILES = 'user/UPLOAD_FILES'
export const UPLOAD_FILES_SUCCESS = 'user/UPLOAD_FILES_SUCCESS'
export const UPLOAD_FILES_FAILURE = 'user/UPLOAD_FILES_FAILURE'

export const UPDATE_CONTACT_PREFERENCES = 'user/UPDATE_CONTACT_PREFERENCES'

export const UNSET = 'user/UNSET'
export const WELLNESS_GOALS_FETCH = 'user/WELLNESS_GOALS_FETCH'
export const WELLNESS_GOALS_FETCH_SUCCESS = 'user/WELLNESS_GOALS_FETCH_SUCCESS'
export const WELLNESS_GOALS_FETCH_FAILURE = 'user/WELLNESS_GOALS_FETCH_FAILURE'
export const CREATE_CASE_SCHEDULE_PHONE = 'user/CREATE_CASE_SCHEDULE_PHONE'
export const CREATE_CASE_SCHEDULE_PHONE_SUCCESS =
  'user/CREATE_CASE_SCHEDULE_PHONE_SUCCESS'
export const CREATE_CASE_SCHEDULE_PHONE_FAILURE =
  'user/CREATE_CASE_SCHEDULE_PHONE_FAILURE'
// export const SUBMIT_CASE_SCHEDULE_PHONE = "user/SUBMIT_CASE_SCHEDULE_PHONE";
// export const SUBMIT_CASE_SCHEDULE_PHONE_SUCCESS =
//   "user/SUBMIT_CASE_SCHEDULE_PHONE_SUCCESS";
// export const SUBMIT_CASE_SCHEDULE_PHONE_FAILURE =
//   "user/SUBMIT_CASE_SCHEDULE_PHONE_FAILURE";
export const COMPLETE_CASE_SCHEDULE_PHONE = 'user/COMPLETE_CASE_SCHEDULE_PHONE'
export const COMPLETE_CASE_SCHEDULE_PHONE_SUCCESS =
  'user/COMPLETE_CASE_SCHEDULE_PHONE_SUCCESS'
export const COMPLETE_CASE_SCHEDULE_PHONE_FAILURE =
  'user/COMPLETE_CASE_SCHEDULE_PHONE_FAILURE'
export const SCHEDULE_PHONE_CALL_RESET = 'user/SCHEDULE_PHONE_CALL_RESET'
export const CREATE_CASE_SEND_MESSAGE = 'user/CREATE_CASE_SEND_MESSAGE'
export const CREATE_CASE_SEND_MESSAGE_SUCCESS =
  'user/CREATE_CASE_SEND_MESSAGE_SUCCESS'
export const CREATE_CASE_SEND_MESSAGE_FAILURE =
  'user/CREATE_CASE_SEND_MESSAGE_FAILURE'
export const COMPLETE_CASE_SEND_MESSAGE = 'user/COMPLETE_CASE_SEND_MESSAGE'
export const COMPLETE_CASE_SEND_MESSAGE_SUCCESS =
  'user/COMPLETE_CASE_SEND_MESSAGE_SUCCESS'
export const COMPLETE_CASE_SEND_MESSAGE_FAILURE =
  'user/COMPLETE_CASE_SEND_MESSAGE_FAILURE'
export const SEND_MESSAGE_RESET = 'user/SEND_MESSAGE_RESET'
export const CREATE_CASE_REQUEST_INFORMATION =
  'user/CREATE_CASE_REQUEST_INFORMATION'
export const CREATE_CASE_REQUEST_INFORMATION_SUCCESS =
  'user/CREATE_CASE_REQUEST_INFORMATION_SUCCESS'
export const CREATE_CASE_REQUEST_INFORMATION_FAILURE =
  'user/CREATE_CASE_REQUEST_INFORMATION_FAILURE'
export const COMPLETE_CASE_REQUEST_INFORMATION =
  'user/COMPLETE_CASE_REQUEST_INFORMATION'
export const COMPLETE_CASE_REQUEST_INFORMATION_SUCCESS =
  'user/COMPLETE_CASE_REQUEST_INFORMATION_SUCCESS'
export const COMPLETE_CASE_REQUEST_INFORMATION_FAILURE =
  'user/COMPLETE_CASE_REQUEST_INFORMATION_FAILURE'
export const REQUEST_INFORMATION_RESET = 'user/REQUEST_INFORMATION_RESET'
export const CREATE_CASE_REQUEST_MAILED_CARD =
  'user/CREATE_CASE_REQUEST_MAILED_CARD'
export const CREATE_CASE_REQUEST_MAILED_CARD_SUCCESS =
  'user/CREATE_CASE_REQUEST_MAILED_CARD_SUCCESS'
export const CREATE_CASE_REQUEST_MAILED_CARD_FAILURE =
  'user/CREATE_CASE_REQUEST_MAILED_CARD_FAILURE'
export const COMPLETE_CASE_REQUEST_MAILED_CARD =
  'user/COMPLETE_CASE_REQUEST_MAILED_CARD'
export const COMPLETE_CASE_REQUEST_MAILED_CARD_SUCCESS =
  'user/COMPLETE_CASE_REQUEST_MAILED_CARD_SUCCESS'
export const COMPLETE_CASE_REQUEST_MAILED_CARD_FAILURE =
  'user/COMPLETE_CASE_REQUEST_MAILED_CARD_FAILURE'
export const REQUEST_MAILED_CARD_RESET = 'user/REQUEST_MAILED_CARD_RESET'
export const CREATE_CASE_APPOINTED_REP_FORM_UPLOAD =
  'user/CREATE_CASE_APPOINTED_REP_FORM_UPLOAD'
export const CREATE_CASE_APPOINTED_REP_FORM_UPLOAD_SUCCESS =
  'user/CREATE_CASE_APPOINTED_REP_FORM_UPLOAD_SUCCESS'
export const CREATE_CASE_APPOINTED_REP_FORM_UPLOAD_FAILURE =
  'user/CREATE_CASE_APPOINTED_REP_FORM_UPLOAD_FAILURE'
export const APPOINTED_REP_FORM_UPLOAD = 'user/APPOINTED_REP_FORM_UPLOAD'
export const APPOINTED_REP_FORM_UPLOAD_SUCCESS =
  'user/APPOINTED_REP_FORM_UPLOAD_SUCCESS'
export const APPOINTED_REP_FORM_UPLOAD_FAILURE =
  'user/APPOINTED_REP_FORM_UPLOAD_FAILURE'
export const COMPLETE_CASE_APPOINTED_REP_FORM_UPLOAD =
  'user/COMPLETE_CASE_APPOINTED_REP_FORM_UPLOAD'
export const COMPLETE_CASE_APPOINTED_REP_FORM_UPLOAD_SUCCESS =
  'user/COMPLETE_CASE_APPOINTED_REP_FORM_UPLOAD_SUCCESS'
export const COMPLETE_CASE_APPOINTED_REP_FORM_UPLOAD_FAILURE =
  'user/COMPLETE_CASE_APPOINTED_REP_FORM_UPLOAD_FAILURE'
export const APPOINTED_REP_FORM_UPLOAD_RESET =
  'user/APPOINTED_REP_FORM_UPLOAD_RESET'
export const FORMS_FETCH = 'user/FORMS_FETCH'
export const FORMS_FETCH_SUCCESS = 'user/FORMS_FETCH_SUCCESS'
export const FORMS_FETCH_FAILURE = 'user/FORMS_FETCH_FAILURE'
export const CLEAR_SENDING_FEEDBACK = 'user/CLEAR_SENDING_FEEDBACK'

export const SESSION_TIMED_OUT = 'user/SESSION_TIMED_OUT'
export const CLEAR_SESSION_TIMED_OUT = 'user/CLEAR_SESSION_TIMED_OUT'
export const FETCH_EOB = 'user/FETCH_EOB'
export const FETCH_EOB_SUCCESS = 'user/FETCH_EOB_SUCCESS'
export const FETCH_EOB_FAILURE = 'user/FETCH_EOB_FAILURE'
export const DOWNLOAD_UNDERSTAND_BENEFITS = 'user/DOWNLOAD_UNDERSTAND_BENEFITS'
export const DOWNLOAD_UNDERSTAND_BENEFITS_SUCCESS =
  'user/DOWNLOAD_UNDERSTAND_BENEFITS_SUCCESS'
export const DOWNLOAD_UNDERSTAND_BENEFITS_FAILURE =
  'user/DOWNLOAD_UNDERSTAND_BENEFITS_FAILURE'
export interface AccountInfoFetchSuccess extends AnyAction {
  type: 'user/ACCOUNT_INFO_FETCH_SUCCESS'
  payload: {
    accountInfo: any
  }
}
export const ERROR_500_TEST = 'user/ERROR_500_TEST'
export const MEMBERSHIP_DOCUMENT_FETCH = 'user/MEMBERSHIP_DOCUMENT_FETCH'
export const MEMBERSHIP_DOCUMENT_FETCH_SUCCESS =
  'user/MEMBERSHIP_DOCUMENT_FETCH_SUCCESS'
export const MEMBERSHIP_DOCUMENT_FETCH_FAILURE =
  'user/MEMBERSHIP_DOCUMENT_FETCH_FAILURE'
export const MEMBERSHIP_DOCUMENT_RESET = 'user/MEMBERSHIP_DOCUMENT_RESET'