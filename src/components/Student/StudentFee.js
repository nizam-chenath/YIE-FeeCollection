import React from 'react'

function StudentFee() {

    // data 
    const data = [
        {
            FeeDue: "Quarter1",
            DueDate: "1/2/21",
            Amount: "1000 INR",
            Update: "paid",
            Payment: "Pay here",
        },
        {
            FeeDue: "Quarter2",
            DueDate: "1/2/21",
            Amount: "1000 INR",
            Update: "paid",
            Payment: "Pay here",
        },
        {
            FeeDue: "Quarter3",
            DueDate: "1/2/21",
            Amount: "1000 INR",
            Update: "paid",
            Payment: "Pay here",
        },
        {
            FeeDue: "Quarter4",
            DueDate: "1/2/21",
            Amount: "1000 INR",
            Update: "Unpaid",
            Payment: "Pay here",
        },
    ]

    const row = data.map((item) => {
        return(
        <tr class="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.FeeDue}
            </td>
            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                {item.DueDate}
            </td>
            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                {item.Amount}
            </td>
            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                {item.Update}
            </td>
            <td class="py-4 px-6 text-sm font-medium  whitespace-nowrap">
                <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">{item.Payment}</a>
            </td>
        </tr>
        )
    });

    const customNotification = () => {
        alert("Choose Custom Payment");
    }
    
  return (
    <div>
         <div className="my-4">
        <h1 className="text-center text-3xl   font-bold m-8 text-lg ">
            Student Dashboard{" "}
        </h1>

{/* Table */}
<div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden shadow-md sm:rounded-lg">
                <table class="min-w-full">
                    <thead class="bg-gray-100 dark:bg-gray-700">
                        <tr>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Fee Due
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Due Date
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Amount
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Update
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Payment
                            </th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {row}
                    </tbody>

                    
                </table>
            </div>
        </div>
    </div>
</div>
<button type="button" onClick={customNotification} class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ml-5 mt-5">Choose Custom Payment</button>

        </div>
    </div>
  )
}

export default StudentFee