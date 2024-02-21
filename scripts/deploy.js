const hre = require("hardhat");

async function main() {
  const chai = await hre.ethers.deployContract("Chai");
  await chai.waitForDeployment();

  console.log("Deployed Contract Address:", chai.target)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
