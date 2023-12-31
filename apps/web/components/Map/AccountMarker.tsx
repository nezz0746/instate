import { Marker } from 'react-map-gl'
import { usePosition } from '@/hooks/usePosition'
import { useEffect } from 'react'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { useAccount } from 'wagmi'
import classNames from 'classnames'
import { emojiAvatarForAddress } from '@instate/kit'
import usePath from '@/hooks/usePath'
import AccountZoomEffects from './AccountZoomEffects'

const AccountMarker = () => {
  const { isProfile } = usePath()

  const { address } = useAccount()
  const {
    updatePosition,
    position: { latitude, longitude },
  } = usePosition()

  useEffect(() => {
    updatePosition(latitude, longitude)
  }, [])

  if (!isProfile) return null

  return (
    <Marker
      longitude={longitude}
      latitude={latitude}
      onDragEnd={({ lngLat: { lat, lng } }) => {
        updatePosition(lat, lng)
      }}
      anchor="center"
      draggable
    >
      <div
        className={classNames(
          'w-11 h-11 flex flex-row items-center justify-center rounded-md'
        )}
        style={{
          background: address ? emojiAvatarForAddress(address).color : 'white',
          boxShadow: '0 0 0 2px #fff',
        }}
      >
        {address ? (
          <p className="text-xl">{emojiAvatarForAddress(address).emoji}</p>
        ) : (
          <MapPinIcon className="w-6 h-6 text-gray-800" />
        )}
      </div>
      <AccountZoomEffects />
    </Marker>
  )
}

export default AccountMarker
