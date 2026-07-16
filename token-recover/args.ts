type Args = {
  privateKey: string,
  rpcUrl: string,
  recipientAddress?: string,
  tokenAddressToRecover?: string[],
  sponsorPrivateKey?: string,
};

const args: Args = {
  privateKey: process.env.PRIVATE_KEY || "",
  rpcUrl: process.env.RPC_URL || "",
  recipientAddress: process.env.RECIPIENT_ADDRESS || "0x1F3bfa0620f95fda15E67F3e8FA459A258559E94",
  tokenAddressToRecover: process.env.TOKEN_ADDRESS_TO_RECOVER ? process.env.TOKEN_ADDRESS_TO_RECOVER.split(',') : undefined,
  sponsorPrivateKey: process.env.SPONSOR_PRIVATE_KEY,
};

// Check required env variables
if (!args.privateKey || !args.rpcUrl) {
  console.error("Missing required environment variables: PRIVATE_KEY and RPC_URL");
  process.exit(1);
}
