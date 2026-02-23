import { configVariable, defineConfig } from "hardhat/config";

export default defineConfig({
    solidity: {
        profiles: {
            default: {
                version: "0.8.30",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 10_000_000,
                    },
                    viaIR: true,
                },
            },
            ci: {
                version: "0.8.30",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 10_000_000,
                    },
                    viaIR: true,
                },
            },
        },
    },
    paths: {
        sources: "./src",
        tests: {
            solidity: "./test",
        },
    },
    test: {
        solidity: {
            fuzz: { runs: 256 },
            fsPermissions: {
                dangerouslyReadWriteDirectory: ["./deployments", "./config"],
            },
        },
    },
    networks: {
        localhost: {
            type: "http",
            url: configVariable("LOCALHOST_RPC_URL"),
            accounts: [configVariable("LOCALHOST_PRIVATE_KEY")],
        },
    },
});
