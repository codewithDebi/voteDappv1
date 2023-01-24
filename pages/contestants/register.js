import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../constants';
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { useContract, useSigner, useAccount } from 'wagmi';
import { fetchSigner, getContract } from '@wagmi/core'
import { epochToHumanReadable } from '../../utiils/dates';

function Register() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [elections, setElections] = useState();
    const [loading, setLoading] = useState(false);


    const { data: signer, isError, isLoading } = useSigner()
    const { address } = useAccount()
    const contract = useContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        signerOrProvider: signer,
    })
  
    const [registrar, setRegistrar] = useState([]);
    const getRegistrar = async () => {
      const registrar = await contract.getRegistrar();
      setRegistrar(registrar);
    }

    const registerContestant = async(data, e) => {
        console.log(data);

        const dataObj = {
            name            : data.name,
            platform        : data.platform,
            // contestantId    : Number(data.contestantId),
            stateCode       : Number(data.statecode),
            constituencyCode: Number(data.constituencycode),
            electionID      : Number(data.electionId)
        }

        const{ name, platform, contestantId, stateCode, constituencyCode, electionID }= dataObj

        const tx = await contract.registerContestant(name, platform ,stateCode ,constituencyCode ,electionID);
        setLoading(true)
        await tx.wait();
        setLoading(false)


        // reset form fields
        e.target.reset();

    }
    

    const getElections = async () => {

        const elections = await contract.getAllElections();
        const formattedElections = elections.map(election => {
            return {
                electionName: election.electionName,
                electionDate: epochToHumanReadable(election.electionDate),
                startTime   : election.startTime?.toString(),
                endTime     : election.endTime?.toString(),
                electionId  : election.electionId?.toString(),
            }
        })
        setElections(formattedElections)

    }

    useEffect(() => {
        if(!signer) return;
        getElections();
        getRegistrar();
    },[signer, getElections])

    if(registrar !== address) {
        return <div className='bg-red-600 p-4 rounded-md'>
            <p className='text-white'>Access Denied!</p>
        </div>
    }

    return (
        <div className='bg-vote-300 p-4 rounded-md shadow-xl'>
            <p className='text-2xl mb-12 font-bold'>Contestant Registration</p>
            <div>
                <form onSubmit={handleSubmit(registerContestant)}>
                    <div className='mb-4'>
                        <label className='text-sm font-semibold text-vote-700'>Name</label>
                        <div>
                            <input {...register("name", { required: true })} className='w-full h-9 rounded-md p-2 text-sm' type="text" />
                            <span className='text-red-900 text-sm'>{errors.name && <span>This field is required</span>}</span>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='text-sm font-semibold'>Contesting for</label>
                        <div>                        
                            <select {...register("electionId")}  className='w-full h-9 text-vote-700 rounded-md p-2 text-sm'>
                                {
                                    elections && elections.length > 0 && elections.map((election, idx) => {
                                        return <option key={idx} value={election.electionId}>{election.electionName}</option>
                                    })
                                }
                            </select>
                            <span className='text-red-900 text-sm'>{errors.electionId && <span>This field is required</span>}</span>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='text-sm font-semibold'>Platform</label>
                        <div>                        
                            <select {...register("platform")}  className='w-full h-9 text-vote-700 rounded-md p-2 text-sm'>
                                <option value="labour">Labour Party</option>
                                <option value="pdp">PDP</option>
                                <option value="apc">APC</option>
                            </select>
                            <span className='text-red-900 text-sm'>{errors.platform && <span>This field is required</span>}</span>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='text-sm font-semibold text-vote-700'>State Code</label>
                        <div>
                            <input {...register("statecode", { required: true })} className='w-full h-9 rounded-md p-2 text-sm' type="number" />
                            <span className='text-red-900 text-sm'>{errors.statecode && <span>This field is required</span>}</span>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='text-sm font-semibold text-vote-700'>Constituency Code</label>
                        <div>
                            <input {...register("constituencycode", { required: true })} className='w-full h-9 rounded-md p-2 text-sm' type="number" />
                            <span className='text-red-900 text-sm'>{errors.constituencycode && <span>This field is required</span>}</span>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='text-sm font-semibold text-vote-700'>Contestant ID</label>
                        <div>
                            <input {...register("contestantId", { required: true })} className='w-full h-9 rounded-md p-2 text-sm' type="number" />
                            <span className='text-red-900 text-sm'>{errors.contestantId && <span>This field is required</span>}</span>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <button type='submit' className='bg-vote-700 px-4 py-2 text-white rounded-md hover:bg-vote-900'>{loading?'Processing...':'Save'}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register