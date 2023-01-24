import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../constants';
import Image from 'next/image'
import Router, { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useAccount, useContract, useSigner } from 'wagmi'
import labour from '../../public/logos/pdp.png'
import pdp from '../../public/logos/pdp.png'
import apc from '../../public/logos/pdp.png'


function ElectionId() {

  const router = useRouter();
  const electionId = router.query.electionId

  const { data: signer } = useSigner()
  const { address } = useAccount()
  const contract = useContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      signerOrProvider: signer,
  })

  const [contestants, setContestants] = useState([]);
  const getContestants = async () => {

      const contestants = await contract.getAllContestants();
      const filteredContestants = contestants.map(contestant => {
          return {
            name: contestant.name,
            platform: contestant.platform,
            voteCount: contestant.voteCount?.toString(),
            contestantId: contestant.contestantId?.toString(),
            stateCode: contestant.stateCode?.toString(),
            constituencyCode: contestant.constituencyCode?.toString(),
            electionID: contestant.electionID?.toString(),
          }
      }).filter((contestant) => {
        return contestant.electionID === router.query.electionId
      })

      setContestants(filteredContestants)

  }

  
  const [loading, setLoading] = useState(false);
  const castVote = async(contestantId) => {
    console.log(electionId, contestantId, address)

    const tx = await contract.castVote(electionId, contestantId, address);
    setLoading(true)
    await tx.wait();
    setLoading(false)

  }

  useEffect(() => {
      if(!signer) return;
      getContestants();
  },[signer])
  
  return (
    <>
        <div className='space-y-8'>

          {
            contestants && contestants.length > 0 && contestants.map((contestant, idx) => {
              return  <div key={idx} onClick={() => castVote(contestant.contestantId)} className='flex justify-between items-center px-4 md:px-8 py-4 md:py-6 bg-white rounded-2xl cursor-pointer shadow-lg shadow-gray-400'>
                        <Image src={`/logos/${contestant.platform}.png`} className="w-12 md:w-16" alt="logo" width={50} height={50} />
                        <div className='text-white'>{loading ? 'Voting...': ''}</div>
                      </div>
            })
          }
            
        </div>
    </>
  )
}

export default ElectionId