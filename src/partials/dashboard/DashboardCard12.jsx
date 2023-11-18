import React from 'react';

function DashboardCard12() {
  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Recent Activity</h2>
      </header>
      <div className="p-3">
        {/* Card content */}
        {/* "Today" group */}
        <div>
          <header className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm font-semibold p-2">
            Today
          </header>
          <ul className="my-1">
            {/* Item 1 */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-rocket-500 my-2 mr-3">
                <svg className="w-9 h-9 fill-current text-rocket-50" viewBox="0 0 36 36">
                  {/* Your rocket icon path */}
                </svg>
              </div>
              <div className="grow flex items-center border-b border-slate-100 dark:border-slate-700 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">
                    🚀 Network Expansion: TeleComConnect successfully deployed high-speed fiber-optic infrastructure in partnership with Broadband Solutions Inc.              </div>
                  <div className="shrink-0 self-end ml-2">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      View<span className="hidden sm:inline"> -&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            {/* Item 2 */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-collaboration-500 my-2 mr-3">
                <svg className="w-9 h-9 fill-current text-collaboration-50" viewBox="0 0 36 36">
                  {/* Your collaboration icon path */}
                </svg>
              </div>
              <div className="grow flex items-center border-b border-slate-100 dark:border-slate-700 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">
                    📡 Tech Collaboration: GlobalNet Innovations collaborated with DataTech Innovations to enhance cybersecurity protocols. </div>
                  <div className="shrink-0 self-end ml-2">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      View<span className="hidden sm:inline"> -&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            {/* Item 3 */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-global-500 my-2 mr-3">
                <svg className="w-9 h-9 fill-current text-global-50" viewBox="0 0 36 36">
                  {/* Your globe icon path */}
                </svg>
              </div>
              <div className="grow flex items-center text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">
                    🌐 Global Connectivity: CyberCore Technologies established a new peering agreement with Global Telecom Networks.</div>
                  <div className="shrink-0 self-end ml-2">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      View<span className="hidden sm:inline"> -&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* "Yesterday" group */}
        <div>
          <header className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm font-semibold p-2">
            Yesterday
          </header>
          <ul className="my-1">
            {/* Item 1 */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-celebration-500 my-2 mr-3">
                <svg className="w-9 h-9 fill-current text-celebration-50" viewBox="0 0 36 36">
                  {/* Your celebration icon path */}
                </svg>
              </div>
              <div className="grow flex items-center border-b border-slate-100 dark:border-slate-700 text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">
                    🎉 Service Milestone: ByteBridge Networks celebrated reaching 5 million active subscribers on its 5G network.
                  </div>
                  <div className="shrink-0 self-end ml-2">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      View<span className="hidden sm:inline"> -&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            {/* Item 2 */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full shrink-0 bg-iot-500 my-2 mr-3">
                <svg className="w-9 h-9 fill-current text-iot-50" viewBox="0 0 36 36">
                  {/* Your IoT icon path */}
                </svg>
              </div>
              <div className="grow flex items-center text-sm py-2">
                <div className="grow flex justify-between">
                  <div className="self-center">
                    🤖 IoT Integration: SecureWave Networks partnered with Smart Solutions Ltd. to integrate advanced IoT devices into their network, paving the way for smart city initiatives.
                  </div>
                  <div className="shrink-0 self-end ml-2">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="#0">
                      View<span className="hidden sm:inline"> -&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard12;
