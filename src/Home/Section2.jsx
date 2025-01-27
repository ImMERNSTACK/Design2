import React from 'react'
import ProgressCircle from '../Common/ProgressCircle'

const Section2 = () => {
  return (
    <div className="container mx-auto">
    <div className="flex flex-col items-center justify-center min-h-64 p-14 space-y-8 md:flex-row md:space-y-0 md:space-x-16 ">
                    <ProgressCircle
                        percentage={75}
                        title="Vaccine Development"
                        description="Patholab Laboratory is equipped with best world class machinery & reagents."
                    />
                    <ProgressCircle
                        percentage={88}
                        title="Clinic Management"
                        description="Patholab Laboratory is equipped with best world class machinery & reagents."
                    />
                </div>
                </div>
  )
}

export default Section2;
