import React from 'react'
import { useNavigate } from 'react-router-dom'

function FeeRecipt2() {

    // data
    const data2 = [
        {
            name: "A",
            class: "10A",
            due: "5000",
        },
        {
            name: "A",
            class: "10A",
            due: "5000",
        },
        {
            name: "A",
            class: "10A",
            due: "5000",
        },
        {
            name: "A",
            class: "10A",
            due: "5000"
        },
    ];

    const row = data2.map((item)=>{
      return(
        <tr class="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {item.name}
        </td>
        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            {item.class}
        </td>
        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            {item.due}
        </td>
       
        <td class="py-4 px-6 text-sm font-medium  whitespace-nowrap">
            <a href="#" class="text-blue-500 dark:text-blue-500 hover:underline">Edit</a>
        </td>
    </tr>
      )
    });

    let navigate = useNavigate();
    const backPage = ()=>{
        let path = "/"
        navigate(path);
    }

  return (
    <div>
         <div className="my-4">
        <h1 className="text-center text-3xl   font-bold m-8 text-lg ">
            School Admin Dashboard{" "}
        </h1>

        <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden shadow-md sm:rounded-lg">
                <table class="min-w-full">
                    <thead class="bg-gray-100 dark:bg-gray-700">
                        <tr>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Name
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Class/Section
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Due
                            </th>
                            
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Notify
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

<button type="button" onClick={backPage} class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ml-5 pr-5 pl-5" >Back</button>


        </div>
    </div>
  )
}

export default FeeRecipt2