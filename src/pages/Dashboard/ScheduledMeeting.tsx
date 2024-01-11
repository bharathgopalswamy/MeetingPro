import React from 'react';

const sampleData = [
  { status: 'Planned', name: 'Company 1', schedule: '12/10/2021', priority: 'High' },
  { status: 'Ongoing', name: 'Company 2', schedule: '12/15/2021', priority: 'Medium' },
  { status: 'Completed', name: 'Company 3', schedule: '12/20/2021', priority: 'Low' },
  { status: 'Cancelled', name: 'Company 4', schedule: '12/25/2021', priority: 'High' },
  { status: 'Postponed', name: 'Company 5', schedule: '01/05/2022', priority: 'Medium' },
];

const ScheduledMeeting = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="px-4 mx-auto mt-6">
        <div className="flex flex-col mt-6">
          <div className="-mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="py-3.5 px-2 md:px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <span>Status</span>
                    </th>
                    <th className="py-3.5 px-2 md:px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <span>Meeting</span>
                    </th>
                    <th className="py-3.5 px-2 md:px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <span>Schedule</span>
                    </th>
                    <th className="py-3.5 px-2 md:px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <span>Priority</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700">
                  {sampleData.map((company, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                      <td className="px-2 md:px-4 py-2 md:py-4 text-sm font-normal text-left rtl:text-right text-gray-600 dark:text-gray-400">
                        {company.status}
                      </td>
                      <td className="px-2 md:px-4 py-2 md:py-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        {company.name}
                      </td>
                      <td className="px-2 md:px-4 py-2 md:py-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        {company.schedule}
                      </td>
                      <td className="px-2 md:px-4 py-2 md:py-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className={`h-3 w-3 md:h-5 md:w-5 fill-current text-${company.priority.toLowerCase()}-500`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 16.301l-4.24 2.472a1 1 0 0 1-1.45-1.054l.86-4.982-3.637-3.545a1 1 0 0 1 .553-1.706l5.018-.729L9.83 1.78a1 1 0 0 1 1.85 0l2.295 4.816 5.018.73a1 1 0 0 1 .552 1.706l-3.637 3.545.86 4.982a1 1 0 0 1-1.45 1.054L10 16.301z"
                              />
                            </svg>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduledMeeting;
