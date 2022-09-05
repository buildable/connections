const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_PAGERDUTY_API_KEY,
    accept,
    contentType,
    xEARLYACCESS,
    id,
    status_update_notification_rule_id,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "delete",
      url: `https://api.pagerduty.com/users/${id}/status_update_notification_rules/${status_update_notification_rule_id}`,
      headers: { Authorization: `Token token= ${BUILDABLE_PAGERDUTY_API_KEY}` },
    });

    return data;
  } catch (error) {
    return {
      failed: true,
      message: error?.message,
      data: error?.response?.data,
    };
  }
};

/**
 * Verifies the input parameters
 */
const verifyInput = ({
  BUILDABLE_PAGERDUTY_API_KEY,
  accept,
  contentType,
  xEARLYACCESS,
  id,
  status_update_notification_rule_id,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_PAGERDUTY_API_KEY:
      "A valid BUILDABLE_PAGERDUTY_API_KEY field (string) was not provided in the input.",
    INVALID_ACCEPT: "A valid accept field (string) was not provided in the input.",
    INVALID_CONTENT_TYPE: "A valid contentType field (string) was not provided in the input.",
    INVALID_X_EARLYACCESS: "A valid xEARLYACCESS field (string) was not provided in the input.",
    INVALID_ID: "A valid id field (string) was not provided in the input.",
    INVALID_STATUS_UPDATE_NOTIFICATION_RULE_ID:
      "A valid status_update_notification_rule_id field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_PAGERDUTY_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_PAGERDUTY_API_KEY);
  if (typeof accept !== "string") throw new Error(ERRORS.INVALID_ACCEPT);
  if (typeof contentType !== "string") throw new Error(ERRORS.INVALID_CONTENT_TYPE);
  if (typeof xEARLYACCESS !== "string") throw new Error(ERRORS.INVALID_X_EARLYACCESS);
  if (typeof id !== "string") throw new Error(ERRORS.INVALID_ID);
  if (typeof status_update_notification_rule_id !== "string")
    throw new Error(ERRORS.INVALID_STATUS_UPDATE_NOTIFICATION_RULE_ID);
};
