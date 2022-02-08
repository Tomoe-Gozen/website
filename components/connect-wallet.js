import { useWeb3 } from '@3rdweb/hooks'
import { useEffect, useRef } from 'react'
import Noty from 'noty'

export default function ConnectWallet() {
  const { address, connectWallet, chainId, activeProvider, connector } =
    useWeb3()

  const ellipsisString = (str) => {
    return str.substr(0, 5) + '...' + str.substr(str.length - 5, str.length)
  }

  const errorNotification = new Noty({
    theme: 'mint',
    text: 'Some notification text'
  })

  const displayErrorNotification = () => {
    if (chainId !== 3) {
      errorNotification.show()
    }
  }
  useEffect(() => {
    displayErrorNotification()
  })

  const clickConnectWallet = async () => {
    await connectWallet('injected')
  }

  return !address ? (
    <button
      className="btn btn-primary-alta btn-small"
      onClick={clickConnectWallet}
    >
      Connect Wallet
    </button>
  ) : (
    <button className="btn btn-success btn-small">
      Connected ({ellipsisString(address)})
    </button>
  )
}
