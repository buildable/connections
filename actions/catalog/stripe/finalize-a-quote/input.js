const nodeInput = ({ $body, $headers, $env, $data }) => {
  return {
    BUILDABLE_STRIPE_SECRET_KEY: $env.BUILDABLE_STRIPE_SECRET_KEY, // Required
    quote: "string", // Required

    // expand: ["string"],
    // expires_at: "<unix-time>",
    // expand0: "<string>",
    // expand1: "<string>",
  };
};
