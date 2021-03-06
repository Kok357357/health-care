import { axios } from '..'

type TokenOnly = { token: string }

// function that makes the api request and returns a Promise for response
export function assignCarePlan({ from, id, replace, to, token }) {
  return axios.post(
    '/api/v1/Member/AssignCarePlan',
    {
      care_plan_id: id,
      effective_from_utc: from,
      effective_to_utc: to,
      replace_previously_assigned_care_plan: replace
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function createCase({ metadata, token, type }) {
  return axios.post(
    '/api/v1/Member/CreateCase',
    {
      case_type: type,
      metadata
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function createCase_v2({ metadata, token, type }) {
  return axios.post(
    '/api/v1/Member/CreateCase',
    {
      case_type: type,
      metadata
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function markCaseAsSubmitComplete({ id, token }) {
  return axios.post(
    '/api/v1/Member/MarkCaseAsSubmitComplete',
    { id },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function checkEmailAddress({ email }) {
  return axios.post(
    '/api/v1/Member/EmailAddressCheck',
    { email_address: email },
    {
      headers: {
        'Content-Type': 'application/json-patch+json'
      }
    }
  )
}

export function fetchAccountInfo({ token }: TokenOnly) {
  return axios.get('/api/v1/Member/GetMemberAccountInfo', {
    headers: {
      'Content-Type': 'application/json-patch+json',
      Authorization: `Bearer ${token}`
    }
  })
}

export function fetchAnonymousTest({ token }: TokenOnly) {
  return axios.get('/api/v1/Member/AnonymousTest', {
    headers: {
      'Content-Type': 'application/json-patch+json',
      Authorization: `Bearer ${token}`
    }
  })
}

export function fetchAuthorizationRequiredTest({ token }: TokenOnly) {
  return axios.get('/api/v1/Member/AuthorizationRequiredTest', {
    headers: {
      'Content-Type': 'application/json-patch+json',
      Authorization: `Bearer ${token}`
    }
  })
}

export function fetchAvailableLanguages({ token }: TokenOnly) {
  return axios.get('/api/v1/Member/GetAvailableLanguages', {
    headers: {
      'Content-Type': 'application/json-patch+json',
      Authorization: `Bearer ${token}`
    }
  })
}

export function fetchAvailableSpecialties({ token }: TokenOnly) {
  return axios.get('/api/v1/Member/GetAvailableSpecialties', {
    headers: {
      'Content-Type': 'application/json-patch+json',
      Authorization: `Bearer ${token}`
    }
  })
}

export function fetchAccumulators({ token, id, date, type }) {
  return axios.post(
    '/api/v1/Member/GetAccumulators',
    {
      id,
      as_of: date,
      accumulators_level: type
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function fetchBasicInfo({ token }: TokenOnly) {
  return axios.get('/api/v1/Member/GetMemberBasicInfo', {
    headers: {
      'Content-Type': 'application/json-patch+json',
      Authorization: `Bearer ${token}`
    }
  })
}

export function fetchCareGuideInfo({ token }: TokenOnly) {
  return axios.get('/api/v1/Member/GetMyCareCoordinator', {
    headers: {
      'Content-Type': 'application/json-patch+json',
      Authorization: `Bearer ${token}`
    }
  })
}

export function fetchCarePlan({ token }: TokenOnly) {
  return axios.get('/api/v1/Member/GetUserAssignedCarePlan', {
    headers: {
      'Content-Type': 'application/json-patch+json',
      Authorization: `Bearer ${token}`
    }
  })
}

export function fetchCases({
  direction,
  orderBy,
  query,
  recordsPerPage,
  page,
  statuses,
  token,
  types
}) {
  return axios.post(
    '/api/v1/Member/GetCases',
    {
      case_statuses: statuses,
      case_types: types,
      order_by: orderBy,
      order_by_desc: direction,
      records_per_page: recordsPerPage,
      page,
      search_string: query
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function fetchClaimsSummary({ id, token, type }) {
  return axios.post(
    '/api/v1/Member/GetClaimsSummary',
    {
      claims_summary_type: type,
      eligibility_id: id
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function fetchBenefitCoverages({ token }: TokenOnly) {
  return axios.get('/api/v1/Member/GetBenefitCoverages', {
    headers: {
      'Content-Type': 'application/json-patch+json',
      Authorization: `Bearer ${token}`
    }
  })
}

export function fetchClaimsList({
  token,
  page = 1,
  recordsPerPage = 10,
  query = null,
  dateFrom = null,
  dateTo = null
}) {
  return axios.post(
    '/api/v1/Member/GetClaimList',
    {
      page,
      dos_from: dateFrom,
      dos_to: dateTo,
      records_per_page: recordsPerPage,
      search_string: query
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function fetchEOB({ token, id }) {
  return axios.post(
    '/api/v1/Member/GetEOB',
    {
      id
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function fetchClaimDetail({ token, claimId }) {
  return axios.post(
    '/api/v1/Member/GetClaimDetail',
    {
      id: claimId
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function fetchEducationalResources({
  token,
  page = 1,
  recordsPerPage,
  searchString = null,
  orderBy,
  orderByDesc
}) {
  return axios.post(
    '/api/v1/Member/GetMyEducationalResources',
    {
      page,
      records_per_page: recordsPerPage,
      search_string: searchString,
      order_by: orderBy,
      order_by_desc: orderByDesc
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function fetchEvryContactInfo({ token }: TokenOnly) {
  return axios.get('/api/v1/Member/GetEvryHealthContact', {
    headers: {
      'Content-Type': 'application/json-patch+json',
      Authorization: `Bearer ${token}`
    }
  })
}

export function fetchFamilyMemberCOB({ token }: TokenOnly) {
  return axios.get('/api/v1/Member/GetFamilyMemberCOB', {
    headers: {
      'Content-Type': 'application/json-patch+json',
      Authorization: `Bearer ${token}`
    }
  })
}

export function fetchFamilyMemberCOBSummary({ token }: TokenOnly) {
  return axios.post(
    '/api/v1/Member/GetFamilyMemberCOBSummary',
    { ids: [] },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function fetchFAQs({
  token,
  page = 1,
  recordsPerPage = 4,
  searchString = null,
  orderBy,
  orderByDesc,
  supportArticleType = 2
}) {
  return axios.post(
    '/api/v1/Member/GetSupportArticles',
    {
      page,
      records_per_page: recordsPerPage,
      search_string: searchString,
      order_by: orderBy,
      order_by_desc: orderByDesc,
      support_article_type: supportArticleType
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function fetchSupportArticles({
  token,
  page = 1,
  recordsPerPage = 6,
  searchString = null,
  orderBy,
  orderByDesc,
  supportArticleType = 1
}) {
  return axios.post(
    '/api/v1/Member/GetSupportArticles',
    {
      page,
      records_per_page: recordsPerPage,
      search_string: searchString,
      order_by: orderBy,
      order_by_desc: orderByDesc,
      support_article_type: supportArticleType
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function fetchFiles({
  token,
  categories = [],
  documentTypes = [],
  page = 1,
  recordsPerPage = 10,
  query = null,
  orderBy,
  direction,
  dateFrom = null,
  dateTo = null
}) {
  return axios.post(
    '/api/v1/Member/GetFiles',
    {
      date_from: dateFrom,
      date_to: dateTo,
      categories,
      document_types: documentTypes,
      page,
      records_per_page: recordsPerPage,
      search_string: query,
      order_by: orderBy,
      order_by_desc: direction
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function fetchFileContent({ token, id }) {
  return axios.post(
    '/api/v1/Member/GetFileContent',
    { id },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      },
      responseType: 'arraybuffer'
    }
  )
}

export function fetchForms({
  token,
  category,
  formType,
  page = 1,
  records_per_page = 10,
  search_string = ''
}) {
  return axios.post(
    'api/v1/Member/GetDownloadableForms',
    {
      category,
      downloadable_form_type: formType,
      page,
      records_per_page,
      search_string
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function fetchMembershipSummary({ token }: TokenOnly) {
  return axios.get('/api/v1/Member/GetMembershipSummary', {
    headers: {
      'Content-Type': 'application/json-patch+json',
      Authorization: `Bearer ${token}`
    }
  })
}
export function fetchMembershipDocument({ id, token }) {
  return axios.post(
    '/api/v1/Member/DownloadMyMembershipDocument',
    { id },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      },
      responseType: 'arraybuffer'
    }
  )
}
export function fetchNotifications({
  direction,
  orderBy,
  page = 1,
  query = null,
  read = null,
  recordsPerPage = 10,
  dateFrom,
  dateTo,
  token
}) {
  return axios.post(
    '/api/v1/Member/GetNotifications',
    {
      order_by: orderBy,
      order_by_desc: direction,
      page,
      date_from: dateFrom,
      date_to: dateTo,
      read_or_not: (read === true && 3) || (read === false && 2) || 1,
      records_per_page: recordsPerPage,
      search_string: query
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function fetchRewardBenefits({ token }: TokenOnly) {
  return axios.get('/api/v1/Member/GetMyRewardBenefits', {
    headers: {
      'Content-Type': 'application/json-patch+json',
      Authorization: `Bearer ${token}`
    }
  })
}

export function fetchRewardCategories({ token }: TokenOnly) {
  return axios.get('/api/v1/Member/GetMyRewardBenefitCategories', {
    headers: {
      'Content-Type': 'application/json-patch+json',
      Authorization: `Bearer ${token}`
    }
  })
}

export function fetchWellnessGoals({ token }: TokenOnly) {
  return axios.get('/api/v1/Member/GetMyWellnessGoals', {
    headers: {
      'Content-Type': 'application/json-patch+json',
      Authorization: `Bearer ${token}`
    }
  })
}

export function fetch2FACode({ email, password }) {
  return axios.post(
    '/api/v1/Member/TwoWayFactorCodeRequest',
    {
      email_address: email,
      password
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json'
      }
    }
  )
}

export function initiateAuthentication({ email, password }) {
  return axios.post(
    '/api/v1/Member/Login',
    {
      email_address: email,
      password
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json'
      }
    }
  )
}

export function initiatePasswordReset({ email }) {
  return axios.post(
    '/api/v1/Member/PasswordResetRequest',
    {
      email_address: email
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json'
      }
    }
  )
}

export function markNotificationsAsRead({ ids = [], token }) {
  return axios
    .post(
      '/api/v1/Member/MarkNotificationsAsRead',
      { ids },
      {
        headers: {
          'Content-Type': 'application/json-patch+json',
          Authorization: `Bearer ${token}`
        }
      }
    )
    .then((response) => ({
      ...response,
      data: { ...((response?.data as object) || {}), ids }
    }))
}

export function register({
  eligibilityId,
  email,
  last4SSN,
  password,
  passwordConfirm
}) {
  return axios.post(
    '/api/v1/Member/UserRegistration',
    {
      eligibility_id: eligibilityId,
      email_address: email,
      last_4_digits_ssn: last4SSN,
      password,
      password_confirm: passwordConfirm
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json'
      }
    }
  )
}

export function getLastQuestionnaireOrCreate({ id, token }) {
  return axios.post(
    '/api/v1/Member/GetLastUserQuestionnaireAndCreateIfNotExist',
    { id: id.toString() },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function saveFamilyMemberCOB({
  token,
  data: {
    medicareEligibilityType,
    medicarePartA,
    medicarePartB,
    medicarePartC,
    medicarePartD,
    medicarePartAEffectiveDate,
    otherInsuranceType,
    otherInsuranceCarrierName,
    otherInsurancePolicyNumber,
    otherInsuranceCoverageFrom,
    otherInsuranceCoverageThru,
    hasMedicare,
    hasOtherHealthCoverage,
    memberCOBId
  }
}) {
  return axios.post(
    '/api/v1/Member/Logout',
    {},
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function savePasswordReset({ email, password, passwordConfirm, token }) {
  return axios.post(
    '/api/v1/Member/PasswordReset',
    {
      email_address: email,
      new_password: password,
      new_password_confirm: passwordConfirm,
      password_reset_token: token
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json'
      }
    }
  )
}

export function saveQuestionnaire({ questionnaire, token }) {
  return axios.post('/api/v1/Member/SaveUserQuestionnaire', questionnaire, {
    headers: {
      'Content-Type': 'application/json-patch+json',
      Authorization: `Bearer ${token}`
    }
  })
}

export function signOut({ token }: TokenOnly) {
  return axios.post(
    '/api/v1/Member/Logout',
    {},
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function uploadFiles({
  token,
  classification = '22',
  documentType = '220',
  files
}) {
  const formData = new FormData()

  files.forEach((file) => {
    formData.append('files', file)
  })

  return axios.post(
    `/api/v1/Member/UploadFile?classification=${classification}&document_type=${documentType}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function verify2FACode({ email, token, code }) {
  return axios.post(
    '/api/v1/Member/TwoWayFactorChallenge',
    {
      email_address: email,
      identification_code: code,
      two_way_factor_token: token
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json'
      }
    }
  )
}

export function verifyEligibilityIdAndSSN({ eligibilityId, last4SSN }) {
  return axios.post(
    '/api/v1/Member/EligibilityIDAndSSNCheck',
    {
      eligibility_id: eligibilityId,
      last_4_digits_ssn: last4SSN
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json'
      }
    }
  )
}

export function verifyEmail({ token }: TokenOnly) {
  return axios.post(
    '/api/v1/Member/EmailVerificationRequest',
    {},
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function verifyEmailChallenge({ emailAddress, verificationCode }) {
  return axios.post(
    '/api/v1/Member/EmailVerificationChallenge',
    {
      email_address: emailAddress,
      email_address_verification_code: verificationCode
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json'
      }
    }
  )
}

export function updateContactPreferences({
  token,
  paperless,
  receive_emails,
  receive_text_messages,
  receive_phone_calls
}) {
  return axios.post(
    '/api/v1/Member/UpdateContactPreferences',
    {
      paperless: paperless,
      receive_emails: receive_emails,
      receive_text_messages: receive_text_messages,
      receive_phone_calls: receive_phone_calls
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function passwordChange({
  token,
  oldPassword,
  newPassword,
  newPasswordConfirm
}) {
  return axios.post(
    '/api/v1/Member/PasswordChange',
    {
      old_password: oldPassword,
      new_password: newPassword,
      new_password_confirm: newPasswordConfirm
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function emailChange({ token, email_address, password }) {
  return axios.post(
    '/api/v1/Member/EmailChange',
    {
      email_address: email_address,
      password: password
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${token}`
      }
    }
  )
}

export function error500Test() {
  return axios.get('/api/v1/Member/InternalServerErrorTest', {
    headers: {
      'Content-Type': 'application/json-patch+json'
    }
  })
}
export function createCaseUpdateAddress(payload) {
  let metadata = []

  if (payload.address1) {
    metadata.push({
      name: 'address1',
      value: payload.address1 || '',
      value_type: 11
    })
  }

  if (payload.address2) {
    metadata.push({
      name: 'address2',
      value: payload.address2 || '',
      value_type: 11
    })
  }

  if (payload.city) {
    metadata.push({
      name: 'city',
      value: payload.city || '',
      value_type: 11
    })
  }

  if (payload.state) {
    metadata.push({
      name: 'state',
      value: payload.state || '',
      value_type: 11
    })
  }

  if (payload.zip) {
    metadata.push({
      name: 'zip',
      value: payload.zip || '',
      value_type: 11
    })
  }

  if (payload.cell) {
    metadata.push({
      name: 'cell_phone_number',
      value: payload.cell || '',
      value_type: 11
    })
  }

  if (payload.home) {
    metadata.push({
      name: 'home_phone_number',
      value: payload.home || '',
      value_type: 11
    })
  }

  if (payload.work) {
    metadata.push({
      name: 'work_phone_number',
      value: payload.work || '',
      value_type: 11
    })
  }

  return axios.post(
    '/api/v1/Member/CreateCase',
    {
      case_type: 8,
      metadata
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${payload.token}`
      }
    }
  )
}

export function uploadFiles_v2({ token, id, files }) {
  const formData = new FormData()
  //still a work in progress
  formData.append(
    'related_object_info',
    JSON.stringify({ id, object_type: 301 })
  )

  if (files.length > 1) {
    files.forEach((file) => {
      formData.append('files', file)
    })
  } else {
    formData.append('files', files[0])
  }

  return axios.post(`/api/v1/Member/UploadDocument`, formData, {
    headers: {
      'Content-Type':
        'multipart/form-data; boundary=----WebKitFormBoundaryyd5UY7cT0Jq1Xh0h',
      Authorization: `Bearer ${token}`
    }
  })
}
export function createCaseCoordinationOfBenefits(payload) {
  return axios.post(
    '/api/v1/Member/UpdateFamilyMemberCOB',
    {
      medicare_eligibility_type: payload.medicare_eligibility_type,
      member_cob_id: payload.member_cob_id,
      medicare_part_a: payload.medicare_part_a,
      medicare_part_b: payload.medicare_part_b,
      medicare_part_c: payload.medicare_part_c,
      medicare_part_d: payload.medicare_part_d,
      medicare_part_a_effective_date: payload.medicare_part_a_effective_date,
      medicare_part_b_effective_date: payload.medicare_part_b_effective_date,
      medicare_part_c_effective_date: payload.medicare_part_c_effective_date,
      medicare_part_d_effective_date: payload.medicare_part_d_effective_date,
      other_insurance_type: payload.other_insurance_type,
      other_insurance_carrier_name: payload.other_insurance_carrier_name,
      other_insurance_policy_number: payload.other_insurance_policy_number,
      other_insurance_coverage_from: payload.other_insurance_coverage_from,
      other_insurance_coverage_through:
        payload.other_insurance_coverage_through,
      has_medicare: payload.has_medicare,
      has_other_health_coverage: payload.has_other_health_coverage
    },
    {
      headers: {
        'Content-Type': 'application/json-patch+json',
        Authorization: `Bearer ${payload.token}`
      }
    }
  )
}

export function downloadUnderstandYourBenefits({ token }: TokenOnly) {
  return axios.post(
    '/api/v1/Member/DownloadMyMembershipDocument',
    { id: 45 },
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
      responseType: 'blob'
    }
  )
}
