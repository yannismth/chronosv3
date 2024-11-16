import dashboarddata from '@/data/dashboarddata'
import { DollarSign, User, CreditCard, Activity } from "lucide-react";
import employees from '@/data/employeesdata';
const Dashboard = () => {
  return (
    <>
      <header className="px-20 pt-8 w-full h-full">
        <div className="mb-12">
          <h1 className="font-semibold md:text-2xl">Dashboard</h1>
        </div>
        <div className="grid grid-cols-4 gap-4 ">
          {dashboarddata.map((item, index) => (
            <div key={index} className={`border h-32 rounded-md shadow-sm p-6`}>
              <div className='flex justify-between mb-2'>
                <p className='tracking-tight text-sm font-medium'>{item.title}</p>
                <div className="flex items-center justify-center">
                    {item.icon === DollarSign && <DollarSign className="w-4 h-4" />}
                    {item.icon === User && <User className="w-4 h-4" />}
                    {item.icon === CreditCard && <CreditCard className="w-4 h-4" />}
                    {item.icon === Activity && <Activity className="w-4 h-4" />}
                </div>
              </div>
              <h1 className='text-2xl font-bold'>{item.montant}</h1>
              <p className='text-xs text-muted-foreground'>{item.percent}</p>
              <div> {/* Les deux cards en col-span-2 */}
                
              </div>
            </div>
          ))}
          <div className='col-span-2 border rounded-md shadow-sm p-6'> 
            <p className='mb-4'>Employees</p>
            <table className='w-full'>
              <thead>
                <tr>
                  <th className='text-start uppercase py-2'>name</th>
                  <th className='text-start uppercase py-2'>function</th>
                  <th className='text-start uppercase py-2'>status</th>
                </tr>
              </thead>
              <tbody>
                  {employees.map((items,index) => (
                    <tr key={index}>
                      <td className='py-2'>
                        {items.name}
                      </td>
                      <td className='py-2'>{items.position}</td>
                      <td className='py-2'>{items.status}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className='col-span-2 border rounded-md shadow-sm p-6'>
            <p>On going tasks</p>

            <div>

              <div className='flex gap-2'>
              <img src="/businessman.png" alt="logo" width={50} height={60} className='rounded-full'/>
              <div className='flex flex-col mx-4'>
                <p>Journey Scarves</p>
                <p>Rebranding and website design</p>
              </div>
              
            </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Dashboard;