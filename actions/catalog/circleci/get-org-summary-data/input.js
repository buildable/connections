const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_CIRCLECI_PERSONAL_API_KEY: $env.BUILDABLE_CIRCLECI_PERSONAL_API_KEY, // Required
    orgSlug: "string", // Required

    // reportingWindow: "last-7-days",
    // projectNames: {},
  };
};
