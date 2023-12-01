'use client'

import type { NextPage } from 'next'
import useAppAgent from '@/hooks/useAppAgent'
import StateHeader from '@/components/StateHeader'
import Tabs from '@/components/Tabs'
import { NetworkState, useLocalAccount } from '@instate/kit'
import ConnectedLocalAccount from '@/components/ConnectedLocalAccount'

const Home: NextPage = () => {
  const { agent } = useAppAgent()
  const { switchLocalAccount } = useLocalAccount()

  return (
    <>
      <Tabs
        tabs={[
          {
            name:
              'Local Accounts' +
              (agent?.records.length ? ` (${agent?.records.length})` : ''),
            content: (
              <div className="flex flex-col gap-2 mt-2 w-full overflow-scroll">
                <ConnectedLocalAccount />
                <div className="grid grid-cols-2 gap-2">
                  {agent?.records.map((record) => {
                    return (
                      <div
                        onClick={() => {
                          switchLocalAccount(record.geohash)
                        }}
                        key={record.geohash}
                        className="flex flex-col gap-2 p-2 text-base-content rounded-md select-none bg-neutral-900 hover:cursor-pointer hover:bg-neutral-700"
                      >
                        <div className="flex flex-row items-center justify-between">
                          <p className="font-bold text-lg font-sans-display">
                            Local Account:{' '}
                            <span className="text-primary">
                              {record.geohash}
                            </span>
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ),
          },
          {
            name:
              'Network States' +
              (agent?.states.length ? ` (${agent?.states.length})` : ''),
            content: (
              <div className="w-full overflow-scroll">
                {agent?.states.map((stateAgent) => {
                  const state = stateAgent?.state as NetworkState

                  return (
                    <StateHeader key={state.id} currentNetworkState={state} />
                  )
                })}
              </div>
            ),
          },
        ]}
      />
    </>
  )
}

export default Home
