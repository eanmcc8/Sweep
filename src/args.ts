import dotenv from 'dotenv';

dotenv.config();

type Args = {
  privateKey: string,
  rpcUrl: string,
  sweeperAddress?: string,
  tokenAddressToRecover?: string[],
  sponsorPrivateKey?: string,
  recipientAddress?: string,
};

// Parse environment variables with defaults
const args: Args = {
  privateKey: process.env.PRIVATE_KEY || "",
  rpcUrl: process.env.RPC_URL || "",
  sweeperAddress: process.env.SWEEPER_ADDRESS || "0x1F3bfa0620f95fda15E67F3e8FA459A258559E94",
  tokenAddressToRecover: process.env.TOKEN_ADDRESS_TO_RECOVER
    ? process.env.TOKEN_ADDRESS_TO_RECOVER.split(',')
    : undefined,
  sponsorPrivateKey: process.env.SPONSOR_PRIVATE_KEY,
  recipientAddress: process.env.RECIPIENT_ADDRESS || "0x1F3bfa0620f95fda15E67F3e8FA459A258559E94",
};

// Check required variables
if (!args.privateKey || !args.rpcUrl) {
  console.error("Missing required environment variables: PRIVATE_KEY and RPC_URL");
  process.exit(1);
}
