const hre = require("hardhat")
const lzEndpoints = require("../constants/layerzeroEndpoints.json")
const chainIds = require("../constants/chainIds.json")

async function setTrustRemote(volta, oftAddr) {
    const chains = ["ethereum", "avalanche", "fantom", "arbitrum"]

    for (let i = 0; i < chains.length; i++) {
        if (chains[i] !== hre.network.name)
            await (
                await volta.setTrustedRemote(chainIds[chains[i]], hre.ethers.utils.solidityPack(["address", "address"], [oftAddr, oftAddr]))
            ).wait(4)
    }
}

async function deploy() {
    const oldTokenAddress = process.env.OLD_TOKEN_ADDRESS
    const tokenName = "Volta Club"
    const tokenSymbol = "Volta"
    const exchangeRate = "330000000000000000000"

    if (oldTokenAddress) {
        const Volta = await hre.ethers.getContractFactory("Volta")
        const volta = await Volta.deploy(lzEndpoints[hre.network.name], tokenName, tokenSymbol)
        await volta.deployed()
        console.log("Volta contract: ", volta.address)

        // set trusted remote
        await setTrustRemote(volta, volta.address)

        // deploy migration
        const Migration = await hre.ethers.getContractFactory("Migration")
        const migration = await Migration.deploy(oldTokenAddress, volta.address, exchangeRate)
        await migration.deployed()
        console.log("Migration contract: ", migration.address)
    } else {
        throw "OLD_TOKEN_ADDRESS NOT SET"
    }
}

async function main() {
    await deploy()
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
