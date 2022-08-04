import { StakingPoolInfo } from '../types'
import * as scripts from './plutus'

const poloPool: StakingPoolInfo = {
    userInfo: {
        rewardType: '$tPOLO',
    },
    poolInfo: {
        name: "LP for $tPOLO",
        poolIndex: 0,
        imageSrc: "/tang.png",
        stakingUnit: "29d91858c31d926d79c56de2f1cb59372d0f9da911ae388e3fd1ccc04c50",
        harvestUnit: "a5042af9f2fa55ee9cf5480b990041bd2531772738c4b47aab78b8e074504f4c4f",
        distAddress: "addr1qxw9nz43pplzhf6e2pf72lreldn7p4p6vr9y7m85uaahj4qzp7w0era4y6vtvhts8cjs3060gkeznfnzeg6p8pgptnnsz5tyf7",
        script: scripts.poloPool,
	    oldScript: scripts.poloPool2,
        type: "FT",
        stakingPolicy: undefined,
        maxSize: 10000000,
        rewardPerEpochQt: 1000000,
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
