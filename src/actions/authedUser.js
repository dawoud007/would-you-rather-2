
export const RETURN_CONDITION='RETURN_CONDITION'
export const SETTING_AUTHED_USER = 'SETTING_AUTHED_USER'





export function returnCondition (cond) {
  return {
    type: RETURN_CONDITION,
    cond,
  }
}

export function setAuthedUser (id) {
  return {
      type: SETTING_AUTHED_USER,
      id
  }
}
