async function main() {
    // We get the contract to deploy
    const Notification = await ethers.getContractFactory("Notification");
    const notification = await Notification.deploy();
  
    await notification.deployed();
  
    console.log("Notification deployed to:", notification.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });