import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const AverageBRI = () => {
  return (
    <div>
      {/* Average BRI by Age and Gender */}
      <Card className="mt-8 border-2 border-[#009b7d] dark:border-[#33af97]">
        <CardHeader>
          <CardTitle className="text-[#009b7d] dark:text-[#33af97] text-center">Average BRI by Age and Gender</CardTitle>
          <CardDescription className="text-center dark:text-gray-300">
            Data from the study "Body Roundness Index and All-Cause Mortality Among US Adults" (Zhang et al.)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#009b7d] dark:text-[#33af97]">Males</h3>
              <ul className="space-y-1">
                <li className="flex items-center">
                  <span className="w-28 dark:text-gray-300">18-29 years:</span>
                  <span className="font-medium dark:text-white">2.91 ± 0.98</span>
                </li>
                <li className="flex items-center">
                  <span className="w-28 dark:text-gray-300">30-39 years:</span>
                  <span className="font-medium dark:text-white">3.54 ± 1.12</span>
                </li>
                <li className="flex items-center">
                  <span className="w-28 dark:text-gray-300">40-49 years:</span>
                  <span className="font-medium dark:text-white">3.92 ± 1.18</span>
                </li>
                <li className="flex items-center">
                  <span className="w-28 dark:text-gray-300">50-59 years:</span>
                  <span className="font-medium dark:text-white">4.21 ± 1.23</span>
                </li>
                <li className="flex items-center">
                  <span className="w-28 dark:text-gray-300">60-69 years:</span>
                  <span className="font-medium dark:text-white">4.35 ± 1.25</span>
                </li>
                <li className="flex items-center">
                  <span className="w-28 dark:text-gray-300">≥70 years:</span>
                  <span className="font-medium dark:text-white">4.31 ± 1.27</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#009b7d] dark:text-[#33af97]">Females</h3>
              <ul className="space-y-1">
                <li className="flex items-center">
                  <span className="w-28 dark:text-gray-300">18-29 years:</span>
                  <span className="font-medium dark:text-white">2.61 ± 0.89</span>
                </li>
                <li className="flex items-center">
                  <span className="w-28 dark:text-gray-300">30-39 years:</span>
                  <span className="font-medium dark:text-white">3.13 ± 1.12</span>
                </li>
                <li className="flex items-center">
                  <span className="w-28 dark:text-gray-300">40-49 years:</span>
                  <span className="font-medium dark:text-white">3.67 ± 1.30</span>
                </li>
                <li className="flex items-center">
                  <span className="w-28 dark:text-gray-300">50-59 years:</span>
                  <span className="font-medium dark:text-white">4.25 ± 1.40</span>
                </li>
                <li className="flex items-center">
                  <span className="w-28 dark:text-gray-300">60-69 years:</span>
                  <span className="font-medium dark:text-white">4.61 ± 1.46</span>
                </li>
                <li className="flex items-center">
                  <span className="w-28 dark:text-gray-300">≥70 years:</span>
                  <span className="font-medium dark:text-white">4.71 ± 1.51</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
            These averages can help you compare your BRI to others in your age and gender group. However, remember that individual health factors are complex and these averages should be used as a general reference only.
          </p>
        </CardContent>
      </Card>

    </div>
  )
}

export default AverageBRI