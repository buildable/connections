const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_SECRET_KEY: $env.BUILDABLE_STRIPE_SECRET_KEY, // Required

    // ending_before: "string",
    // expand: ["string"],
    // limit: 0,
    // relationship: { director: true, executive: true, owner: true, representative: true },
    // starting_after: "string",
  };
};
