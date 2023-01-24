import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../constants';
import { fetchSigner, getContract } from '@wagmi/core';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useContract, useSigner } from 'wagmi';
import { epochToHumanReadable } from '../../utiils/dates';

function Allelections() {

    const [elections, setElections] = useState();


    const { data: signer } = useSigner()



    const getElections = async () => {
 
        const signer = await fetchSigner()

        const contract = getContract({
            address: CONTRACT_ADDRESS,
            abi: CONTRACT_ABI,
            signerOrProvider: signer,
        })

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
    },[signer])

    return (
        <div className='flex flex-col'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-bold'>All elections</h1>
                <Link href='/elections/create' className='py-2 px-4 text-sm bg-vote-500 text-white rounded-md'>Create Election Type</Link>
            </div>

            <div className='flex mt-12 w-full'>
                <div className='bg-white rounded-md shadow-md p-4 w-full'>
                    <table className='table-auto border-collapse w-full'>
                        <thead>
                            <tr className='text-left'>
                                <th>Election Name</th>
                                <th>Election Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {elections && elections.map((election, idx) => {
                                return  <tr key={idx} className='my-3'>
                                            <td>{election.electionName}</td>
                                            <td>{election.electionDate}</td>
                                        </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Allelections