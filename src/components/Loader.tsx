import { CgSpinnerTwoAlt } from 'react-icons/cg'

export function Loader() {
  return (
    <div className="flex h-full items-center justify-center -translate-y-12">
      <CgSpinnerTwoAlt className="animate-spin text-4xl text-gray-500 w-40 h-40" />
    </div>
  )
}
