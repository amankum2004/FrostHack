var n = artifacts.require("Voting"); //Put contract name, not file name

module.exports = function(deployer){
    // deployer.deploy(n,["Mark", "Mike", "Henry", "Rock"], 90)
    deployer.deploy(n)
};