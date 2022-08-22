import { StakingPoolInfo } from '../types'
import * as scripts from './plutus'

const poloPool: StakingPoolInfo = {
    userInfo: {
        rewardType: '$tPOLO',
    },
    poolInfo: {
        name: "newLP for $zPolo",
        poolIndex: 0,
        imageSrc: "/tang.png",
        stakingUnit: "cf85feeae10e8f6d36d265e2310045a4afc38319a779232e5dfff2466e65774c50",
        harvestUnit: "6bc8b66cf43d277baec97024553c25f9c788c1c47eee54a6df07e6ed7a506f6c6f",
        distAddress: "addr1qyjrv9p3lsfq25vs8lfpvkazxzmhy6svnrxcmneggds836fyxc2rrlqjq4geq07jzed6yv9hwf4qexxd3h8jssmq0r5s9qazvn",
        script: scripts.poloPool2,
	    oldScript: scripts.poloPool,
        type: "FT",
        stakingPolicy: undefined,
        maxSize: 10000000,
        rewardPerEpochQt: 6000000,
        reward: "$tPOLO/epoch",
        closesAt: new Date(new Date().getDay() + 365),
        openFrom: new Date()
    }
}


const adao2PoolInfo: StakingPoolInfo = {
    userInfo: {
        rewardType: '$OAether',
    },
    poolInfo: {
        name: "ADAO for Origin Aether",
        poolIndex: 1,
                    //Policy Id of ADAO: 5b01968867e13432afaa2f814e1d15e332d6cd0aa77e350972b0967d
                    // Asset Name: ADAOGovernanceToken 4144414f476f7665726e616e6365546f6b656e
                    // both are together the staking unit
        stakingUnit: "5b01968867e13432afaa2f814e1d15e332d6cd0aa77e350972b0967d4144414f476f7665726e616e6365546f6b656e",

                    //Policy Id of Aether: faea3fac6594c1ca1a08c26ffffe6a3e7fb512a0e84786a26b9d836c
                    //Asset Name originAether 6f726967696e416574686572
                    // both are together the harvest unit

        harvestUnit: "faea3fac6594c1ca1a08c26ffffe6a3e7fb512a0e84786a26b9d836c6f726967696e416574686572",

        distAddress: "addr1q8g59w6mtcnperwy5yq7fg3g547f9vjq8709wj3xk0w28573g2a4kh3xrjxufggpuj3z3ftuj2eyq0u72a9zdv7u50fssflav4",
        script: scripts.pool2v2,
	oldScript: scripts.pool2,
        type: "FT",
        stakingPolicy: undefined,
        imageSrc: "/origin.png",
        maxSize: 10000000,
        rewardPerEpochQt: 40000000000,
        reward: "$OAether/epoch",
        closesAt: new Date(new Date().getDay() + 365),
        openFrom: new Date()
    }
}

const stakingpools = [poloPool]


export default stakingpools
